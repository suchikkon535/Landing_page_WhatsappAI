import { timingSafeEqual } from "node:crypto";
import {
  DuplicateContactError,
  getContactSubmissions,
  saveContactSubmission,
} from "@/lib/contact-store";

const allowedFields = ["name", "email", "company", "phone", "subject", "message"];
const fieldLimits = {
  name: 120,
  email: 254,
  company: 160,
  phone: 32,
  subject: 160,
  message: 5000,
};

function jsonResponse(body, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isAuthorized(request) {
  const expectedToken = process.env.CONTACT_API_TOKEN;
  if (!expectedToken) {
    return null;
  }

  const authorization = request.headers.get("authorization") || "";
  const match = /^Bearer\s+(.+)$/i.exec(authorization);
  if (!match) {
    return false;
  }

  const provided = Buffer.from(match[1]);
  const expected = Buffer.from(expectedToken);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export async function GET(request) {
  const authorized = isAuthorized(request);
  if (authorized === null) {
    return jsonResponse({ error: "Contact API read access is not configured." }, 503);
  }
  if (!authorized) {
    return jsonResponse({ error: "Unauthorized." }, 401);
  }

  try {
    const submissions = await getContactSubmissions();
    return jsonResponse({ submissions });
  } catch (error) {
    console.error("Failed to read contact submissions:", error);
    return jsonResponse({ error: "Unable to retrieve contact submissions." }, 500);
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Request body must be valid JSON." }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonResponse({ error: "Request body must be a JSON object." }, 400);
  }

  const fields = {};
  for (const field of allowedFields) {
    const value = body[field];
    if (field === "company" && (value === undefined || value === null || value === "")) {
      fields[field] = "";
      continue;
    }
    if (typeof value !== "string") {
      return jsonResponse({ error: `${field} is required and must be text.` }, 400);
    }

    fields[field] = value.trim();
    if (!fields[field]) {
      return jsonResponse({ error: `${field} cannot be empty.` }, 400);
    }
    if (fields[field].length > fieldLimits[field]) {
      return jsonResponse(
        { error: `${field} must be ${fieldLimits[field]} characters or fewer.` },
        400,
      );
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return jsonResponse({ error: "Enter a valid email address." }, 400);
  }

  const phoneDigits = fields.phone.replace(/\D/g, "");
  if (!/^\+?[\d\s().-]+$/.test(fields.phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    return jsonResponse(
      { error: "Enter a valid phone number with 7 to 15 digits." },
      400,
    );
  }

  try {
    const submission = await saveContactSubmission(fields);
    return jsonResponse({ submission }, 201);
  } catch (error) {
    if (error instanceof DuplicateContactError) {
      return jsonResponse({ error: error.message, fields: error.fields }, 409);
    }

    console.error("Failed to save contact submission:", error);
    return jsonResponse({ error: "Unable to save your message. Please try again." }, 500);
  }
}
