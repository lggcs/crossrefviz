# 🌈 CrossRefViz

> **Explore Scripture's Infinite Web of Connections**

---

## ✨ What is CrossRefViz?

**CrossRefViz** is an immersive, interactive visualization of the Bible's cross-reference network — featuring **607,000+ curated connections** between verses, enhanced with **Rainbow Bible themes** and **scholarly commentary on textual difficulties**.

Ever wondered how Genesis 1:1 connects to Revelation? Or how prophecy weaves through Scripture? **CrossRefViz transforms the tangled web of biblical references into a beautiful, navigable journey of discovery.**

```
📖 600K+ Cross-References → 🌈 10 Rainbow Themes → 📊 Visual Exploration ✨
```

---

## 🎨 Features

### 🌐 Arc-Based Visualization
- **Stunning bezier curves** connecting related verses across the entire Bible
- **607,000+ cross-references** from OpenBible.info, crowd-sourced and verified
- **Zoomable, scrollable canvas** — navigate from Genesis to Revelation
- **Hover to inspect** — see vote counts, source/target verses on demand

### 🌈 Rainbow Bible Themes
| Theme | Color | Hex | Focus |
|-------|-------|-----|-------|
| God | <span style="color:#A020F0">●</span> Purple | `#A020F0` | Divine attributes, nature, character |
| Discipleship | <span style="color:#FA8072">●</span> Salmon | `#FA8072` | Following Christ, spiritual growth |
| Love | <span style="color:#008000">●</span> Green | `#008000` | Unconditional love, relationships |
| Faith | <span style="color:#FFB347">●</span> Light Orange | `#FFB347` | Trusting God, believing promises |
| Sin | <span style="color:#808080">●</span> Gray | `#808080` | Fall, temptation, moral failure |
| Evil | <span style="color:#8B4513">●</span> Brown | `#8B4513` | Satan, spiritual warfare, judgment |
| Salvation | <span style="color:#0000FF">●</span> Blue | `#0000FF` | Redemption, atonement, eternal life |
| Family | <span style="color:#FFFF00">●</span> Yellow | `#FFFF00` | Marriage, parenting, home life |
| Outreach | <span style="color:#FFC0CB">●</span> Pink | `#FFC0CB` | Evangelism, missions, spreading gospel |
| Commandments | <span style="color:#808000">●</span> Olive | `#808000` | God's law, obedience, statutes |
| History | <span style="color:#C0C0C0">●</span> Silver | `#C0C0C0` | Biblical events, Israel's timeline |
| Prophecy | <span style="color:#FFD700">●</span> Gold | `#FFD700` | Foretelling, fulfillment, end times |

**Filter by theme** — click any color to reveal only related passages and their connections

### 📚 Bible Difficulties Database
- **996+ curated scholarly articles** addressing textual complexities
- **Multiple sources**: defendinginerrancy.com, kjvtoday.net, answersingenesis.org, christcreated.com, lighthousetrailsresearch.com
- **Verse-level linking** — scroll to chapters, see associated commentary instantly
- **Source attribution** — color-coded labels (green/yellow/blue/purple/orange)
- **Quick BibleHub access** — deep links to verse interpretations

### 🔍 Interactive Exploration
- **Book-by-book navigation** — jump to any book with one click
- **Verse detail panel** — full verse text, cross-references, themes
- **Powerful search** — find "John 3:16", "Genesis 1:1-3", or book names
- **Vote threshold slider** — quality filter, show connections with 2+ to 50+ votes
- **Arc limit control** — display 100 to 3000 strongest connections
- **Keyboard navigation** — arrow keys ← → to step through connections

---

## 🚀 Quick Start

### No Build, No Server, No Database

Deploy this instantly to GitHub Pages:

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd tskviz
   ```

2. **Open in browser:**
   ```bash
   open index.html
   ```

3. **Or serve locally (optional):**
   ```bash
   python serve.py
   # Navigate to http://localhost:5000
   ```

### GitHub Pages Deployment

Drop these **5 files** into your `gh-pages` branch:

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~2839 lines | Complete application |
| `verses-1769.json` | ~4.6 MB | KJV verse texts |
| `openbible.json` | ~40 MB | 607K cross-references |
| `verse_themes.json` | ~4.1 MB | Rainbow theme classifications |
| `bible_difficulties.json` | ~221 KB | 996 scholarly articles |

That's it.

---

## 📖 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  1. Load 49MB JSON data (downloads once, cached thereafter)  │
│     ↓                                                        │
│  2. Parse 607,000+ cross-references (filtered: 2+ votes)     │
│     ↓                                                        │
│  3. Map to 10 Rainbow Bible themes for every verse           │
│     ↓                                                        │
│  4. Render thousands of arcs on HTML5 Canvas                 │
│     ↓                                                        │
│  5. Interactive: Scroll, hover, click, filter, search        │
└─────────────────────────────────────────────────────────────┘
```

