# 222 Ускоренный 🐆

<div class="build-card-row" markdown>
<div class="build-card" data-updated="2026-09-21" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="222-speedy" data-family="surge"></div>

**Лучше всего:**{: .best-для } Тем, кому нужно что-то простое для старта, но сложное для освоения.

**Компромисс:**{: .tradeoff } Повышенный <span class="skill-mention" data-glossary-id="backattack">попадание в спину</span> требований к стрессу и аптайму.

- Простой геймплей, заточенный на аптайм, без трюков.
- Использует «Разрубающие лезвия» и «Двуручный хват» ради мобильности и полезности.
- Множество <span class="skill-mention" data-glossary-id="pushimmunity">иммунитет к отбросу</span>, лишние стаки и свободу в ротации.
- Очень высокая эффективность самоцветов: «Концентрация воли» и «Убийственная сталь» — практически весь твой урон.
- Приходится постоянно балансировать попадание в спину у «Концентрации воли» и «Убийственной стали» темп с «Концентрацией воли» <span class="skill-mention" data-glossary-id="cpm">CPM</span>.

</div>
<div class="pentagon-badge" data-build="222-speedy" data-family="surge" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Video Guide](https://www.youtube.com/watch?v=V1UQhE37Yjs){ .video-chip } [Gameplay](https://www.youtube.com/watch?v=JQISLdCtXjQ){ .video-chip }
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

Убедись, что прочитал [Основы](essentials.md), затем примени и <span class="skill-mention" data-glossary-id="arkpassive">Пассивные таланты</span>" и "Навык", чтобы не ошибиться. По самоцветам ([Gems](#gems)) следуй гайду.

</details>

</div>
</div>

=== "222 Ускоренный"

    ```
    529EFCAD5AADC38E0F6BA8A7F7781C136E88697BFAF5999811D8898564A010617FD14F6822C637C0A2B745A010DF50CE26CBEA0A8F493EAF49317C90E2806F53
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
  { "core": "sun", "label": "Slaughter Spectacle", "points": 0 },
  { "core": "moon", "label": "Twin Swords Dance", "points": 0 },
  { "core": "star", "label": "Swift Resolution", "points": 1 }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Используй [калькулятор Пассивных талантов](../resources.md#ark-passive-calculator), чтобы оптимизировать узлы «Экспансия».
- <span class="skill-mention" data-ap-id="chaosinfusion" data-level="1">Фатальный удар 1</span> + <span class="skill-mention" data-ap-id="orbcontrol" data-level="1">Координация сфер 1</span> можно использовать, если доля «Концентрации воли» в уроне стабильно выше 50%.
- Этот билд умеет применять <span class="skill-mention" data-skill-id="raidcaptain">Неутомимый натиск</span> + <span class="skill-mention" data-skill-id="massincrease">Карающая длань</span> с наименьшими издержками.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Дерево талантов</span><span class="setup-note-arrow"></span></summary>

- Урон и удобство будут заметно ниже, если взять минимальные требования по ядрам.

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
  {"id": "surpriseattack", "level": 13, "tripods": [1, 1, 1], "rune": {"tier": "legendary", "name": "Rage"}},
  {"id": "windcut", "level": 14, "tripods": [3, 3, 1], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "upperslash", "level": 11, "tripods": [2, 3, 2], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "bladedance", "level": 14, "tripods": [1, 1, 2], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "spincutter", "level": 10, "tripods": [3, 3, 1], "rune": {"tier": "epic", "name": "Galewind"}},
  {"id": "earthcleaver", "level": 10, "tripods": [3, 3, 2], "rune": {"tier": "legendary", "name": "Vision"}},
  {"id": "turningslash", "level": 14, "tripods": [1, 3, 1], "rune": {"tier": "legendary", "name": "Poison"}},
  {"id": "maelstrom", "level": 10, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Bleed"}},
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

- Используй <span class="skill-mention" data-rune-name="Purify">Солум</span> на «Хитроумном финте», если переходишь на альтернативную сборку.
- Используй <span class="skill-mention" data-rune-name="Focus" data-rune-tier="legendary">Легендарный Марх</span> на «Плаще клинков», если испытываешь проблемы с маной.
- Используй <span class="skill-mention" data-rune-name="Vision" data-rune-tier="legendary">Легендарный Ульд</span> на «Внезапном выпаде», если он полезнее, чем <span class="skill-mention" data-rune-name="Rage" data-rune-tier="legendary">Легендарный Раш</span>.
    - Повышает шанс получить лишний стак на прекасте «Внезапного выпада».
    - На альтернативной сборке дай «Хитроумному финту» <span class="skill-mention" data-rune-name="Galewind">Агель</span> или <span class="skill-mention" data-rune-name="Vision">Ульд</span> руна, которая доступна.

   *Примечание: «Блиц» отображается <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="legendary">Легендарный Агель</span> в игре, но на самом деле он не даёт ничего сверх <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="epic">Эпический Агель</span> (или даже свыше <span class="skill-mention" data-rune-name="Vision" data-rune-tier="legendary">Легендарный Ульд</span>) из-за того, что игра [округляет вниз](https://www.inven.co.kr/board/lostark/5497/175825) сокращения времени каста до интервалов по 0,05 с — держи Эпический, чтобы слот руны остался свободным для другого скилла.*

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- На альтернативной сборке опусти «Хитроумный финт» до Ур. 1 ради меньшего расхода маны.
    - Поднимать выше Ур. 4 невыгодно: теряешь стак и повышаешь расход маны почти без причины.
- Можно использовать «Широкий удар» <span class="skill-mention" data-glossary-id="tripod">трипод</span> на «Внезапном выпаде» ради заметно большего удобства.
    - С «Широким ударом» ты **обязан** применять «Иссечение» рано в открытиях ради синергии.
    - Теперь он жизнеспособнее, чем когда-либо, потому что добивающие попадания «Иссечения» продлевают его аптайм.
- «Двуручный хват» (3-3-2) — выбор по умолчанию здесь за мобильность и полезность.
    - Это более медленный и уязвимый каст, который тратит заметно больше маны — поэтому «Плащ клинков» и «Восходящий вихрь» в этом билде стоят на Ур. 10.
    - «Хитроумный финт» — более дешёвый вариант, если позволяет мана; смотри примечание к альтернативе ниже.

</details>

<details class="setup-note" data-kind="example" open markdown>
<summary><span class="setup-note-tag">Альтернатива</span>«Аксель» против «Разрубающих лезвий»<span class="setup-note-arrow"></span></summary>

<div class="skill-compare-row" markdown>
<div class="skill-compare-col" markdown>
<span class="skill-compare-title"><span class="skill-inline" data-skill-id="spincutter"><span class="skill-inline-name">Разрубающие лезвия</span></span> (3-3-1) · По умолчанию</span>

Скилл для смены позиции по умолчанию и более безопасный из двух: не требует практики и работает в каждом цикле, ценой части потолка по сравнению с «Акселем».

**В ротации:**

- Смена позиции им лишает тебя <span class="skill-mention" data-glossary-id="cpm">CPM</span> по сравнению с «Акселем», если применён 2 или более раз (тапы). Одно применение немного быстрее «Акселя».
- Смена позиции им со скипом «Восходящего вихря» лишает тебя бесплатного <span class="skill-mention" data-glossary-id="pushimmunity">иммунитет к отбросу</span> окно — одно из ключевых преимуществ билда. У тебя останутся неприменённые скиллы, так что при развороте босса не повезёт.
- Перемещает тебя вокруг босса, поэтому целиться нужно наружу к его спине, рискуя промахнуться из-за движения «Убийственной стали» вперёд.

**Лучше всего:**{: .best-для } Тем, кто предпочитает простоту: один цикл проще повторять, если не хочется разбираться в продвинутых циклах со скипами и их вариантах восстановления.

</div>
<div class="skill-compare-col" markdown>
<span class="skill-compare-title"><span class="skill-inline" data-skill-id="darkaxel"><span class="skill-inline-name">Аксель</span></span> · Альтернатива</span>

Вариант максимального потолка. Он воссоздаёт «Концентрацию воли» ОС двумя скиллами: «Аксель» переносит тебя через босса, а «Убийственная сталь» точно вбивает тебя в его спину — бери, если освоишь циклы со скипами.

**В ротации:**

- Обычно лучше <span class="skill-mention" data-glossary-id="cpm">CPM</span> при смене позиции; быстрее, чем 2 или более применений (тапов) «Разрубающих лезвий».
- Всегда применяй прямо перед «Убийственной сталью» и «Концентрацией воли», оставляя минимум случайности.
- Аварийная кнопка иммунитета к отбросу: экономит пробел и позволяет жадничать вдвое больше.
    - Такое применение ограничивает мобильность в цикле, но повышает аптайм на боссе.

**Лучше всего:**{: .best-для } Тем, кто хочет максимальный потолок и умеет выполнять циклы со скипами.

**Компромисс:**{: .tradeoff } Требует практики и раскрывается по полной, когда освоишь продвинутые циклы со скипами.

</div>
<div class="skill-compare-foot" markdown>
**Лучшее из двух:** Меняй свободно под контент или :ratJAM: бери Ур. 4 <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> вместо <span class="skill-inline" data-skill-id="earthcleaver"><span class="skill-inline-name">Двуручный хват</span></span> когда <span class="skill-mention" data-glossary-id="counter">Контр</span> не нужен.
</div>
</div>

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
    "surge",
    "bladedance",
    "turningslash",
    "windcut"
  ] },
  { "col": "cd", "items": [
    "upperslash",
    "surpriseattack",
    "maelstrom",
    "bladedance",
    "windcut",
    "turningslash",
      { "id": "spincutter", "alts": [
        { "id": "surpriseattack", "note": "Use Surprise Attack DMG instead if you prefer, or even another class's Lv 10 gem." },
        { "id": "darkaxel", "note": "Use if you decide to go with Dark Axel." }
    ] }
  ] }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Требования к самоцветам<span class="setup-note-arrow"></span></summary>

- Чтобы раскрыть потолок, этому билду нужно больше вложений в КД-самоцветы, чем остальным.
    - <span class="skill-mention" data-skill-id="massincrease">Карающая длань</span> и/или <span class="skill-mention" data-ap-id="optimizedtraining" data-level="1">Изнурительные тренировки 1</span> помогают сгладить картину при небольших вложениях.
    - +КД% <span class="skill-mention" data-glossary-id="bracelet">браслет</span> повышает требования к уровню самоцвета на 1, Необычный <span class="skill-mention" data-glossary-id="specializationstat">Специализация</span> не рекомендуется.
    - Как только перезарядка «Блица» и «Плаща клинков» достигнет Ур. 9, приоритет перезарядки «Неумолимого притяжения» сильно растёт.
    - Список приоритетов самоцветов выше предполагает ротацию с продвинутыми циклами со скипами.

</details>

</div>

</div>

## Ротация {#rotation}

<!-- Each `.rotation-line` is a compact JSON step list of skill ids in
     order - names/icons resolve automatically, same id vocabulary as Skill
     Setup and Gems above. Full schema (situational steps, swapNext,
     cycleRef, trailing suffix, etc.) is in javascripts/rotation-line.js's
     "EASY EDIT GUIDE" comment. -->

Есть оптимальный порядок скиллов, но у тебя есть свобода при простое или если нужно вклинить скиллы мобильности.

«Судьба: Усиленная острота» накапливается до 5 стаков за счёт применения (Обычных) скиллов и усиливает «Убийственную сталь».

   Применяй «Разрубающие лезвия» (или «Аксель», если берёшь альтернативную сборку), чтобы гарантированно попасть в спину «Убийственной сталью» и «Концентрацией воли», если нужно.

Используй цикл открытия и либо повторяй его бесконечно (просто), либо переходи к продвинутым циклам со скипами (максимум урона).

*С 3 сфер:*
{ .lead }

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Открытие с перенакапом стаков — 68 стаков</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "surpriseattack", "maelstrom", "windcut", "upperslash", "turningslash", "bladedance", "deathlyslash", "surpriseattack", "surge"]
</script>
</div>
</div>

1. Это открытие перетекает в циклы ниже, но и само по себе годится, если предпочитаешь простоту и не против простоев.
2. В циклах с добивкой «Внезапным выпадом» он всегда идёт перед «Плащом клинков», чтобы перезарядки совпали.

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Режим леопарда (рекомендуется)<span class="setup-note-arrow"></span></summary>

После открытия чередуй эти два цикла по необходимости ради максимального урона:

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Цикл со скипом «Внезапного выпада» — 61 стаков</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["windcut", "deathtrance", "maelstrom", "surpriseattack", "windcut", "upperslash", "turningslash", "bladedance", "deathlyslash", "surge"]
</script>
</div>
</div>

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-3">3</span><span class="cycle-title">Цикл со скипом «Неумолимого притяжения» — 60 стаков</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
["deathtrance", "surpriseattack","maelstrom", "windcut", "upperslash", "turningslash", "bladedance", "deathlyslash", "surpriseattack", "surge"]
</script>
</div>
</div>

1. Цикл **2** даёт запас, оставляя «Внезапный выпад» на восстановление; цикл **3** даёт более Легендарный CPM.
2. Идеально чередование **2>3>2>3**, но по паттернам босса допустимы и варианты вроде **2>3>3>2** или **2>2>3>3**.
      - Цикл **3** предпочтителен на опасных паттернах босса, потому что у «Неумолимого притяжения» нет иммунитета к параличу.
      - Восстанавливайся «Неумолимым притяжением» или «Внезапным выпадом» и выбирай следующий цикл по доступности.
3. Добивку «Внезапным выпадом» можно пропустить, если перед «Убийственной сталью» у тебя 49+ стаков.
      - Аналогично для 40+ стаков перед «Блицем», 30+ стаков перед «Восходящим вихрём» и так далее.
      - Если перед активацией «Боевого транса» у тебя 8+ стаков, можно пропустить и прекаст «Неумолимого притяжения», и добивку «Внезапного выпада».
      - При 15+ стаках перед «Боевым трансом» можно пропускать и прекаст «Неумолимого притяжения», и добивку «Внезапного выпада» два цикла подряд.
4. Кажется сложнее, чем есть: посмотри [это видео](https://www.youtube.com/watch?v=V1UQhE37Yjs), чтобы увидеть полный цикл в деле.

Полезно думать обо всём внутри <span class="skill-inline" data-skill-id="deathtrance"><span class="skill-inline-name">Боевой транс</span></span> и <span class="skill-inline" data-skill-id="deathlyslash"><span class="skill-inline-name">Убийственная сталь</span></span> как 53 стака, а прекаст «Неумолимого притяжения» или «Внезапный выпад» как добивку — гибкие варианты, которые дают нужные 7+ стаков, чтобы завершить «Концентрацию воли» на 60+ стаков.
</details>

</div>
</div>

1. В зависимости от скорости атаки и задержки прекаст «Неумолимого притяжения» может дать 7 стаков вместо 8.
2. При меньшей скорости атаки (<span class="skill-mention" data-skill-id="massincrease">Карающая длань</span>), «Убийственная сталь» может дать 12 стаков вместо 11.
3. Лучше применить «Концентрацию воли» примерно на 59 стаках, чем ждать больше 1,5 секунды.
4. Задержка «Убийственной стали» + «Концентрации воли» больше чем на 1,75 с ради гарантированного попадания в спину — потеря урона.
5. Задержка *только* «Концентрации воли» больше чем на 1 секунду ради гарантированного попадания в спину — тоже потеря урона.
6. <span class="skill-mention" data-skill-id="bladeassault">Призрачные клинки</span> масштабируется намного хуже на «Концентрации воли», чем на Остаточной энергии, и кастуется слишком долго.
      - Он всё ещё полезен для открывающих скиллов, или его можно придержать ради жадности с <span class="skill-mention" data-glossary-id="pushimmunity">иммунитет к отбросу</span>/Гиперпробуждения.

*Примечание: в циклах без прекаста момент входа в «Боевой транс» — ровно в момент попадания «Концентрации воли». Это не прощает ошибок, но ситуацию можно улучшить макросом, который очень быстро жмёт клавишу Идентичности 2-3 раза без каких-либо минусов, повышая CPM и удобство.*

*С нуля сфер:*
{ .lead }

1. Используй a <span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span> (рекомендуется) или переходи к #2.
      - Стая: используй трипод «Плаща клинков» «Контроль сфер» и <span class="skill-mention" data-skill-id="flashblink">Сверхновая</span> пробуждения.
2. Сгенерируй одну сферу, набери минимум 40 стаков, затем «Концентрация воли» вернёт все 3 сферы.

*Применение «Ардопина-Х»:*
{ .lead }

1. Используй <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> прямо перед «Убийственной сталью» и умести две пары «Убийственная сталь» + «Концентрация воли» в 10 секунд.
2. Выполняй самые быстрые циклы, адаптируясь к числу стаков и паттернам босса.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полностью Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="47.8,35.5,7.1,3.2,2.4,0.8" data-ids="surge,deathlyslash,bladedance,turningslash,windcut,surpriseattack"></div>
</div>
</div>