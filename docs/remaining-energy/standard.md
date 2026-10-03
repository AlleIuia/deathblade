# Стандарт без ядер 🌱

<div class="build-card-row" markdown>
<div class="build-card" data-updated="2026-09-15" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="standard" data-family="re"></div>

**Лучше всего:**{: .best-для } Новичкам в Остаточной энергии без <span class="skill-mention" data-glossary-id="arkgrid">Дерево талантов</span> пока.

**Компромисс:**{: .tradeoff } Старый билд с простоем в ротации и почти без восстановления.

- Последний бастион классической Остаточной энергии, уже вытесненный более сильными вариантами.
- <span class="skill-mention" data-glossary-id="counter">Контр</span> часто занят в ротации, его приходится придерживать, когда это нужно.
- Прост в освоении и исполнении, а мобильность лучше, чем у современных билдов.

</div>
<div class="pentagon-badge" data-build="standard" data-family="re" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Video Guide](https://www.youtube.com/watch?v=pZDYek5l1og&t=467s){ .video-chip } [Gameplay](https://www.youtube.com/watch?v=xmxCjwImyrg){ .video-chip }
</div>
</div>
</div>

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Об этом билде<span class="setup-note-arrow"></span></summary>

Так как это билд для новичков на старом билд-стиле, гайд слегка отходит от нормы ради более понятного опыта без глубокого минмакса. Например, тебе не понадобится еда на ману или стимуляторы, чтобы получать удовольствие от игры.

</details>

</div>
</div>

*Вообще новичок в Клинке Смерти? [Концентрация воли](../surge/essentials.md) в целом понятнее для начинающих и бьёт сильнее, чем «Стандарт» ОС.*

## Код билда {#skill-codes}

<!-- Paste the exported skill-code string (from the in-game loadout share
     feature) into the fenced code block below. Each `=== "Tab Name"` block is
     a separate tab holding its own code + optional italic note above it -
     copy that pattern to add another import option (e.g. an easier variant). -->

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="danger" open markdown>
<summary><span class="setup-note-tag">Внимание</span>Перед импортом<span class="setup-note-arrow"></span></summary>

Убедись, что прочитал [Основы](essentials.md), затем примени и <span class="skill-mention" data-glossary-id="arkpassive">Пассивные таланты</span>" и "Навык", чтобы не ошибиться. По самоцветам ([Gems](#gems)) следуй гайду.

</details>

</div>
</div>

=== "Стандарт"

    ```
    5F7D5490D9E2C0E26CF09BBA7300EE3738585110117637ED10C8C1ED04B5AF1E35B6428D7172B4FB399678D0F83CE64D3232A844396609F8F5466877D357B98D
    ```

## Система А.Р.К. {#ark-setup}

<!-- ark-passives / ark-cores JSON below use the site-wide node/core id
     vocabulary - each ark-passives node only needs its id + invested level,
     tier/max/name/icon all resolve from ap-node-names.js. Full schema is
     documented in javascripts/ark-passive-tree.js and ark-core-badge.js's
     "EASY EDIT GUIDE" comments. A nested "Alt" details block (e.g. an
     easier/optional variant) can carry its own compact ark-passives/
     skill-setup pair for that alternative - copy the existing pattern
     rather than editing the main tree in place. -->

<div class="setup-panel" data-accent="lavender" markdown>

<div class="ark-passives" data-family="re" markdown>
<script type="application/json">
[
    { "id": "evolution", "nodes": [
      { "id": "crit", "level": 10 },
      { "id": "specialization", "level": 30 },
      { "id": "keensense", "level": 2 },
      { "id": "limitbreakevo", "level": 1 },
      { "id": "strike", "level": 2 },
      { "id": "master", "level": 1 },
      { "id": "pulverize", "level": 1 },
      { "id": "standingstriker", "level": 2 }
    ] },
    { "id": "enlightenment", "nodes": [
      { "id": "swiftstrike", "level": 1 },
      { "id": "remainingenergy", "level": 3 },
      { "id": "firmwill", "level": 3 },
      { "id": "extremebodymovement", "level": 3 },
      { "id": "orbcirculation", "level": 2 }
    ] },
    { "id": "leap", "nodes": [
      { "id": "transcendentpower", "level": 3 },
      { "id": "awakeningamplifier", "level": 1 },
      { "id": "unleashedpower", "level": 5 },
      { "id": "instantspell", "level": 3 },
      { "id": "danceofnightmares", "level": 3 }
    ] }
  ]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Используй [калькулятор Пассивных талантов](../resources.md#ark-passive-calculator), чтобы оптимизировать узлы «Экспансия».

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span>Дерево талантов<span class="setup-note-arrow"></span></summary>

<div class="ark-cores" data-family="re" markdown>
<script type="application/json">
[
  { "core": "sun", "label": "Art Master", "points": 0 },
  { "core": "moon", "label": "Arts Core", "points": 0 },
  { "core": "star", "label": "Basics", "points": 0 }
]
</script>
</div>

- «Стандарт» по задумке играется без «Дерева талантов», но можно взять ядра от 111, если они уже есть.
- Прибереги ядра «Дерева талантов» на момент перехода к современному билду Клинка Смерти.

</details>

</div>

</div>

## Гравировки {#engravings}

<div class="setup-panel" data-accent="lavender" markdown>

<div class="engraving-loadout engraving-loadout-fixed" markdown>
<span class="engraving-chip" data-skill-id="grudge"><img class="skill-icon" src="../../assets/shared/icon-grudge.png" alt="">Титаноборец</span>
<span class="engraving-chip" data-skill-id="adrenaline"><img class="skill-icon" src="../../assets/shared/icon-adrenaline.png" alt="">Адреналин</span>
<span class="engraving-chip" data-skill-id="ambushmaster"><img class="skill-icon" src="../../assets/shared/icon-ambushmaster.png" alt="">Бесшумный убийца</span>
<span class="engraving-chip" data-skill-id="raidcaptain"><img class="skill-icon" src="../../assets/shared/icon-raidcaptain.png" alt="">Неутомимый натиск</span>
<span class="engraving-chip" data-skill-id="keenbluntweapon"><img class="skill-icon" src="../../assets/shared/icon-keenbluntweapon.png" alt="">Моргенштерн</span>
</div>

<p class="engraving-loadout-hint engraving-loadout-hint-line" markdown>Подробнее о гравировках можно прочитать [здесь!](essentials.md#engravings)</p>

</div>

## Набор навыков {#skill-setup}

<!-- Full skill-setup schema (id/level/tripods/rune/subtitle/picks) is in
     javascripts/skill-setup.js's "EASY EDIT GUIDE" comment. Names, icons, and
     tags resolve automatically by id from skill-data.js - only add "name" to
     override the display text for a genuine one-off case. -->

<div class="setup-panel" data-accent="lavender" markdown>

<div class="skill-setup" data-family="re" markdown>
<script type="application/json">
[
  {"id": "spincutter", "level": 4, "tripods": [3], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "soulabsorber", "level": 14, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "deathsentence", "level": 14, "tripods": [2, 2, 1], "rune": {"tier": "legendary", "name": "Focus"}},
  {"id": "twinshadows", "level": 14, "tripods": [2, 1, 2], "rune": {"tier": "epic", "name": "Wealth"}},
  {"id": "earthcleaver", "level": 14, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Vision"}},
  {"id": "turningslash", "level": 13, "tripods": [1, 3, 1], "rune": {"tier": "epic", "name": "Focus"}},
  {"id": "maelstrom", "level": 10, "tripods": [2, 1, 2], "rune": {"tier": "legendary", "name": "Focus"}},
  {"id": "voidstrike", "level": 14, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Wealth"}},
  {"id": "surge", "subtitle": "Identity"},
  {"id": "deathlyslash", "subtitle": "Technique"},
  {"id": "bladeassault", "subtitle": "Awakening"}
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Используй <span class="skill-mention" data-rune-name="Wealth" data-rune-tier="epic">Эпический Эйге</span> на «Длани Авесты» ради дополнительной генерации сфер, пока не освоишься с классом.

</details>

</div>

</div>

## Гемы {#gems}

<!-- Ranked skill-id lists per column (dmg/cd), top = highest priority.
     Full schema, including the expandable "alts" form for a swappable
     alternative, is in javascripts/gem-priority.js's "EASY EDIT GUIDE"
     comment. -->

<div class="setup-panel" data-accent="lavender" markdown>

<div class="gem-priority" markdown>
<script type="application/json">
[
  { "col": "dmg", "items": [
    "surge", "soulabsorber", "deathsentence", "voidstrike",
    "earthcleaver", "twinshadows", "turningslash"
  ] },
  { "col": "cd", "items": [
    "soulabsorber", "deathsentence", "maelstrom", "voidstrike"
  ] }
]
</script>
</div>

</div>

## Ротация {#rotation}

<!-- Each `.rotation-line` is a compact JSON step list of skill ids in
     order - names/icons resolve automatically, same id vocabulary as Skill
     Setup and Gems above. Full schema (situational steps, swapNext,
     cycleRef, trailing suffix, etc.) is in javascripts/rotation-line.js's
     "EASY EDIT GUIDE" comment. -->

Подойди к боссу «Разрубающими лезвиями», примени открытие и дальше повторяй основной цикл.

Открытие <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> и применяет <span class="skill-mention" data-glossary-id="synergy">синергии</span> эффективно по мере накопления к первой «Концентрации воли» в бою.

*Открытие с нуля сфер:*
{ .lead }

<div class="rotation-line" markdown>
<script type="application/json">
["maelstrom", "twinshadows", "turningslash", "soulabsorber", "voidstrike", "deathlyslash", "surge"]
</script>
</div>

*Основной повторяющийся цикл:*
{ .lead }

<div class="rotation-line" markdown>
<script type="application/json">
["twinshadows", "deathsentence", "maelstrom",
 { "id": "deathlyslash", "situational": "every other rotation" },
 "turningslash", "earthcleaver", "soulabsorber", "voidstrike", "surge"]
</script>
</div>

1. <span class="skill-inline" data-skill-id="deathlyslash"><span class="skill-inline-name">Убийственная сталь</span></span> доступен только через ротацию. Просто продолжай, если он на перезарядке.
2. Применяй «Разрубающие лезвия» в простое для смены позиции или держи, чтобы уклониться от атак.
3. Используй <span class="skill-inline" data-skill-id="bladeassault"><span class="skill-inline-name">Призрачные клинки</span></span> ради урона или придержи для гиперпробуждения либо спасительного восстановления.
4. Ротация целиком упирается в перезарядку «Длани Авесты». Что есть, то есть.
    - «Двуручный хват» можно пропустить, если «Длань Авесты» уже не на перезарядке.

*Восстановление:*
{ .lead }

1. Используй свободные стаки «Двойной плети» или «Плаща клинков» для восстановления, если это поможет набрать 3 сферы.
    - Если нет, просто жди в простое или применяй «Концентрацию воли» с 2 сферами и жди. Добро пожаловать в «Стандарт» Остаточной энергии.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Самоцветы полностью Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="19.1,18.1,14.3,11.1,11.1,10,8.1,6.5,0.8,0.5" data-ids="deathlyslash,surge,soulabsorber,deathsentence,voidstrike,earthcleaver,twinshadows,turningslash,bleed,maelstrom"></div>
</div>
</div>