---
layout: default
title:  "Locations"
seo:
    title: "Locations"
    description: "Details of photography locations in Scotland, Canada, Northern England and more"
---

<div class="pt-12 md:pt-40 pb-24 md:pb-40">
  <nav class="w-full md:w-7/10 md:ml-3/10 relative mb-12 px-8 md:px-0">
    <ul>
      {% for item in site.locations %}
      <li class="fade-up animate-stepped">
        <a href="{{ item.url }}" class="feature-nav-item" data-hover-show data-hover-target=".thumb-{{ item.slug }}">
          {{ item.title }}
        </a>
      </li>
      {% endfor %}
    </ul>
  </nav>

</div>