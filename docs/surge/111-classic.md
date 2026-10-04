# 111 Классика 🦁

<div class="build-card-row" markdown>
<div class="build-card" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="111-classic" data-family="surge"></div>

**Лучше всего:**{: .best-для } Тем, кому нравится копить заряд ради одного мощного и приятного удара.

**Компромисс:**{: .tradeoff } Всё держится на балансе «Концентрации воли» (Концентрация воли) и «Плаща клинков».

- Мощные окна для прорывного урона с комбо «Неуловимого пируэта».
- Не нужно придерживать <span class="skill-mention" data-glossary-id="counter">Контр</span>, он заряжается до двух стаков.
- Очень высокая эффективность самоцветов: «Концентрация воли» — практически весь твой урон.
- Доступно с нуля <span class="skill-mention" data-glossary-id="arkgrid">Созвездия А.Р.К.</span> ядра с небольшими правками.
- Нужно постоянно балансировать «Концентрацию воли» <span class="skill-mention" data-glossary-id="backattack">попадание в спину</span> темп с «Концентрацией воли» <span class="skill-mention" data-glossary-id="cpm">CPM</span>.

</div>
<div class="pentagon-badge" data-build="111-classic" data-family="surge" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://www.youtube.com/watch?v=pzFa5zOuNik){ .video-chip } [Геймплей](https://www.youtube.com/watch?v=j-2dGp7PGws){ .video-chip }
</div>
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

