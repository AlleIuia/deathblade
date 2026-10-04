# 333 Шакрамы ✨

<div class="build-card-row" markdown>
<div class="build-card" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="333-ceiling" data-family="re"></div>

**Лучше всего:**{: .best-для } Тем, кто хочет максимальный урон в Остаточной энергии.

**Компромисс:**{: .tradeoff } Чуть меньше генерации сфер и менее прощающая ротация.

- Использует «Воздушные шакрамы» как два быстрых каста (<span class="skill-mention" data-glossary-id="ftfcombo">FTF</span> комбо) через сброс скилла.
- «Хитроумный финт» всегда свободен для контр-скиллов, восстановления, очищения или <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> поддержания.
- Высокая эффективность самоцветов: «Воздушные шакрамы» и «Убийственная сталь» — основа твоего урона.
- Чувствителен к высокому пингу или низкому FPS, но это компенсируется несколькими правками.

</div>
<div class="pentagon-badge" data-build="333-ceiling" data-family="re" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://youtu.be/Wwm7apTwg84?si=dmO_fvNxoXuoQuf5){ .video-chip } [Геймплей](https://www.youtube.com/watch?v=MP--TuRX3xI){ .video-chip }
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

=== "333 Шакрамы ★"

    ```
    900CC6DEE164317B007DB080728058559F253356D493D9068FC9464270019E2DA0657696B30F009427D2603F2E13AB070E8A77607E775659BE0F35EF964A9929
    ```

=== "Циркуляция энергии 5 (проще)"

    ```
    76A1B31F95DC1F7B50FB830D485E547AE6140D5427029F9729DD63D83C3AAE2A3EEF991E2263BA7AC3B9D67056DB26958AC8DB67D4D0E20EB22F0A70C1E86A35
    ```

    - Использует <span class="skill-mention" data-ap-id="orbcirculation" data-level="5">Циркуляция энергии 5</span>, что делает билд прощающим ценой примерно 3% урона.
    - Дополнительно использует <span class="skill-mention" data-rune-name="Wealth" data-rune-tier="legendary">Легендарный Эйге</span> на «Длани Авесты», что иначе было бы невозможно.

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
      { "id": "limitbreakevo", "level": 2 },
      { "id": "keensense", "level": 1 },
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
      { "id": "unleashedpower", "level": 5 },
      { "id": "releasepotential", "level": 4 },
      { "id": "instantspell", "level": 2 },
      { "id": "danceofnightmares", "level": 3 }
    ] }
  ]
</script>
</div>