**Performance:**
- **First visit:** 5-15 seconds (downloads ~49MB)
- **Cached visits:** 1-3 seconds (browser caches JSONs)
- **Memory:** ~150-200MB after initial load
- **GitHub Pages compression:** ~12-15MB after gzip

---

## 🎯 Inspiration & Origins

### The Vision
Inspired by [Chris Harrison's BibleViz (2007)](https://www.chrisharrison.net/index.php/visualizations/BibleViz), which first revealed Scripture's staggering interconnectedness through static visualizations. **CrossRefViz brings this concept to life as a fully interactive, real-time experience.**

### The Data
- **OpenBible.info** — Community-curated cross-references with transparent voting (CC BY 4.0)
- **Rainbow Study Bible** — Color-coded themes concept (adapted, not used directly)
- **KJV Text** — Public domain King James Version
- **Theme Classifications** — AI-generated using Ollama models

---

## 🛠️ Technology Stack

| Layer | Technology | Why |
|-------|------------|-----|
| **UI/Styling** | Tailwind CSS | Utility-first, dark mode, responsive mobile/desktop |
| **Visualization** | HTML5 Canvas | High-performance rendering of thousands of arcs |
| **Interactivity** | Vanilla JavaScript | No framework overhead, clean & predictable |
| **Deployment** | GitHub Pages | Free hosting, auto-gzipping, zero configuration |
| **AI Classification** | Ollama | Local LLMs for theme categorization (Python scripts) |

**No build step.** `index.html` contains everything.

---

## 📁 File Structure

### Production (Deploy these 5 files)
```
tskviz/
├── index.html              # All-in-one application
├── verses-1769.json        # KJV verse texts
├── openbible.json          # Cross-references (607K links)
├── verse_themes.json       # Rainbow theme assignments
└── bible_difficulties.json # Scholarly commentary
```


---

## 🎮 Controls Reference

| Control | Action |
|---------|--------|
| **Horizontal scroll** | Navigate through Bible chapters |
| **Mouse wheel** | Zoom in/out of canvas |
| **Hover arc** | Show source/target verses & vote count |
| **Click arc** | Select, populate Details panel |
| **Arrow keys ← →** | Step through arc connections |
| **Click book (sidebar)** | Filter to that book's references |
| **Theme click** | Toggle show/hide themed arcs |
| **Search** | Find "John 3:16", "Gen 1:1-3", or book names |
| **Votes slider** | Filter cross-refs by minimum vote threshold |
| **Arcs slider** | Limit visible arcs (100-3000) |
| **Source filter dots** | Show/hide Bible difficulties by source |

---

## 📝 License

- **OpenBible cross-references:** CC BY 4.0 (Credit: openbible.info)
- **Bible verses:** Public domain (KJV)
- **Theme concepts:** Inspired by Rainbow Study Bible (not directly used, generated by AI)
- **Code:** Free to use, modify, distribute

---

## 🙏 Acknowledgments

| Source | Contribution |
|--------|--------------|
| [OpenBible.info](https://openbible.info/) | 607,000+ cross-references & API |
| [Chris Harrison](https://www.chrisharrison.net/) | Original BibleViz inspiration (2007) |
| [Rainbow Study Bible](https://www.rainbowstudybible.com/) | Color-coded thematic approach |
| [farskipper/kjv](https://github.com/farskipper/kjv) | KJV verse text dataset |
| [Ollama](https://ollama.ai/) | Local AI for theme classification |

---


## 🌿 "All Scripture is breathed out by God and profitable for teaching..."
> **2 Timothy 3:16**

**Navigate Scripture's connections. Understand its unity.**

### 🎉 Start exploring: [Live Demo](https://lggcs.github.io/crossrefviz/)
