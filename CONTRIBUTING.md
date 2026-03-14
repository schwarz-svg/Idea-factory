# Contributing to CodeVault

First off, thank you for considering contributing to CodeVault! It's people like you that make CodeVault such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Code Style Guidelines](#code-style-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

This project and everyone participating in it is governed by the [CodeVault Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in [Issues](https://github.com/schwarz-svg/Idea-factory/issues)
- If not, create a new issue using the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include as much detail as possible: browser, OS, steps to reproduce, expected vs actual behavior

### Suggesting Features

- Open a new issue using the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Describe the feature and why it would be useful
- Be open to discussion about the best approach

### Submitting Code

- Fix bugs, add features, improve documentation, or clean up code
- All contributions are welcome, no matter how small

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/Idea-factory.git
   cd Idea-factory
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Open** `index.html` in your browser or start a local server:
   ```bash
   npx live-server
   ```
5. **Make your changes** and test them in the browser
6. **Commit** your changes (see commit message conventions below)
7. **Push** to your fork and open a Pull Request

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, etc.)
- Include appropriate `aria-` attributes for accessibility
- Use 2-space indentation
- Keep attributes in a consistent order: `id`, `class`, `data-*`, other attributes

### CSS

- Use CSS custom properties (variables) defined in `:root` for colors, spacing, and other design tokens
- Follow the existing naming conventions (BEM-inspired: `.block-element`)
- Group related properties together (positioning, display, box model, typography, visual)
- Use 2-space indentation
- Add comments for major sections (e.g., `/* --- Navigation --- */`)
- Prefer `var(--custom-property)` over hard-coded values
- Mobile-first is not required, but responsive breakpoints should be maintained

### JavaScript

- Use ES6+ features (arrow functions, template literals, destructuring, `const`/`let`)
- No semicolons are optional -- use them consistently
- Use descriptive function and variable names
- Keep functions focused and small where possible
- Use 2-space indentation
- Add comments for complex logic
- Avoid introducing external dependencies -- this is a vanilla JS project

### Commit Messages

Follow these conventions for commit messages:

```
type: short description

Longer description if needed.
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without adding features or fixing bugs
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks (build scripts, dependencies, etc.)

Examples:
```
feat: add project rating filter to sidebar
fix: correct cart total calculation for free items
docs: update README with new project structure
style: align CSS custom properties in :root
```

## Pull Request Process

1. **Update documentation** if your changes affect the public API or user-facing features
2. **Test your changes** across multiple browsers (Chrome, Firefox, Safari, Edge) if possible
3. **Fill out the PR template** completely
4. **Request a review** from at least one maintainer
5. **Address review feedback** promptly
6. Your PR will be merged once it has at least one approval from a maintainer

### PR Checklist

- [ ] My code follows the code style guidelines of this project
- [ ] I have tested my changes in at least one modern browser
- [ ] I have added comments where the code is not self-explanatory
- [ ] My changes do not introduce any new console errors or warnings
- [ ] I have updated the documentation if applicable
- [ ] The UI remains responsive across different screen sizes

## Issue Reporting

When reporting issues, please use the appropriate template and include:

1. **A clear title** that summarizes the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs. **actual behavior**
4. **Browser and OS** information
5. **Screenshots or screen recordings** if applicable
6. **Console errors** if any

---

Thank you for contributing to CodeVault!
