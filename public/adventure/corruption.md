---
title: Corruption
layout: default
---

# Corruption

All basic actions and effects that are the result of normal events are referred to as **Mundane**.  
All fantastic, mystical, or otherworldly effects are referred to as **Distortion**.  
When distortion damages organic things (characters, creatures, and nature), harming them in ways they have trouble healing, it is referred to as **Corruption**.  
Someone who practices sorcery may sense Distortion reverberating through a wall as they witness strange effects in an underground room.  
They may then experience Corruption as their body burns and warps while they attempt to channel and control it.

**Mutative Corruption**  
When a character fails their Resolute check, add the amount they failed by to the total of their current temporary and permanent corruption, then roll a 1d4 and consult the following table.

<table>
  <colgroup>
    <col style="width: 50px" />
    <col style="width: 300px" />
    <col style="width: 300px" />
    <col style="width: 300px" />
    <col style="width: 300px" />
  </colgroup>
  <tr>
    <th colspan="5">
      <h2> {{ corruption.mutation.title }} </h2>
      <em> {{ corruption.mutation.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">1 - Senses</td>
    <td class="center">2 - Body</td>
    <td class="center">3 - Mind</td>
    <td class="center">4 - Shadow</td>
  </tr>
  {% for item in corruption.mutation.data %}
    <tr>
      <td>{{ item.num }}</td>
      <td>{{ item.senses }}</td>
      <td>{{ item.body }}</td>
      <td>{{ item.mind }}</td>
      <td>{{ item.shadow }}</td>
    </tr>
  {% endfor %}
</table>

**Area Destabilization**  
If more than 20 points of Corruption are spent by characters and NPCs in an area, the excessive distortion destabilizes it.  
Roll d100 and consult the following table.

<table>
  <colgroup>
    <col style="width: 50px" />
    <col style="width: 150px" />
    <col />
  </colgroup>
  <tr>
    <th colspan="3">
      <h2> {{ corruption.destabilization.title }} </h2>
      <em> {{ corruption.destabilization.description }}</em>
    </th>
  </tr>
  <tr>
    <td class="blank"></td>
    <td class="center">Result</td>
    <td class="center">Effect</td>
  </tr>
  {% for item in corruption.destabilization.data %}
    <tr>
      <td>{{ forloop.index }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.effect }}</td>
    </tr>
  {% endfor %}
</table>
