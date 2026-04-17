---
layout: default
title: About
permalink: /info/
---

<section class="info-shell">
  <div class="info-grid">
    <figure class="profile-panel profile-panel--portrait">
      <img src="{{ '/assets/jd/jd_gardner.jpg' | relative_url }}" alt="Peregrine falcon" data-media>
    </figure>
    <div class="about-intro">
      <p class="quote-rotator" data-quote-rotator aria-live="polite"></p>
      <div class="about-links" aria-label="Contact links">
        <a class="about-links__item" href="mailto:jdgardner92@gmail.com" aria-label="Email JD Gardner">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25ZM4.5 7.28v.16l7.12 5.22a.66.66 0 0 0 .76 0L19.5 7.44v-.16a.25.25 0 0 0-.25-.28H4.75a.25.25 0 0 0-.25.28Zm15 1.98-6.23 4.56a2.16 2.16 0 0 1-2.54 0L4.5 9.26v7.99c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25Z"/>
          </svg>
        </a>
        <a class="about-links__item" href="https://www.linkedin.com/in/jdgardner92/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12M5.62 9.75h2.64V18H5.62zM10.02 9.75h2.53v1.13h.03c.35-.67 1.22-1.38 2.5-1.38 2.67 0 3.17 1.76 3.17 4.04V18h-2.64v-3.96c0-.94-.02-2.15-1.31-2.15-1.31 0-1.51 1.02-1.51 2.08V18h-2.64z"/>
          </svg>
        </a>
        <a class="about-links__item" href="https://github.com/knifecatcher" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C4 14.09 3.48 13.22 3.32 12.77c-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="mini-resume" aria-label="Selected experience">
    {% for item in site.data.timeline %}
      {% assign title_parts = item.title | split: ', ' %}
      {% assign role = title_parts | first %}
      {% assign place = title_parts | last %}
      {% assign summary = item.description %}
      {% assign logo_path = '' %}
      {% case place %}
        {% when 'Meta' %}
          {% assign logo_path = '/assets/jd/meta_logo.png' %}
          {% assign summary = 'Design and build high-impact prototypes for next-generation AR, AI, and wearable devices.' %}
        {% when 'Apple' %}
          {% assign logo_path = '/assets/jd/apple_logo.png' %}
          {% assign summary = 'Contributed to the development of user-centric designs for cutting-edge consumer products.' %}
        {% when 'Pixar Animation Studios' %}
          {% assign logo_path = '/assets/jd/pixar_logo.png' %}
          {% assign summary = 'Helped create award-winning animated films, including “Incredibles 2”, “Coco”, and “Cars 3”, as well as “Coco VR”, Pixar’s first VR project.' %}
        {% when 'Moonbot Studios' %}
          {% assign logo_path = '/assets/jd/moonbot_logo.png' %}
          {% assign summary = 'Created animation and interactive projects for clients like Gatorade, Dolby, Amazon, Samsung, and the National Ad Council. Team accolades include 1 Academy Award, 4 Emmy Awards, 14 Cannes Lions Awards, and 17 Clio Awards.' %}
      {% endcase %}
      <article class="mini-resume__item">
        <p class="mini-resume__headline">
          {% unless logo_path == '' %}
            <img class="mini-resume__logo" src="{{ logo_path | relative_url }}" alt="" aria-hidden="true">
          {% endunless %}
          <span>{{ place }} - {{ role }}</span>
        </p>
        <p class="mini-resume__range">{{ item.from }} to {{ item.to }}</p>
        <p class="mini-resume__description">{{ summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>
