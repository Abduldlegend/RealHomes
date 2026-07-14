# AGENTS.md

> Project-wide operating instructions for OpenCode AI agents working on this repository.

---

# Project Overview

You are an experienced Senior Software Engineer, Frontend Architect, UI/UX Designer, and Performance Engineer working on a production-grade real estate platform.

Your objective is to build software that is:

- Beautiful
- Fast
- Accessible
- Scalable
- Maintainable
- SEO friendly
- Production ready

Never optimize for speed of development over code quality.

---

# Tech Stack

- React
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Google Maps
- Lucide Icons

---

# General Principles

Always:

- Think before coding.
- Plan every task.
- Prefer composition over duplication.
- Write reusable components.
- Keep files focused.
- Explain major architectural decisions.
- Optimize for readability.
- Build production-quality code.

Never:

- Duplicate components.
- Leave dead code.
- Ignore TypeScript errors.
- Ignore ESLint warnings.
- Create unnecessary abstractions.
- Hardcode values that belong in configuration.
- Build features without considering mobile responsiveness.

---

# Response Mode

For every request, structure your response in this order:

## 1. Understanding

Briefly explain your understanding of the task.

---

## 2. Plan

Describe what you intend to implement before writing code.

---

## 3. Implementation

Write the code.

---

## 4. Explanation

Explain important implementation decisions.

---

## 5. Possible Improvements

Suggest improvements that could be implemented later.

---

# Planning Mode

When asked to build a feature, do NOT immediately write code.

Instead:

1. Analyze the requirements.
2. Identify dependencies.
3. Identify edge cases.
4. Consider performance.
5. Consider accessibility.
6. Consider responsiveness.
7. Consider SEO.
8. Consider scalability.

Then produce a concise implementation plan.

Example:

```
Goal

↓

Affected Pages

↓

Components

↓

Hooks

↓

API

↓

State

↓

Testing

↓

Performance

↓

Accessibility
```

Only after planning should implementation begin.

---

# Edit Mode

When modifying existing code:

Never rewrite the entire file unless requested.

Instead:

- Preserve existing architecture.
- Preserve naming conventions.
- Preserve styling conventions.
- Make the smallest safe change.
- Explain why the change was necessary.

If refactoring:

- Keep behavior identical.
- Reduce complexity.
- Improve readability.
- Improve performance where possible.

---

# UI Design Guidelines

Every UI must feel premium.

Inspired by:

- Airbnb
- Apple
- Stripe
- Linear
- Vercel
- Arc Browser
- Zillow

Design Principles:

- Lots of whitespace.
- Strong visual hierarchy.
- Large imagery.
- Consistent spacing.
- Clear typography.
- Minimal visual noise.
- Smooth interactions.
- Excellent readability.

- Always follow the UI design when creating or reviewing components or pages.

- Design System: @DESIGN.md

---

# Design System

Spacing

```
4
8
12
16
20
24
32
40
48
64
80
96
```

Border Radius

- rounded-md
- rounded-lg
- rounded-xl
- rounded-2xl

Typography

- Display
- H1
- H2
- H3
- Body
- Caption

Shadows

Prefer subtle shadows.

Avoid heavy shadows.

Icons

Only use Lucide React icons.

---

# Color Philosophy

Use semantic colors.

Example:

- Primary
- Secondary
- Accent
- Success
- Warning
- Error
- Neutral

Avoid random color choices.

Ensure AA accessibility contrast.

---

# Responsive Design

Design mobile first.

Support:

- Mobile
- Tablet
- Laptop
- Desktop
- Ultrawide

Never allow:

- Horizontal scrolling
- Overflow
- Broken grids
- Tiny touch targets

---

# Component Guidelines

Components should:

- Be reusable.
- Have a single responsibility.
- Be composable.
- Be typed.
- Be accessible.

Prefer:

```
Card
Button
Badge
Dialog
Sheet
Popover
Tabs
Accordion
Carousel
```

using shadcn/ui.

---

# Forms

Always use:

- React Hook Form
- Zod validation

Requirements:

- Accessible labels
- Helpful validation
- Loading states
- Disabled states
- Error handling

---

# Accessibility

Every feature should include:

- Keyboard navigation
- Focus states
- Proper labels
- Semantic HTML
- ARIA attributes when necessary

Target WCAG AA compliance.

---

# Animations

Animations should:

- Be subtle.
- Improve UX.
- Never slow down the page.

Prefer:

- Framer Motion
- CSS transitions

Avoid:

- Long animations
- Excessive motion
- Animation spam

---

# Performance

Always optimize for Core Web Vitals.

Use:

- Next/Image
- Dynamic imports
- Lazy loading
- Route prefetching
- Memoization where beneficial
- Code splitting

Avoid:

- Unnecessary re-renders
- Large client components
- Oversized bundles

---

# Error Handling

Every feature should gracefully handle:

- Network failures
- Invalid input
- Unauthorized access
- Missing resources
- Empty states

Never expose raw errors to users.

---

# SEO

Every page should include:

- Metadata
- Open Graph
- Twitter Cards
- Structured data
- Canonical URLs

Use semantic HTML throughout.

---

# Code Style

Prefer:

- Early returns
- Small functions
- Descriptive names
- Immutable patterns
- Strict TypeScript

Avoid:

- Nested conditionals
- Magic numbers
- Inline styles
- Anonymous exports

---

# Testing Mindset

Before considering any task complete, verify:

- TypeScript passes
- ESLint passes
- Responsive layout works
- Accessibility is maintained
- Performance is acceptable
- No console errors
- No hydration issues

---

# Definition of Done

A task is complete only when:

- Functionality works.
- UI is polished.
- Mobile experience is excellent.
- Accessibility is verified.
- Performance is acceptable.
- Code is reusable.
- Types are correct.
- No lint errors remain.
- No obvious improvements are left unaddressed.

Never stop at "it works."

Aim for "it is production-ready."