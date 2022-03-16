---
layout: default
title:  "Photography"
seo:
    title: "Photography"
    description: "Photography from travels around Scotland, Canada, Northern England and more"
---

<div class="pt-12 md:pt-40 pb-24 md:pb-40">
  <nav class="w-full md:w-7/10 md:ml-3/10 relative mb-12 px-8 md:px-0">
    <ul>
      {% for item in site.photography %}
      <li class="fade-up animate-stepped">
        <a href="{{ item.url }}" class="feature-nav-item" data-hover-show data-hover-target=".thumb-{{ item.slug }}">
          {{ item.title }}
          <span class="meta text-3xs block mt-2 text-left no-underline md:mt-4 md:ml-2">{{ item.year }} / {{ item.region }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </nav>

  {% for item in site.photography %}
    {% for image in item.thumb %}
      <img src="{{ site.image_base }}{{ image.url }}?w=480&h=640&fit=crop" class="fixed z-10 hidden opacity-0 thumb-{{ item.slug }} {% cycle item.slug: 'bottom-20 left-0 w-1/4 h-auto md:block', 'top-1/2 -right-10 -mt-80 w-1/6 h-auto xl:block', '-top-80 left-1/2 -ml-60 w-1/6 h-auto xxl:block' %}" loading="lazy" alt="{{ image.alt }}">
    {% endfor %}
  {% endfor %}

</div>