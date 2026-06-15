---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 3
description: ""
---

<!-- _pages/publications.md -->

## Publications

Publications related to the EQUALS project.

<!-- External Links with Icons -->
<p style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;">
  <span>Up-to-date publications are also available on:</span>
  <a href="https://scholar.google.fr/citations?user=X0s6r3QAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
  <a href="https://orcid.org/0000-0002-9545-988X" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-orcid"></i> ORCID
  </a>
  <a href="https://www.researchgate.net/profile/Arthur-Clerjon" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-researchgate"></i> ResearchGate
  </a>
  <a href="https://hal.science/search/index/?q=arthur+clerjon" target="_blank" rel="noopener noreferrer">
    <i class="ai ai-hal"></i> HAL
  </a>
</p>

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

<h2>Peer-reviewed Articles</h2>
{% bibliography -f papers -q @article[keywords ~= equals] %}

<h2>Under Review</h2>
{% bibliography -f papers -q @unpublished[keywords ~= equals] %}

<h2>Conference Proceedings</h2>
{% bibliography -f papers -q @inproceedings[keywords ~= equals] %}

<h2>Presentations</h2>
{% bibliography -f papers -q @misc[keywords ~= equals] %}

</div>

---

## Communications & Presentations

#### June 2026 — Future Earth Sustainability Science Conference, Lausanne 🇨🇭

**Operationalizing Energy Justice: Social Sciences and Quantitative Modeling for energy planning**

Arthur Clerjon, Emmanuelle Santoire, and Justine Duval co-convened an interdisciplinary workshop
at the [2026 Annual Sustainability Science Conference](https://pathways.futureearth.org/sustainability-science-conference/)
(University of Lausanne, 2–5 June 2026), organized by Future Earth Pathways.

The session brought together expertise in energy system modeling, energy geography, and resource
analysis to explore how energy justice can be operationalized in quantitative planning tools.
Participants engaged in real-time modeling exercises to examine trade-offs between technological
choices, resource constraints, and equity considerations.

---

## Upcoming

- **OpenMod workshop** — date and location to be confirmed

---

*Last updated: June 2026*