
# Tech Aishat Portfolio

A responsive, multi-page portfolio for **Aishat Adamu** featuring a hero-driven homepage, detailed about page, and contact form. The build emphasizes accessibility, clean typography, and smooth scaling from mobile to large desktop screens.

## Live Demo
- **Netlify**: _Add URL after deployment_
- **GitHub Pages**: _Add URL if published_

## Repository
- **GitHub**: https://github.com/TechAishat/o_stage_frontend_hng

## Features
- **Responsive layout**: Fluid grids, clamp-based spacing, and media queries that adapt sections such as the hero, highlights, and CTA for any viewport.
- **Accessible navigation**: Sticky header with keyboard-friendly menu toggle, skip link, and semantic landmarks.
- **Dynamic home experience**: Live clock on the homepage, branded contact chips, and languages/tools gallery.
- **Multi-page storytelling**: `about.html` dives into background and goals, while `contact.html` provides both a validated form and direct contact channels.
- **Consistent styling**: Shared design tokens, shadow system, and button styles maintained in `styles.css`.

## Project Structure
- **`index.html`**: Responsive landing page with hero, highlights, contact icons, languages/tools, and CTA.
- **`about.html`**: Profile narrative, program goals, confidence notes, and reflections.
- **`contact.html`**: Contact form with validation plus alternative channels.
- **`styles.css`**: Global design tokens, layout utilities, and component styling.
- **`script.js`**: Navigation toggle logic, live clock, footer year, and form validation helpers.
- **`images/`**: Contains `profile.jpg` used for the hero portrait.

## Getting Started
- **Clone** the repo and open the project folder.
- **Launch** `index.html` in your browser (or serve via any static server for live reload).
- **Navigate** using the header links to explore `about.html` and `contact.html`.

## Testing Checklist
- **Navigation**: Confirm the mobile menu toggles and closes after link click; desktop links remain visible.
- **Home clock**: Ensure the current time on the hero updates every minute.
- **Contact form**: Submit empty/invalid states to confirm inline errors, then a valid message for the success state.
- **Responsive review**: Resize to ~375 px, 768 px, and ≥1200 px to verify layout integrity and spacing.
