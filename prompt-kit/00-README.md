# PROMPT KIT — template-library → ecom adaptation engine

Distilled from the Pink Pill build (pinkpage5) and its replication (alto). Every rule in the master is evidence-backed: it either measurably produced the quality (52% of shipped decisions traced verbatim to the brief) or it patches a real shipped bug (16 adversarial-audit findings + 4 quality drops observed in the repeat build are ALL encoded as hard rules).

## Files

| File | What it is | When to paste |
|---|---|---|
| `01-MASTER-GOLDEN-PROMPT.md` | The golden rules: taste, signature, standard lib contracts, hardened failure laws, adaptation layer, PILL-BENCH, verification | Every adaptation session, first |
| `02-TRIAGE-PROMPT.md` | Classifies all ~135 subfolders into 12 archetypes, produces run order + skip list | Once, at the start, in the library workspace |
| `03-groups/group-*.md` | One addendum per archetype: the soul to preserve, ecom mapping, pill staging, keepers, traps | After the master, matching the folder's triage archetype |

## The loop (per template folder)

1. Triage already assigned it an archetype.
2. Fresh session: paste **master + its group addendum**. Point it at the folder.
3. It inventories → adapts to ecom → runs **PILL-BENCH** (the pink/white capsule is ALWAYS the test product — fixed benchmark = comparable results across all 135).
4. It emits `SCORECARD.md` (0–5 rubric, KEEPERS list, ADOPT/HARVEST/SKIP verdict) + 4 screenshots.
5. Scorecards accumulate → after the sweep, sort: ADOPTs become base templates, HARVESTs feed a component library of keeper elements.

## Rules of the kit itself

- Never edit the master per-run; product specifics belong in the PRODUCT CONTEXT block (§7 defaults to the pill).
- If a run discovers a NEW shipped-bug class, append it to master §4 — the master only grows scar tissue, never opinions.
- The pill test is non-negotiable and always first, even on templates that scream for another product; a fixed product is what makes 135 scorecards comparable.

## 04 · SWIM-QUAD (swimwear, four-variation engine)
`04-SWIM-QUAD-MEGA-PROMPT.md` — standalone mega prompt: reverse-engineers the reference family's
animation logic into a dossier, then builds FOUR pairwise-unrecognizable swimwear pages
(2 pink+white, 2 purple+white) with mandated agent fan-out, QA agents, a 9-axis distinctness
contract, and a blind cluster-by-studio confusability gate. Adversarially critiqued (3 lenses,
14 surviving edits) before v1.0 was cut.

## 05 · JERSEY-OCTO (signed soccer jerseys, eight-template engine)
`05-JERSEY-OCTO-MEGA-PROMPT.md` — standalone mega prompt: reverse-engineers the reference
family's animation logic, then builds EIGHT pairwise-unrecognizable signed-jersey templates.
Core: the INDIRECTION LAW (jersey never the protagonist — animate the signing/proof/stadium/
craft), 8 disjoint technique classes with a dominant-visual-verb registry and pre-assigned
pairing matrix, a 10-world indirect metaphor pool, memorabilia commerce spine (COA, provenance
set-piece wired to SKU data, scarcity ethics, tiered licensing language, fictional
authenticators), 2-wave build, blind 8-studio clustering gate, bottom-two floor pass.
Adversarially critiqued (2 focused lenses, 11 surviving edits) before v1.0 was cut.

## 06 · VELVET-OCTO (pink intimacy-supplement pill, eight-template engine)
`06-VELVET-OCTO-MEGA-PROMPT.md` — standalone mega prompt: eight pairwise-unrecognizable
templates for a pink adult-wellness supplement (working name Fibrenalysin, swap-ready).
Doubled indirection law (no pill hero, no bodies), TASTE LAW with calibration anchors +
dedicated Taste-QA agent, 10 indirect worlds with mandatory DESIRE THREADs and forced
divergence from the reference family's looks, pink-as-accent rule (≤15% painted area,
ΔE00 ≥ 10 between accents), DSHEA claims tiers with QA banned-pattern grep, discreet-shipping
trust spine, no-product-on-timeline rule (blocks onset claims via spectacle). Adversarially
critiqued (2 lenses, 17 surviving edits) before v1.0 was cut.
