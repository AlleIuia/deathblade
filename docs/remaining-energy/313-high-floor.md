# 313 Шакрамы 2.0 💜

<div class="build-card-row" markdown>
<div class="build-card" data-updated="2026-09-19" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="313-high-floor" data-family="re"></div>

**Best For:**{: .best-for } Игрокам, которым нужен более простой, быстрый и прощающий билд на «Воздушных шакрамах».

**Tradeoff:**{: .tradeoff } Низкийer damage ceiling, but easier to recover from mistakes.

- Охота за головами всегда свободна для контратак, восстановления, очищения или <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> поддержку. - Доступен с 14 очками в Звезде как 113 (Искусства) — переходный вариант с ограничением по ядрам. - Переходи на [333 Шакрамы](333-ceiling.md), когда будешь готов, или оставайся здесь, если тебе так больше нравится!

</div>
<div class="pentagon-badge" data-build="313-high-floor" data-family="re" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://www.youtube.com/watch?v=6ez2lS4AI6Q){ .video-chip }
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

=== "313 Высокий Floor ★"

        ```
        3C737E487FD0FDB67FEB883196135CED1CE05F2123097ECB878B14A177BFE26890DDBB5C6AE3B18CB34871BBE1E17D0CC47A0DAFAE4272BEA4FD33FCF57AF2FC
        ```

=== "113 Искусства (с ограничением по ядрам)"

        ```
        E3818904D40CEFE43FC30B0715D4EF6850C4E0C2183E48110767499D73BEC3831EBB750B31176844599B47B861C731968F30681780A45447FAD8F209D8D99517
        ```

        - Требует либо самоцвет Ур. 9+ на перезарядку «Воздушных шакрам», либо <span class="skill-mention" data-ap-id="optimizedtraining" data-level="1">Изнурительные тренировки 1</span>.
        - Лучше вложиться чуть больше и нормально открыть 313 или 333.

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
        "id": "swiftstrike",
        "level": 1
      },
      {
        "id": "remainingenergy",
        "level": 3
      },
      {
        "id": "firmwill",
        "level": 3
      },
      {
        "id": "extremebodymovement",
        "level": 3
      },
      {
        "id": "orbcirculation",
        "level": 2
      }
    ]
  },
  {
    "id": "leap",
    "nodes": [
      {
        "id": "unleashedpower",
        "level": 5
      },
      {
        "id": "releasepotential",
        "level": 4
      },
      {
        "id": "instantspell",
        "level": 2
      },
      {
        "id": "danceofnightmares",
        "level": 3
      }
    ]
  }
]
</script>
</div>

