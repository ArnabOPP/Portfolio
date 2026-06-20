'use client';

import { use, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Clock, Copy, Linkedin, Github, ArrowLeft, Check, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';

// ─── Shared prose helpers ────────────────────────────────────────────────────

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2 id={id} className="text-3xl font-bold mb-6 text-foreground scroll-mt-32">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
    <p className="mb-8 text-muted-foreground leading-loose">{children}</p>
);
const UL = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);
const Quote = ({ text, role }: { text: string; role: string }) => (
    <blockquote className="border-l-4 border-primary pl-6 my-12 italic text-xl font-medium text-foreground">
        "{text}"
        <footer className="mt-4 text-sm font-bold not-italic text-primary flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden relative flex-shrink-0">
                <Image src="/about/ArnabCh.jpeg" alt="Arnab" fill className="object-cover" />
            </div>
            <div>
                <div className="text-foreground">Arnab Chatterjee</div>
                <div className="text-muted-foreground text-xs font-normal">{role}</div>
            </div>
        </footer>
    </blockquote>
);
const CodeBlock = ({ children }: { children: string }) => (
    <div className="p-4 bg-secondary/10 rounded-lg border border-border/40 font-mono text-xs mb-8 overflow-x-auto">
        <pre className="whitespace-pre text-muted-foreground">{children}</pre>
    </div>
);
const InlineImg = ({ src, alt }: { src: string; alt: string }) => (
    <div className="my-12 relative w-full aspect-video rounded-2xl overflow-hidden border border-border/40 bg-secondary/5">
        <Image src={src} alt={alt} fill loading="lazy" className="object-cover hover:scale-105 transition-transform duration-700" />
    </div>
);

// ─── Post bodies ─────────────────────────────────────────────────────────────

