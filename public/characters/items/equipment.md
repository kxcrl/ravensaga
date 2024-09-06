---
title: Equipment
layout: default
parent: Items
grand_parent: Characters
has_children: false
---

<table class="single">
  <colgroup>
    <col />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="4">
      <h2> {{ items.equipment.melee.title }} </h2>
      <em> {{ items.equipment.melee.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Damage</td>
    <td class="center">Size</td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in items.equipment.melee.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td class="center">{{ item.dmg }}</td>
      <td class="center">{{ item.size }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

\* Can be used two-handed to gain +2 damage  
† Can only be used two-handed  
‡ Can be used as both a melee and a ranged weapon

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="6">
      <h2> {{ items.equipment.ranged.title }} </h2>
      <em> {{ items.equipment.ranged.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Damage</td>
    <td class="center">Rate of Fire</td>
    <td class="center">Range</td>
    <td class="center">Size</td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in items.equipment.ranged.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td class="center">{{ item.dmg }}</td>
      <td class="center">{{ item.rof }}</td>
      <td class="center">{{ item.range }}</td>
      <td class="center">{{ item.size }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

Shooting or throwing beyond this range adds a –2 obstacle

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="4">
      <h2> {{ items.equipment.ammunition.title }} </h2>
      <em> {{ items.equipment.ammunition.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Damage</td>
    <td class="center">Size</td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in items.equipment.ranged.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td class="center">{{ item.dmg }}</td>
      <td class="center">{{ item.size }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

\* Every additional 20 ammunition beyond the first requires 1 slot

<div class="spacer-xl"></div>

<table class="single">
  <colgroup>
    <col />
    <col style="width: 80px" />
    <col style="width: 80px" />
    <col style="width: 80px" />
  </colgroup>
  <tr>
    <th colspan="4">
      <h2> {{ items.equipment.armor.title }} </h2>
      <em> {{ items.equipment.armor.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Defense</td>
    <td class="center">Size</td>
    <td class="center">Cost (s)</td>
  </tr>
  {% for item in items.equipment.armor.data %}
    <tr>
      <td>{{ item.name }}</td>
      <td class="center">{{ item.def }}</td>
      <td class="center">{{ item.size }}</td>
      <td class="center">{{ item.cost }}</td>
    </tr>
  {% endfor %}
</table>

\* Helmets block the ears and peripheral vision, reducing Vigilant by 2<br>
A helmet or a shield can be destroyed to cancel a single attack
