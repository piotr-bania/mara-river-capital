# Mara River Capital — Website Redesign Case Study

This project is a complete redesign and rebuild of the Mara River Capital website.

The original project was developed early in my career based on a desktop-only Adobe XD prototype. While the implementation was pixel-accurate, the project highlighted important gaps in planning, responsive strategy, and communication. This redesign is a deliberate return to that project — applying experience gained over the past few years in architecture, performance optimisation, and system thinking.

This case study represents both technical growth and architectural maturity.

---

## Project Goals

- Rebuild the website using modern web standards
- Implement a fully responsive layout (mobile-first approach)
- Improve UX clarity and content hierarchy
- Optimise performance for real-world usage
- Strengthen SEO structure and metadata
- Extend the visual identity with a custom 3D river concept

---

## Key Improvements Over Original Version

### 1. Responsive Architecture

The original prototype was desktop-only.
The new implementation is designed mobile-first with adaptive layouts across breakpoints.

### 2. Performance Optimisation

- Optimised asset delivery
- Reduced bundle size
- Modern image handling
- Clean component structure

### 3. SEO & Metadata Strategy

- Structured metadata per page
- Improved heading hierarchy
- Clean semantic markup
- OpenGraph support for social previews

### 4. 3D River Extension (Conceptual Layer)

Unlike the original static image-based hero section, this redesign introduces a stylised low-poly 3D river environment.

The 3D scene:

- Is inspired by the Mara River ecosystem
- Uses optimised geometry (reduced from 2.2M vertices to ~98k)
- Applies instanced vegetation for performance
- Uses baked lighting and shadows
- Is designed for WebGL deployment with mobile compatibility

The river serves as a visual metaphor for:

- Flow
- Strategic direction
- Capital movement
- Natural asymmetry

This extension transforms the brand name into a spatial, interactive experience rather than a static background image.

---

## Tech Stack

- Next.js (App Router)
- React
- Three.js
- @react-three/fiber
- @react-three/drei
- SCSS
- Blender (terrain + Geometry Nodes)
- WebGL (real-time rendering)
- Baked lighting workflow

---

## Performance Considerations

- Geometry reduced from 2.2M to ~98k vertices
- Instancing used for vegetation distribution
- Baked shadows and ambient occlusion
- Mobile-friendly shader design
- Minimal draw call strategy

The goal was to balance visual identity with real-time web performance.

---

## What This Project Represents

This redesign is not just aesthetic improvement.

It represents:

- Growth in architectural thinking
- Improved communication awareness
- Production-level optimisation discipline
- Ability to translate abstract brand identity into interactive systems

The project evolved from a static prototype implementation into a performance-aware, system-driven rebuild.

---

## Status

In development / Case Study

---

## Author

Piotr Bania
Founder — Bespoke Programming
