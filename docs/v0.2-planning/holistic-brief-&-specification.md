# Personal Site — Holistic Brief & Specification

## 1. Context and Origin

This document is the result of a reflective and intentional design process that started with a simple question:

> *How can I make it easier for people to understand how I think, work, and collaborate?*

What began as a “How I Work” text evolved into something larger:  
the realization that my personal site should not be a résumé, a blog, or a portfolio in the traditional sense.

This site comes **before** all of that.

It exists to be the **clearest possible external expression of who I am**, how I operate, how I think, and how I make decisions — in a way that reduces ambiguity, friction, and misalignment.

This document consolidates:

- the rationale behind this direction
- the structural decisions (routes, content model)
- the design principles and system
- the typographic and color choices
- and the remaining decisions required before implementation

It functions as a **holistic briefing and specification**, meant to be stable, defensible, and executable.

---

## 2. Purpose of the Site

The site is designed to function as:

- a cognitive filter
- a collaboration accelerator
- a public operating manual
- a reduction mechanism for human ambiguity

It is **not** intended to be:

- a marketing site
- a personal brand showcase
- a storytelling exercise
- a content-growth platform
- a social-media-friendly artifact

The site does not attempt to persuade.
It clarifies.

---

## 3. Core Principle

> **The site should operate the same way I do.**

Design, structure, and content are not meant to “represent” me stylistically,  
but to **behave like my thinking behaves**:

- structured
- intentional
- calm
- explicit
- systems-oriented
- free of ornamental noise

---

## 4. Information Architecture (Routes)

Each route exists to answer a specific question.  
No route should overlap in responsibility.

### `/` — Home

**Question answered:** “Is this for me?”

Function:

- Entry point
- Cognitive filter
- Orientation, not explanation

Characteristics:

- Minimal
- Quiet
- Confident
- Directional (points to other routes)

---

### `/about`

**Question answered:** “Who is this person, factually?”

Function:

- Human and professional baseline
- Context without storytelling excess

Characteristics:

- README-like
- Factual
- Concise
- No autobiography, no self-promotion

---

### `/how-i-work`

**Question answered:** “How do I collaborate with this person?”

Function:

- Core of the site
- Explicit operating manual
- Expectations, boundaries, collaboration patterns

Characteristics:

- Direct
- Operational
- No softening language
- No performative empathy

---

### `/principles`

**Question answered:** “What does not change, regardless of context?”

Function:

- List of invariants
- Decision anchors
- Philosophical but practical

Format:

- One principle per section
- Short explanation
- No motivational language

---

### `/writing` or `/notes`

**Question answered:** “How does this person think over time?”

Function:

- Thought process in motion
- Essays, notes, frameworks, reflections

Decision pending:

- `/writing` → more curated, essay-like
- `/notes` → more raw, laboratory-style

---

### `/harada`

**Question answered:** “Does this person apply structure to themselves?”

Function:

- Living proof of alignment between discourse and practice
- Personal system exposed intentionally

Important:

- Must be contextualized
- Not framed as self-help
- Framed as system and reflection

---

## 5. Design Philosophy

### 5.1 Foundational Intent

The design exists to:

- reduce ambiguity
- support reading and comprehension
- express order and intention
- disappear behind content

Beauty is a **byproduct of order**, not a goal.

---

### 5.2 Experiential Qualities

The site should feel:

- calm
- quiet
- deliberate
- trustworthy
- dense, but not heavy

Nothing should feel:

- improvised
- decorative
- trendy
- emotionally manipulative

---

## 6. Design System (Minimal and Restrictive)

### 6.1 Typography

**Single font for all text:**  
**Inter**

Rationale:

- Neutral
- Highly legible in long-form reading
- Strong but non-dramatic headings
- Designed to disappear during reading
- Timeless and stable

Usage:

- Regular → body text
- Medium → subtle emphasis
- Semibold → headings

No secondary font families.

---

### 6.2 Color System

#### Overall Strategy

- Color is semantic, not expressive.
- Hierarchy is driven by luminosity, not saturation.

#### Base Palette

- Predominantly cool, blue-tinted grays
- No pure neutral grays
- No pure black or white

#### Accent Color

- Single blue accent
- Cool, restrained, non-vibrant
- Used sparingly for:
  - links
  - focus states
  - key interactive signals

Rule:
> If the accent color starts to feel “beautiful”, it is being overused.

---

### 6.3 Layout

- Single-column reading layout
- Limited line length
- Generous margins
- Predictable vertical rhythm

The layout must feel:
> designed, not illustrated

