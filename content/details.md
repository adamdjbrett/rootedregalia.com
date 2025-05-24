---
layout: base.njk
title: Details
description: Update details article.
image: 
pagination:
  data: collections.posts
  size: 6
  reverse: true
testdata:
 - item1
 - item2
 - item3
 - item4
permalink: "/details/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
<section class="container py-5" id="blog">
<div class="col-md-12 p-3">
<h1 class="section-title mt-5">{{title}}</h1>
<h2>{{description}}</h2>
</div>
<div class="row">{% for post in pagination.items | reverse %}
<div class="col-md-4">
<div class="blog-card">
{% if post.data.image %}<a href="{{post.url}}"><img src="{{post.data.image}}" alt="{{post.data.title}}" class="blog-img"></a>{% endif %}
<div class="blog-body">
<small class="blog-date"><time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate("dd LLLL yyyy") }}</time></small>
<h5 class="blog-title mt-2">{{post.data.title}}</h5>
<p>{{post.data.description}}</p>
<a href="{{post.url}}" class="btn btn-card btn-sm text-white">{{metadata.widget.button.blog}}</a>
</div>
</div>
</div>{% endfor %}
<div class="row mt-5">
<div class="col-6">
{% if pagination.href.previous %}<a href="{{ pagination.href.previous }}" class="btn btn-card text-white p-2">
<i class="fa-solid fa-arrow-left me-3"></i> Previous
</a>{% endif %}
</div>
<div class="col-6 text-end">
{% if pagination.href.next %}<a href="{{ pagination.href.next }}" class="btn btn-card text-white p-2">
Next <i class="fa-solid fa-arrow-right ms-3"></i>
</a>{% endif %}
</div>
</div>
</div>
</section>
