---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Your publications will be listed here.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
