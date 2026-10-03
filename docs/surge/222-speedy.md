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

**Best For:**{: .best-for } Игрокам, которым нужно что-то простое в освоении, но сложное в мастерстве. **Компромисс:**{: .tradeoff } Повышенные <span class="skill-mention" data-glossary-id="backattack">атака в спину</span> требования к напряжению и активности. - Простая игра, заточенная на активность, без трюков. - Использует Разрубающие лезвия и Двуручный хват ради мобильности и полезности. - Много <span class="skill-mention" data-glossary-id="pushimmunity">неуязвимость к отбрасыванию</span>, лишние стаки и свободу в скилах.
- Очень высокая эффективность самоцветов: Концентрация воли и Убийственная сталь — почти весь твой DPS.
- Must constantly balance Surge and Deathly Slash атака в спину с Концентрацией воли <span class="skill-mention" data-glossary-id="cpm">CPM</span>.

</div>
<div class="pentagon-badge" data-build="222-speedy" data-family="surge" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://www.youtube.com/watch?v=V1UQhE37Yjs){ .video-chip } [Геймплей](https://www.youtube.com/watch?v=JQISLdCtXjQ){ .video-chip }
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

Прочитай [Основы](essentials.md), затем в актуализации выбери и «<span class="skill-mention" data-glossary-id="arkpassive">Пассивки А.Р.К.</span>», и «Навык», чтобы не ошибиться. По [Гемам](#gems) следуй гайду.

</details>

</div>
</div>

=== "222 Speedy"

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
  {
    "id": "evolution",
    "nodes": [
      {
        "id": "crit",
        "level": 10
      },
      {
        "id": "specialization",
        "level": 30
      },
      {
        "id": "keensense",
        "level": 2
      },
      {
        "id": "limitbreakevo",
        "level": 1
      },
      {
        "id": "strike",
        "level": 2
      },
      {
        "id": "master",
        "level": 1
      },
      {
        "id": "pulverize",
        "level": 1
      },
      {
        "id": "standingstriker",
        "level": 2
      }
    ]
  },
  {
    "id": "enlightenment",
    "nodes": [
      {
        "id": "surgeenhancement",
        "level": 1
      },
      {
        "id": "orbcompression",
        "level": 3
      },
      {
        "id": "orbcontrol",
        "level": 2
      },
      {
        "id": "limitbreakenl",
        "level": 3
      },
      {
        "id": "chaoticpower",
        "level": 3
      }
    ]
  },
  {
    "id": "leap",
    "nodes": [
      {
        "id": "awakeningamplifier",
        "level": 1
      },
      {
        "id": "unleashedpower",
        "level": 5
      },
      {
        "id": "releasepotential",
        "level": 3
      },
      {
        "id": "instantspell",
        "level": 3
      },
      {
        "id": "danceofscreams",
        "level": 3
      }
    ]
  }
]
</script>
</div>

