# Theme CSS Variables - Quick Reference

## Usage Guide

### Default Text (Theme-Aware)

Use these variables for text that should change with the theme:

```css
/* Pure black (light) / Pure white (dark) */
color: var(--bs-body-color);

/* With opacity */
color: rgba(var(--bs-body-color-rgb), 0.7);

/* Headings */
color: var(--bs-heading-color);

/* Muted/secondary text */
color: var(--bs-text-muted);
```

### Backgrounds

```css
/* Main background */
background-color: var(--bs-body-bg);

/* Card backgrounds */
background-color: var(--bs-card-bg);

/* Subtle backgrounds (e.g., alternate sections) */
background-color: var(--theme-bg-subtle);
```

### Borders

```css
border-color: var(--bs-border-color);
```

---

## Complete Variable List

### Light Theme (`[data-theme="light"]`)

| Variable              | Light Mode Value       | Usage                     |
| --------------------- | ---------------------- | ------------------------- |
| `--bs-body-bg`        | `#ffffff`              | Main background           |
| `--bs-body-color`     | `#000000`              | Default text (pure black) |
| `--bs-body-color-rgb` | `0, 0, 0`              | RGB for opacity           |
| `--bs-heading-color`  | `#000000`              | All headings (pure black) |
| `--bs-text-muted`     | `rgba(0, 0, 0, 0.6)`   | Secondary text            |
| `--bs-border-color`   | `rgba(0, 0, 0, 0.175)` | Borders                   |
| `--bs-card-bg`        | `#ffffff`              | Card backgrounds          |
| `--bs-card-color`     | `#000000`              | Card text                 |
| `--theme-bg-subtle`   | `#f8f9fa`              | Alternate sections        |

### Dark Theme (`[data-theme="dark"]`)

| Variable              | Dark Mode Value              | Usage                     |
| --------------------- | ---------------------------- | ------------------------- |
| `--bs-body-bg`        | `#212529`                    | Main background           |
| `--bs-body-color`     | `#ffffff`                    | Default text (pure white) |
| `--bs-body-color-rgb` | `255, 255, 255`              | RGB for opacity           |
| `--bs-heading-color`  | `#ffffff`                    | All headings (pure white) |
| `--bs-text-muted`     | `rgba(255, 255, 255, 0.6)`   | Secondary text            |
| `--bs-border-color`   | `rgba(255, 255, 255, 0.175)` | Borders                   |
| `--bs-card-bg`        | `#2c3034`                    | Card backgrounds          |
| `--bs-card-color`     | `#ffffff`                    | Card text                 |
| `--theme-bg-subtle`   | `#1a1d20`                    | Alternate sections        |

### Brand Colors (Fixed - Both Themes)

| Variable           | Value          | Usage        |
| ------------------ | -------------- | ------------ |
| `--bs-primary-rgb` | `13, 110, 253` | Primary blue |
| `--bs-info-rgb`    | `0, 170, 255`  | Info cyan    |
| `--bs-danger-rgb`  | `220, 53, 69`  | Danger red   |

---

## Examples

### Theme-Aware Text

```css
/* Simple text that changes with theme */
.my-element {
  color: var(--bs-body-color);
}
/* Light: #000000 (black)
   Dark: #ffffff (white) */

/* Text with opacity */
.my-subtitle {
  color: rgba(var(--bs-body-color-rgb), 0.75);
}
/* Light: rgba(0, 0, 0, 0.75)
   Dark: rgba(255, 255, 255, 0.75) */

/* Heading */
.my-heading {
  color: var(--bs-heading-color);
}
/* Light: #000000 (black)
   Dark: #ffffff (white) */
```

### Fixed Colors (Always Same)

```css
/* These DO NOT change with theme */
.accent-primary {
  color: #0d6efd; /* Always blue */
}

.accent-success {
  color: #198754; /* Always green */
}

.accent-warning {
  color: #ffc107; /* Always gold */
}

/* Use !important to prevent overrides */
.important-accent {
  color: #0d6efd !important;
}
```

### Backgrounds with Gradients

```css
/* Theme-aware gradient */
.gradient-section {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--bs-body-bg) 92%, var(--bs-body-color)) 0%,
    var(--bs-body-bg) 100%
  );
}

/* Using rgba with theme variables */
.overlay {
  background: rgba(var(--bs-body-color-rgb), 0.05);
}
```

### Cards

```css
/* Theme-aware card */
.my-card {
  background-color: var(--bs-card-bg);
  color: var(--bs-card-color);
  border: 1px solid var(--bs-border-color);
}
/* Light: white bg, black text
   Dark: dark bg, white text */
```

### Conditional Styling by Theme

```css
/* Light theme specific */
[data-theme="light"] .special-element {
  background: #f8f9fa;
  color: #000000;
}

/* Dark theme specific */
[data-theme="dark"] .special-element {
  background: #1a1d20;
  color: #ffffff;
}
```

---

## Do's and Don'ts

### ✅ DO

```css
/* Use variables for theme-aware elements */
color: var(--bs-body-color);

/* Use rgba with RGB variables for opacity */
color: rgba(var(--bs-body-color-rgb), 0.7);

/* Preserve brand colors explicitly */
.brand {
  color: #0d6efd;
}

/* Use conditional styling when needed */
[data-theme="dark"] .element {
  /* dark-specific styles */
}
```

### ❌ DON'T

```css
/* Don't hardcode theme colors */
color: #212529; /* BAD - should use var(--bs-body-color) */

/* Don't use generic names that could be misunderstood */
color: var(--text-color); /* BAD - use --bs-body-color */

/* Don't override theme variables in components */
--bs-body-color: #333333; /* BAD - breaks theme system */

/* Don't forget !important for preserved colors that might get overridden */
.accent {
  color: #0d6efd; /* RISKY - might get overridden */
}
```

---

## Migration Checklist

When updating existing components:

1. **Identify default text**:

   - [ ] Replace hardcoded black/white with `var(--bs-body-color)`
   - [ ] Update headings to use `var(--bs-heading-color)`
   - [ ] Update muted text to use `var(--bs-text-muted)`

2. **Identify backgrounds**:

   - [ ] Replace with `var(--bs-body-bg)` or `var(--bs-card-bg)`
   - [ ] Use `var(--theme-bg-subtle)` for alternate sections

3. **Identify borders**:

   - [ ] Replace with `var(--bs-border-color)`

4. **Preserve brand colors**:

   - [ ] Add `!important` if needed
   - [ ] Keep all explicit color values

5. **Test both themes**:
   - [ ] Verify text is pure black (light) / pure white (dark)
   - [ ] Verify brand colors unchanged
   - [ ] Verify smooth transitions

---

## Quick Debug

**Text not changing with theme?**

```css
/* Check current value */
.element {
  color: var(--bs-body-color) !important;
}
```

**Need to preserve a color?**

```css
.element {
  color: #0d6efd !important;
}
```

**Need theme-specific behavior?**

```css
[data-theme="light"] .element {
  /* light-specific */
}

[data-theme="dark"] .element {
  /* dark-specific */
}
```
