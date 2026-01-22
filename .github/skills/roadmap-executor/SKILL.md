---
name: roadmap-executor
description: Generic roadmap/playbook execution runbook for any repository. Use when implementing phases, coordinating docs, validation, branching, commits/PRs, and updating progress back into the roadmap/playbook.
---

# Phase Implementation Runbook (Generic)

Use this skill whenever you are implementing a phase from a roadmap or playbook. It keeps work aligned to the documented contract, enforces validation, and closes the loop by updating the roadmap/playbook with progress.

---

## Core Rules

- Treat the roadmap/playbook as the source of truth.
- Use docs in `docs/` unless another folder is explicitly specified.
- If the roadmap/playbook is not specified, search for files containing `roadmap` or `playbook` in the docs folder and ask the user to choose if multiple matches exist.
- Do not invent decisions. If information is missing, present 2-3 options with pros/cons and ask the user to choose.

---

## Preflight (Always Do First)

### 1) **Locate the roadmap/playbook**

- If the user specifies a file, open it.
- If not specified, search `docs/` for filenames containing `roadmap` or `playbook`.
- If multiple candidates exist, present 2-3 options with brief pros/cons and ask the user to choose.

### 2) **Load related docs**

- Read the roadmap/playbook phase details.
- Follow references from that phase to required specs, policies, or contracts in `docs/`.
- Do not load unrelated docs.

### 3) **Check repository rules**

- Read `AGENTS.md` for repo-specific constraints.
- Scan `package.json` scripts for lint/format/typecheck/test/build commands.
- If markdown rules exist, follow markdownlint conventions.
- If TypeScript rules exist, preserve types and contracts.

---

## Branching (Required)

- Verify whether you are already on a feature/phase branch.
- If not, propose a new branch name and ask the user to confirm before creating it.
- Provide 2-3 options with pros/cons when naming is unclear, for example:
  - `phase-<id>-<slug>` (clear alignment to phase)
  - `roadmap-<slug>` (generic, works without numeric phases)
  - `playbook-<slug>` (signals procedural work)

---

## Implementation Workflow (Follow the Roadmap Order)

### 1) **Scope the phase**

- Identify the phase goal, required tasks, and explicit constraints.
- Confirm there are no prerequisites missing.

### 2) **Implement only what is in scope**

- Keep changes minimal and aligned to the phase.
- Avoid mixing phases or adding extras.
- If the roadmap/playbook allows stubs, add them with clear TODOs that reference the future phase.

### 3) **Update documentation as you go**

- If any spec or reference changes, update the linked docs accordingly.
- Maintain cross-doc consistency.

---

## Validation (Use repo scripts, in order)

- Discover the appropriate scripts in `package.json` (lint, format, typecheck, test, build).
- Run them in the most appropriate order for the repo, typically:
  1. format/lint (include markdown lint if docs changed)
  2. typecheck
  3. tests
  4. build
- If a script does not exist, note it in the final report.
- If a step fails, fix and re-run from that step.

---

## Commit and PR

- Check if there is a dedicated commit skill in the repo (e.g., `commit-message-crafter`). Use it if present.
- Otherwise, use Conventional Commits and keep subjects short and specific.
- If the change set spans distinct concerns, propose multiple commits.
- Commit and push only after explicit user confirmation.

---

## Close the Loop (Mandatory)

- Update the roadmap/playbook used to reflect progress:
  - Mark completed items
  - Add notes for blockers or deferred work
  - Reference any new docs added during the phase

This step is required even if no code changed.

---

## Output Checklist (Before Asking for Approval)

- Summarize what changed and which phase it maps to.
- List validation commands run (and any not run, with reasons).
- Confirm docs updated and the roadmap/playbook status was updated.
- Surface any open questions or missing decisions.
- Ask whether to commit/push (if not already requested).
