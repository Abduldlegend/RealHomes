# DESIGN.md

# Premium Real Estate Design System

Version 1.0

---

# Design Philosophy

Every interface should feel like it belongs to a premium real estate company.

The experience should communicate:

- Luxury
- Trust
- Simplicity
- Performance
- Elegance

Users should never feel overwhelmed.

Every page should breathe.

Whitespace is part of the design.

---

# Design Inspirations

Primary Inspiration

• Apple
• Stripe
• Airbnb
• Linear
• Vercel
• Arc Browser
• Zillow

Design Keywords

- Premium
- Minimal
- Calm
- Spacious
- Elegant
- Professional
- Fast
- Modern

---

# Visual Principles

Always prioritize

Hierarchy

↓

Whitespace

↓

Typography

↓

Imagery

↓

Motion

↓

Color

Never the opposite.

---

# Color System

## Light Theme

Background

```
#FFFFFF
```

Secondary Background

```
#FAFAFA
```

Card

```
#FFFFFF
```

Muted Surface

```
#F5F5F5
```

Primary

```
#2563EB
```

Primary Hover

```
#1D4ED8
```

Accent

```
#0EA5E9
```

Success

```
#16A34A
```

Warning

```
#F59E0B
```

Danger

```
#DC2626
```

Border

```
#E5E7EB
```

Heading

```
#111827
```

Body

```
#4B5563
```

Muted

```
#9CA3AF
```

---

## Dark Theme

Background

```
#09090B
```

Secondary Background

```
#111113
```

Card

```
#18181B
```

Muted Surface

```
#27272A
```

Primary

```
#3B82F6
```

Accent

```
#38BDF8
```

Border

```
#27272A
```

Heading

```
#FAFAFA
```

Body

```
#D4D4D8
```

Muted

```
#A1A1AA
```

Success

```
#22C55E
```

Warning

```
#FBBF24
```

Danger

```
#EF4444
```

---

# Typography

Font

Geist

Fallback

Inter

Never use more than two fonts.

---

Display

72px

Bold

Line Height

110%

---

H1

56px

Bold

---

H2

40px

Bold

---

H3

32px

Semibold

---

H4

24px

Semibold

---

Body Large

18px

Regular

---

Body

16px

Regular

---

Small

14px

---

Caption

12px

---

# Layout

Maximum Content Width

```
1440px
```

Reading Width

```
720px
```

Dashboard Width

```
1600px
```

---

# 8pt Grid

Spacing

```
4
8
12
16
24
32
40
48
56
64
80
96
120
160
```

Never invent spacing values.

---

# Border Radius

Small

```
8px
```

Medium

```
12px
```

Large

```
16px
```

XL

```
24px
```

Pill

```
9999px
```

---

# Shadows

Use subtle shadows only.

Small

```
0 1px 2px rgb(0 0 0 / 5%)
```

Medium

```
0 8px 24px rgb(0 0 0 / 8%)
```

Large

```
0 16px 40px rgb(0 0 0 / 12%)
```

Avoid heavy shadows.

---

# Borders

Default

```
1px solid
```

Never exceed 2px unless intentional.

Prefer borders over shadows.

---

# Buttons

Primary

Filled

Blue background

White text

---

Secondary

White

Border

Dark text

---

Ghost

Transparent

---

Danger

Red

---

Icon Button

Square

40px

Rounded

---

Button Heights

Small

36px

Medium

44px

Large

52px

---

# Cards

Cards should include

- Rounded corners
- Soft shadow
- Border
- Hover elevation
- Image
- Content
- CTA

Cards should never feel crowded.

---

# Property Cards

Image Ratio

```
4:3
```

Always include

- Favorite icon
- Property type badge
- Price
- Address
- Bedrooms
- Bathrooms
- Area
- Agent

Hover

Image zoom

Card elevation

---

# Navigation

Desktop Height

```
80px
```

Sticky

Blur background

Border bottom

Never use heavy shadows.

---

# Search

Search should always be visible.

Desktop

Horizontal

Mobile

Bottom Sheet

Include

Location

Price

Property Type

Bedrooms

Bathrooms

Search Button

---

# Forms

Every field must have

- Label
- Helper text
- Error message
- Focus state

Inputs

Height

48px

Rounded

12px

---

# Icons

Use

Lucide React

Icon Sizes

16

20

24

32

Never mix icon packs.

---

# Images

Always use

Next/Image

Property images

4:3

Hero images

16:9

Lazy load below fold.

---

# Motion

Animations should be nearly invisible.

Duration

150ms

200ms

300ms

Never exceed

500ms

Use

Opacity

Translate

Scale

Avoid

Bounce

Spin

Elastic

---

# Hover States

Every interactive component must have

Hover

Focus

Active

Disabled

Loading

---

# Loading

Skeletons

instead of

Spinners

Prefer progressive loading.

---

# Empty States

Always include

Illustration

Title

Description

Primary Action

---

# Tables

Rounded

Bordered

Hover rows

Sticky header

Pagination

Search

Filters

---

# Dashboard

Use

Sidebar

Top Navigation

Content Area

Widgets

Charts

Tables

Never exceed

3 widget colors.

---

# Accessibility

Minimum Contrast

WCAG AA

Keyboard Navigation

Required

Visible Focus

Required

Touch Targets

Minimum

44px

---

# Dark Mode

Dark mode is not inverted light mode.

Adjust

Colors

Borders

Shadows

Images

Illustrations

Charts

Specifically for dark environments.

---

# Component Library

Preferred

shadcn/ui

Components

Button

Card

Badge

Avatar

Dialog

Drawer

Sheet

Tabs

Accordion

Popover

Tooltip

Carousel

Breadcrumb

Pagination

Skeleton

Toast

Dropdown

Calendar

Command

Table

Separator

ScrollArea

---

# Page Structure

Every page follows

Navbar

↓

Hero

↓

Primary Content

↓

Supporting Sections

↓

CTA

↓

Footer

---

# Section Spacing

Top

96px

Bottom

96px

Mobile

64px

---

# Quality Checklist

Before merging any UI:

✓ Responsive

✓ Accessible

✓ Dark mode supported

✓ No layout shifts

✓ Proper spacing

✓ Consistent typography

✓ Semantic HTML

✓ Uses design tokens

✓ Uses reusable components

✓ Looks premium on desktop

✓ Looks premium on mobile

✓ Passes Lighthouse

✓ Uses loading states

✓ Uses empty states

✓ Uses error states

✓ No visual inconsistencies

---

# Golden Rule

If a design decision is unclear, choose the option that is:

- Simpler
- More spacious
- More readable
- More consistent
- More accessible
- More performant

When in doubt, remove elements rather than add them.