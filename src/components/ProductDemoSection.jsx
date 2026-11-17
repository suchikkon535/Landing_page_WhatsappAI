"use client";

import { useState } from "react";
import {
    Activity,
    ArrowDownLeft,
    ArrowRight,
    Bot,
    Check,
    CheckCheck,
    CheckCircle2,
    Clock3,
    Filter,
    MessageCircle,
    MoreHorizontal,
    Paperclip,
    Phone,
    Plus,
    Search,
    Send,
    Settings2,
    Sparkles,
    Tag,
    UserRound,
    Users,
    Video,
    Zap,
} from "lucide-react";

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const initialConversations = [
    {
        id: 1,
        name: "Alex Morgan",
        initials: "AM",
        phone: "+1 (555) 012-4589",
        lastMessage: "Premium package, please.",
        time: "10:42 AM",
        channel: "WhatsApp",
        color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        unread: 2,
        status: "Qualified",
        tags: ["High intent", "Premium interest", "New lead"],
    },
    {
        id: 2,
        name: "Sarah Williams",
        initials: "SW",
        phone: "+1 (555) 018-2040",
        lastMessage: "Do you deliver to my location?",
        time: "10:36 AM",
        channel: "Instagram",
        color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
        unread: 1,
        status: "New lead",
        tags: ["Shipping query", "Social lead"],
    },
    {
        id: 3,
        name: "Daniel Cooper",
        initials: "DC",
        phone: "+1 (555) 014-9921",
        lastMessage: "Thank you for the details!",
        time: "10:18 AM",
        channel: "WhatsApp",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        unread: 0,
        status: "Assigned",
        tags: ["Enterprise", "In negotiation"],
    },
    {
        id: 4,
        name: "Emily Parker",
        initials: "EP",
        phone: "+1 (555) 019-3382",
        lastMessage: "Can I get more information?",
        time: "09:54 AM",
        channel: "Instagram",
        color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        unread: 0,
        status: "New lead",
        tags: ["General info"],
    },
];

const initialMessagesData = {
    1: [
        { id: 1, sender: "customer", text: "Hi, I am interested in your product. Can you share the price?", time: "10:40 AM" },
        { id: 2, sender: "ai", text: "Absolutely! I'd be happy to help. Are you looking for our Starter or Premium package?", time: "10:41 AM" },
        { id: 3, sender: "customer", text: "Premium package, please.", time: "10:42 AM" },
        { id: 4, sender: "ai", text: "Great choice! The Premium package includes full AI automation, 24/7 inbox management, and dedicated support.", time: "10:42 AM" },
    ],
    2: [
        { id: 1, sender: "customer", text: "Hello! Do you deliver to my location in California?", time: "10:35 AM" },
        { id: 2, sender: "ai", text: "Hi Sarah! Yes, we ship worldwide including all US states with 2-day delivery.", time: "10:36 AM" },
        { id: 3, sender: "customer", text: "Do you deliver to my location?", time: "10:36 AM" },
    ],
    3: [
        { id: 1, sender: "customer", text: "Could you send over the updated invoice?", time: "10:15 AM" },
        { id: 2, sender: "ai", text: "Sure thing Daniel! Sending the PDF invoice right away.", time: "10:17 AM" },
        { id: 3, sender: "customer", text: "Thank you for the details!", time: "10:18 AM" },
    ],
    4: [
        { id: 1, sender: "customer", text: "Can I get more information on your pricing tiers?", time: "09:54 AM" },
        { id: 2, sender: "ai", text: "Hello Emily! I can certainly guide you through our tiers. Are you scaling a small team or an enterprise?", time: "09:55 AM" },
    ],
};

const filterTabs = [
    { label: "All conversations", icon: MessageCircle, count: "24" },
    { label: "WhatsApp", icon: MessageCircle, count: "16" },
    { label: "Instagram", icon: InstagramIcon, count: "8" },
    { label: "Unassigned", icon: UserRound, count: "5" },
    { label: "Assigned to me", icon: Users, count: "7" },
];

