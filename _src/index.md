---
title: Dogs of Dev
layout: base
---

{% for dog in collections.dogs %}
<a href="{{ dog.url }}" class="dod-card">
  <figure>
    <div class="dod-img-wrap">
      <img src="{{ dog.data.image }}" alt="{{ dog.data.title | slug }}">
    </div>
    <figcaption>
      <h2 class="dod-heading-2">{{ dog.data.title}}</h2>
      <p>{{ dog.data.owner }}</p>
    </figcaption>
  </figure>
</a>
{% endfor %}

