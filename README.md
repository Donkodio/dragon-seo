<p align="center">
  <img src="https://img.shields.io/badge/status-active-brightgreen" alt="Status">
  <img src="https://img.shields.io/github/stars/Donkodio/dragon-seo" alt="Stars">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

# 🐉 Dragon SEO

**Ultimate SEO skill for AI agents** — Copywriting, content strategy, GEO/AI optimization, E-E-A-T, technical SEO.

Dragon SEO combines the best methodologies from the top 5 SEO skill repositories into one unified, production-ready skill for any AI agent (Hermes, Claude Code, Codex, Cursor, etc.).

## 🏆 Sources

| Source | Stars | What we took |
|--------|-------|-------------|
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 39.2K⭐ | Copywriting (151K installs), Content Strategy (106K), AI SEO (90K), Copy Editing (94K) |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 11.4K⭐ | E-E-A-T Framework, Technical SEO Audit, GEO, Schema |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | 4.8K⭐ | GEO citability scoring, per-platform AI optimization |
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | 3.3K⭐ | Content production pipeline |
| [inhouseseo/superseo-skills](https://github.com/inhouseseo/superseo-skills) | — | Anti-AI-slop rules, practitioner E-E-A-T methodology |

## 🚀 Commands

| Command | Description |
|---------|-------------|
| `dragon post <topic>` | Write an SEO-optimized post |
| `dragon strategy` | Content strategy for a channel |
| `dragon audit <url>` | Full SEO audit (technical + content + GEO) |
| `dragon geo <url>` | AI search visibility analysis |
| `dragon brief <topic>` | Generate SEO content brief |
| `dragon news <topic>` | Prepare news with SEO |
| `dragon improve <text>` | Edit/improve text |

## 📦 What's Inside

### 1. Copywriting (from 151K-install skill)
- Clarity over creativity
- Benefits over features
- Specificity over vagueness
- Customer language over company language
- Telegram-optimized post structure

### 2. Content Strategy
- Topic cluster methodology
- Pillar → Cluster → Post architecture
- Competitor gap analysis

### 3. E-E-A-T (Google QRG September 2025)
- Experience, Expertise, Authoritativeness, Trust
- Google's Who/How/Why test
- Source verification checklist

### 4. GEO — AI Search Optimization
- Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude
- Citability factors (freshness ×3, first 30% = 44% citations)
- Per-platform optimization

### 5. Technical SEO Audit
- Crawlability, indexability, Core Web Vitals (INP)
- Mobile, HTTPS, Schema.org
- On-page SEO checklist

### 6. Anti-AI-Slop Rules
- Eliminate filler phrases ("in modern world", "it's worth noting")
- Fact-first, direct language
- Short sentences, active voice

## 📁 Structure

```
dragon-seo/
├── SKILL.md              # Main skill file
├── CLAUDE.md             # Quick reference for agents
├── README.md             # This file
└── references/
    └── eeat-framework.md # E-E-A-T deep reference
```

## 🔧 Installation (Universal)

Dragon SEO works with **any AI agent** that supports the SKILL.md format:

### 🟢 Hermes Agent
```bash
# Copy to Hermes skills
cp -r dragon-seo ~/.hermes/skills/content-automation/
```

### 🔵 Claude Code
```bash
# Via skills.sh
npx skills add Donkodio/dragon-seo

# Or manual copy
cp SKILL.md ~/.claude/skills/dragon-seo/
```

### 🟣 OpenClaw
```bash
# Copy to OpenClaw skills
cp SKILL.md ~/.openclaw/skills/dragon-seo/SKILL.md
cp -r references/ ~/.openclaw/skills/dragon-seo/
```

### 🟠 Codex CLI
```bash
# Copy to Codex skills
cp SKILL.md ~/.codex/skills/dragon-seo/SKILL.md
cp -r references/ ~/.codex/skills/dragon-seo/
```

### ⚪ Cursor / Windsurf / Gemini CLI
Copy `SKILL.md` and `references/` to your agent's skills directory.

## 📄 License

MIT — use freely, modify, share.

---

<p align="center">Made with 🐉 for the AI agent ecosystem</p>
