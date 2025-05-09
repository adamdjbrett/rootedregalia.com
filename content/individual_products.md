---
layout: individual_products.njk
title: Individual Products
description: Individual Product Description.
image: 
pagination:
  data: collections.individualproducts
  size: 2
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
permalink: "/individual_products/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

