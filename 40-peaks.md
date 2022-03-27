---
layout: default
title:  "40 peaks"
seo:
    title: "40 peaks"
    description: "A challenge to climb 40 peaks to celebrate 40 years on earth."
    image:
      url: "Wild-Camp-004.jpg"
      alt: "Wild Camping on Beinn Each"
---

<div class="md:w-7/12 md:mx-auto pt-10 md:pt-12 lg:pt-16 pb-24 md:pb-40 px-8 overflow-hidden">
  <div class="fade-up border-b br-grey">
    <h1 class="font-display text-4xl md:text-6xl lg:text-7xl mb-0 pb-0">40 Peaks</h1>
    <div class="w-full lg:w-2/3">
      <p>Turning 40 in 2022, I decided to set myself the challenge of climbing forty peaks in 12 months.</p>
      <p>This is a record of my progress.</p>
    </div>
  </div>

  <ul class="">
    {% for item in site.peaks %}
    <li class="fade-up animate-stepped border-b br-grey py-4 xl:py-8">
      <a href="{{ item.url }}" class="flex flex-wrap peak-nav-item">
        <div class="w-full md:w-2/3 xl:w-1/3 {% cycle '', 'xl:order-2'%} mb-4 xl:mb-0">
          {% include image.html url=item.hero.image alt=item.hero.alt %}
        </div>
        <div class="w-full xl:w-2/3 {% cycle 'xl:pl-4', 'xl:pr-4' %}">
          <span class="text-base block text-left no-underline font-sans">
            {{ item.date | date: "%e %B" }}
            &nbsp;&bull;&nbsp;
            {% if item.peaks.size > 1 %} Peaks {% else %} Peak {% endif %}
            {{ item.number }}
            {% if item.peaks.size > 1 %}
            - {{ item.number | plus:item.peaks.size | minus:1 }}
            {% endif %}
            of 40
          </span>
          <h2 class="text-2xl font-display leading-none tracking-wide mb-4 md:text-3xl lg:text-4xl inline-block">
            {{ item.title }}
          </h2>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</div>