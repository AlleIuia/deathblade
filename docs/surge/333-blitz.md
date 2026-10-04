# 333 Охота за головами <span class="tiger-emoji" title="rawr">🐯</span>

<p class="page-banner page-banner-warning">Этот билд нерабочий и никто его не играет, так что информация здесь БУДЕТ ошибочной. Но тигра не обижай.</p>

<div class="build-card-row" markdown>
<div class="build-card" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="333-blitz" data-family="surge"></div>

**Лучше всего:**{: .best-для } Пожалуйста, не играй так.

**Компромисс:**{: .tradeoff } Усилий не стоят затрат.

- Использует «Охоту за головами» как два быстрых каста (<span class="skill-mention" data-glossary-id="btbcombo">BTB</span> комбо) через сброс скилла.
- Высокая эффективность самоцветов: «Концентрация воли» и «Охота за головами» — основа твоего урона.
- Нужно балансировать «Концентрацию воли», «Охоту за головами» и «Убийственную сталь» <span class="skill-mention" data-glossary-id="backattack">попадание в спину</span> темп с «Концентрацией воли» <span class="skill-mention" data-glossary-id="cpm">CPM</span>.

</div>
<div class="pentagon-badge" data-build="333-blitz" data-family="surge" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://www.youtube.com/watch?v=pzFa5zOuNik){ .video-chip } [Геймплей](../assets/tiger.mp4){ .video-chip }
</div>
</div>
</div>

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span>Но почему мужские модели? 🐯<span class="setup-note-arrow"></span></summary>

![333 Blitz meme](../assets/blitz-meme.png){ .setup-note-image .zoomable-image loading=lazy }

</details>

</div>
</div>

## Код билда {#skill-codes}

<!-- Paste the exported skill-code string (from the in-game loadout share
     feature) into the fenced code block below. Each `=== "Tab Name"` block is
     a separate tab holding its own code + optional italic note above it -
     copy that pattern to add another import option (e.g. an easier variant). -->

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="danger" open markdown>
<summary><span class="setup-note-tag">Внимание</span>Перед импортом<span class="setup-note-arrow"></span></summary>

