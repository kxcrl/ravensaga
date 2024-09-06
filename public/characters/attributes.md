---
title: Attributes
layout: default
---

# Attributes

_How well can the lens of your capacities focus the will of your intent?_

Each is determined at character creation by rolling 3d6.  
Use in place of a skill for an untrained attempt at a task by rolling under with a d20.

<div class="spacer"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.accurate.title }} </h2>
      <em> {{ attributes.accurate.description }}</em>
    </th>
  </tr>
  {% for item in attributes.accurate.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.cunning.title }} </h2>
      <em> {{ attributes.cunning.description }}</em>
    </th>
  </tr>
  {% for item in attributes.cunning.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.discrete.title }} </h2>
      <em> {{ attributes.discrete.description }}</em>
    </th>
  </tr>
  {% for item in attributes.discrete.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.persuasive.title }} </h2>
      <em> {{ attributes.persuasive.description }}</em>
    </th>
  </tr>
  {% for item in attributes.persuasive.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.quick.title }} </h2>
      <em> {{ attributes.quick.description }}</em>
    </th>
  </tr>
  {% for item in attributes.quick.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.resolute.title }} </h2>
      <em> {{ attributes.resolute.description }}</em>
    </th>
  </tr>
  {% for item in attributes.resolute.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.strong.title }} </h2>
      <em> {{ attributes.strong.description }}</em>
    </th>
  </tr>
  {% for item in attributes.strong.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col class="num" />
    <col />
  </colgroup>
  <tr>
    <th class="blank"></th>
    <th>
      <h2> {{ attributes.vigilant.title }} </h2>
      <em> {{ attributes.vigilant.description }}</em>
    </th>
  </tr>
  {% for item in attributes.vigilant.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.desc }}</td>
    </tr>
  {% endfor %}
</table>