function PostBody({ slug }: { slug: string }) {
    if (slug === 'future-of-ai-agents') return (
        <>
            <H2 id="intro">The Rise of Autonomous Agents</H2>
            <P>The software landscape is changing fast. We're moving beyond scripted workflows into an era of <strong>autonomous AI agents</strong> — systems that don't just respond to instructions, they reason, plan, and act on their own. I've spent time building agentic pipelines for projects like ESG Auditor 2.0, and this shift is real.</P>
            <P>In the traditional model, every step is explicit: if A then B, then C. With agents backed by LLMs, you give a high-level goal — "analyse our Q3 data and flag ESG risks" — and the agent figures out which tools to call, in what order, and what to do when something unexpected happens. That's a fundamentally different programming model.</P>
            <InlineImg src="/images/gallery/1.png" alt="AI Agents Architecture" />
            <H2 id="core">Architecting for Autonomy</H2>
            <P>What I've found in practice is that building an effective agent isn't about the model — it's about the <strong>cognitive architecture</strong> surrounding it. Three components matter most:</P>
            <UL items={[
                <><strong>Memory:</strong> Short-term (context window) for the current task; long-term (vector databases like ChromaDB or Pinecone) for recalling past interactions and domain knowledge. Without good memory, agents repeat themselves endlessly.</>,
                <><strong>Tools:</strong> An agent is only as capable as its tool set. In ESG Auditor, I exposed tools for document retrieval, risk scoring, and web search — each as a clean function the LLM can call via JSON.</>,
                <><strong>Planning:</strong> Chain-of-thought prompting allows agents to decompose a vague goal into concrete steps. Without explicit planning prompts, agents tend to rush to the first plausible answer rather than the correct one.</>
            ]} />
            <Quote text="An agent that can use tools is useful. An agent that knows when not to use a tool is intelligent." role="AI Systems Developer" />
            <H2 id="impact">Redefining Decision Making</H2>
            <P>What excites me most about agentic AI isn't the demo — it's the production potential. Agents that can synthesise millions of data points, flag anomalies before humans notice, and generate structured reports change what a single developer can accomplish.</P>
            <P>The hard part is still <strong>alignment and governance</strong>. An agent that's slightly wrong about ESG risk scores could mislead a compliance decision. Every system I build now has an explicit human-in-the-loop step before anything consequential happens. That's not a limitation — it's good engineering.</P>
        </>
    );

    if (slug === 'web3-ux-challenges') return (
        <>
            <H2 id="ux-gap">The UX Gap in Web3</H2>
            <P>I've heard "Web3 is the future" enough times to be sceptical, but I've also seen what the UX problems look like up close. Managing private keys, understanding gas fees, the terrifying irreversibility of on-chain transactions — these aren't niche edge cases. They're the first thing every new user hits.</P>
            <P>The core tension is between <strong>security</strong> and <strong>convenience</strong>. In Web2, banks recover your password. In DeFi, no one recovers your seed phrase. That asymmetry is what keeps Web3 niche. Bridging it without compromising decentralisation is the real engineering challenge.</P>
            <InlineImg src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop" alt="Web3 UX" />
            <H2 id="seed-phrases">Account Abstraction: The Real Fix</H2>
            <P>The most promising solution I've studied is <strong>Account Abstraction (ERC-4337)</strong>. It replaces the externally owned account model with smart contract wallets that can implement their own validation logic. In practice, this enables:</P>
            <UL items={[
                <><strong>Social Recovery:</strong> Lose your key? Recover through trusted contacts or biometric auth — no seed phrase required.</>,
                <><strong>Sponsored Transactions:</strong> dApps pay gas fees for users. No need to buy ETH just to try something new.</>,
                <><strong>Bundled Transactions:</strong> Approve and swap in one click instead of signing five confusing popups in sequence.</>
            ]} />
            <Quote text="The next billion Web3 users won't know they're using a blockchain. They'll just know it's fast and it works." role="Developer, Web3 Explorer" />
            <H2 id="latency">Managing Latency and User Feedback</H2>
            <P>Blockchains are slower than centralised servers by design. Users shouldn't stare at a spinner for 15 seconds. <strong>Optimistic UI</strong> is the answer — show the user that the action succeeded immediately while the transaction confirms in the background. If it fails, gracefully roll back with a clear explanation.</P>
            <P>Transaction data is also cryptic by default. "0x... sent to 0x..." means nothing. Human-readable transaction simulation — "You are giving this contract permission to move 0.5 ETH from your wallet" — is one of the best UX improvements the space has made. Clarity is the best security feature.</P>
        </>
    );

    if (slug === 'mastering-nextjs-performance') return (
        <>
            <H2 id="rendering">Rendering Patterns: SSG, SSR, and PPR</H2>
            <P>Performance starts with how you deliver content. I've used all three major Next.js rendering strategies across different projects — this portfolio, ESG Auditor 2.0, and Attendinn — and the right choice is never obvious upfront.</P>
            <P><strong>Static Site Generation (SSG)</strong> is the gold standard for speed. Pre-built HTML served from the edge is hard to beat. For dynamic content I relied on SSR, but latency creeps in. The game changer is <strong>Partial Prerendering (PPR)</strong> — keep the shell static for instant load, stream in dynamic parts (user data, real-time feeds) in parallel. It's the best of both worlds and what Next.js 15 is built around.</P>
            <InlineImg src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop" alt="Next.js Performance" />
            <H2 id="assets">Optimising Images and Fonts</H2>
            <P>LCP (Largest Contentful Paint) is almost always dragged down by images. The standard <code>&lt;img&gt;</code> tag is not enough. The Next.js <code>&lt;Image&gt;</code> component handles resizing, lazy loading, and serving WebP/AVIF automatically. Things I always do now:</P>
            <UL items={[
                <><strong>Explicit dimensions or fill:</strong> Prevents layout shift (CLS) that destroys Core Web Vitals scores.</>,
                <><strong>priority on the hero image:</strong> Preloads the LCP element so it's ready before the browser finishes parsing.</>,
                <><strong>next/font for Google Fonts:</strong> Self-hosting eliminates external requests and removes the font-swap flicker entirely.</>
            ]} />
            <Quote text="Performance isn't a metric you chase — it's a user experience you protect." role="Full-Stack Developer" />
            <H2 id="bundles">Code Splitting and Bundle Size</H2>
            <P>JavaScript execution time blocks the main thread. I caught a significant FID (First Input Delay) regression in this portfolio when I added a heavy animation library without lazy loading it. The fix was <code>next/dynamic</code> with <code>ssr: false</code> for every heavy component below the fold.</P>
            <CodeBlock>{`const TechStack = dynamic(() => import('./TechStack'), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-secondary/10 rounded-2xl" />
});`}</CodeBlock>
            <P>Another pattern I use: analyse the bundle with <code>@next/bundle-analyzer</code> before every significant dependency addition. It's saved me from shipping 200 KB of polyfills I didn't need more than once.</P>
        </>
    );

    if (slug === 'ai-driven-security') return (
        <>
            <H2 id="threats">The Speed Problem in Modern Security</H2>
            <P>The traditional security operations model is reactive: a human analyst sees an alert, investigates, and responds. The problem is that modern attacks move faster than human reaction time. Automated scanners probe, breach, and exfiltrate data in minutes. Analysts are drowning in false positives while real threats slip through.</P>
            <P><strong>AI-driven security</strong> changes the equation by shifting from signature-based detection (looking for known-bad files) to behavioural analysis. A model trained on your network's normal traffic can instantly flag an anomaly — a user account that suddenly starts accessing the production database at 3 AM is suspicious even if no malware signature matches.</P>
            <InlineImg src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" alt="Cybersecurity" />
            <H2 id="detection">Deep Learning for Threat Detection</H2>
            <P>Where deep learning genuinely excels in security is pattern recognition on novel inputs — detecting zero-day exploits that no signature database has ever seen:</P>
            <UL items={[
                <><strong>User Entity Behaviour Analytics (UEBA):</strong> Build a behavioural baseline per user, flag deviations. Works well for detecting compromised credentials.</>,
                <><strong>Malware DNA analysis:</strong> Analyse code structure, not just hashes. Polymorphic malware changes its hash every run — but its control flow patterns stay similar.</>,
                <><strong>NLP-based phishing detection:</strong> Models that understand the intent and urgency of an email outperform keyword blacklists significantly.</>
            ]} />
            <Quote text="Defenders have to be right every time. Attackers only need to be right once. AI helps close that gap." role="Security Researcher" />
            <H2 id="adversarial">The Adversarial AI Arms Race</H2>
            <P>The uncomfortable reality is that attackers are using AI too. Deepfake voice notes for CEO fraud, polymorphic code generated faster than signatures can be written, automated vulnerability scanning at scale — the threat surface is expanding faster than defenders can cover it manually.</P>
            <P>The most promising defensive technique I've studied is using <strong>GANs adversarially</strong>: train one model to generate attack patterns and another to detect them. The generator constantly probes the detector's blind spots, and the detector learns from every new attack variant. It's security red-teaming at machine speed.</P>
        </>
    );

    if (slug === 'llm-fine-tuning') return (
        <>
            <H2 id="why-visual">Why Fine-Tune Locally?</H2>
            <P>When I built ESG Auditor 2.0, I needed an LLM that understood compliance terminology, could reason over dense legal documents, and — critically — would never send sensitive data to an external API. That combination ruled out every hosted model.</P>
            <P>Local fine-tuning with <strong>Ollama + Phi-3</strong> was the answer. The base model is a generalist; fine-tuning makes it a specialist. Running it locally keeps sensitive ESG data within the infrastructure. And with LoRA, you don't need a cluster to do it — a single consumer GPU is enough.</P>
            <InlineImg src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" alt="LLM Fine-Tuning" />
            <H2 id="lora">LoRA and QLoRA Explained</H2>
            <P>Full fine-tuning updates all 7B+ parameters of a model — prohibitively expensive. <strong>Low-Rank Adaptation (LoRA)</strong> freezes the pre-trained weights and injects small trainable matrices into each transformer layer. You're training a tiny fraction of the total parameters while the full model stays fixed.</P>
            <P><strong>QLoRA</strong> takes this further: the base model is quantised to 4-bit precision first, then LoRA adapters are trained on top. This lets me fine-tune a 7B model on a single GPU with 8 GB VRAM — hardware I actually have access to as a student.</P>
            <H2 id="ollama">The Stack: Unsloth + Ollama</H2>
            <P>For training I use <strong>Unsloth</strong> — it's 2–5× faster than standard HuggingFace implementations and uses ~60% less memory. For inference I use Ollama, which exposes a clean local REST API identical to OpenAI's — so my LangChain integration code didn't change at all when switching from a hosted model to a local one.</P>
            <CodeBlock>{`from unsloth import FastLanguageModel

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/phi-3-mini-4k-instruct-bnb-4bit",
    max_seq_length=4096,
    load_in_4bit=True,
)

# Add LoRA adapters
model = FastLanguageModel.get_peft_model(model,
    r=16, lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
)

# Export to Ollama after training
model.save_pretrained_gguf("esg_model", tokenizer,
    quantization_method="q4_k_m"
)`}</CodeBlock>
            <Quote text="Fine-tuning is the bridge between a general reasoning engine and a specialist that actually understands your domain." role="AI Engineer" />
        </>
    );

    if (slug === 'smart-contract-security') return (
        <>
            <H2 id="audits">Why Rigorous Audits Are Non-Negotiable</H2>
            <P>In decentralised systems, code is law — and when that law has a loophole, millions of dollars can disappear in a single block. The history of DeFi is littered with reentrancy bugs, oracle manipulation attacks, and unchecked arithmetic overflows that drained protocols built by talented engineers.</P>
            <P>What's changed recently is the tooling. AI-powered static analysis can now scan thousands of lines of Solidity in seconds, flagging common vulnerability patterns before they reach deployment. But automated tools aren't a substitute for understanding — they're a first pass. A human auditor still needs to reason about economic incentives, flash loan attack vectors, and the emergent behaviour of contract interactions.</P>
            <InlineImg src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" alt="Smart Contract Security" />
            <H2 id="patterns">Securing the Layers</H2>
            <P>Security in smart contracts has to be holistic. It starts at the language level but extends to the entire system architecture:</P>
            <UL items={[
                <><strong>Access Control:</strong> RBAC using OpenZeppelin's <code>AccessControl</code> — every privileged function should require an explicit role, not just an <code>onlyOwner</code> modifier that becomes a single point of failure.</>,
                <><strong>Invariant Testing:</strong> Define properties that must always hold — total supply never exceeds max, balances always sum correctly — and use fuzz testing (Foundry's fuzzer is excellent) to try and break them.</>,
                <><strong>Pausability (Circuit Breakers):</strong> Build a <code>pause()</code> function that freezes sensitive operations during a detected attack. A few seconds of downtime is better than a complete drain.</>
            ]} />
            <Quote text="A secure contract is one that assumes every external caller is a potential attacker and designs accordingly." role="Solidity Developer" />
        </>
    );

    if (slug === 'modern-state-management') return (
        <>
            <H2 id="beyond-redux">Moving Beyond Redux</H2>
            <P>I inherited a Redux-heavy codebase once during an internship and immediately understood why developers complain about it. Actions, reducers, selectors, middleware — the boilerplate-to-value ratio is brutal for most applications. Redux solved a real problem in 2015; in 2025 there are better options for the majority of use cases.</P>
            <P>Building Attendinn and this portfolio, I reached for <strong>Zustand</strong>. It's hook-based, needs no provider wrapper, and lets you write state logic that looks like plain JavaScript. The mental model is simple: a store is just an object with some functions that update it.</P>
            <InlineImg src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop" alt="State Management" />
            <H2 id="atomic-vs-global">Choosing the Right Pattern</H2>
            <P>The right state library depends on what you're managing:</P>
            <UL items={[
                <><strong>Global State (Zustand):</strong> User auth, theme, global UI flags — shared data that many components need. Simple to set up, great dev tools, easy to persist to localStorage.</>,
                <><strong>Atomic State (Jotai):</strong> Highly reactive, independent pieces of state that should re-render minimally. I reach for Jotai when I want React Query-style granularity for client state.</>,
                <><strong>Server State (TanStack Query):</strong> Anything from an API. Caching, background refetching, optimistic updates, error retries — TanStack Query handles all of it so I don't have to. Don't put server data in Zustand.</>
            ]} />
            <Quote text="The best state management is invisible — you only notice it when it's wrong." role="Frontend Developer" />
        </>
    );

    if (slug === 'iot-edge-computing') return (
        <>
            <H2 id="edge-vs-cloud">Why Process at the Edge?</H2>
            <P>When I was building ThermalSense AI, the first instinct was to stream all sensor data to the cloud for processing. Then I calculated the bandwidth: a 64-float thermal frame at 5 fps is ~12 KB/s, continuously. On a congested factory floor Wi-Fi, that's unreliable. And a round-trip to a cloud inference endpoint adds 200–500 ms of latency — unacceptable for a system meant to detect equipment faults before they cause failures.</P>
            <P>The answer was <strong>edge computing</strong>: run the ML model on the ESP32 itself. No cloud dependency, no latency, no bandwidth cost. The device makes decisions locally and only sends alerts and summary statistics upstream.</P>
            <InlineImg src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" alt="Edge Computing IoT" />
            <H2 id="hw-optimization">Making ML Fit on 520 KB of SRAM</H2>
            <P>Running a neural network on a microcontroller requires a completely different mindset from cloud ML:</P>
            <UL items={[
                <><strong>TinyML / TFLite:</strong> Post-training int8 quantisation shrank my thermal anomaly model from 2.1 MB to 380 KB — small enough for ESP32 flash, with 94% of the original accuracy retained.</>,
                <><strong>SPIFFS for local storage:</strong> Configuration files, calibration data, and anomaly logs are stored in ESP32's flash file system — no SD card required.</>,
                <><strong>Delta encoding over MQTT:</strong> Only transmit pixels that changed by more than 0.5°C. This cut my MQTT payload by ~70% and kept end-to-end latency under 200 ms even on congested Wi-Fi.</>
            ]} />
            <Quote text="The cloud is where you reflect on data. The edge is where you act on it." role="IoT & Embedded ML Developer" />
        </>
    );

    if (slug === 'ai-in-healthcare') return (
        <>
            <H2 id="diagnostics">AI as a Diagnostic Partner</H2>
            <P>Healthcare is one of the most genuinely promising frontiers for AI, and also one of the most overhyped. The reality I've read about and studied is nuanced: computer vision models can identify early signs of certain conditions in medical imaging with precision that rivals specialists — but only for the specific conditions they were trained on, in the specific imaging modalities they saw during training.</P>
            <P>The right framing isn't "AI replaces radiologists." It's <strong>diagnostic augmentation</strong>: AI handles the first pass at high volume, flags candidates for human review, and catches the cases that fatigue or workload might cause a human to miss. The radiologist still makes the call. The AI makes the radiologist faster and more consistent.</P>
            <InlineImg src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" alt="Healthcare AI" />
            <H2 id="ethics">The Explainability Problem</H2>
            <P>The biggest barrier to clinical AI adoption isn't accuracy — it's <strong>explainability</strong>. A model that says "87% probability of malignancy" without showing the radiologist what features drove that prediction isn't clinically useful. A doctor won't stake a patient's treatment plan on a black-box output they can't interrogate.</P>
            <P>Grad-CAM (Gradient-weighted Class Activation Mapping) is the most practical solution I've seen: it produces a heatmap overlay showing which pixels the CNN attended to most when making its prediction. That makes the model's reasoning visible and auditable — something clinicians can actually engage with.</P>
            <UL items={[
                <><strong>HIPAA / data privacy:</strong> Every training pipeline must strip PII before any model ever sees patient data. This is non-negotiable and harder than it sounds.</>,
                <><strong>Federated Learning:</strong> Train across hospitals without moving raw data — each site trains locally, only gradient updates are shared. Promising for multi-institutional datasets.</>,
                <><strong>Bias auditing:</strong> Medical AI trained on unrepresentative populations will fail on underrepresented groups. Demographic stratification in validation is essential, not optional.</>
            ]} />
            <Quote text="AI in healthcare is not about replacing the human touch — it's about giving clinicians superhuman throughput without sacrificing the judgment." role="AIML Developer" />
        </>
    );

    if (slug === 'the-architects-manifesto') return (
        <>
            <H2 id="manifesto">What I'm Actually Building Toward</H2>
            <P>A portfolio is a compressed statement of values. Every project in mine reflects a consistent set of bets: that AI should be embedded in useful systems, not demonstrated in isolation; that hardware and software belong together; that privacy-first design is an engineering requirement, not a nice-to-have.</P>
            <P>I'm a B.Tech CSE AIML student at IEM Kolkata. I've built thermal anomaly detectors for ESP32, local LLM pipelines for enterprise compliance, smart attendance systems, and AI tools that shipped out of hackathons. The thread connecting all of it is a preference for <strong>complete systems</strong> over impressive demos.</P>
            <InlineImg src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop" alt="Engineering philosophy" />
            <H2 id="principles">My Core Engineering Principles</H2>
            <P>These are the values that actually show up in how I make technical decisions — not aspirations, but patterns I've noticed in my own work:</P>
            <UL items={[
                <><strong>Intelligence with intent:</strong> AI features should solve a problem a real user has, not demonstrate that a model can do something surprising. If I can't explain why the ML makes the product better, it doesn't belong there.</>,
                <><strong>Constraints are creative:</strong> 380 KB of flash on an ESP32 forced better architecture than unlimited cloud resources would have. I've found that the most elegant solutions usually come from the tightest constraints.</>,
                <><strong>Privacy by design:</strong> Local LLMs, on-device inference, and end-to-end encryption aren't features I add at the end. They're architectural decisions I make at the start.</>,
                <><strong>Build complete things:</strong> A model that works in a notebook is not a project. A deployed system with a real user interface, error handling, and observability is a project. I optimise for the second kind.</>
            ]} />
            <Quote text="We don't just build tools. We build systems that give people capabilities they didn't have before. That's worth doing carefully." role="AIML Developer, IEM Kolkata" />
            <H2 id="next">What's Next</H2>
            <P>I'm still in the early chapters. The projects are getting more complex — multi-modal AI systems, robotics-adjacent ML, larger-scale deployments. The certifications are stacking up (Neo4j, Google Cloud, Postman). The internships are teaching me things the classroom doesn't.</P>
            <P>This portfolio isn't a finished product. It's a living record of what I've built, what I've learned, and what I'm thinking about. If you're reading this and working on something interesting in AI, IoT, or full-stack systems, I'd genuinely love to connect.</P>
        </>
    );

    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
        </div>
    );
}

