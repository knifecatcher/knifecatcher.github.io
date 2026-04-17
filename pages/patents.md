---
layout: default
title: Patents
permalink: /patents/
---

<style>
  .patents-shell {
    display: grid;
    gap: 1rem;
    width: min(100%, 1168px);
    margin: 0 auto;
  }

  .patent-card {
    position: relative;
  }

  .patents-grid {
    column-count: 2;
    column-gap: 0.9rem;
    padding: 0;
  }

  .patent-card {
    display: block;
    width: 100%;
    margin: 0 0 0.9rem;
    padding: 1.1rem;
    border: 1px solid rgba(23, 18, 15, 0.1);
    border-radius: 18px;
    background: var(--surface-strong);
    break-inside: avoid;
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s ease;
  }

  .patent-card:hover,
  .patent-card:focus-visible {
    transform: scale(0.985);
    border-color: rgba(23, 18, 15, 0.18);
  }

  .patent-card__top,
  .patent-card__meta {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.9rem;
  }

  .patent-card__top {
    margin-bottom: 1rem;
  }

  .patent-card__number {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .patent-card h2 {
    margin: 0;
    font-family: "Playfair Display", serif;
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 1.02;
  }

  @media (max-width: 900px) {
    .patents-grid {
      column-count: 1;
    }
  }

  @media (max-width: 640px) {
    .patent-card h2 {
      max-width: none;
      font-size: 1.45rem;
    }

    .patent-card__top,
    .patent-card__bottom {
      flex-direction: column;
    }
  }
</style>

<section class="patents-shell">
  <div class="patents-grid">
    <a class="patent-card" href="https://patents.google.com/patent/US20260010236A1" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20260010236A1</span>
        <span class="patent-card__number">2025</span>
      </div>
      <div class="patent-card__body">
        <h2>Using a Gesture to Invoke or Banish an AI Assistant</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20250044932A1" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20250044932A1</span>
        <span class="patent-card__number">2020</span>
      </div>
      <div class="patent-card__body">
        <h2>User Interfaces Related to Time</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20240319784A1" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20240319784A1</span>
        <span class="patent-card__number">2024</span>
      </div>
      <div class="patent-card__body">
        <h2>Methods for Smart Message Delivery and Capturing Moments in the Past</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20240220752A1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20240220752A1</span>
        <span class="patent-card__number">2024</span>
      </div>
      <div class="patent-card__body">
        <h2>Artificial Reality System for Code Recognition and Health Metrics</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20240233233A1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20240233233A1</span>
        <span class="patent-card__number">2023</span>
      </div>
      <div class="patent-card__body">
        <h2>Techniques for Animating an Avatar Based on Sensor Data</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20240037879A1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20240037879A1</span>
        <span class="patent-card__number">2023</span>
      </div>
      <div class="patent-card__body">
        <h2>Artificial Reality Integrations with External Devices</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US20210349426A1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US20210349426A1</span>
        <span class="patent-card__number">2020</span>
      </div>
      <div class="patent-card__body">
        <h2>User Interfaces With A Character Having A Visual State Based On An Indication Of Time</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/USD902221S1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">USD902221S1</span>
        <span class="patent-card__number">2019</span>
      </div>
      <div class="patent-card__body">
        <h2>Electronic Device with Animated Graphical User Interface</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/USD900925S1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">USD900925S1</span>
        <span class="patent-card__number">2019</span>
      </div>
      <div class="patent-card__body">
        <h2>Type Font and Electronic Device with Graphical User Interface</h2>
      </div>
    </a>

    <a class="patent-card" href="https://patents.google.com/patent/US10325416B1/" target="_blank" rel="noopener noreferrer">
      <div class="patent-card__top">
        <span class="patent-card__number">US10325416B1</span>
        <span class="patent-card__number">2018</span>
      </div>
      <div class="patent-card__body">
        <h2>Avatar Creation User Interface</h2>
      </div>
    </a>
  </div>
</section>