Убедись, что прочитал [Основы](essentials.md) перед импортом! Самоцветы сравни с гайдом ([Самоцветы](#gems)).

</details>

</div>
</div>

=== "333 Охота за головами"

    ```
    C2BFAC917391343DBC2FDFE774F012CA68D052E6BBDF24E99D94CB2304E39E6307031C2D86DDF93D1770D4AFD97E52786C90EECBF9E6A04C76B7DF6B0289ED3F
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

<div class="ark-passives" data-family="surge" markdown>
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
      { "id": "surgeenhancement", "level": 1 },
      { "id": "orbcompression", "level": 3 },
      { "id": "orbcontrol", "level": 2 },
      { "id": "limitbreakenl", "level": 3 },
      { "id": "chaoticpower", "level": 3 }
    ] },
    { "id": "leap", "nodes": [
      { "id": "awakeningamplifier", "level": 1 },
      { "id": "unleashedpower", "level": 5 },
      { "id": "releasepotential", "level": 3 },
      { "id": "instantspell", "level": 3 },
      { "id": "danceofscreams", "level": 3 }
    ] }
  ]
</script>
</div>

<div class="ark-cores" data-family="surge" markdown>
<script type="application/json">
[
  { "core": "sun", "label": "Deathblade Rush", "points": 2 },
  { "core": "moon", "label": "Death Blitz", "points": 3 },
  { "core": "star", "label": "Frostfire Blade", "points": 0 }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Используй [калькулятор Пассивных талантов](../resources.md#ark-passive-calculator), чтобы оптимизировать узлы «Экспансия».

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Созвездия А.Р.К.</span><span class="setup-note-arrow"></span></summary>

- Урон будет ниже, если взять минимальные требования по ядрам.

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
<span class="engraving-chip" data-skill-id="massincrease"><img class="skill-icon" src="../../assets/shared/icon-massincrease.png" alt="">Карающая длань</span>
</div>

<p class="engraving-loadout-hint engraving-loadout-hint-line" markdown>Подробнее о гравировках можно прочитать [здесь!](essentials.md#engravings)</p>

</div>

## Набор навыков {#skill-setup}

<!-- Full skill-setup schema (id/level/tripods/rune/subtitle/picks) is in
     javascripts/skill-setup.js's "EASY EDIT GUIDE" comment. Names, icons, and
     tags resolve automatically by id from skill-data.js - only add "name" to
     override the display text for a genuine one-off case. -->

<div class="setup-panel" data-accent="lavender" markdown>

<div class="skill-setup" data-family="surge" markdown>
<script type="application/json">
[
  {"id": "surpriseattack", "level": 10, "tripods": [1, 1, 1], "rune": {"tier": "legendary", "name": "Poison"}},
  {"id": "windcut", "level": 10, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "spincutter", "level": 10, "tripods": [3, 3, 1], "rune": {"tier": "epic", "name": "Galewind"}},
  {"id": "bladedance", "level": 14, "tripods": [1, 1, 2], "rune": {"tier": "epic", "name": "Galewind"}},
  {"id": "earthcleaver", "level": 14, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Vision"}},
  {"id": "turningslash", "level": 14, "tripods": [1, 3, 1], "rune": {"tier": "legendary", "name": "Rage"}},
  {"id": "maelstrom", "level": 10, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Focus"}},
  {"id": "blitzrush", "level": 14, "tripods": [2, 1, 1], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "deathtrance", "subtitle": "Identity"},
  {"id": "deathlyslash", "subtitle": "Technique"},
  {"id": "bladeassault", "subtitle": "Awakening"},
  {"id": "surge", "subtitle": "Identity"}
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Используй <span class="skill-mention" data-rune-name="Purify">Солум</span> на «Разрубающих лезвиях» при необходимости.
- Используй <span class="skill-mention" data-rune-name="Bleed" data-rune-tier="legendary">Легендарный Джар</span> на «Плаще клинков», если используешь еду на ману вместо вина.

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- Можно использовать трипод «Обнаружение слабых мест» <span class="skill-mention" data-glossary-id="tripod">трипод</span> на «Блице».
    - Требует КД-самоцвета Ур. 10 и/или простоев в рейде, иначе он станет узким местом.
    - Нужно заменить КД-самоцвет «Неумолимого притяжения» на КД «Блица» — это даёт небольшой прирост урона.
- Трипод «Взрыв земли» на «Двуручном хвате» — на твоё усмотрение.
    - Повышенная скорость каста, но сильно снижает мобильность и урон.

</details>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>🐆 против 🐯<span class="setup-note-arrow"></span></summary>

![222 vs 333](../assets/leopardvstiger.png){ .setup-note-image .zoomable-image loading=lazy }

</details>

</div>

</div>

## Самоцветы {#gems}

<!-- Ranked skill-id lists per column (dmg/cd), top = highest priority.
     Full schema, including the expandable "alts" form for a swappable
     alternative, is in javascripts/gem-priority.js's "EASY EDIT GUIDE"
     comment. -->

<div class="setup-panel" data-accent="lavender" markdown>

<div class="gem-priority" markdown>
<script type="application/json">
[
  { "col": "dmg", "items": [
    "surge", "blitzrush", "earthcleaver", "bladedance", "turningslash", { "id": "windcut", "alts": [
      { "id": "spincutter", "note": "Use Spincutter CD gem instead if you prefer, Wind Cut has a very low damage share." },
      { "id": "bladedance", "note": "Use Blade Dance CD gem instead if you set its tripod to Weak Point Detection." }
    ] }
  ] },
  { "col": "cd", "items": [
    "blitzrush", "earthcleaver", "windcut", "maelstrom", "surpriseattack"
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

Есть оптимальный порядок скиллов, но у тебя есть свобода при простое или если нужно вклинить скиллы мобильности.

«Разрубающие лезвия» — твой основной скилл мобильности и запасной источник стаков. Применяй их, чтобы гарантированно попасть в спину важными скиллами.

Наносит урон <span class="skill-mention" data-glossary-id="synergy">синергия</span> если нужно, затем повторяй цикл ротации как можешь.

*С 3 сфер:*
{ .lead }

<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "maelstrom", "surpriseattack", "windcut", "earthcleaver", "bladedance", "deathlyslash", "blitzrush", "turningslash", "blitzrush",
{ "id": "surpriseattack", "situational": "stack recovery" },
"surge"]
</script>
</div>

1. Финальный «Внезапный выпад» часто можно пропустить благодаря лишним стакам и ожидаемому простою в рейде.
2. Подумай о сдвиге «Плаща клинков» на 1-3 скилла, когда аптайм падает, чтобы он покрывал «Концентрацию воли» (<span class="skill-mention" data-skill-id="raidcaptain">Неутомимый натиск</span>).
3. <span class="skill-mention" data-skill-id="bladeassault">Призрачные клинки</span> масштабируется намного хуже на «Концентрации воли», чем на Остаточной энергии, и кастуется слишком долго.
      - Он всё ещё полезен для <span class="skill-mention" data-skill-id="atropine">Ардопин-Х</span> открывающих скиллов, или его можно придержать ради жадности с <span class="skill-mention" data-glossary-id="pushimmunity">иммунитет к отбросу</span>/Гиперпробуждения.

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>🐯 Режим (по желанию)<span class="setup-note-arrow"></span></summary>
![tiger mode](../assets/tigermode.png){ .setup-note-image .zoomable-image loading=lazy }
</details>

</div>
</div>

*С нуля сфер:*
{ .lead }

1. Используй a <span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span> (рекомендуется) или переходи к #2.
      - Стая: используй трипод «Плаща клинков» «Контроль сфер» и <span class="skill-mention" data-skill-id="flashblink">Сверхновая</span> пробуждения.
2. Сгенерируй одну сферу, набери минимум 40 стаков, затем «Концентрация воли» вернёт все 3 сферы.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полностью Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="42,29.8,12.9,4,2.6,2.6,2.1" data-ids="surge,blitzrush,deathlyslash,earthcleaver,bladedance,turningslash,windcut"></div>
</div>
</div>