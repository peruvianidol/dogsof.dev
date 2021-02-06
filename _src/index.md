---
title: Dogs of Dev
layout: base
---

{% for dog in collections.dogs %}
<a href="{{ dog.url }}">
  <figure>
    <img src="{{ dog.data.image }}" alt="{{ dog.data.title | slug }}">
    <figcaption>
      <h2>{{ dog.data.title}}</h2>
      <p>{{ dog.data.owner }}</p>
    </figcaption>
  </figure>
</a>
{% endfor %}