// ─── TOC per slug ────────────────────────────────────────────────────────────

const TOC_MAP: Record<string, { id: string; label: string }[]> = {
    'future-of-ai-agents': [
        { id: 'intro', label: 'The Rise of Agents' },
        { id: 'core', label: 'Cognitive Architecture' },
        { id: 'impact', label: 'Decision Making' },
    ],
    'web3-ux-challenges': [
        { id: 'ux-gap', label: 'The UX Gap' },
        { id: 'seed-phrases', label: 'Account Abstraction' },
        { id: 'latency', label: 'Latency & Feedback' },
    ],
    'mastering-nextjs-performance': [
        { id: 'rendering', label: 'Rendering Patterns' },
        { id: 'assets', label: 'Images & Fonts' },
        { id: 'bundles', label: 'Bundle Size' },
    ],
    'ai-driven-security': [
        { id: 'threats', label: 'The Speed Problem' },
        { id: 'detection', label: 'Deep Learning Detection' },
        { id: 'adversarial', label: 'Adversarial AI' },
    ],
    'llm-fine-tuning': [
        { id: 'why-visual', label: 'Why Fine-Tune Locally?' },
        { id: 'lora', label: 'LoRA & QLoRA' },
        { id: 'ollama', label: 'Unsloth + Ollama' },
    ],
    'smart-contract-security': [
        { id: 'audits', label: 'Why Audits Matter' },
        { id: 'patterns', label: 'Securing the Layers' },
    ],
    'modern-state-management': [
        { id: 'beyond-redux', label: 'Beyond Redux' },
        { id: 'atomic-vs-global', label: 'Choosing the Right Pattern' },
    ],
    'iot-edge-computing': [
        { id: 'edge-vs-cloud', label: 'Why Edge?' },
        { id: 'hw-optimization', label: 'ML on 520 KB SRAM' },
    ],
    'ai-in-healthcare': [
        { id: 'diagnostics', label: 'AI as Diagnostic Partner' },
        { id: 'ethics', label: 'Explainability & Ethics' },
    ],
    'the-architects-manifesto': [
        { id: 'manifesto', label: 'What I\'m Building Toward' },
        { id: 'principles', label: 'Core Principles' },
        { id: 'next', label: 'What\'s Next' },
    ],
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const post = portfolioData.blogs.find((p) => p.slug === slug);
    if (!post) notFound();

    const toc = TOC_MAP[slug] ?? [];

    return (
        <main className="min-h-screen bg-background pb-24 pt-32">
            {/* Header */}
            <div className="container max-w-7xl mx-auto px-6 mb-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/blog" className="flex items-center gap-2 text-sm text-muted-foreground font-medium hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Blog</span>
                        </Link>
                    </div>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border bg-secondary/10 border-border/40 text-muted-foreground">
                            {post!.category.replace('-', ' ')}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
                            {post!.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                            {post!.excerpt}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Hero Image */}
            <div className="container max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full aspect-[21/9] md:aspect-[2/1] rounded-3xl overflow-hidden border border-border/40 shadow-2xl"
                >
                    <Image src={post!.image} alt={post!.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </div>

            {/* Metadata Bar */}
            <div className="container max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between border-y border-border/40 py-6 gap-6">
                    <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-start">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Written by</span>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden relative flex-shrink-0">
                                    <Image src={post!.author.avatar} alt={post!.author.name} fill className="object-cover" />
                                </div>
                                <span className="font-bold text-foreground">{post!.author.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Published</span>
                            <span className="font-bold text-foreground">{post!.date}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Read Time</span>
                            <span className="font-bold text-foreground flex items-center gap-1.5">
                                <Clock className="w-3 h-3" /> {post!.readTime} min
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                        <button
                            onClick={handleCopy}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 transition-all text-xs font-bold uppercase tracking-wider rounded-lg",
                                copied ? "bg-primary text-background" : "bg-secondary/10 hover:bg-secondary/20 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {copied ? <><Check className="w-4 h-4" /><span>Copied!</span></> : <><Copy className="w-4 h-4" /><span className="hidden sm:inline">Copy link</span></>}
                        </button>
                        <div className="w-px h-6 bg-border/40 hidden sm:block" />
                        <Link href="https://www.linkedin.com/in/arnab-chatterjee-prsnl/" target="_blank" className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/10 rounded-lg hover:bg-primary/10">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="https://github.com/ArnabOPP" target="_blank" className="p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/10 rounded-lg hover:bg-primary/10">
                            <Github className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content + Sidebar */}
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Article */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert prose-primary max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:leading-loose prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-secondary/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                            <PostBody slug={slug} />
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-12 border-t border-border/40">
                            <h3 className="text-lg font-bold mb-6">Related Topics</h3>
                            <div className="flex flex-wrap gap-3">
                                {post!.tags.map(tag => (
                                    <Link key={tag} href={`/blog?q=${tag}`} className="px-4 py-2 bg-secondary/10 hover:bg-primary/10 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/20 rounded-lg text-sm transition-all font-medium">
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-12 space-y-8">

                            {/* TOC */}
                            {toc.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 pb-4 border-b border-border/40">
                                        Table of Contents
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        {toc.map((item, idx) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={cn(
                                                    "group flex items-center gap-3 text-sm font-medium transition-colors",
                                                    idx === 0 ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                                )}
                                            >
                                                <span className={cn("h-px w-4 transition-all", idx === 0 ? "bg-primary" : "bg-transparent group-hover:bg-border")} />
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Author Card */}
                            <div className="p-6 rounded-2xl border border-border/40 bg-secondary/5">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-4 border-b border-border/40">About the Author</h3>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border border-border/40">
                                        <Image src="/about/ArnabCh.jpeg" alt="Arnab Chatterjee" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground text-sm">Arnab Chatterjee</p>
                                        <p className="text-xs text-muted-foreground">B.Tech CSE AIML · IEM Kolkata</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                                    Building AI systems, IoT hardware, and full-stack applications. Neo4j Certified Professional. Hackathon finalist. Internship alum at ENGImitra & Prodigy InfoTech.
                                </p>
                                <Link href="https://www.linkedin.com/in/arnab-chatterjee-prsnl/" target="_blank" className="flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                                    Connect on LinkedIn <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* Related Projects */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 pb-4 border-b border-border/40">
                                    Related Projects
                                </h3>
                                <div className="space-y-4">
                                    {portfolioData.projects.slice(0, 3).map(p => (
                                        <Link key={p.id} href={`/projects/${p.slug}`} className="flex gap-3 items-center group">
                                            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-secondary/10 border border-border/40">
                                                {p.image && <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.title}</p>
                                                <p className="text-xs text-muted-foreground">{p.category}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Posts */}
            <div className="container max-w-7xl mx-auto px-6 mt-16 border-t border-border/40 pt-16">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black tracking-tight">From the Blog</h3>
                    <Link href="/blog" className="px-6 py-2 rounded-lg bg-secondary/10 border border-border/40 text-sm font-bold hover:bg-secondary/20 transition-all">
                        View all posts
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.blogs.filter(b => b.slug !== slug).slice(0, 2).map(b => (
                        <Link key={b.slug} href={`/blog/${b.slug}`} className="group block">
                            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-secondary/5 border border-border/40">
                                <Image src={b.image} alt={b.title} fill loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                        {b.category.replace('-', ' ')}
                                    </span>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{b.title}</h4>
                            <p className="text-muted-foreground line-clamp-2 text-sm mb-3">{b.excerpt}</p>
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                <div className="w-5 h-5 rounded-full overflow-hidden relative">
                                    <Image src={b.author.avatar} alt={b.author.name} fill className="object-cover" />
                                </div>
                                {b.author.name} · {b.date}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
