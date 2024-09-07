---
layout: default
title: Options
---

# Options

**Improvement with Practice**  
When making a skill check, if the character succeeds by rolling a 1, they may spend 10xp to immediately improve the skill.

**Improvement by Affinity**  
For every 5 skills a player possesses that all have the same primary attribute, they may improve that attribute by 1.  
It is recommended in this case to remove the Attribute Focus ability from the game.

**Grappling**  
If a character dives onto, tackles, lands on, or otherwise wrestles with a character that's within range of them, they initiate a grapple.  
While grappling, a character may only attack the person they are currently grappling, and only using fists or small weapons (daggers, darts, arrows, etc).  
Neither character may move unless they break the grapple. To do so requires a Strong check ± the opposing character's Strong mod. On either success or failure, the opposing character gets a free attack.  
If attacking from the outside, characters do not miss unless they roll a 19 or 20. Instead, points above the target number inflict damage on the other character currently being grappled. If there is more than one, choose from among them at random.  
For all abilities, the characters in the grapple count as a single target.

**Predisposition**  
Since attributes quantify a character's backstory and their history with certain types of activities, a character might quickly pick up the basics of the things if they've had similar experiences.  
Things they have no experience with would be more difficult.  
The first level of each skill is 10xp ± the modifier of its primary attribute.  
Subsequent levels are 10xp, as normal.

**Unaware Skill Checks**  
Occasionally, just rolling a skill check will give the player information as if it had succeeded. For instance, a player moves into a room and has to see if they are moving silently or hidden by shadows or is able to detect nearby traps.  
To keep things more surprising, the GM may make these rolls in secret as the players are moving and only share the results if there is a consequence.

**Hirelings and Retainers**  
Characters may bring a number of NPCs with them on their adventure equal to or less than their Persuasive mod.  
They must agree to a price that the Retainer will be paid daily, and the Retainer must be paid each day.  
Each will have a Loyalty score, ranging from 1 to 10. In the case of a hired professional, this can be set to 5. If the first encounter is in the wild, roll a 1d10 to determine their Loyalty.  
Anytime the character does something that the Retainer dislikes, lower it by one. If it is less than six, roll a 1d6. If the result is equal to or less than their Loyalty score, they will voice their disapproval, but will continue to follow the character. Otherwise, they will leave. This doesn't mean they will turn against the character, only that they will stop actively following them and go their own way.  
Treating the Retainer especially well, offering them a portion of treasure, or increasing their pay rate may each raise the Loyalty score by 1 and require a failed Loyalty check to be re-rolled. However, better options for these actions will likely emerge in the fiction.

**Exploration Experience**  
If you intend to spend a large amount of time in a dangerous area, or one where clever actions take precedence over more social role playing, you may use the following list to continue granting XP during the session.  
Each item listed is intended to grant 2XP, though you may reduce this to 1XP if it is unusually minor (unlocking a chest), or raise it to 5XP if it is uniquely risky or dramatic (overcoming a dungeon's greatest obstacle).

\- Escape a trap unscathed  
\- Discover a location of historical significance  
\- Fulfill a promise of action made to an NPC  
\- Prove (or disprove) an NPC's story  
\- Find something secret or intentionally hidden  
\- Reveal the meaning or purpose of a significant location or item  
\- Convince an NPC to act in your benefit  
\- Bargain with an NPC to gain an advantage or reveal an insight  
\- Explore a distinct, previously unknown level or area (at least a few rooms beyond the entrance)  
\- Camp safely through a night (or other period of several hours)  
\- Overcome a significant danger in the environment (weather or conditions)  
\- Successfully use an item in an unintended or unorthodox way to accomplish a task

**Spirit of Cooperation**  
If you or your group wish to foster a less competitive environment, you may step down the amount of XP gained in a situation and award it to all players present instead of one.  
For example, instead of awarding 2XP to the single character who accomplished it, an action awards 1XP to all characters present. (Or 2XP to all characters instead of 5XP.)  
You may also use this only on occasion instead of replacing single character rewards entirely. For example, a situation where one character is taking the lead, but multiple characters participate in the actions to follow.

**Mutative Corruption**  
Instead of dealing damage to HP when a character fails their Resolute check, you may take the failure amount, add it to the total of their current temporary and permanent corruption, then roll a 1d4 and consult the following table.

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