---

### 6.4 Components

Allowed components only:

- text blocks
- headings
- simple lists
- links
- subtle separators (mostly spacing)

Explicitly excluded:

- cards
- decorative shadows
- gradients
- illustrations
- icons without strict function
- animations beyond minimal hover/focus feedback

## 6.5 Semantic Clarity: Text, Space, and Visual Meaning

A core requirement of this site is that **every visual distinction must carry meaning**.

There must be **no ambiguity** between different types of text, sections, or emphasis levels.
If two elements look similar, they must mean the same thing.
If they mean different things, they must look different in a **relevant and perceivable way**.

Visual differentiation is not decorative — it is semantic.

---

## 6.5.1 Text Is the Primary Interface

Text is the main interface of this site.
Therefore:

- hierarchy must be immediately perceivable
- roles must be unambiguous
- emphasis must be intentional
- repetition must reinforce meaning, not confuse it

A reader should never have to ask:
> “Is this a title, a section, a note, or just emphasized text?”

The answer must be obvious by visual form alone.

---

## 6.5.2 Text Roles (Semantic, Not Stylistic)

Each text role has a **single, explicit meaning** and a **single visual representation**.

### Body Text

**Meaning:** primary narrative and reasoning  
**Characteristics:**

- normal weight
- highest readability
- neutral color
- comfortable line height

This is the default state of thinking.

---

### Section Heading

**Meaning:** change of conceptual context  
**Characteristics:**

- heavier weight than body
- larger size
- stronger contrast
- clear vertical separation

A heading must signal:
> “We are now reasoning about a different concept.”

---

### Subsection Heading (if used)

**Meaning:** subdivision of the same conceptual space  
**Characteristics:**

- visually distinct from body
- clearly weaker than section heading
- never ambiguous with body text

If the distinction between section and subsection is not obvious, one of them must be removed.

---

### Meta / Supporting Text

**Meaning:** secondary information, context, or clarification  
**Characteristics:**

- lower contrast
- smaller size
- never competing with body text

Meta text must feel optional.
If it draws attention, it is incorrectly styled.

---

### Emphasis

**Meaning:** local importance inside a sentence  
**Rules:**

- emphasis must be rare
- emphasis must not replace structure
- emphasis must not be confused with headings

If emphasis starts to feel structural, the structure is wrong.

---

### Lists

**Meaning:** parallel concepts or items  
**Characteristics:**

- clear alignment
- consistent spacing
- no visual noise

Lists are for structure, not decoration.

---

## 6.5.3 Spacing as Meaning

Spacing is not aesthetic padding.
Spacing is a **semantic delimiter**.

### Vertical spacing must communicate

- continuation vs separation
- same topic vs new topic
- emphasis vs transition

Rules:

- identical spacing means identical semantic relationship
- different semantic relationships must have different spacing
- arbitrary spacing values are not allowed

If a new spacing value feels necessary, the hierarchy is incorrect.

---

## 6.5.4 Size, Weight, and Color Are Signals

Each of the following dimensions has a defined role:

- **Size** → hierarchy
- **Weight** → emphasis and authority
- **Color** → semantic role, not decoration
- **Opacity / contrast** → priority

No dimension should be used redundantly without purpose.

Example:

- Do not use both size and color if one already communicates the meaning clearly.
- Do not use color to fix unclear hierarchy.

If multiple signals are used, they must reinforce the same meaning — never contradict it.

---

## 6.5.5 No Ambiguous States

The system must not allow:

- two different meanings sharing the same visual appearance
- one meaning having multiple visual representations

Ambiguity is treated as a design bug.

If ambiguity appears:

- remove a variant
- simplify the hierarchy
- or collapse roles

Never add a new style to “solve” confusion.

---

## 6.5.6 Visual Consistency Over Expressiveness

Consistency is prioritized over expressiveness.

Once a visual pattern is established:

- it must be reused
- it must not be reinterpreted
- it must not be slightly altered

Slight variation is a source of cognitive friction.

The system must feel:
> predictable, learnable, and stable

---

## 6.6 Depth & Elevation — Semantic Layering (Paper on Paper)

Some parts of the site require elements to be **close in space**, yet **clearly separated in meaning**.
In these cases, spacing and typography alone are not sufficient.

To resolve this without introducing visual noise, the system uses **perceptual depth** as a semantic tool.

Depth is not decoration.
Depth is structure.

---

## 6.6.1 Conceptual Model

The entire viewport represents an abstract **work desk**.

