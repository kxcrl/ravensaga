---
title: General
layout: default
---

<table class="single">
  <colgroup>
    <col />
    <col style="width: 80px" />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="3">
      <h2> {{ items.general.title }} </h2>
      <em> {{ items.general.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Size</td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in items.general.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td class="center">{{ item.size }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>