=== "111 Классика ★"

    ```
    2D89F44CB0B24806735E07C73478C083707228B4DA81D81F51074C802D5C5D795500F1C3281A6873549CD74ED4CB4E8BD59BE03D263B86A22C024C157D52B6F2
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
      { "id": "orbcontrol", "level": 1 },
      { "id": "limitbreakenl", "level": 3 },
      { "id": "chaosinfusion", "level": 1 },
      { "id": "chaoticpower", "level": 3 }
    ] },
    { "id": "leap", "nodes": [
      { "id": "awakeningamplifier", "level": 1 },
      { "id": "unleashedpower", "level": 5 },
      { "id": "releasepotential", "level": 3 },
      { "id": "instantspell", "level": 3 },
      { "id": "pathoftheblade", "level": 3 }
    ] }
  ]
</script>
</div>

<div class="ark-cores" data-family="surge" markdown>
<script type="application/json">
[
  { "core": "sun", "label": "Deathblade Surge", "points": 0 },
  { "core": "moon", "label": "Surge Core", "points": 0 },
  { "core": "star", "label": "Strike", "points": 0 }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Используй [калькулятор Пассивных талантов](../resources.md#ark-passive-calculator), чтобы оптимизировать узлы «Экспансия».
- <span class="skill-mention" data-ap-id="releasepotential" data-level="3">Стремительное восстановление 3</span> используется, потому что простой, смена фаз в рейде или смерть иногда позволяют применить его ещё раз.
    - Альтернатива — <span class="skill-mention" data-ap-id="transcendentpower" data-level="3">Ключевой аспект 3</span>, что реально полезно только для стражей или твоего четвёртого рейда на Хилвуде без золота.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span>Созвездия А.Р.К.<span class="setup-note-arrow"></span></summary>

- Ядра «Созвездий А.Р.К.» можно качать на свой выбор, но «Ядро Концентрации воли» на 17p даёт второй стак «Двуручного хвата». Это освобождает слот самоцвета и позволит применять «Двуручный хват», не придерживая его под механик рейда.

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
  {"id": "surpriseattack", "level": 10, "tripods": [1, 1, 1], "rune": {"tier": "legendary", "name": "Rage"}},
  {"id": "windcut", "level": 10, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "spincutter", "level": 10, "tripods": [3, 3, 1], "rune": {"tier": "epic", "name": "Galewind"}},
  {"id": "bladedance", "level": 14, "tripods": [1, 1, 2], "rune": {"tier": "epic", "name": "Galewind"}},
  {"id": "earthcleaver", "level": 14, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Vision"}},
  {"id": "turningslash", "level": 14, "tripods": [1, 3, 1], "rune": {"tier": "legendary", "name": "Poison"}},
  {"id": "maelstrom", "level": 10, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Focus"}},
  {"id": "blitzrush", "level": 14, "tripods": [1, 1, 2], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "deathtrance", "subtitle": "Identity"},
  {"id": "breakingmoon", "subtitle": "Technique"},
  {"id": "bladeassault", "subtitle": "Awakening"},
  {"id": "surge", "subtitle": "Identity"}
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Используй <span class="skill-mention" data-rune-name="Purify">Солум</span> на «Разрубающих лезвиях» при необходимости.
- <span class="skill-mention" data-rune-name="Focus" data-rune-tier="legendary">Легендарный Марх</span> на «Плаще клинков» + вино должно хватить по мане, ведь циклы с «Неуловимым пируэтом» её восстанавливают.
    - Если не доверяешь своему аптайму или аптайму саппорта (спец барды), бери еду на ману вместо вина как страховку.
- Альтернативно <span class="skill-mention" data-rune-name="Bleed" data-rune-tier="legendary">Легендарный Джар</span> на «Плаще клинков» + еда на ману: выше потолок и ниже пол, даже с «Неутомимым натиском».

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- Можно использовать трипод «Обнаружение слабых мест» <span class="skill-mention" data-glossary-id="tripod">трипод</span> на «Блице».
    - Требует КД-самоцвета Ур. 10 и/или простоев в рейде, иначе он станет узким местом.
    - Нужно заменить КД-самоцвет «Неумолимого притяжения» на КД «Блица» — это даёт небольшой прирост урона.
- Трипод «Взрыв земли» на «Двуручном хвате» — на твоё усмотрение.
    - Повышенная скорость каста, но сильно снижает мобильность и урон.
- «Аксель» (1-1-2) можно использовать вместо «Разрубающих лезвий», но он не даёт **никакого** восстановления.

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
    "surge", "earthcleaver", "blitzrush", "bladedance", "turningslash", { "id": "windcut", "alts": [
      { "id": "spincutter", "note": "Use Spincutter CD gem instead if you prefer, Wind Cut has a very low damage share." },
      { "id": "earthcleaver", "note": "Use Earth Cleaver CD gem instead pre-Ark Grid as you won't have its second stack." },
      { "id": "bladedance", "note": "Use Blade Dance CD gem instead if you set its tripod to Weak Point Detection or wish to have it available sooner as a safety net." }
    ] }
  ] },
  { "col": "cd", "items": [
    "blitzrush",
    "windcut",
    "maelstrom",
    "surpriseattack",
    "turningslash"
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

«Неуловимый пируэт» даёт 60 стаков при попадании и усиливает следующую «Концентрацию воли» на +60% критического урона.

«Разрубающие лезвия» — твой скилл мобильности и запасной источник стаков. Применяй их, чтобы гарантированно попасть в спину «Концентрацией воли».

Используй цикл с «Неуловимым пируэтом» и его добивку, когда они доступны, иначе повторяй обычный цикл.

*С 3 сфер:*
{ .lead }

<div class="cycle-card cycle-card-multi" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Цикл «Неуловимого пируэта» + добивка</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
[{ "stageLabel": "B.M. Cycle >" }, { "skills": ["turningslash", "surpriseattack"], "situational": "adre/syn for openers" }, "windcut", "deathtrance", "maelstrom", "surpriseattack", "breakingmoon", "surge"]
</script>
</div>
<div class="rotation-line" markdown>
<script type="application/json">
[{ "stageLabel": "Follow-up >" }, "windcut", "deathtrance", { "id": "maelstrom", "situational": "used if you have 2 stacks" }, { "id": "surpriseattack", "situational": "safety stack buffer" }, "earthcleaver", "turningslash", "bladedance", "blitzrush", "surpriseattack", "surge"]
</script>
</div>
<!-- Alternate Follow-up path, not a third stage: kept OUT of the Cycle ->
     Follow-up sequential read/drill (see extra.css's .cycle-alt-branch
     comment and rotation-practice.js's getLines/getSteps comment for why
     this wrapper is what excludes it). Now a <details> so it's collapsed
     by default (same <details>/<summary> instinct as .gem-item-expandable/
     .engraving-card elsewhere on the site) instead of always rendering its
     full chip row inside the card - closed, only the <summary>'s gold
     "Alt \u00b7 Awakening Follow-Up" tag shows, in the exact same spot/size the
     old always-open version's leading stageLabel pseudo-step used to sit;
     open, it drops down into the identical rotation-line the old version
     showed permanently. markdown="span" on <summary> is required for the
     "&middot;" entity to actually parse - see .gem-item-expandable's own
     comment on this same fix. -->
<details class="cycle-alt-branch" markdown>
<summary markdown="span">Альтернатива &middot; Пробуждение на добивке<span class="cycle-alt-arrow"></span></summary>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", { "id": "maelstrom", "situational": "used if you have 2 stacks" }, "turningslash", "bladedance", "bladeassault", "surge"]
</script>
</div>
</details>
</div>

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Обычный цикл</span><span class="cycle-repeat-badge" data-repeat-tip="Repeat this cycle 2 times"><span class="cycle-repeat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></span>&times;2</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "maelstrom", "surpriseattack", "windcut", "earthcleaver", "turningslash", "bladedance", "blitzrush", "surpriseattack", "surge"]
</script>
</div>
</div>

1. Стаки в следующей фазе в дефиците: применяй «Плащ клинков» (если есть 2 стака), затем первый «Внезапный выпад» или «Разрубающие лезвия» при необходимости.
    - Это в основном относится к первой фазе рейда; дальше лишние стаки копятся сами по ходу боя.
    - «Иссечение» в открытии или фазовый скилл пробуждения тоже дают достаточный запас.
   2. Не переживайте за эффективность «Неутомимого натиска»; «Моргенштерн» столь же неэффективен или хуже!
       - Бонус «Неуловимого пируэта» на крит. урон следующего Расхода (самого большого удара) складывается с «Моргенштерном».
       - «Неутомимый натиск» полностью баффает усиленный Расход и позволяет добить <span class="skill-mention" data-rune-name="Rage" data-rune-tier="legendary">Легендарный Раш</span>/<span class="skill-mention" data-skill-id="atropine">Ардопин-Х</span>.
3. <span class="skill-mention" data-skill-id="bladeassault">Призрачные клинки</span> масштабируется намного хуже на «Концентрации воли», чем на Остаточной энергии, и кастуется слишком долго.
      - Он всё ещё полезен для <span class="skill-mention" data-skill-id="atropine">Ардопин-Х</span> открывающих скиллов, или его можно придержать ради жадности с <span class="skill-mention" data-glossary-id="pushimmunity">иммунитет к отбросу</span>/Гиперпробуждения.
4. Кажется сложнее, чем есть: посмотри [это видео](https://www.youtube.com/watch?v=4bwhDT--0fo), чтобы увидеть полный цикл в деле.

<!-- Community-contributed alternative: a full replacement for both cycles
     above (not a recommendation over them), for players who'd rather keep
     a Stack reserve than chase max CPM. Self-contained: Cycles 1/2 here
     are its own local cycle-cards (Cycle 1 is the opener STAGE only, no
     Follow-Up), not shared with the page's cycle-num-1/2 above, plus its
     own new Cycles 3/4 (cycle-num-4 added in extra.css for this). No
     overview line above the cards (matches the page's main Cycle 1/2
     pair above) - the loop is just "repeat Cycle 2 twice", carried by
     Cycle 2's own title-bar repeat badge below rather than a separate
     "1 -> 2x2 -> 3 -> etc." map line up top. -->

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>Ротация с запасом стаков<span class="setup-note-arrow"></span></summary>

Альтернатива базовой ротации. Копит запас стаков, поэтому ты никогда не будешь без них. Идёт как 1>2>2>3>1 и так далее.

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Цикл «Неуловимого пируэта»</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
[{ "id": "maelstrom", "situational": "buff for openers" }, { "skills": ["turningslash", "surpriseattack"], "situational": "adre/syn for openers" }, { "id": "windcut", "situational": "precast for openers" }, "deathtrance", "surpriseattack", "breakingmoon", "surge"]
</script>
</div>
</div>

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Обычный цикл</span><span class="cycle-repeat-badge" data-repeat-tip="Repeat this cycle 2 times"><span class="cycle-repeat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></span>&times;2</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "maelstrom", "surpriseattack", "windcut", "earthcleaver", "turningslash", "bladedance", "blitzrush", "surpriseattack", "surge"]
</script>
</div>
</div>

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-3">3</span><span class="cycle-title">Цикл до «Неуловимого пируэта»</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "earthcleaver", "surpriseattack", "windcut", "turningslash", "bladedance", "maelstrom", "blitzrush", { "id": "spincutter", "situational": "stack recovery/reposition" }, "surge"]
</script>
</div>
</div>

</details>

</div>
</div>

*С нуля сфер:*
{ .lead }

1. Используй <span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span> (рекомендуется) или переходи к #2.
      - Стая: используй трипод «Плаща клинков» «Контроль сфер» и <span class="skill-mention" data-skill-id="flashblink">Сверхновая</span> пробуждения.
2. Сгенерируй одну сферу, набери минимум 40 стаков, затем «Концентрация воли» вернёт все 3 сферы.

*Применение «Ардопина-Х»:*
{ .lead }

1. Умести три «Концентрации воли» в 10 секунд. Используй <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> прямо перед попаданием первой «Концентрации воли».
2. Вторая или третья «Концентрация воли» должна быть частью цикла с «Неуловимым пируэтом», иначе не хватит стаков.
3. Стаки и обстановка постоянно меняются, так что фиксированная ротация была бы путами.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полностью Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="75,6.5,4,2.7,2.6,2.6, 2.5" data-ids="surge,breakingmoon,earthcleaver,blitzrush,bladedance,turningslash,windcut"></div>
</div>
</div>