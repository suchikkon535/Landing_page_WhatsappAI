import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "contact-submissions.json");
let writeQueue = Promise.resolve();

export class DuplicateContactError extends Error {
  constructor(fields) {
    super(`A contact with this ${fields.join(" and ")} already exists.`);
    this.name = "DuplicateContactError";
    this.fields = fields;
  }
}

async function readSubmissions() {
  let contents;

  try {
    contents = await readFile(dataFile, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }

  if (!contents.trim()) {
    return [];
  }

  const submissions = JSON.parse(contents);
  if (!Array.isArray(submissions)) {
    throw new Error("Contact submission store must contain a JSON array.");
  }

  return submissions;
}

export async function getContactSubmissions() {
  return readSubmissions();
}

export function saveContactSubmission(fields) {
  const operation = writeQueue.then(async () => {
    const submissions = await readSubmissions();
    const email = fields.email.toLowerCase();
    const phone = fields.phone.replace(/\D/g, "");
    const duplicateFields = [];

    if (
      submissions.some(
        (existing) => typeof existing.email === "string" && existing.email.trim().toLowerCase() === email,
      )
    ) {
      duplicateFields.push("email address");
    }

    if (
      submissions.some(
        (existing) =>
          typeof existing.phone === "string" &&
          existing.phone.replace(/\D/g, "") === phone,
      )
    ) {
      duplicateFields.push("phone number");
    }

    if (duplicateFields.length) {
      throw new DuplicateContactError(duplicateFields);
    }

    const submission = {
      id: randomUUID(),
      ...fields,
      createdAt: new Date().toISOString(),
    };

    await mkdir(dataDirectory, { recursive: true });

    const temporaryFile = `${dataFile}.${randomUUID()}.tmp`;
    await writeFile(temporaryFile, JSON.stringify([submission, ...submissions], null, 2), "utf8");
    await rename(temporaryFile, dataFile);

    return submission;
  });

  writeQueue = operation.catch(() => {});
  return operation;
}
