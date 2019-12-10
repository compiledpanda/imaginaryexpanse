---
layout: base
title: Systems
tags: data
---
# Systems
<ul>
<% collections['data.system'].forEach((e) => { %>
<li><a href="<%- e.url %>"><%= e.data.title %></a></li>
<% }); %>
</ul>