<div class="ark-cores" data-family="re" markdown>
<script type="application/json">
[
  { "core": "sun", "label": "Levin Slash", "points": 3 },
  { "core": "moon", "label": "Deathblade Wave", "points": 3 },
  { "core": "star", "label": "Death Sword Energy", "points": 2 }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Используй [калькулятор Пассивных талантов](../resources.md#ark-passive-calculator), чтобы оптимизировать узлы «Экспансия».
- <span class="skill-mention" data-ap-id="releasepotential" data-level="3">Стремительное восстановление 3</span> / <span class="skill-mention" data-ap-id="instantspell" data-level="3">Божественное вдохновение 3</span> / <span class="skill-mention" data-ap-id="awakeningamplifier" data-level="1">Пробужденное сознание 1</span> может решить проблемы с маной ценой совсем небольшой потери урона.
    - Менее комфортен с +КД% <span class="skill-mention" data-glossary-id="bracelet">браслет</span> линия и/или низкий <span class="skill-mention" data-glossary-id="specializationstat">Специализация</span>.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Созвездия А.Р.К.</span><span class="setup-note-arrow"></span></summary>

- Добирай «Энергию меча смерти» до 17p, когда получается: «Воздушные шакрамы» — твой скилл с наибольшим уроном.

</details>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span><span class="skill-mention" data-ap-id="orbcirculation" data-level="5">Циркуляция энергии 5</span><span class="setup-note-arrow"></span></summary>

- Делает билд прощающим ценой примерно 3% урона за счёт роста пассивной генерации сфер.

<div class="skill-setup" data-family="re" markdown>
<script type="application/json">
[
  {"id": "soulabsorber", "level": 14, "rune": {"tier": "legendary", "name": "Wealth"}}
]
</script>
</div>

<div class="ark-passives ark-passives-compact" data-family="re" markdown>
<script type="application/json">
[
  { "id": "enlightenment", "nodes": [
    { "id": "swiftstrike", "level": 1 },
    { "id": "remainingenergy", "level": 3 },
    { "id": "firmwill", "level": 3 },
    { "id": "swordcraftenhancement", "level": 1 },
    { "id": "extremebodymovement", "level": 2 },
    { "id": "orbcirculation", "level": 5 }
  ] }
]
</script>
</div>

</details>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>NA/EU 333 Стандарт<span class="setup-note-arrow"></span></summary>

- Альтернатива, старающаяся сохранить похожий стиль игры на «Стандарт» ОС, с «Разрубающими лезвиями» и лишней маной.
    - Это улучшение относительно «Стандарта» ОС, но стиль игры несовместим с современной ОС и уступает по урону.
    - Рекомендуется, если другие билды не получаются или ты предпочитаешь привычную игру по старым билдам.
    - Его гайд и вся связанная информация ведутся [здесь](https://docs.google.com/document/d/1vs1YC_7adaYwtfN9cHO3x2KuMPq6GcKRlGo5vnsN4Lk/edit); здесь он не размещён и не поддерживается.

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
  {"id": "soulabsorber", "level": 14, "tripods": [3, 1, 2], "rune": {"tier": "epic", "name": "Wealth"}},
  {"id": "twinshadows", "level": 14, "tripods": [2, 1, 2], "rune": {"tier": "epic", "name": "Wealth"}},
  {"id": "headhunt", "level": 7, "tripods": [2, 2], "rune": {"tier": "uncommon", "name": "Wealth"}},
  {"id": "turningslash", "level": 14, "tripods": [1, 3, 1], "rune": {"tier": "rare", "name": "Wealth"}},
  {"id": "maelstrom", "level": 10, "tripods": [2, 1, 2], "rune": {"tier": "rare", "name": "Wealth"}},
  {"id": "fatalwave", "level": 14, "tripods": [2, 3, 2], "rune": {"tier": "legendary", "name": "Galewind"}},
  {"id": "blitzrush", "level": 12, "tripods": [1, 1, 1], "rune": {"tier": "rare", "name": "Wealth"}},
  {"id": "voidstrike", "level": 13, "tripods": [3, 1, 2], "rune": {"tier": "legendary", "name": "Wealth"}},
  {"id": "surge", "subtitle": "Identity"},
  {"id": "deathlyslash", "subtitle": "Technique"},
  {"id": "bladeassault", "subtitle": "Awakening"}
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Используй <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="legendary">Легендарный Агель</span>, <span class="skill-mention" data-rune-name="Focus" data-rune-tier="legendary">Легендарный Марх</span> или <span class="skill-mention" data-rune-name="Purify">Солум</span> на «Хитроумном финте», если предпочитаешь.

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- Трипод «Контроль сфер» на «Воздушных шакрамах» **нерабочий**, брать его не стоит.
- Можно использовать «Быстрая подготовка» <span class="skill-mention" data-glossary-id="tripod">трипод</span> на «Хитроумном финте», если проблем с маной нет.
- Можно опустить «Хитроумный финт» до Ур. 1 ради меньшего расхода маны и дополнительной мобильности.
    - Однако Ур. 7 практичнее и делает восстановление намного проще и быстрее.

</details>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>Опасное богатство<span class="setup-note-arrow"></span></summary>

- <span class="skill-mention" data-rune-name="Wealth" data-rune-tier="epic">Эпический Эйге</span> руна на «Воздушных шакрамах» может сделать билд прощающим ценой примерно 4% урона.
- Цикл пойдёт не так гладко, но снижение стресса и спешки может кому-то подойти.
- Если честно, не играй так; 333 с <span class="skill-mention" data-ap-id="orbcirculation" data-level="5">Циркуляция энергии 5</span>, 313 или вообще любой билд на «Твёрдой воли» покажет себя лучше.

<div class="skill-setup" data-family="re" markdown>
<script type="application/json">
[
  {"id": "fatalwave", "level": 14, "rune": {"tier": "epic", "name": "Wealth"}},
  {"id": "voidstrike", "level": 11, "rune": {"tier": "epic", "name": "Wealth"}},
  {"id": "soulabsorber", "level": 14, "rune": {"tier": "legendary", "name": "Wealth"}},
  {"id": "twinshadows", "level": 14, "rune": {"tier": "rare", "name": "Wealth"}},
  {"id": "maelstrom", "level": 10, "rune": {"tier": "uncommon", "name": "Wealth"}}
]
</script>
</div>

<div class="ark-passives ark-passives-compact" data-family="re" markdown>
<script type="application/json">
[
  { "id": "leap", "nodes": [
    { "id": "awakeningamplifier", "level": 1 },
    { "id": "unleashedpower", "level": 5 },
    { "id": "releasepotential", "level": 3 },
    { "id": "instantspell", "level": 3 },
    { "id": "danceofnightmares", "level": 3 }
  ] }
]
</script>
</div>

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
    "fatalwave", "surge", "twinshadows", "soulabsorber",
    "turningslash", "voidstrike", "blitzrush"
  ] },
  { "col": "cd", "items": [
    "maelstrom", "blitzrush", "turningslash", "fatalwave"
  ] }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span>Общие самоцветы<span class="setup-note-arrow"></span></summary>

- При желании эту схему самоцветов можно разделить с альтами [313 (Легендарный шакрам)](313-high-floor.md) и 113 (Искусства).

</details>

</div>

</div>

## Ротация {#rotation}

<!-- Each `.rotation-line` is a compact JSON step list of skill ids in
     order - names/icons resolve automatically, same id vocabulary as Skill
     Setup and Gems above. Full schema (situational steps, swapNext,
     cycleRef, trailing suffix, etc.) is in javascripts/rotation-line.js's
     "EASY EDIT GUIDE" comment. -->

=== "Циклы"

    Используй **Открытие**, затем чередуй эти два цикла по необходимости:

    <div class="cycle-card">

    <div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Цикл «Искусства меча» + «Убийственной стали»</span></div>

    <div class="rotation-line">

    <script type="application/json">
    ["maelstrom", "voidstrike", "twinshadows", "deathlyslash", "fatalwave", "turningslash", "fatalwave", "surge"]
    </script>

    </div>

    </div>

    <div class="cycle-card">

    <div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Цикл «Длани Авесты» + «Охоты за головами»</span></div>

    <div class="rotation-line">

    <script type="application/json">
    ["soulabsorber", "blitzrush", "twinshadows",
     { "id": "maelstrom", "situational": "recovery" },
     "fatalwave", "turningslash", "fatalwave", "surge"]
    </script>

    </div>

    </div>

    Старайся уместить «Двойную плеть» из цикла **2** под «Плащ клинков» из цикла **1**, чтобы набрать 3 сферы без повторного применения или восстановления. Если дошёл только до «Длани Авесты», обычно хватает одного дополнительного применения «Хитроумного финта».

    «Плащ клинков» в цикле **2** применяется, только если иначе не хватит 3 сфер. Решай сам. Если применил, он действует минимум до «Искусства меча» в цикле **1**; повторное применение на истечении перезарядки синхронизирует их. If it wasn't needed или it didn't last, nothing changes.

=== "Открытия"

    Открытие <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> и примени <span class="skill-mention" data-glossary-id="synergy">синергии</span> эффективно. Если покажется сложным, просто применяй синергию и «Концентрацию воли» на полных сферах — этого достаточно, чтобы начать чередовать циклы.

    *С 3 сфер (<span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span>):*
    {: .lead }

    <div class="rotation-line">

    <script type="application/json">
    [{ "id": "headhunt", "swapNext": true }, "twinshadows", "maelstrom", "turningslash", "deathlyslash", "fatalwave", "surge",
     { "cycleRef": 2, "title": "Soul Absorber + Blitz Rush Cycle" },
     { "cycleRef": 1, "title": "Void Strike + Deathly Slash Cycle" },
     { "suffix": "etc." }]
    </script>

    </div>

    1. Если доступен, <span class="skill-inline" data-skill-id="bladeassault"><span class="skill-inline-name">Призрачные клинки</span></span> + <span class="skill-inline"><span class="skill-inline-name">FTF</span></span> взаимозаменяем с циклом **2**.
    2. Эффективно применять <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> после «Убийственной стали», когда доступны «Призрачные клинки».

    *С нуля/части сфер:*
    {: .lead }

    1. Цикл **1**, если доступна «Убийственная сталь», иначе начни с «Плаща клинков» + цикл **2**.
    2. Комбо FTF применяй раньше ради лучшего аптайма групповой синергии.

=== "Восстановление"

    <div class="setup-panel" data-accent="lavender">

    <div class="setup-notes">

    <details class="setup-note" data-kind="tip" open>

    <summary><span class="setup-note-tag">Советы</span>Видео по восстановлению<span class="setup-note-arrow"></span></summary>

    Посмотри это 2-минутное [видео по восстановлению в 333](https://www.youtube.com/watch?v=4478vFVX4VA) и прочитай названия глав.

    </details>

    </div>

    </div>

    1. Используй <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> когда сфер немного не хватает, просто применяй, если сомневаешься.
    2. Используй свободные стаки «Двойной плети»/«Плаща клинков» и/или «Охоту за головами», если пропустил важные скиллы.
    3. Используй <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> вместо <span class="skill-inline" data-skill-id="twinshadows"><span class="skill-inline-name">Двойная плеть</span></span> в цикле для восстановления стаков, если они закончатся.
    4. Используй «Плащ клинков» в комбо с FTF раньше, если ждёшь основные скиллы генерации сфер.
    5. При несовпадении фаз придержи «Убийственную сталь» до следующего цикла **1**. Потеря урона, но проще.

=== "Коротко:"

    ![333 TL;DR flowchart](../assets/tldr-333.png){ .zoomable-image loading=lazy }

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полностью Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="34.3,17.2,16.6,7.7,7,6.5,5,4" data-ids="fatalwave,deathlyslash,surge,twinshadows,soulabsorber,turningslash,voidstrike,blitzrush"></div>
</div>
</div>