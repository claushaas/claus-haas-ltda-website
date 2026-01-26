# Content Specification — v0.2

## Purpose

This document defines **what content exists**, **why it exists**, and **how it should be written** for the personal site.

It is a **normative specification**, not copy. It serves as the single source of truth for creating, reviewing, and evolving site content.

---

## 1. Content Philosophy (Non‑Negotiable)

This site is **not narrative**.

It does not tell a story. It **exposes a system in operation**.

Content exists to:

* reduce ambiguity
* externalize decision logic
* filter for cognitive compatibility

### What This Site Is

* A public operational manual
* A cognitive filter
* A collaboration accelerator

### What This Site Is Not

* A portfolio
* A blog
* Personal branding or marketing
* Storytelling or persuasion

Every page must justify its existence by answering **one concrete question** for the visitor.

---

## 2. Global Writing Rules

These rules apply to **all routes**.

### Tone

* Calm
* Explicit
* Precise
* Non‑performative

### Structure

* Short paragraphs
* Clear section boundaries
* No rhetorical padding

### Forbidden Patterns

* Motivational language
* Personal storytelling unless strictly contextual
* Vague claims ("passionate", "experienced", "innovative")
* Repeating the same idea across multiple pages

### Required Properties

* Each page has a **clear exit condition**
* Each page changes the reader’s mental state
* Each page can stand alone

---

## 3. Route‑by‑Route Content Specification

All routes below are **exactly** those defined in `app/routes.ts`.

---

### `/:lang` (index) — Home

#### Question answered

> Should I continue exploring this site?

#### Role

Cognitive router and initial filter.

#### Required Sections

* Purpose statement (1–2 lines)
* What this site is / is not
* Primary navigation paths (links to core routes)
* Compatibility signal (who this is / isn’t for)

#### Must NOT include

* Biography
* Project listings
* Long explanations

#### Exit conditions

* Navigate to another core route
* Leave the site

---

### `/:lang/how-i-work`

#### Question answered

> How does collaboration with this person work in practice?

#### Role

Operational transparency.

#### Required Sections

* Working principles (explicit, testable)
* Decision‑making model
* Communication expectations
* Quality and review standards
* Non‑compatibilities

#### Must NOT include

* Personal history
* Tool lists (belongs in `/uses`)

#### Exit conditions

* Assess collaboration fit
* Continue to principles or contact

---

### `/:lang/principles`

#### Question answered

> What mental model drives decisions here?

#### Role

Cognitive contract.

#### Required Sections

* Core principles
* Anti‑principles
* Practical implications per domain (design, code, product)

#### Each principle must include

* Statement
* Practical consequence
* Anti‑example

#### Exit conditions

* Accept or reject compatibility

---

### `/:lang/about`

#### Question answered

> Who is this person, without marketing distortion?

#### Role

Contextual grounding.

#### Required Sections

* Objective self‑description
* Domains of focus
* Structural interests
* Three‑layer self definition (what / how / why)

#### Must NOT include

* Career storytelling
* Emotional narrative

#### Exit conditions

* Context clarity

---

### `/:lang/projects`

#### Question answered

> What concrete, verifiable work exists?

#### Role

Evidence without promotion.

#### Required Sections

* Curated project list
* Each project defined by problem → approach → status
* Links to repos, docs, demos where applicable

#### Inclusion rule

Only projects with tangible artifacts are allowed.

#### Exit conditions

* Inspect a project
* Move to collaboration or notes

---

### `/:lang/uses`

#### Question answered

> What tools and setups are actually used?

#### Role

Practical transparency.

#### Required Sections

* Hardware
* Software
* Development tooling
* Automation / AI usage
* Tool selection heuristics

#### Must NOT include

* Endorsements
* Marketing language

---

### `/:lang/contact`

#### Question answered

> What is the correct next step?

#### Role

Friction‑reduced handoff.

#### Required Sections

* When to contact
* When not to contact
* Single contact method
* Expected input format

#### Exit conditions

* Send message
* Decide not to

---

### `/:lang/notes`

#### Question answered

> What ideas are being explored over time?

#### Role

Public thinking archive.

#### Required Sections

* Notes index
* Filtering or grouping
* Editorial policy (notes as laboratory)

---

### `/:lang/notes/:slug`

#### Question answered

> Read a specific note in context.

#### Role

Focused consumption.

#### Required Sections

* Note content
* Metadata (date, tags, status)
* Navigation (previous / next / index)

---

### `/:lang/harada`

#### Question answered

> What is currently being worked on, structurally?

#### Role

Live operational snapshot.

#### Required Sections

* Method explanation (brief)
* Current Harada board
* Reading rules (snapshot, not promise)

---

### `/:lang/palette-kit`

#### Question answered

> What does the design system look like in reality?

#### Role

Technical proof.

#### Required Sections

* What Palette‑Kit is
* Core pillars (color, semantics, resolvers)
* Examples or demos
* Links to repos and specs
* Current status

---

## 4. Review Checklist (Per Page)

A page is considered **done** only if:

* Its core question is answered clearly
* No other page repeats the same function
* All claims are concrete or verifiable
* The exit condition is obvious

---

## 5. Directory Recommendation

Create a directory:

```text
app/content/content-spec/
```

Suggested files:

* `content-spec.md` (this document)
* `writing-rules.md` (optional future expansion)
* `review-checklist.md` (optional future expansion)

This directory is **documentation**, not runtime content.

---

## Status

This document is the **starting point** for content creation.
It should evolve via explicit revisions, not ad‑hoc edits.
