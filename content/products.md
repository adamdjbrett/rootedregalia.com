---
layout: products.njk
title: Products
description: Product Description.
image: 
pagination:
  data: collections.products
  size: 9
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
permalink: "/products/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

