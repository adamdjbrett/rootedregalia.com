---
layout: group_products.njk
title: Group Products
description: Group Product Description.
image: 
pagination:
  data: collections.groupproducts
  size: 9
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
permalink: "/group_products/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

