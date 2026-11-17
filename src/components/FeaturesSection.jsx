
"use client";

import {
    ArrowUpRight,
    Bot,
    Check,
    CheckCheck,
    GitBranch,
    MessageCircle,
    Package,
    Send,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    Users,
    Workflow,
    Zap,
    BarChart3,
    UserRound,
} from "lucide-react";

const Instagram = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
</svg>

const WhatsApp = <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.1 4 4.1-1.08A10 10 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.44.64.65-2.38-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.45-6.07c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.4 1.37.51.57.18 1.08.15 1.49.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
</svg>

function Card({ children, className = "" }) {
    return (
        <article
            className={`group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0e17] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-[#0e1220] hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.18)] ${className}`}
        >
            {children}
        </article>
    );
}

function CardHeading({ icon: Icon, label, title, description, color = "blue" }) {
    const colors = {
        blue: "bg-blue-500/10 text-blue-300 border-blue-400/15",
        purple: "bg-purple-500/10 text-purple-300 border-purple-400/15",
        green: "bg-green-500/10 text-green-300 border-green-400/15",
        orange: "bg-orange-500/10 text-orange-300 border-orange-400/15",
        pink: "bg-pink-500/10 text-pink-300 border-pink-400/15",
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colors[color]}`}>
                    <Icon size={19} strokeWidth={1.7} />
                </div>
                <ArrowUpRight
                    size={16}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60"
                />
            </div>

            <div className="mt-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                    {label}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                    {title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                    {description}
                </p>
            </div>
        </div>
    );
}

function ConversationMockup() {
    return (
        <div className="mt-7 overflow-hidden rounded-xl border border-white/[0.08] bg-[#080b12]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                        <UserRound size={13} />
                    </div>
                    <div>
                        <p className="text-[10px] font-medium text-white/85">Customer conversation</p>
                        <p className="text-[9px] text-white/30">WhatsApp · Active</p>
                    </div>
                </div>
                <span className="rounded-full bg-green-400/10 px-2 py-1 text-[9px] text-green-300">
                    AI active
                </span>
            </div>

            <div className="space-y-3 p-4">
                <div className="max-w-[82%] rounded-xl rounded-tl-sm bg-white/[0.05] p-3">
                    <p className="text-[10px] leading-5 text-white/70">
                        Do you have this product available in a different size?
                    </p>
                    <p className="mt-1 text-right text-[8px] text-white/25">10:42 AM</p>
                </div>

                <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm border border-blue-400/15 bg-blue-500/[0.09] p-3">
                    <div className="mb-1.5 flex items-center gap-1.5 text-[9px] font-medium text-blue-300">
                        <Sparkles size={11} /> AI assistant
                    </div>
                    <p className="text-[10px] leading-5 text-white/75">
                        Yes! I can help you find the right size. Which size are you looking for?
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[8px] text-white/25">
                        Just now <CheckCheck size={10} className="text-blue-400" />
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/[0.07] px-4 py-3">
                <div className="flex-1 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[9px] text-white/25">
                    AI is preparing a response...
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                    <Send size={13} />
                </div>
            </div>
        </div>
    );
}

function AutomationMockup() {
    const nodes = [
        { icon: MessageCircle, title: "New message received", subtitle: "Trigger", color: "text-green-300" },
        { icon: GitBranch, title: "Check customer intent", subtitle: "Condition", color: "text-purple-300" },
        { icon: Bot, title: "Send AI response", subtitle: "Action", color: "text-blue-300" },
    ];

    return (
        <div className="mt-7 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-medium text-white/65">Example workflow</span>
                <span className="flex items-center gap-1.5 text-[9px] text-green-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Active preview
                </span>
            </div>

            <div className="space-y-0">
                {nodes.map((node, index) => {
                    const Icon = node.icon;
                    return (
                        <div key={node.title}>
                            <div className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                                <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] ${node.color}`}>
                                    <Icon size={15} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-medium text-white/80">{node.title}</p>
                                    <p className="mt-0.5 text-[9px] text-white/30">{node.subtitle}</p>
                                </div>
                                <Check size={13} className="text-green-400/70" />
                            </div>
                            {index !== nodes.length - 1 && (
                                <div className="ml-7 h-5 w-px border-l border-dashed border-blue-400/30" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function LeadMockup() {
    return (
        <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">Lead overview</span>
                <span className="text-[9px] text-blue-300">View all</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                    ["New leads", "128"],
                    ["Qualified", "86"],
                ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
                        <p className="text-[9px] text-white/35">{label}</p>
                        <p className="mt-1 text-xl font-semibold text-white">{value}</p>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-blue-500/[0.07] p-3">
                <Users size={14} className="text-blue-300" />
                <span className="text-[10px] text-white/60">Customer qualification pipeline</span>
            </div>
        </div>
    );
}

function CartMockup() {
    return (
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400/10 text-orange-300">
                    <ShoppingCart size={17} />
                </div>
                <div className="flex-1">
                    <p className="text-[10px] font-medium text-white/80">Incomplete checkout</p>
                    <p className="mt-1 text-[9px] text-white/35">Example recovery workflow</p>
                </div>
                <span className="rounded-full bg-orange-400/10 px-2 py-1 text-[9px] text-orange-300">
                    Pending
                </span>
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
                <p className="text-[9px] text-white/35">Follow-up message</p>
                <p className="mt-2 text-[10px] leading-5 text-white/65">
                    Still thinking it over? Your cart is waiting. Let us know if you need help!
                </p>
            </div>
        </div>
    );
}

function TrackingMockup() {
    return (
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">Example order status</span>
                <Package size={14} className="text-blue-300" />
            </div>
            <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                    <ShoppingBag size={16} />
                </div>
                <div>
                    <p className="text-[10px] font-medium text-white/80">Order #KP-2048</p>
                    <p className="mt-1 text-[9px] text-white/35">Shipping information</p>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 flex-1 rounded-full bg-blue-400" />
                <span className="h-1.5 flex-1 rounded-full bg-blue-400" />
                <span className="h-1.5 flex-1 rounded-full bg-white/10" />
            </div>
            <div className="mt-2 flex justify-between text-[8px] text-white/35">
                <span>Confirmed</span>
                <span>Shipped</span>
                <span>Delivered</span>
            </div>
        </div>
    );
}

function TeamMockup() {
    return (
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">Conversation assignment</span>
                <Users size={14} className="text-purple-300" />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
                <div>
                    <p className="text-[10px] font-medium text-white/80">Customer enquiry</p>
                    <p className="mt-1 text-[9px] text-white/35">Assigned to support</p>
                </div>
                <div className="flex -space-x-2">
                    {["AK", "JD", "MR"].map((initials, i) => (
                        <div key={initials} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080b12] text-[8px] font-semibold text-white ${["bg-blue-500", "bg-purple-500", "bg-pink-500"][i]}`}>
                            {initials}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AnalyticsMockup() {
    const bars = [35, 55, 43, 72, 51, 85, 65, 95, 70, 82, 60, 100];

    return (
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#080b12] p-4">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">Performance overview</span>
                <BarChart3 size={14} className="text-green-300" />
            </div>
            <div className="mt-4 flex h-20 items-end gap-1.5">
                {bars.map((height, index) => (
                    <div
                        key={index}
                        style={{ height: `${height}%` }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/40 to-blue-400/90 transition-all duration-300 group-hover:from-purple-600/50 group-hover:to-purple-400"
                    />
                ))}
            </div>
            <div className="mt-3 flex justify-between text-[9px] text-white/30">
                <span>Response activity</span>
                <span>Illustrative data</span>
            </div>
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="relative overflow-hidden border-t border-white/[0.07] bg-[#070910] px-6 py-24 sm:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-400/[0.06] px-3.5 py-1.5">
                        <Zap size={12} className="text-purple-300" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-300">
                            One intelligent workspace
                        </span>
                    </div>

                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                        Everything you need to manage{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            customer conversations.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                        Powerful AI, intelligent automation, and customer management
                        tools working together in one platform.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-auto">

                    {/* 1. AI Conversations - large feature */}
                    <Card className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-950/30 via-[#0b0e17] to-[#0b0e17]">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/[0.09] blur-[80px]" />
                        <div className="relative">
                            <CardHeading
                                icon={Bot}
                                label="Intelligent customer engagement"
                                title="AI-Powered Conversations"
                                description="Intelligent AI agents that understand customer queries and respond using your business knowledge. Deliver helpful, consistent conversations without making customers wait."
                                color="blue"
                            />
                            <ConversationMockup />
                        </div>
                    </Card>

                    {/* 2. Messaging integrations */}
                    <Card>
                        <CardHeading
                            icon={MessageCircle}
                            label="Connected channels"
                            title="WhatsApp & Instagram Integration"
                            description="Manage conversations across your connected WhatsApp and Instagram messaging channels."
                            color="green"
                        />
                        <div className="mt-6 flex gap-3">
                            <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                                <span className="text-green-400">{WhatsApp}</span>
                                <span className="text-[10px] text-white/65">WhatsApp</span>
                            </div>
                            <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                                <span className="text-pink-400">{Instagram}</span>
                                <span className="text-[10px] text-white/65">Instagram</span>
                            </div>
                        </div>
                    </Card>

                    {/* 3. Lead management */}
                    <Card>
                        <CardHeading
                            icon={Users}
                            label="Lead intelligence"
                            title="Smart Lead Management"
                            description="Automatically capture, qualify, organize, and track incoming leads so your team knows which conversations need attention."
                            color="purple"
                        />
                        <LeadMockup />
                    </Card>

                    {/* 4. Product recommendations */}
                    <Card>
                        <CardHeading
                            icon={ShoppingBag}
                            label="Conversational commerce"
                            title="AI Product Recommendations"
                            description="Recommend relevant products based on customer requirements, preferences, and conversation context."
                            color="pink"
                        />
                        <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-400/10 text-pink-300">
                                <Sparkles size={16} />
                            </div>
                            <div>
                                <p className="text-[10px] font-medium text-white/75">Relevant suggestions</p>
                                <p className="mt-1 text-[9px] text-white/35">Based on customer needs</p>
                            </div>
                        </div>
                    </Card>

                    {/* 5. Abandoned cart recovery */}
                    <Card>
                        <CardHeading
                            icon={ShoppingCart}
                            label="Purchase recovery"
                            title="Abandoned Cart Recovery"
                            description="Send contextual follow-ups to customers who leave purchases incomplete and help them continue their checkout journey."
                            color="orange"
                        />
                        <CartMockup />
                    </Card>

                    {/* 6. Order tracking */}
                    <Card>
                        <CardHeading
                            icon={Package}
                            label="Post-purchase experience"
                            title="Automated Order Tracking"
                            description="Retrieve available order information and answer delivery-related questions through customer conversations."
                            color="blue"
                        />
                        <TrackingMockup />
                    </Card>

                    {/* 7. Team inbox */}
                    <Card>
                        <CardHeading
                            icon={Users}
                            label="Team productivity"
                            title="Team Inbox & Collaboration"
                            description="Assign conversations, manage agents, and collaborate with your team from a centralized workspace."
                            color="purple"
                        />
                        <TeamMockup />
                    </Card>

                    {/* 8. Workflow automation - large feature */}
                    <Card className="lg:col-span-2 bg-gradient-to-br from-purple-950/25 via-[#0b0e17] to-[#0b0e17]">
                        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.08] blur-[80px]" />
                        <div className="relative grid gap-5 sm:grid-cols-2 sm:items-start">
                            <div>
                                <CardHeading
                                    icon={Workflow}
                                    label="Automated customer journeys"
                                    title="Workflow Automation"
                                    description="Create automated customer journeys using triggers, conditions, and actions. Build repeatable processes for lead follow-ups and customer engagement."
                                    color="purple"
                                />
                            </div>
                            <AutomationMockup />
                        </div>
                    </Card>

                    {/* 9. Analytics */}
                    <Card>
                        <CardHeading
                            icon={BarChart3}
                            label="Performance intelligence"
                            title="Analytics & Insights"
                            description="Monitor lead conversion, response times, automation performance, and team activity to understand what's working."
                            color="green"
                        />
                        <AnalyticsMockup />
                    </Card>
                </div>
            </div>
        </section>
    );
}
