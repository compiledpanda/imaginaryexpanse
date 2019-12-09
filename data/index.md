---
layout: base
title: Data
---
# Contents
<% collections['data'].forEach((e) => { %>
<a href="<%- e.url %>"><%= e.data.title %></a><br />
<% }); %>