<div class="ark-cores" data-family="re" markdown>
<script type="application/json">
[
  {
    "core": "sun",
    "label": "Levin Slash",
    "points": 3
  },
  {
    "core": "moon",
    "label": "Arts Core",
    "points": 2
  },
  {
    "core": "star",
    "label": "Death Sword Energy",
    "points": 2
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Use the [Калькулятор Системы А.Р.К.](../resources.md#ark-passive-calculator) to optimize «Экспансия» nodes.
- <span class="skill-mention" data-ap-id="releasepotential" data-level="3">Стремительное восстановление 3</span> / <span class="skill-mention" data-ap-id="instantspell" data-level="3">Божественное вдохновение 3</span> / <span class="skill-mention" data-ap-id="awakeningamplifier" data-level="1">Пробужденное сознание 1</span> решает проблемы с маной ценой небольшой потери DPS. - Менее комфортен с +CD% <span class="skill-mention" data-glossary-id="bracelet">bracelet</span> линию, и/или низкий <span class="skill-mention" data-glossary-id="specializationstat">Specialization</span>.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Система А.Р.К.</span><span class="setup-note-arrow"></span></summary>

- Подними Ядро Искусств до 17 очков ради удобства и урона, когда сможешь.

</details>

<details class="setup-note" data-kind="example" markdown>
<summary><span class="setup-note-tag">Альтернатива</span>113 (Искусства), с ограничением по ядрам<span class="setup-note-arrow"></span></summary>

<div class="ark-cores" data-family="re" markdown>
<script type="application/json">
[
  {
    "core": "sun",
    "label": "Art Master",
    "points": 0
  },
  {
    "core": "moon",
    "label": "Arts Core",
    "points": 0
  },
  {
    "core": "star",
    "label": "Death Sword Energy",
    "points": 2
  }
]
</script>
</div>

- То же, что 313, но **без** сброса «Воздушных шакрам». - Требует самоцвет Ур. 9+ на перезарядку «Воздушных шакрам» или <span class="skill-mention" data-ap-id="optimizedtraining" data-level="1">Изнурительные тренировки 1</span>. - Избегай линии браслета +CD% в этом варианте с ограничением по ядрам. - Нужные правки относительно сборки 313 смотри в разделе «Гемы».

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
  {
    "id": "soulabsorber",
    "level": 14,
    "tripods": [
      3,
      1,
      2
    ],
    "rune": {
      "tier": "epic",
      "name": "Wealth"
    }
  },
  {
    "id": "twinshadows",
    "level": 14,
    "tripods": [
      2,
      1,
      2
    ],
    "rune": {
      "tier": "rare",
      "name": "Wealth"
    }
  },
  {
    "id": "headhunt",
    "level": 7,
    "tripods": [
      1,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Focus"
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
      "tier": "rare",
      "name": "Wealth"
    }
  },
  {
    "id": "maelstrom",
    "level": 10,
    "tripods": [
      2,
      1,
      2
    ],
    "rune": {
      "tier": "uncommon",
      "name": "Wealth"
    }
  },
  {
    "id": "fatalwave",
    "level": 14,
    "tripods": [
      1,
      3,
      2
    ],
    "rune": {
      "tier": "legendary",
      "name": "Wealth"
    }
  },
  {
    "id": "blitzrush",
    "level": 14,
    "tripods": [
      2,
      1,
      1
    ],
    "rune": {
      "tier": "rare",
      "name": "Wealth"
    }
  },
  {
    "id": "voidstrike",
    "level": 11,
    "tripods": [
      3,
      1,
      2
    ],
    "rune": {
      "tier": "epic",
      "name": "Wealth"
    }
  },
  {
    "id": "surge",
    "subtitle": "Классовое умение"
  },
  {
    "id": "deathlyslash",
    "subtitle": "Техника"
  },
  {
    "id": "bladeassault",
    "subtitle": "Пробуждение"
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Руны<span class="setup-note-arrow"></span></summary>

- Use <span class="skill-mention" data-rune-name="Galewind" data-rune-tier="legendary">Легендарный Агель</span>, <span class="skill-mention" data-rune-name="Purify">Солум</span> or <span class="skill-mention" data-rune-name="Wealth" data-rune-tier="uncommon">Необычный Эйге</span>  на Охоте за головами, если с маной проблем нет. - <span class="skill-mention" data-rune-name="Focus" data-rune-tier="legendary">Легендарный Марх</span> на «Плащ клинков» решает проблемы с маной ценой небольшой потери генерации сфер.

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- Можно использовать «Магический контроль» <span class="skill-mention" data-glossary-id="tripod">tripod</span>  на Охоте за головами ради меньшего расхода маны.
- Можно использовать «Быстрые пальцы» tripod  на Охоте за головами ради роста DPS и удобства. - Это потеря DPC, если ты не можешь использовать выигрыш в CPM/удобстве. - Несовместимо с очень низким Мастерством или линией браслета +CD%. - По этим причинам трипод **рекомендуется**, но не выставлен по умолчанию. - Если решишь взять этот трипод, поставь Искусство меча на Ур. 13, а Охоту за головами на Ур. 12.

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
      "fatalwave",
      "twinshadows",
      "soulabsorber",
      "turningslash",
      "blitzrush",
      "voidstrike"
    ]
  },
  {
    "col": "cd",
    "items": [
      "maelstrom",
      "turningslash",
      {
        "id": "soulabsorber",
        "tip": "Замени на «Охоту за головами» в 113 (Искусства).",
        "alts": [
          {
            "id": "blitzrush",
            "note": "Быстрее восстанавливается после мелких ошибок, сочетается с «Двойной плетью» или «Воздушными шакрамами» ниже."
          }
        ]
      },
      {
        "id": "voidstrike",
        "tip": "Замени на «Воздушные шакрамы» в 113 (Искусства).",
        "alts": [
          {
            "id": "twinshadows",
            "note": "Сочетается с «Охотой за головами» выше для маршрута восстановления у опытных игроков."
          },
          {
            "id": "fatalwave",
            "note": "Нужно для 113 (Искусства) или при общих самоцветах с 333 Шакрамами, сочетается с «Охотой за головами»."
          }
        ]
      }
    ]
  }
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

=== "Cycles"

    Используй **Открытие**, затем чередуй эти два цикла по мере надобности:

    <div class="cycle-card">

    <div class="cycle-card-header"><span class="cycle-num cycle-num-1">1</span><span class="cycle-title">Цикл: Искусство меча + Убийственная сталь</span></div>

    <div class="rotation-line">

    <script type="application/json">
    [
      "maelstrom",
      "voidstrike",
      "twinshadows",
      "deathlyslash",
      "turningslash",
      "fatalwave",
      "surge"
    ]
    </script>

    </div>

    </div>

    <div class="cycle-card">

    <div class="cycle-card-header"><span class="cycle-num cycle-num-2">2</span><span class="cycle-title">Цикл: Длань Авесты + Охота за головами</span></div>

    <div class="rotation-line">

    <script type="application/json">
    [
      "soulabsorber",
      "blitzrush",
      "twinshadows",
      {
        "id": "maelstrom",
        "situational": "восстановление"
      },
      "turningslash",
      "fatalwave",
      "surge"
    ]
    </script>

    </div>

    </div>

        Старайся вписать до двух Двойных плетей из Цикла **2** под Плащ клинков из Цикла **1**, чтобы добрать 3 сферы без повторного применения и без ухода на восстановление. Если ты успел только до Длани Авесты, обычно хватит одного дополнительного применения Охоты за головами. Плащ клинков в Цикле **2** применяется, только если иначе не добираешь 3 сферы — решай сам. Если применил, он держится минимум до Искусства меча в Цикле **1**; повторное применение по истечении синхронизирует перезарядки. Если он не был нужен или не продержался, ничего не меняется. === "Openers" Открытия копят <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> и применять <span class="skill-mention" data-glossary-id="synergy">synergies</span>  стаки эффективно. Если кажется сложным, просто применяй синергию и Концентрацию воли на полных сферах — этого достаточно, чтобы начать чередование циклов. *С 3 сфер (<span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span>):*
        { .lead }

    <div class="rotation-line">

    <script type="application/json">
    [
      {
        "id": "headhunt",
        "swapNext": true
      },
      "twinshadows",
      "maelstrom",
      "turningslash",
      "deathlyslash",
      "surge",
      {
        "cycleRef": 2,
        "title": "Цикл: Длань Авесты + Охота за головами"
      },
      {
        "cycleRef": 1,
        "title": "Цикл: Искусство меча + Убийственная сталь"
      },
      {
        "suffix": "etc."
      }
    ]
    </script>

    </div>

        1. If available, <span class="skill-inline" data-skill-id="bladeassault"><span class="skill-inline-name">Призрачные клинки</span></span> взаимозаменяема с Циклом **2**. 2. Выгодно применять <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> после Убийственной стали, когда доступны Призрачные клинки. *С нуля/части сфер:* { .lead } 1. Цикл **1**, если доступна Убийственная сталь, иначе начинай с Плаща клинков + Цикл **2**. 2. Иссечение применяй раньше ради синергии, а Убийственную сталь оставляй под <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span>/бафф Остаточной энергии. === "Recovery"

    <div class="setup-panel" data-accent="lavender">

    <div class="setup-notes">

    <details class="setup-note" data-kind="tip" open>

    <summary><span class="setup-note-tag">Советы</span>Видео по восстановлению<span class="setup-note-arrow"></span></summary>

        Посмотри это 2-минутное [видео по восстановлению для 333](https://www.youtube.com/watch?v=4478vFVX4VA) и ориентируйся на названия отрезков.

    </details>

    </div>

    </div>

        1. 313 играется похоже, только вместо <span class="skill-mention" data-glossary-id="ftfcombo">FTF</span>.
        2. Use <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> когда сфер чуть не хватает, просто применяй, если сомневаешься. 3. Используй свободные стаки Двойной плети/Плаща клинков и/или Охоту за головами, если пропустил важные скилы. 4. Используй <span class="skill-inline" data-skill-id="headhunt"><span class="skill-inline-name">Хитроумный финт</span></span> instead of <span class="skill-inline" data-skill-id="twinshadows"><span class="skill-inline-name">Двойная плеть</span></span> for a cycle to recover stacks if they run out.
        5. Раньше применяй Плащ клинков + «Воздушные шакрамы», если ждёшь основные скилы генерации сфер.

=== "TL;DR:"

        ![Схема 313 — коротко](../assets/tldr-313.png){ .zoomable-image loading=lazy }

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полного Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="20.9,20.7,20.2,9.5,8.5,8,6.9,5.5" data-ids="deathlyslash,fatalwave,surge,twinshadows,soulabsorber,turningslash,blitzrush,voidstrike"></div>
</div>
</div>