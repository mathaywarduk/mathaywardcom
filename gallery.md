---
layout: default
---

<h1>All images</h1>

<h2>Alberta</h2>

<div class="flex flex-wrap">
  {% for i in (1..18) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Canada-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Canada-0{{ num }}.jpg?w=600"><br>
      Canada-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>Iceland</h2>

<div class="flex flex-wrap">
  {% for i in (1..17) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Iceland-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Iceland-0{{ num }}.jpg?w=600"><br>
      Iceland-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>Lake District</h2>

<div class="flex flex-wrap">
  {% for i in (1..13) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Lakes-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Lakes-0{{ num }}.jpg?w=600"><br>
      Lakes-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>North Coast 500</h2>

<div class="flex flex-wrap">
  {% for i in (1..54) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/NC500-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/NC500-0{{ num }}.jpg?w=600"><br>
      NC500-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>Scottish Highlands</h2>

<div class="flex flex-wrap">
  {% for i in (1..28) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Highlands-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Highlands-0{{ num }}.jpg?w=600"><br>
      Highlands-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>Skye</h2>

<div class="flex flex-wrap">
  {% for i in (1..45) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Skye-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Skye-0{{ num }}.jpg?w=600"><br>
      Skye-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>

<h2>Tenerife</h2>

<div class="flex flex-wrap">
  {% for i in (1..14) %}
    {% assign num = i %}
    {% if i < 10 %}
        {% assign num = "0" | append: i %}
    {% endif %}
    <a href="https://mathaywarduk.imgix.net/Tenerife-0{{ num }}.jpg" target="_blank" class="w-1/3 p-2">
      <img src="https://mathaywarduk.imgix.net/Tenerife-0{{ num }}.jpg?w=600"><br>
      Tenerife-0{{ num }}.jpg
    </a>
  {% endfor %}
</div>