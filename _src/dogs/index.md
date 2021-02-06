---
title: All Dogs
layout: base
---

{% for dog in dogs -%}
* [{{ dog.name }}](/dogs/{{ dog.name | slug}}/)
{% endfor %}