- The desk surface is calm, neutral, and continuous.
- Content is not “printed on a screen”, but **laid on a surface**.
- Some elements rest directly on the desk.
- Others are **sheets of paper placed on top of it**.

Nothing floats.
Nothing hovers.
Nothing competes for attention.

Everything is **quietly supported**.

---

## 6.6.2 Light as a Structural Constant

The system assumes a **single, fixed light source**:

- position: top-center of the viewport
- quality: soft, diffused (softbox-like)
- temperature: slightly cool
- intensity: just enough to reveal structure

This light exists to:

- reveal separation
- create subtle contrast
- make layers perceivable

It must never:

- dramatize
- decorate
- attract attention

If the light is noticed consciously, it is too strong.

---

## 6.6.3 Meaning of Elevation

Elevation does **not** mean importance.
Elevation does **not** mean emphasis.
Elevation does **not** mean interactivity.

Elevation means:

> “This element exists on a different physical plane than the base document.”

Semantically:

- Base plane → continuous reasoning, narrative, flow
- Elevated plane → grouped systems, bounded structures, self-contained units

Elevation is especially suited for:

- conceptual frames
- systems within systems
- structured artifacts (e.g. Harada boards)

---

## 6.6.4 Paper-on-Paper Sensation

Elevated elements must feel like:

- paper resting on paper
- sheets laid carefully on a desk
- objects that can be observed as wholes

They must **not** feel like:

- cards
- panels
- UI widgets
- floating containers

Visual cues are minimal:

- slight background differentiation
- extremely subtle shadowing
- gentle tonal contrast

Borders are avoided.
Sharp edges are avoided.
Visual weight is kept low.

---

## 6.6.5 Background as Environment, Not Color

The background is not a flat color.
It represents the **environment**.

Characteristics:

- extremely subtle tonal variation
- almost imperceptible gradient
- no visible directionality
- no aesthetic flourish

Its role is to:

- provide depth context
- support elevated surfaces
- reduce visual fatigue

If the background becomes “interesting”, it has failed.

---

## 6.6.6 Light and Dark Modes (Conceptual Alignment)

Both light and dark modes obey the same physical model.

### Light mode

- elevation is perceived through:
  - minimal shadow
  - slight tonal separation
- contrast remains restrained

### Dark mode

- elevation is perceived primarily through:
  - increased surface luminosity
  - reduced reliance on shadow
- glow effects are explicitly forbidden

In both modes:
> elevation must be inferred, not announced.

---

## 6.6.7 Rules of Use

Elevation is a **last-resort semantic tool**.

Rules:

- use elevation only when proximity is required
- never use elevation to “make something look better”
- never stack multiple elevation levels
- never animate elevation

If spacing or hierarchy can solve the problem, elevation must not be used.

---

## 6.6.8 System Integrity Rule

> **Depth is part of the language, not the style.**

Any use of elevation that:

- draws attention to itself
- feels decorative
- resembles modern UI trends

is considered a violation of the system.

The correct result is a quiet perception:
> “These elements are separate, but they belong together.”

Nothing more.
Nothing less.

---

## 6.5.7 Guiding Principle

> **If the meaning of a piece of text is not obvious from its visual form, the system has failed.**

Typography, spacing, and emphasis exist to **encode meaning**, not style.

This site treats visual ambiguity as a functional error, not a subjective disagreement.

---

## 7. Rules (Negative Constraints)

The system explicitly forbids:

- visual flourish without functional purpose
- novelty for the sake of differentiation
- UI elements added “because it looks empty”
- aesthetic trends

If something feels missing:
> the problem is content or structure, not decoration.

---

## 8. Success Criteria

The site is successful if:

- aligned people immediately feel clarity
- misaligned people self-filter
- the site ages well without redesign pressure
- decisions about design stop being debated
- content becomes the only variable

---

## 9. Open Decisions & Next Steps

### Decisions still pending

- `/writing` vs `/notes` naming
- Final color values (HEX / OKLCH)
- Dark mode (yes/no, and if yes, how strictly aligned)
- Hosting and tech stack (likely minimal, static-first)

### Next concrete steps

1. Freeze this document as baseline
2. Define concrete design tokens (colors, spacing, typography scale)
3. Create wireframes per route (text-first)
4. Implement with minimal tooling
5. Add content incrementally, without redesign

---

## 10. Closing Note

This site is not a résumé.
It is not a blog.
It is not a personal brand.

It is a **publicly readable system** that explains:

- who I am
- how I think
- how I work
- and how to interact with me effectively

Anything that does not serve that purpose is noise.

This document exists to ensure that noise never enters the system.
