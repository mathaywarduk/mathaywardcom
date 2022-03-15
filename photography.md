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
      <li class="fade-up">
        <a href="{{ item.url }}" class="feature-nav-item" data-hover-show data-hover-target=".thumb-{{ item.slug }}">
          {{ item.title }}
          <span class="meta text-3xs block mt-2 text-left no-underline md:mt-4 md:ml-2">{{ item.year }} / {{ item.region }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </nav>

  {% for item in site.photography %}
    {% if item.thumb.size %}
      <img src="{{ site.image_base }}{{ item.thumb.image }}?w=480&h=640&fit=crop" class="fixed bottom-20 left-0 z-10 opacity-0 hidden md:block transition-all duration-500 ease-in-out thumb-{{ item.slug }} w-1/4 h-auto">
    {% endif %}
  {% endfor %}

</div>
