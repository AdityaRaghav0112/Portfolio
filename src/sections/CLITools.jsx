import React from "react";
import { Github, Terminal, Zap } from "lucide-react";

const tools = [
  {
    name: "Aider",
    tagline: "AI pair programming in your terminal",
    desc: "Aider lets you pair program with LLMs to edit code in your local git repository. It works with GPT-4o, Claude 3.5 Sonnet, Gemini, and many other models via API key.",
    apiProviders: ["OpenAI", "Anthropic", "Gemini", "OpenRouter"],
    git: "https://github.com/Aider-AI/aider",
    install: "pip install aider-chat",
    bg: "bg-[#1a1a2e]",
    accent: "#7c3aed",
    simplest: true,
    whySimplest:
      "One pip install, set your API key as an env var, run aider in any git repo — no Docker, no IDE extension, no web UI needed.",
  },
  {
    name: "Cline",
    tagline: "Autonomous coding agent for VS Code & CLI",
    desc: "Cline is an open-source AI coding agent that can create/edit files, run terminal commands, and browse the web, all driven by an API key of your choice.",
    apiProviders: ["Anthropic", "OpenAI", "Gemini", "AWS Bedrock"],
    git: "https://github.com/cline/cline",
    install: "npm install -g cline",
    bg: "bg-[#0d2137]",
    accent: "#0ea5e9",
  },
  {
    name: "OpenHands",
    tagline: "Open-source AI software engineering agent",
    desc: "OpenHands (formerly OpenDevin) is a platform for autonomous AI agents that can write code, run commands, browse the web, and interact with codebases end-to-end.",
    apiProviders: ["OpenAI", "Anthropic", "Gemini", "Azure OpenAI"],
    git: "https://github.com/All-Hands-AI/OpenHands",
    install: "docker pull ghcr.io/all-hands-ai/openhands",
    bg: "bg-[#0f2010]",
    accent: "#22c55e",
  },
  {
    name: "SWE-agent",
    tagline: "Turn LLMs into capable software engineers",
    desc: "SWE-agent by Princeton NLP turns language models into software engineering agents that can autonomously fix GitHub issues and make targeted edits across your codebase.",
    apiProviders: ["OpenAI", "Anthropic", "Azure OpenAI"],
    git: "https://github.com/SWE-agent/SWE-agent",
    install: "pip install sweagent",
    bg: "bg-[#1c1007]",
    accent: "#f59e0b",
  },
  {
    name: "Continue",
    tagline: "Open-source AI code assistant",
    desc: "Continue is an open-source autopilot that connects any model to your IDE. Use it from the CLI or editor to autocomplete, chat about code, and apply edits using your own API key.",
    apiProviders: ["OpenAI", "Anthropic", "Gemini", "Ollama (local)"],
    git: "https://github.com/continuedev/continue",
    install: "npm install -g continue-cli",
    bg: "bg-[#1a0a2e]",
    accent: "#a855f7",
  },
];

const ToolCard = ({ tool }) => (
  <div
    className={`${tool.bg} rounded-2xl p-6 flex flex-col gap-4 text-white border transition-all duration-300 ${
      tool.simplest
        ? "border-[#7c3aed] ring-2 ring-[#7c3aed]/40"
        : "border-white/10 hover:border-white/30"
    }`}
  >
    {/* "Simplest to start" badge */}
    {tool.simplest && (
      <div className="flex items-center gap-1.5 self-start bg-[#7c3aed]/20 border border-[#7c3aed]/50 text-[#c4b5fd] text-xs font-semibold px-3 py-1 rounded-full">
        <Zap size={12} fill="#c4b5fd" />
        Simplest to start
      </div>
    )}

    {/* Header */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className="p-2 rounded-xl"
          style={{ backgroundColor: `${tool.accent}22` }}
        >
          <Terminal size={22} style={{ color: tool.accent }} />
        </span>
        <div>
          <h3 className="font-anton text-2xl">{tool.name}</h3>
          <p className="text-gray-400 text-sm">{tool.tagline}</p>
        </div>
      </div>
      <a
        href={tool.git}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-150 shrink-0"
        aria-label={`${tool.name} GitHub Repository`}
      >
        <Github size={18} />
      </a>
    </div>

    {/* Description */}
    <p className="text-gray-300 text-sm leading-relaxed">{tool.desc}</p>

    {/* Install command */}
    <div className="bg-black/40 rounded-lg px-4 py-2 font-mono text-xs text-gray-300 flex items-center gap-2">
      <span style={{ color: tool.accent }}>$</span>
      {tool.install}
    </div>

    {/* Why it's the simplest */}
    {tool.whySimplest && (
      <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-lg px-4 py-3 text-xs text-[#c4b5fd] leading-relaxed">
        <span className="font-semibold uppercase tracking-wide text-[#a78bfa] block mb-1">
          Why it's the simplest
        </span>
        {tool.whySimplest}
      </div>
    )}

    {/* API Providers */}
    <div>
      <p className="text-xs uppercase text-gray-500 mb-2 font-semibold">
        Supported API providers
      </p>
      <div className="flex flex-wrap gap-2">
        {tool.apiProviders.map((provider) => (
          <span
            key={provider}
            className="text-xs px-2 py-1 rounded-full border"
            style={{
              borderColor: `${tool.accent}55`,
              color: tool.accent,
              backgroundColor: `${tool.accent}11`,
            }}
          >
            {provider}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CLITools = () => {
  return (
    <section
      id="cli-tools"
      className="w-full bg-[#111111] py-24 px-6 flex flex-col items-center"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <h1 className="font-anton text-5xl text-white mb-4">
          Open Source CLI Coding Tools
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Powerful AI-driven CLI tools that let you make code changes directly
          from your terminal — just plug in your API key and start coding.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-gray-600 text-sm text-center max-w-xl">
        All tools above are open source. Visit their GitHub repositories for
        setup guides, supported models, and API key configuration.
      </p>
    </section>
  );
};

export default CLITools;
