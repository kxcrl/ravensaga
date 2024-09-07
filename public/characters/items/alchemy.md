---
title: Alchemy
layout: default
---

<table>
  <colgroup>
    <col style="width: 120px" />
    <col />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="3">
      <h2> {{ alchemy.reagents.title }} </h2>
      <em> {{ alchemy.reagents.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="blank"></td>
    <td class="center">Cost (s) / Purity</td>
  </tr>
  {% for item in alchemy.reagents.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.desc }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table>
  <colgroup>
    <col style="width: 140px" />
    <col />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="3">
      <h2> {{ alchemy.reactants.title }} </h2>
      <em> {{ alchemy.reactants.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="blank"></td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in alchemy.reactants.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td>{{ item.desc }}</td>
      <td>{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

† Entire plant must be harvested  
‡ Above ground portion of plant must be harvested  
E: Elixir, I: Incense, S: Soap
