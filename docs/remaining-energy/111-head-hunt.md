# 111 Классика 🔪

<div class="build-card-row" markdown>
<div class="build-card" data-updated="2026-09-19" markdown>

<!-- Difficulty/Trixion/Playstyle stats above, AND the pentagon badge below,
     both read from javascripts/build-data.js (window.DB_BUILD_DATA) - there is
     nothing to hand-edit in either div itself. Find this build by its
     data-build id there and edit pentagon/difficulty/trixion/bestFor/etc.;
     the stat row, the pentagon badge, and the essentials.md comparison table
     all update together from that one place. -->
<div class="build-stats" data-build="111-head-hunt" data-family="re"></div>

**Best For:**{: .best-for } Игрокам, которые хотят максимума свободы в скилах и скорости. **Компромисс:**{: .tradeoff } Ротация без права на ошибку, запаса почти нет. - Это финальная форма старой школы Остаточной энергии. - Охота за головами занята в ротации, так что её может не быть на восстановление или <span class="skill-mention" data-glossary-id="counter">counter</span>.
- Низкийer orb generation and fewer восстановление options than Fatal Wave builds.

</div>
<div class="pentagon-badge" data-build="111-head-hunt" data-family="re" markdown>
<div class="pentagon-badge-title">Профиль билда</div>
<div class="pentagon-svg-mount"></div>
<div class="pentagon-badge-extra" markdown>
[Видео-гайд](https://www.youtube.com/watch?v=z8KE3HG_ggg){ .video-chip } [Геймплей](https://www.youtube.com/watch?v=4O9THIPhVuY){ .video-chip }
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

=== "111 Охота за головами"

        ```
        C289D8EB08E331EA88A2C65A57DD383C979E48ABE184E47D357E8FB1E3E01A8DF959893AEA9B7713908581D63D17398B194369FAE09C50791B5BF3022A729D92
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
        "id": "swordcraftenhancement",
        "level": 1
      },
      {
        "id": "extremebodymovement",
        "level": 2
      },
      {
        "id": "orbcirculation",
        "level": 5
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
    "label": "Art Master",
    "points": 0
  },
  {
    "core": "moon",
    "label": "Arts Core",
    "points": 3
  },
  {
    "core": "star",
    "label": "Basics",
    "points": 0
  }
]
</script>
</div>

<div class="setup-notes" markdown>

<details class="setup-note" data-kind="tip" open markdown>
<summary><span class="setup-note-tag">Советы</span>Советы по А.Р.К.<span class="setup-note-arrow"></span></summary>

- Use the [Калькулятор Системы А.Р.К.](../resources.md#ark-passive-calculator) to optimize «Экспансия» nodes.

</details>

<details class="setup-note" data-kind="note" markdown>
<summary><span class="setup-note-tag">Заметка</span><span class="skill-mention" data-glossary-id="arkgrid">Система А.Р.К.</span><span class="setup-note-arrow"></span></summary>

- Playable with zero Система А.Р.К. investment, but not recommended.

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
      "tier": "legendary",
      "name": "Wealth"
    }
  },
  {
    "id": "deathsentence",
    "level": 14,
    "tripods": [
      2,
      2,
      1
    ],
    "rune": {
      "tier": "legendary",
      "name": "Galewind"
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
      2,
      2
    ],
    "rune": {
      "tier": "uncommon",
      "name": "Wealth"
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
      "tier": "rare",
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
      "tier": "epic",
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

- Use <span class="skill-mention" data-rune-name="Purify">Солум</span> на «Охоту за головами» — только если это действительно нужно.

</details>

<details class="setup-note" data-kind="note" open markdown>
<summary><span class="setup-note-tag">Заметка</span>Опции и триподы<span class="setup-note-arrow"></span></summary>

- Можно использовать «Быстрые пальцы» <span class="skill-mention" data-glossary-id="tripod">tripod</span>  на Охоте за головами ради роста DPS и удобства. - Это потеря DPC, если ты не можешь использовать выигрыш в CPM/удобстве. - Несовместимо с очень низким Мастерством или линией браслета +CD%. - По этим причинам трипод **рекомендуется**, но не выставлен по умолчанию. - Если решишь взять этот трипод, поставь Искусство меча на Ур. 13, а Охоту за головами на Ур. 12.

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
      "deathsentence",
      "twinshadows",
      "turningslash",
      "soulabsorber",
      "blitzrush",
      "voidstrike"
    ]
  },
  {
    "col": "cd",
    "items": [
      "maelstrom",
      "blitzrush",
      "headhunt",
      "turningslash"
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
      "headhunt",
      "deathlyslash",
      "deathsentence",
      "turningslash",
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
      "deathsentence",
      "turningslash",
      {
        "id": "headhunt",
        "situational": "восстановление"
      },
      "surge"
    ]
    </script>

    </div>

    </div>

        Старайся вписать до двух Двойных плетей из Цикла **2** под Плащ клинков из Цикла **1**, чтобы добрать 3 сферы без повторного применения и без ухода на восстановление. Если не вышло, в конце Цикла **2** понадобится дополнительное применение Охоты за головами. Использование Охоты за головами в Цикле **2** может вынудить применить её в конце следующего Цикла **1**, из-за чего возникнет простой. Когда ротация сбоит, управление Плащом клинков критично — применяй его по истечении, если нужно. Из-за ограниченной генерации сфер постэффекты Иссечения могут переноситься на следующий цикл. === "Openers" Открытия копят <span class="skill-mention" data-skill-id="adrenaline">Адреналин</span> и применять <span class="skill-mention" data-glossary-id="synergy">synergies</span>  стаки эффективно. Если кажется сложным, просто применяй синергию и Концентрацию воли на полных сферах — этого достаточно, чтобы начать чередование циклов. *С 3 сфер (<span class="food-req-item">![](../assets/shared/icon-stimulant.png){: .skill-icon } Мощная «Эйфория»</span>):*
        { .lead }

    <div class="rotation-line">

    <script type="application/json">
    [
      {
        "id": "headhunt",
        "swapNext": true
      },
      "twinshadows",
      "deathsentence",
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

        1. If available, <span class="skill-inline" data-skill-id="bladeassault"><span class="skill-inline-name">Призрачные клинки</span></span> взаимозаменяема с Циклом **2**. 2. Выгодно применять <span class="food-req-item">![](../assets/shared/icon-atropine.png){: .skill-icon } Ардопин-Х</span> после Убийственной стали, когда доступны Призрачные клинки. *С нуля/части сфер:* { .lead } 1. Цикл **1**, если доступна Убийственная сталь, иначе начинай с Плаща клинков + Цикл **2**. === "Recovery"

    <div class="setup-panel" data-accent="lavender">

    <div class="setup-notes">

    <details class="setup-note" data-kind="tip" open>

    <summary><span class="setup-note-tag">Советы</span>Видео по восстановлению<span class="setup-note-arrow"></span></summary>

        Посмотри это 54-минутное [видео по восстановлению для 111](https://www.youtube.com/watch?v=z8KE3HG_ggg) или подумай о более простом билде.

    </details>

    </div>

    </div>

        1. Используй свободные стаки Двойной плети/Плаща клинков и/или Охоту за головами, если пропустил важные скилы.

## Распределение Урона {#dps-spread}

<!-- data-labels / data-values / data-ids are three parallel comma-separated
     lists, ordered highest % first - update after a fresh Trixion recording
     or a balance pass. Full schema is in javascripts/dps-chart.js's
     "EASY EDIT GUIDE" comment. -->

<p class="dps-showcase-caption">Древние ядра, самоцветы полного Ур. 10</p>

<div class="dps-showcase" markdown>
<div class="dps-showcase-frame" markdown>
<div class="dps-chart" data-show-icons data-values="21,19.9,16.6,11.6,10.6,8,6.6,5.5" data-ids="deathlyslash,surge,deathsentence,turningslash,twinshadows,soulabsorber,blitzrush,voidstrike"></div>
</div>
</div>