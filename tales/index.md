---
layout: base
title: Tales
---
# Contents
<% collections['tales'].forEach((e) => { %>
<a href="<%- e.url %>"><%= e.data.title %></a><br />
<% }); %>