function Avatar({ initials, color = "bg-blue-500/20 text-blue-300 border-blue-500/30", size = "h-9 w-9" }) {
    return (
        <div className={`flex shrink-0 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-wider ${size} ${color}`}>
            {initials}
        </div>
    );
}

function PanelTitle({ children, action }) {
    return (
        <div className="flex items-center justify-between pb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70">{children}</h3>
            {action}
        </div>
    );
}

function AutomationActivity({ handover }) {
    const activities = [
        {
            title: "Customer message received",
            detail: "WhatsApp · 10:40 AM",
            icon: ArrowDownLeft,
            color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
            done: true,
        },
        {
            title: "AI intent processed",
            detail: "Pricing intent identified · 10:41 AM",
            icon: Bot,
            color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
            done: true,
        },
        {
            title: "Lead qualified",
            detail: "High purchase intent detected",
            icon: Check,
            color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
            done: true,
        },
        {
            title: handover ? "Human handover requested" : "Human handover ready",
            detail: handover ? "Assigned to Sarah Johnson" : "AI handling seamlessly",
            icon: Users,
            color: handover ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-white/40 bg-white/5 border-white/10",
            done: handover,
        },
    ];

    return (
        <div className="rounded-xl border border-white/[0.08] bg-[#070a14] p-3.5 shadow-inner">
            <div className="mb-3.5 flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <div className="flex items-center gap-2">
                    <Activity size={13} className="text-blue-400" />
                    <p className="text-[11px] font-semibold text-white/90">Automation activity</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Engine
                </span>
            </div>

            <div className="space-y-3">
                {activities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                        <div key={activity.title} className="relative flex gap-3">
                            {index !== activities.length - 1 && (
                                <div className="absolute left-[11px] top-6 h-6 w-px bg-white/[0.08]" />
                            )}
                            <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${activity.color}`}>
                                <Icon size={11} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-medium text-white/80">{activity.title}</p>
                                <p className="text-[9px] text-white/40">{activity.detail}</p>
                            </div>
                            {activity.done && (
                                <Check size={12} className="mt-0.5 text-emerald-400 shrink-0" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function ProductDemoSection() {
    const [activeFilter, setActiveFilter] = useState("All conversations");
    const [activeConversationId, setActiveConversationId] = useState(1);
    const [handoverState, setHandoverState] = useState({});
    const [messageInput, setMessageInput] = useState("");
    const [messagesState, setMessagesState] = useState(initialMessagesData);

    const activeConversation = initialConversations.find((item) => item.id === activeConversationId) || initialConversations[0];
    const isHandoverActive = !!handoverState[activeConversationId];
    const currentMessages = messagesState[activeConversationId ] || [];

    const filteredConversations = initialConversations.filter((conv) => {
        if (activeFilter === "WhatsApp") return conv.channel === "WhatsApp";
        if (activeFilter === "Instagram") return conv.channel === "Instagram";
        if (activeFilter === "Unassigned") return conv.status === "New lead";
        if (activeFilter === "Assigned to me") return conv.status === "Assigned";
        return true;
    });

    const handleSendMessage = (textToSend) => {
        const text = textToSend || messageInput;
        if (!text.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: isHandoverActive ? "agent" : "ai",
            text: text.trim(),
            time: "Just now",
        };

        setMessagesState((prev) => ({
            ...prev,
            [activeConversationId]: [...(prev[activeConversationId ] || []), newMessage],
        }));

        if (!textToSend) setMessageInput("");
    };

    const toggleHandover = () => {
        setHandoverState((prev) => {
            const next = !prev[activeConversationId];
            if (next) {
                // Add handover message dynamically
                const handoverMsg = {
                    id: Date.now(),
                    sender: "agent",
                    text: " 👋 Hi! I'm Sarah Johnson from customer success taking over this chat.",
                    time: "Just now",
                };
                setMessagesState((prevMsgs) => ({
                    ...prevMsgs,
                    [activeConversationId]: [...(prevMsgs[activeConversationId] || []), handoverMsg],
                }));
            }
            return { ...prev, [activeConversationId]: next };
        });
    };

    return (
        <section id="product-demo" className="relative overflow-hidden border-t border-white/[0.08] bg-[#04060c] px-4 py-20 sm:px-6 sm:py-28">
            {/* Ambient Background Lights */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[160px]" />
            <div className="pointer-events-none absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Header Badge & Titles */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-1.5 backdrop-blur-md">
                        <Sparkles size={13} className="text-blue-400 animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                            Interactive Demo Workspace
                        </span>
                    </div>

                    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Experience your AI assistant{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                            in real-time.
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
                        Test live omnichannel chat handling, lead qualification, quick responses, and seamless human handover in action.
                    </p>
                </div>

                {/* Dashboard Outer Container */}
                <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-[#080b14] shadow-[0_30px_100px_-20px_rgba(15,23,42,0.9)] backdrop-blur-xl">

                    {/* Top Control Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-[#0a0d18] px-4 py-3 sm:px-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/20">
                                <Sparkles size={16} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs font-semibold text-white">Konpilot AI Inbox</p>
                                    <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[9px] font-medium text-blue-400 border border-blue-500/20">v2.4 Live</span>
                                </div>
                                <p className="text-[10px] text-white/40">Unified Omnichannel Operations</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-400 sm:flex">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                                AI Engine Active & Synced
                            </div>
                            <button aria-label="Inbox Settings" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:bg-white/[0.08] hover:text-white">
                                <Settings2 size={15} />
                            </button>
                            <Avatar initials="JD" size="h-8 w-8" color="bg-indigo-500/20 text-indigo-300 border-indigo-500/30" />
                        </div>
                    </div>

                    {/* Dashboard Main Grid Layout */}
                    <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px]">

                        {/* COLUMN 1: Left Navigation & Thread List */}
                        <aside className="flex flex-col border-b border-white/[0.08] bg-[#060810] lg:border-b-0 lg:border-r">
                            {/* Nav Filters */}
                            <div className="p-3 border-b border-white/[0.06]">
                                <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">Inbox Views</p>
                                <div className="space-y-0.5">
                                    {filterTabs.map((tab) => {
                                        const Icon = tab.icon;
                                        const isActive = activeFilter === tab.label;
                                        return (
                                            <button
                                                key={tab.label}
                                                type="button"
                                                onClick={() => setActiveFilter(tab.label)}
                                                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-[11px] font-medium transition ${isActive
                                                        ? "bg-blue-600/15 text-blue-300 border border-blue-500/20"
                                                        : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Icon size={13} />
                                                    <span>{tab.label}</span>
                                                </div>
                                                {tab.count && <span className="text-[9px] opacity-60">{tab.count}</span>}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Active Conversations Thread Selector */}
                            <div className="flex-1 p-3 overflow-y-auto">
                                <div className="mb-2 flex items-center justify-between px-2">
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Active Threads</p>
                                    <Filter size={11} className="text-white/30" />
                                </div>
                                <div className="space-y-1.5">
                                    {filteredConversations.map((conv) => {
                                        const isSelected = conv.id === activeConversationId;
                                        return (
                                            <button
                                                key={conv.id}
                                                type="button"
                                                onClick={() => setActiveConversationId(conv.id)}
                                                className={`group flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left transition ${isSelected
                                                        ? "bg-white/[0.08] border border-white/10 shadow-lg"
                                                        : "hover:bg-white/[0.04] border border-transparent"
                                                    }`}
                                            >
                                                <Avatar initials={conv.initials} color={conv.color} size="h-8 w-8" />
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className={`truncate text-xs font-semibold ${isSelected ? "text-white" : "text-white/80"}`}>
                                                            {conv.name}
                                                        </p>
                                                        <span className="text-[9px] text-white/30">{conv.time}</span>
                                                    </div>
                                                    <p className="truncate text-[10px] text-white/40 mt-0.5">{conv.lastMessage}</p>
                                                    <div className="mt-1.5 flex items-center gap-1.5">
                                                        <span className="inline-flex items-center gap-1 text-[8px] font-medium text-white/50">
                                                            {conv.channel === "WhatsApp" ? (
                                                                <span className="text-emerald-400">●</span>
                                                            ) : (
                                                                <span className="text-pink-400">●</span>
                                                            )}
                                                            {conv.channel}
                                                        </span>
                                                        <span className="rounded bg-white/5 px-1.5 py-0.2 text-[8px] text-white/40">{conv.status}</span>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* AI Assistant Status Card */}
                            <div className="p-3">
                                <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-3 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-blue-300">
                                        <Bot size={14} />
                                        <span className="text-xs font-semibold">Konpilot Co-Pilot</span>
                                    </div>
                                    <p className="mt-1.5 text-[10px] leading-snug text-white/50">
                                        Autopilot resolving standard enquiries & qualifying leads.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* COLUMN 2: Center Interactive Chat View */}
                        <div className="flex min-w-0 flex-col border-b border-white/[0.08] bg-[#070913] lg:border-b-0 lg:border-r">

                            {/* Conversation Header */}
                            <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#090c18] px-4 py-3 sm:px-5">
                                <div className="flex items-center gap-3 min-w-0">
                                    <Avatar initials={activeConversation.initials} color={activeConversation.color} size="h-9 w-9" />
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p className="truncate text-xs font-semibold text-white">{activeConversation.name}</p>
                                            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400 border border-emerald-400/20">
                                                Active
                                            </span>
                                        </div>
                                        <p className="flex items-center gap-1.5 text-[10px] text-white/40">
                                            {activeConversation.channel === "WhatsApp" ? (
                                                <MessageCircle size={10} className="text-emerald-400" />
                                            ) : (
                                                <span className="text-pink-400"><InstagramIcon /></span>
                                            )}
                                            {activeConversation.channel} · {activeConversation.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <button aria-label="Call Customer" className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/10 hover:text-white">
                                        <Phone size={14} />
                                    </button>
                                    <button aria-label="Video Call" className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/10 hover:text-white">
                                        <Video size={14} />
                                    </button>
                                    <button aria-label="More Options" className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/10 hover:text-white">
                                        <MoreHorizontal size={15} />
                                    </button>
                                </div>
                            </div>

                            {/* Chat Thread Bubbles Container */}
                            <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/[0.05] via-transparent to-transparent">
                                <div className="text-center">
                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] text-white/40">
                                        Today · Omnichannel Session Started
                                    </span>
                                </div>

                                {currentMessages.map((msg) => {
                                    const isCustomer = msg.sender === "customer";
                                    const isAI = msg.sender === "ai";

                                    return (
                                        <div key={msg.id} className={`flex gap-2.5 ${!isCustomer ? "justify-end" : "justify-start"}`}>
                                            {isCustomer && (
                                                <Avatar initials={activeConversation.initials} size="h-7 w-7" color={activeConversation.color} />
                                            )}

                                            <div className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${isCustomer
                                                    ? "rounded-tl-xs border border-white/10 bg-white/[0.05] text-white/90"
                                                    : isAI
                                                        ? "rounded-tr-xs border border-blue-500/25 bg-blue-600/10 text-blue-50"
                                                        : "rounded-tr-xs border border-purple-500/25 bg-purple-600/10 text-purple-50"
                                                }`}
                                            >
                                                {!isCustomer && (
                                                    <div className={`mb-1 flex items-center gap-1.5 text-[9px] font-semibold ${isAI ? "text-blue-300" : "text-purple-300"}`}>
                                                        {isAI ? <Bot size={11} /> : <UserRound size={11} />}
                                                        {isAI ? "Konpilot AI Assistant" : "Sarah Johnson (Agent)"}
                                                    </div>
                                                )}

                                                <p>{msg.text}</p>

                                                <div className="mt-1.5 flex items-center justify-end gap-1">
                                                    <span className="text-[8px] opacity-40">{msg.time}</span>
                                                    {!isCustomer && <CheckCheck size={11} className="text-blue-400" />}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Lead Intent Pill Banner */}
                                <div className="flex justify-center pt-2">
                                    <span className="flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[9px] font-medium text-purple-300">
                                        <Sparkles size={11} />
                                        Qualified Lead Intent: High Purchase Readiness
                                    </span>
                                </div>
                            </div>

                            {/* Quick AI Response Chips */}
                            <div className="flex flex-wrap gap-1.5 px-4 pt-2 pb-1 border-t border-white/[0.04]">
                                <span className="text-[9px] font-medium text-white/30 self-center mr-1">Suggested:</span>
                                <button
                                    onClick={() => handleSendMessage("Here is our official pricing guide & feature list!")}
                                    className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-[9px] font-medium text-blue-300 transition hover:bg-blue-400/20"
                                >
                                    📄 Send Pricing Guide
                                </button>
                                <button
                                    onClick={() => handleSendMessage("I can schedule a 15-minute live demo with our team.")}
                                    className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-medium text-emerald-300 transition hover:bg-emerald-400/20"
                                >
                                    ⚡ Book Live Demo
                                </button>
                            </div>

                            {/* Message Composer */}
                            <div className="p-4 border-t border-white/[0.08]">
                                {isHandoverActive && (
                                    <div className="mb-2.5 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[10px] text-amber-300">
                                        <CheckCircle2 size={12} />
                                        Human handover engaged. Sarah Johnson is actively handling this thread.
                                    </div>
                                )}

                                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 focus-within:border-blue-500/50">
                                    <button aria-label="Attach File" className="text-white/40 transition hover:text-white">
                                        <Paperclip size={15} />
                                    </button>
                                    <input
                                        type="text"
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                        placeholder={isHandoverActive ? "Type as human agent..." : "Type message or let AI respond..."}
                                        className="min-w-0 flex-1 bg-transparent py-1 text-xs text-white outline-none placeholder:text-white/30"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleSendMessage()}
                                        aria-label="Send Message"
                                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md transition hover:bg-blue-500"
                                    >
                                        <Send size={12} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 3: Right Sidebar Customer Profile & AI Automation Activity */}
                        <aside className="flex flex-col space-y-4 bg-[#060810] p-4 sm:p-5">
                            <PanelTitle action={<MoreHorizontal size={14} className="text-white/40" />}>
                                Customer Profile
                            </PanelTitle>

                            {/* Main Contact Card */}
                            <div className="flex flex-col items-center border-b border-white/[0.08] pb-4 text-center">
                                <Avatar initials={activeConversation.initials} size="h-12 w-12" color={activeConversation.color} />
                                <h4 className="mt-2 text-xs font-semibold text-white">{activeConversation.name}</h4>
                                <p className="text-[10px] text-white/40">{activeConversation.phone}</p>
                                <span className="mt-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-medium text-emerald-400">
                                    {activeConversation.status}
                                </span>
                            </div>

                            {/* Tags Section */}
                            <div>
                                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">Tags</p>
                                <div className="flex flex-wrap gap-1">
                                    {activeConversation.tags.map((tag) => (
                                        <span key={tag} className="rounded border border-blue-400/20 bg-blue-400/10 px-2 py-0.5 text-[8px] font-medium text-blue-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Embedded Real-time AI Activity Component */}
                            <AutomationActivity handover={isHandoverActive} />

                            {/* Human Handover Action Button */}
                            <button
                                type="button"
                                onClick={toggleHandover}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-semibold transition shadow-md ${isHandoverActive
                                        ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/20"
                                        : "border-blue-500/30 bg-blue-600/15 text-blue-300 hover:bg-blue-600/25"
                                    }`}
                            >
                                {isHandoverActive ? <CheckCircle2 size={14} /> : <Users size={14} />}
                                {isHandoverActive ? "Human Handover Active" : "Take Over (Human Handover)"}
                            </button>
                        </aside>
                    </div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    {[
                        "Instant Omnichannel Sync",
                        "AI Intent & Lead Qualification",
                        "1-Click Seamless Human Handover",
                        "Unified CRM Attributes",
                    ].map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs font-medium text-white/50">
                            <CheckCircle2 size={13} className="text-blue-400" />
                            {feature}
                        </div>
                    ))}                                 
                </div>

                {/* Call To Action */}
                <div className="mt-10 text-center">
                    <a
                        href="/signup"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-blue-600/40"
                    >
                        Deploy Konpilot For Your Business
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}