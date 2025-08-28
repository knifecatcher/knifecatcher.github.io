---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About**

<div style="text-align:center;">
  <img src="/assets/jd/jd_gardner.png" 
       alt="JD Gardner" 
       style="width:30%; max-width:300px; height:auto; border-radius:8px;">

  <!-- Quote goes here -->
  <p id="quote" style="color:#666; margin-bottom:0; font-style:italic;"></p>

  <p style="margin-top:0;">
    I design and prototype software at the edge of art and technology.
  </p>
</div>

<div class="row">
  {% include about/timeline.html %}
</div>

<script>
  const quotes = [
    "You appear, have a chance to blaze in the sky, then you disappear.",
    "Victory through superior software.",
    "The quick shall inherit the earth.",
    "Bright lattices of logic unfolding across that colorless void.",
    "You'll think of something.",
    "The future is already here, it's just not very evenly distributed.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "Stay hungry. Stay foolish.",
    "Think lightly of yourself and deeply of the world.",
  ];

  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
</script>