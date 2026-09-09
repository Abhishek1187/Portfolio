---
name: design-system-mclaren-formula-1-driver-lando-norris
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# McLaren Formula 1 Driver — Lando Norris

## Mission
Deliver implementation-ready design-system guidance for McLaren Formula 1 Driver — Lando Norris that can be applied consistently across content site interfaces.

## Brand
- Product/brand: McLaren Formula 1 Driver — Lando Norris
- URL: https://landonorris.com/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Mona Sans Variable`, `font.family.stack=Mona Sans Variable, Arial, sans-serif`, `font.size.base=14px`, `font.weight.base=400`, `font.lineHeight.base=20px`
- Typography scale: `font.size.xs=10.67px`, `font.size.sm=11.85px`, `font.size.md=14px`, `font.size.lg=14.81px`, `font.size.xl=22.22px`, `font.size.2xl=32px`, `font.size.3xl=38px`, `font.size.4xl=53.33px`
- Color palette: `color.text.primary=#282c20`, `color.border.muted=#f4f4ed`, `color.text.tertiary=#111112`, `color.surface.muted=#d2ff00`, `color.surface.base=#000000`
- Spacing scale: `space.1=11.85px`
- Radius/shadow/motion tokens: `radius.xs=6.4px`, `radius.sm=8.77px`, `radius.md=39.3px` | `motion.duration.instant=750ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
