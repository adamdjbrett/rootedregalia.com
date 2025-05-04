---
layout: gallery.njk
title: Gallery
description: Gallery Description.
image: 
pagination:
  data: collections.galleries
  size: 6
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
permalink: "/gallery/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

