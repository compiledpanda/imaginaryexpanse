---
layout: base
title: Data
---
# Contents
<ul>
<% collections['data'].forEach((e) => { %>
<li><a href="<%- e.url %>"><%= e.data.title %></a></li>
<% }); %>
</ul>