<div class="ark-cores" data-family="surge" markdown>
<script type="application/json">
[
  {
    "core": "sun",
    "label": "Slaughter Spectacle",
    "points": 0
  },
  {
    "core": "moon",
    "label": "Twin Swords Dance",
    "points": 0
  },
  {
    "core": "star",
    "label": "Swift Resolution",
    "points": 1
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Use the [Калькулятор Системы А.Р.К.](../resources.md#ark-passive-calculator) to optimize «Экспансия» nodes.
- <span class="skill-mention" data-ap-id="chaosinfusion" data-level="1">Фатальный удар 1</span> + <span class="skill-mention" data-ap-id="orbcontrol" data-level="1">Координация сфер 1</span> можно использовать, если доля Концентрации воли в DPS стабильно выше 50%. - Этот билд умеет применять <span class="skill-mention" data-skill-id="raidcaptain">Неутомимый натиск</span> + <span class="skill-mention" data-skill-id="massincrease">Карающая длань</span> с наименьшими побочными эффектами.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Система А.Р.К.</span><span class="setup-note-arrow"></span></summary>

- Урон и удобство будут сильно хуже, если остановиться на минимальных требованиях по ядрам.

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
  {
    "id": "surpriseattack",
    "level": 13,
    "tripods": [
      1,
      1,
      1
    ],
    "rune": {
      "tier": "legendary",
      "name": "Rage"
    }
  },
  {
    "id": "windcut",
    "level": 14,
    "tripods": [
      3,
      3,
      1
    ],
    "rune": {
      "tier": "legendary",
      "name": "Galewind"
    }
  },
  {
    "id": "upperslash",
    "level": 11,
    "tripods": [
      2,
      3,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Galewind"
    }
  },
  {
    "id": "bladedance",
    "level": 14,
    "tripods": [
      1,
      1,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Galewind"
    }
  },
  {
    "id": "spincutter",
    "level": 10,
    "tripods": [
      3,
      3,
      1
    ],
    "rune": {
      "tier": "epic",
      "name": "Galewind"
    }
  },
  {
    "id": "earthcleaver",
    "level": 10,
    "tripods": [
      3,
      3,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Vision"
    }
  },
  {
    "id": "turningslash",
    "level": 14,
    "tripods": [
      1,
      3,
      1
    ],
    "rune": {
      "tier": "legendary",
      "name": "Poison"
    }
  },
  {
    "id": "maelstrom",
    "level": 10,
    "tripods": [
      3,
      1,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Bleed"
    }
  },
  {
    "id": "deathtrance",
    "subtitle": "Классовое умение"
  },
  {
    "id": "deathlyslash",
    "subtitle": "Техника"
  },
  {
    "id": "bladeassault",
    "subtitle": "Пробуждение"
  },
  {
    "id": "surge",
    "subtitle": "Классовое умение"
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Use <span class="skill-mention" data-rune-name="Purify">Солум</span>  на Охоте за головами, если перейдёшь на альтернативную сборку. - Используй <span class="skill-mention" data-rune-name="Focus" data-rune-tier="legendary">Легендарный Марх</span>  на Плаще клинков, если есть проблемы с маной. - Используй <span class="skill-mention" data-rune-name="Vision" data-rune-tier="legendary">Легендарный Ульд</span> на «Внезапный выпад», если тебе он полезнее, чем <span class="skill-mention" data-rune-name="Rage" data-rune-tier="legendary">Легендарный Раш</span>. - Повышает шанс получить лишний стак на прекасте «Внезапного выпада». - В альтернативной сборке дай Охоте за головами следующую лучшую <span class="skill-mention" data-rune-name="Galewind">Агель</span> or <span class="skill-mention" data-rune-name="Vision">Ульд</span> руну из доступных. *Примечание: «Блиц» отображается <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="legendary">Легендарный Агель</span> в игре, но на практике не даёт ничего сверх <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="epic">Эпический Агель</span> (и даже сверх <span class="skill-mention" data-rune-name="Vision" data-rune-tier="legendary">Легендарный Ульд</span>) из-за того, что игра [округляет вниз](https://www.inven.co.kr/board/lostark/5497/175825) сокращения времени применения к шагам по 0.05 сек. — держи руну на «Эпическом», чтобы слот остался свободным под другой скил.*

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- В альтернативной сборке опусти Охоту за головами до Ур. 1 ради меньшего расхода маны. - Поднимать выше Ур. 4 неидеально: теряешь стак и увеличиваешь расход маны почти без причины. - Можно использовать «Широкий удар» <span class="skill-mention" data-glossary-id="tripod">tripod</span> на «Внезапном выпад» ради заметно лучшего удобства. - С «Широким ударом» ты **обязан** применять Иссечение рано на открытии, чтобы наложить синергию. - Сейчас это куда жизнеспособнее, потому что добивающие удары Иссечения продлевают его действие. - «Двуручный хват» (3-3-2) — выбор по умолчанию здесь ради мобильности и полезности. - Это более медленный и уязвимый скил с заметно большим расходом маны, поэтому Плащ клинков и Восходящий вихрь стоят в этом билде на Ур. 10. - «Охота за головами» — дешёвая альтернатива, если маны хватает, см. заметку «Альтернатива» ниже.

</details>

<details class="setup-note" data-kind="example" open markdown>
<summary><span class="setup-note-tag">Альтернатива</span>Аксель или Разрубающие лезвия<span class="setup-note-arrow"></span></summary>

<div class="skill-compare-row" markdown>
<div class="skill-compare-col" markdown>
<span class="skill-compare-title"><span class="skill-inline" data-skill-id="spincutter"><span class="skill-inline-name">Разрубающие лезвия</span></span> (3-3-1) · По умолчанию</span>

Скил для смены позиции по умолчанию и более безопасный из двух: не требует практики и работает в каждом цикле, ценой некоторого потолка по сравнению с «Акселем». **В ротации:** - Смена позиции им теряет <span class="skill-mention" data-glossary-id="cpm">CPM</span> по сравнению с «Акселем», если применить 2 и более раз (быстрыми нажатиями). Одно применение чуть быстрее «Акселя». - Смена позиции им с пропуском Восходящего вихря лишает тебя бесплатного <span class="skill-mention" data-glossary-id="pushimmunity">неуязвимость к отбрасыванию</span> окна неуязвимости, одного из основных плюсов билда. У тебя ещё остаются скилы для применения, так что при развороте босса не повезёт. - Перемещает тебя вокруг босса, поэтому целиться нужно наружу к его спине, рискуя промахнуться из-за движения вперёд у Убийственной стали. **Best For:**{: .best-for } Игрокам, которые ценят простоту: один цикл крутить легче, если не хочется осваивать продвинутые циклы с пропусками и их варианты восстановления.

</div>
<div class="skill-compare-col" markdown>
<span class="skill-compare-title"><span class="skill-inline" data-skill-id="darkaxel"><span class="skill-inline-name">Аксель</span></span> · Альтернатива</span>

Вариант потолка. Воспроизводит Концентрацию воли из Остаточной энергии двумя скилами: «Аксель» переносит тебя через босса, а Убийственная сталь точно вбивает его в спину — бери, если освоишь циклы с пропусками. **В ротации:** - Обычно лучше <span class="skill-mention" data-glossary-id="cpm">CPM</span> при смене позиции; быстрее, чем 2 и более применений Разрубающих лезвий (быстрыми нажатиями). - Применяй прямо перед Убийственной сталью и Концентрацией воли, оставляя почти нет шансов на ошибку. - Аварийная кнопка неуязвимости к отбрасыванию: сберегает пробел и позволяет жадничать вдвое больше. - Такое использование ограничивает твою мобильность в цикле, но повышает время активности на боссе. **Best For:**{: .best-for } Игрокам, которые хотят максимальный потолок и способны исполнять циклы с пропусками. **Компромисс:**{: .tradeoff } Требует практики и окупается лучше всего, когда ты привык к продвинутым циклам с пропусками.

</div>
<div class="skill-compare-foot" markdown>
**Лучшее из обоих:** свободно меняй в зависимости от контента или, как с `:ratJAM:`, бери <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> instead of <span class="skill-inline" data-skill-id="earthcleaver"><span class="skill-inline-name">Двуручный хват</span></span> when <span class="skill-mention" data-glossary-id="counter">Контратака</span> не нужен.
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
  {
    "col": "dmg",
    "items": [
      "surge",
      "bladedance",
      "turningslash",
      "windcut"
    ]
  },
  {
    "col": "cd",
    "items": [
      "upperslash",
      "surpriseattack",
      "maelstrom",
      "bladedance",
      "windcut",
      "turningslash",
      {
        "id": "spincutter",
        "alts": [
          {
            "id": "surpriseattack",
            "note": "Если предпочитаешь, возьми самоцвет урона «Внезапного выпада» или даже самоцвет Ур. 10 другого класса."
          },
          {
            "id": "darkaxel",
            "note": "Используй, если решишь перейти на «Аксель»."
          }
        ]
      }
    ]
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Требования к самоцветам<span class="setup-note-arrow"></span></summary>

- Чтобы выйти на потолок, этому билду нужно больше вложений в самоцветы перезарядки, чем остальным. - <span class="skill-mention" data-skill-id="massincrease">Карающая длань</span> and/or <span class="skill-mention" data-ap-id="optimizedtraining" data-level="1">Изнурительные тренировки 1</span> помогает сгладить игру при низких вложениях. - +CD% <span class="skill-mention" data-glossary-id="bracelet">bracelet</span> повышает требования к уровню самоцветов на 1, низкий <span class="skill-mention" data-glossary-id="specializationstat">Specialization</span> не рекомендуется. - Как только перезарядка «Блица» и Плаща клинков достигнет Ур. 9, приоритет перезарядки «Неумолимого притяжения» заметно растёт. - Список приоритетов самоцветов выше предполагает, что ты используешь ротацию с продвинутыми циклами с пропусками.

</details>

</div>

</div>

## Ротация {#rotation}

<!-- Each `.rotation-line` is a compact JSON step list of skill ids in
     order - names/icons resolve automatically, same id vocabulary as Skill
     Setup and Gems above. Full schema (situational steps, swapNext,
     cycleRef, trailing suffix, etc.) is in javascripts/rotation-line.js's
     "EASY EDIT GUIDE" comment. -->

Порядок применения скилов оптимален, но у тебя есть свобода при простое или вплетении скилов мобильности.

«Судьба: Усиленная острота» складывается до 5 раз обычными скилами, усиливая Убийственную сталь.

   Use Spincutter (or Dark Axel, if you run the alternate setup) to guarantee атака в спинуs on Deathly Slash and Surge if needed.

Используй цикл открытия и либо крути его бесконечно (просто), либо переходи к продвинутым циклам с пропусками (потолочный DPS).

*From 3 orbs:*
{ .lead }

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Цикл открытия и перебора — 68 стаков</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
[
  "windcut",
  "deathtrance",
  "surpriseattack",
  "maelstrom",
  "windcut",
  "upperslash",
  "turningslash",
  "bladedance",
  "deathlyslash",
  "surpriseattack",
  "surge"
]
</script>
</div>
</div>

1. Это открытие переходит в циклы ниже, но само по себе тоже годится, если ценишь простоту и не против простоев. 2. «Внезапный выпад» всегда идёт перед Плащом клинков в циклах с добивкой «Внезапным выпадом», чтобы перезарядки совпали.

<div class="setup-panel" data-accent="lavender" markdown>
<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Режим леопарда (рекомендуется)<span class="setup-note-arrow"></span></summary>

После открытия чередуй эти два цикла по мере необходимости для потолочного DPS:

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Цикл с пропуском «Внезапного выпада» — 61 стак</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
[
  "windcut",
  "deathtrance",
  "maelstrom",
  "surpriseattack",
  "windcut",
  "upperslash",
  "turningslash",
  "bladedance",
  "deathlyslash",
  "surge"
]
</script>
</div>
</div>

<div class="cycle-card" markdown>
<div class="cycle-card-header"><span class="cycle-num cycle-num-3">3</span><span class="cycle-title">Цикл с пропуском «Неумолимого притяжения» — 60 стаков</span></div>
<div class="rotation-line" markdown>
<script type="application/json">
[
  "deathtrance",
  "surpriseattack",
  "maelstrom",
  "windcut",
  "upperslash",
  "turningslash",
  "bladedance",
  "deathlyslash",
  "surpriseattack",
  "surge"
]
</script>
</div>
</div>

1. Цикл **2** даёт запас прочности, оставляя «Внезапный выпад» как вариант восстановления; Цикл **3** даёт более высокий CPM. 2. Идеально чередование **2>3>2>3**, но по паттернам босса допустимы и **2>3>3>2**, **2>2>3>3**. - Цикл **3** предпочтителен в опасных паттернах босса, потому что у «Неумолимого притяжения» нет неуязвимости к оглушению. - Восстанавливайся «Неумолимым притяжением» или «Внезапным выпадом» и выбирай следующий цикл по тому, что доступно. 3. Добивку «Внезапным выпадом» можно пропустить, если перед Убийственной сталью у тебя 49+ стаков. - Аналогично 40+ стаков перед «Блицем», 30+ перед Восходящим вихрём и так далее. - Если перед активацией Боевого транса у тебя 8+ стаков, можно пропустить и прекаст «Неумолимого притяжения», и добивку «Внезапным выпадом». - При 15+ стаках перед Боевым трансом можно пропускать оба две цикла подряд. 4. Кажется сложнее, чем есть: посмотри [это видео](https://www.youtube.com/watch?v=V1UQhE37Yjs), как проходит полная ротация. Полезно думать обо всём в рамках <span class="skill-inline" data-skill-id="deathtrance"><span class="skill-inline-name">Боевой транс</span></span> and <span class="skill-inline" data-skill-id="deathlyslash"><span class="skill-inline-name">Убийственная сталь</span></span> как добивку на 53 стака, а «Неумолимое притяжение» в прекасте или «Внезапный выпад» — как гибкие варианты: они дают нужные 7+ стаков, чтобы закрыть Концентрацию воли на 60+ стаках.
</details>

</div>
</div>

1. В зависимости от скорости атаки и пинга прекаст «Неумолимого притяжения» может дать 7 стаков вместо 8. 2. При меньшей скорости атаки (<span class="skill-mention" data-skill-id="massincrease">Карающая длань</span>), Убийственная сталь может дать 12 стаков вместо 11.
3. Лучше применить Концентрацию воли на ~59 стаках, чем ждать больше 1.5 секунды.
4. Откладывать Убийственную сталь + Концентрацию воли больше чем на 1.75 секунды ради попадания в спину — потеря DPS.
5. Откладывать *только* Концентрацию воли больше чем на секунду ради попадания в спину — тоже потеря DPS.
6. <span class="skill-mention" data-skill-id="bladeassault">Призрачные клинки</span> масштабируется заметно хуже на Твёрдой воле, чем в Остаточной энергии, и слишком долго применяется. - Он всё ещё полезен для на открытии, либо её можно оставить под жадный добив с <span class="skill-mention" data-glossary-id="pushimmunity">неуязвимость к отбрасыванию</span>/Hyper Пробуждение.

*Примечание: в циклах без прекаста момент входа в Боевой транс — ровно в момент попадания Концентрации воли. Это не прощает ошибок, но ситуацию можно улучшить макросом, который очень быстро нажимает клавишу классового умения 2–3 раза без каких-либо минусов, повышая CPM и удобство.*

*С нуля сфер:*
{ .lead }

1. Возьми  <span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span> (рекомендуется) или переходи к #2. - Стая: используй трипод Плаща клинков «Контроль сфер» и <span class="skill-mention" data-skill-id="flashblink">Сверхновая</span> пробуждение. 2. Сгенерируй одну сферу, набери минимум 40 стаков, затем Концентрация воли вернёт все 3 сферы. *Применение Ардопина:* { .lead } 1. Используй <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> прямо перед Убийственной сталью и впиши две пары «Убийственная сталь + Концентрация воли» в 10-секундное окно.
2. Исполняй свои самые быстрые циклы, подстраиваясь под число стаков и паттерны босса.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полного Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="47.8,35.5,7.1,3.2,2.4,0.8" data-ids="surge,deathlyslash,bladedance,turningslash,windcut,surpriseattack"></div>
</div>
</div>