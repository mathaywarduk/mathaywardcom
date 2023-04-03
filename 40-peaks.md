---
layout: default
title:  "40 Peaks"
seo:
    title: "40 Peaks"
    description: "A challenge to climb 40 peaks to celebrate 40 years on earth."
    image:
      url: "Wild-Camp-004.jpg"
      alt: "Wild Camping on Beinn Each"
---
{% assign peaks = 0 %}
{% assign ascent = 0 %}
{% assign distance = 0 %}
{% for item in site.peaks %}
  {% assign peaks = peaks | plus: item.peaks.size %}
  {% assign ascent = ascent | plus: item.ascent %}
  {% assign distance = distance  | plus: item.distance %}
{% endfor %}

<div class="md:w-7/12 md:mx-auto pt-10 md:pt-12 lg:pt-16 pb-24 md:pb-40 px-8">
  <h1 class="font-display text-4xl md:text-6xl lg:text-7xl mb-0 pb-0 fade-down anim-delay-200">{{ page.title }}</h1>
  <div class="w-full lg:w-2/3 fade-down anim-delay-400">
    <p>Turning 40 in 2022, I decided to set myself the challenge of climbing forty peaks in 12 months.</p>
    <p>This is a record of my progress.</p>
  </div>

  <ul class="flex flex-wrap gap-8 overflow-hidden pt-2 pb-4 border-t border-b">
    <li class="text-slide-up animate-stepped">
      <h3 class="font-bold mb-4">Peaks</h3>
      <span class="text-xl py-1 px-2 border br-orange c-orange">{{ peaks | intcomma }}</span>
    </li>
    <li class="text-slide-up animate-stepped">
      <h3 class="font-bold mb-4">Total ascent</h3>
      <span class="text-xl py-1 px-2 border br-orange c-orange">{{ ascent | intcomma }}m</span>
    </li>
    <li class="text-slide-up animate-stepped">
      <h3 class="font-bold mb-4">Total distance</h3>
      <span class="text-xl py-1 px-2 border br-orange c-orange">{{ distance | intcomma }}km</span>
    </li>
  </ul>

  <ul class="">
    {% for item in site.peaks %}
    <li class="fade-left animate-stepped border-b br-grey py-4 xl:py-8">
      <a href="{{ item.url }}" class="flex flex-wrap peak-nav-item">
        <div class="w-full md:w-2/3 xl:w-1/3 {% cycle '', 'xl:order-2'%} mb-4 xl:mb-0">
          {% include image.html url=item.hero.url alt=item.hero.alt width=900 height=600 %}
        </div>
        <div class="w-full xl:w-2/3 {% cycle 'xl:pl-4', 'xl:pr-4' %}">
          <span class="text-base block text-left no-underline font-sans mb-2">
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
          <p class="mt-4 mb-0">{{ item.description }}</p>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>

  {% comment %}

  {% assign munros = "" | split: ',' %}
  {% assign corbetts = "" | split: ',' %}
  {% assign grahams = "" | split: ',' %}
  {% assign wainwrights = "" | split: ',' %}
  {% assign dolomites = "" | split: ',' %}

  {% for item in site.peaks %}
    {% for peak in item.peaks %}
      {% if peak.category == 'munro' %}
        {% assign munros = munros | push: peak %}
      {% endif %}
      {% if peak.category == 'corbett' %}
        {% assign corbetts = corbetts | push: peak %}
      {% endif %}
      {% if peak.category == 'graham' %}
        {% assign grahams = grahams | push: peak %}
      {% endif %}
      {% if peak.category == 'wainwright' %}
        {% assign wainwrights = wainwrights | push: peak %}
      {% endif %}
      {% if peak.category == 'dolomite' %}
        {% assign dolomites = dolomites | push: peak %}
      {% endif %}
    {% endfor %}
  {% endfor %}

  <div>
    <div class="overflow-hidden">
      <h2 class="mt-4 text-xl font-display leading-none tracking-wide mb-4 md:text-2xl lg:text-3xl text-slide-up">Categories</h2>
    </div>
    {% if munros.size > 0 %}
    <div class="overflow-hidden">
      <h3 class="meta text-slide-up">Munros</h3>
    </div>
    <ul class="flex flex-wrap gap-8 mb-8">
      {% for item in munros %}
        <li>
          <div class="overflow-hidden">
            <h3 class="text-xl font-bold mb-4 text-slide-up">{{ item.name }}</h3>
          </div>
          <div class="overflow-hidden">
            <span class="p-1 text-slide-up block">{{ item.elevation }}m</span>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% endif %}
    {% if corbetts.size > 0 %}
    <div class="overflow-hidden">
      <h3 class="meta text-slide-up">Corbetts</h3>
    </div>
    <ul class="flex flex-wrap gap-8 mb-8">
      {% for item in corbetts %}
        <li>
          <div class="overflow-hidden">
            <h3 class="text-xl font-bold mb-4 text-slide-up">{{ item.name }}</h3>
          </div>
          <div class="overflow-hidden">
            <span class="p-1 text-slide-up block">{{ item.elevation }}m</span>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% endif %}
    {% if grahams.size > 0 %}
    <div class="overflow-hidden">
      <h3 class="meta text-slide-up">Grahams</h3>
    </div>
    <ul class="flex flex-wrap gap-8 mb-8">
      {% for item in grahams %}
        <li>
          <div class="overflow-hidden">
            <h3 class="text-xl font-bold mb-4 text-slide-up">{{ item.name }}</h3>
          </div>
          <div class="overflow-hidden">
            <span class="p-1 text-slide-up block">{{ item.elevation }}m</span>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% endif %}
    {% if wainwrights.size > 0 %}
    <div class="overflow-hidden">
      <h3 class="meta text-slide-up">Wainwrights</h3>
    </div>
    <ul class="flex flex-wrap gap-8 mb-8">
      {% for item in wainwrights %}
        <li>
          <div class="overflow-hidden">
            <h3 class="text-xl font-bold mb-4 text-slide-up">{{ item.name }}</h3>
          </div>
          <div class="overflow-hidden">
            <span class="p-1 text-slide-up block">{{ item.elevation }}m</span>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% endif %}
    {% if dolomites.size > 0 %}
    <div class="overflow-hidden">
      <h3 class="meta text-slide-up">Dolomites</h3>
    </div>
    <ul class="flex flex-wrap gap-8 mb-8">
      {% for item in dolomites %}
        <li>
          <div class="overflow-hidden">
            <h3 class="text-xl font-bold mb-4 text-slide-up">{{ item.name }}</h3>
          </div>
          <div class="overflow-hidden">
            <span class="p-1 text-slide-up block">{{ item.elevation }}m</span>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
  
  {% endcomment %}

</div>