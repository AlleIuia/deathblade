// FORK GUIDE: DATA - every entry here is a Deathblade skill's tags/notes.
// Replace per-skill entries with your class's own; the re/surge split is
// this site's two build families, rename/restructure to match yours.
//
// SINGLE SOURCE OF TRUTH for the tag pills + short "what it does" note
// shown inside a skill-card's expanded body on every build page's Skill
// Setup section (see skill-setup.js, the renderer that reads this) - AND
// (via `lines`) for the small meter/stack value skill-tooltip.js now
// shows under a skill's name in every tooltip it renders (rotation
// chips, .skill-inline mentions, and Damage-column gem tooltips, since a
// gem's id is the same id as the skill it represents - see
// gem-dps-tooltip.js/skill-tooltip.js's buildTip).
//
// This text is intentionally the SAME as each family's own
// "## <Family> Skills" reference table on essentials.md - if you update a
// tag, note, or meter/stack line there, update the matching entry here
// too so both stay in sync. Build-specific reasoning (why THIS build
// picked THIS tripod) stays out of here and instead lives in each
// build's own "picks" array in its Skill Setup JSON, or in the prose
// sections already below it.
//
// Keyed by family ("re" / "surge") then skill id - the SAME id you use
// in a Skill Setup JSON entry's "id" field, matching the icon-<id>.png
// filename convention every icon in assets/shared/ already follows.
//
// tags: array of ["dmg"|"util"|"immune"|"warn", "LABEL TEXT"] pairs,
// rendered with the site's existing .tag/.tag-dmg/.tag-util/etc classes -
// same four categories as the tag-legend on essentials.md.
//
// lines: OPTIONAL array of small value strings (a meter/stack number, a
// cast-rate note, etc) - e.g. ["6314 meter"] or ["7 stacks"]. Stack counts
// are written bare/ranged ("7 stacks", "2-3 stacks"), never "up to N" or
// "N to M" - the pill they render into (see skill-setup.js/skill-tooltip.js)
// is already labeled "stacks", so a leading "up to" or a spelled-out "to"
// just repeats/lengthens what the number next to it already says.
// Omit entirely for skills with nothing extra to show (e.g. Death
// Trance). Same values essentials-table.js used to have authored a
// second time per-page in each essentials.md skills-table JSON block -
// that per-row "lines" field now just pulls from here instead, so
// there's one fewer place to remember to update. RE's values assume the
// caveat stated once above that family's table (1830 Specialization, no
// runes/Maelstrom buff) - not restated per skill here or in the tooltip.
(function () {
  window.DB_SKILL_DATA = {
    re: {
      maelstrom: {
        tags: [["util", "Синергия"], ["util", "Бафф"], ["warn", "Без иммунитета"]],
        note: "Увеличивает генерацию сфер и скорость атаки/передвижения на 6 сек.",
        lines: ["шкала 4201", "бафф на себя"],
      },
      voidstrike: {
        tags: [["util", "Генерация сфер"]],
        note: "Основной генератор сфер, применяйте под эффектом Плаща клинков на небольшом расстоянии от босса.",
        lines: ["шкала 6314"],
      },
      twinshadows: {
        tags: [["util", "Генерация сфер"], ["util", "Восстановление"], ["util", "Мобильность"]],
        note: "Имеет два заряда, удобен для перемещения.",
        lines: ["шкала 2227"],
      },
      deathlyslash: {
        tags: [["dmg", "Урон"], ["util", "Генерация сфер"], ["util", "Мобильность"]],
        note: "Хороший урон, доступна каждый второй цикл.",
        lines: ["шкала 2880"],
      },
      turningslash: {
        tags: [["util", "Синергия"], ["util", "Генерация сфер"], ["util", "Активирует предназначение"], ["immune", "Антистагер"]],
        note: "При попадании накладывает синергию +4% к наносимому урону и +5% к направленному. Активирует Предназначение для 333.",
        lines: ["шкала 2228"],
      },
      fatalwave: {
        tags: [["dmg", "Урон"], ["util", "Генерация сфер"]],
        note: "Быстрое применение, большой радиус.",
        lines: ["шкала 2217", "3879 для 313"],
      },
      surge: {
        tags: [["dmg", "Урон"], ["util", "Мобильность"], ["util", "Активирует предназначение"], ["immune", "Антистагер"]],
        note: "Поглащает сферы и восстанавливает ману, а также сокращает время восстановления умений. Активирует Предназначение для 111/313.",
        lines: ["180/s OC2", "450/s OC5"],
      },
      soulabsorber: {
        tags: [["util", "Генерация сфер"]],
        note: "Основной генератор сфер, применяйте под эффектом Плаща клинков. Второе попадание можно навести для мобильности.",
        lines: ["шкала 7418"],
      },
      blitzrush: {
        tags: [["util", "Генерация сфер"], ["util", "Восстановление"]],
        note: "Гибкая атака дальнего боя.",
        lines: ["шкала 3156"],
      },
      headhunt: {
        tags: [["util", "Контратака"], ["util", "Восстановление"], ["warn", "Без иммунитета"]],
        note: "Очень удобная контрутака, которую можно использовать для восстановления ротации.",
        lines: ["шкала 2200"],
      },
      bladeassault: {
        tags: [["util", "Ультимейт"], ["dmg", "Урон"], ["util", "Генерация сфер"], ["immune", "Антистагер"]],
        note: "Урон и генерация сфер. Долгий статус неуязвивости к опрокидыванию.",
        lines: ["шкала 20467"],
      },
      flashblink: {
        tags: [["util", "Ультимейт"], ["util", "Генерация сфер"], ["immune", "Антистагер"]],
        note: "Быстро генерирует сферы в начале боя — для игроков, которым лень тратить «Эйфорию».",
        lines: ["шкала 20472"],
      },
      earthcleaver: {
        tags: [["util", "Контратака"], ["util", "Мобильность"], ["warn", "Без иммунитета"]],
        note: "Мобильный, но медленный.",
        lines: ["шкала 2208"],
      },
      spincutter: {
        tags: [["util", "Мобильность"]],
        note: "На 10 ур. можно применить умение, можно использовать до трёх раз подряд.",
        lines: ["шкала 592", "за применение"],
      },
      deathsentence: {
        tags: [["dmg", "Урон"], ["util", "Мобильность"]],
        note: "Универсальное дополнение к классическим сборкам.",
        lines: ["шкала 1760"],
      },
    },
    surge: {
      windcut: {
        tags: [["util", "Стаки"], ["warn", "Без иммунитета"]],
        note: "Основной билдер стаков, часто применяется заранее перед Боевым трансом.",
        lines: ["7-9 стаков"],
      },
      deathtrance: {
        tags: [["util", "Бафф"], ["util", "Активирует предназначение"], ["immune", "Антистагер"]],
        note: "Состояние Identity (Z), дающее баффы и сокращение перезарядки умений. Активирует Предназначение для \uD83E\uDD81/\uD83D\uDC06.",
      },
      maelstrom: {
        tags: [["util", "Синергия"], ["util", "Бафф"], ["warn", "Без иммунитета"]],
        note: "Увеличивает скорость атаки/передвижения на 6 сек., складывается до двух раз.",
        lines: ["7 стаков"],
      },
      surpriseattack: {
        tags: [["util", "Стаки"], ["util", "Синергия"], ["util", "Мобильность"]],
        note: "Основной билдер, при попадании накладывает синергию +4% к наносимому урону и +5% к направленному.",
        lines: ["7 стаков"],
      },
      breakingmoon: {
        tags: [["dmg", "Урон"], ["util", "Стаки"], ["util", "Бафф"]],
        note: "Даёт 60 стаков при попадании и усиливает следующий Расход на +60% критического урона.",
        lines: ["60 стаков"],
      },
      surge: {
        tags: [["dmg", "Урон"], ["immune", "Антистагер"]],
        note: "Поглощает 60 стаков, нанося максимум урона.",
      },
      bladedance: {
        tags: [["util", "Стаки"], ["dmg", "Урон"]],
        note: "Основной билдер, можно отпускать примерно на 90% и всё равно получить полные стаки.",
        lines: ["9 стаков"],
      },
      blitzrush: {
        tags: [["dmg", "Урон"]],
        note: "Добивочный билдер для \uD83E\uDD81. При активации Предназначения сбрасывает перезарядку и усиливается для \uD83D\uDC2F.",
        lines: ["7 стаков", "1 для 333"],
      },
      headhunt: {
        tags: [["util", "Контратака"], ["warn", "Без иммунитета"]],
        note: "Быстрая полезность и запасной вариант с небольшой мобильностью.",
        lines: ["2 стака"],
      },
      earthcleaver: {
        tags: [["util", "Контратака"], ["util", "Мобильность"], ["warn", "Без иммунитета"]],
        note: "Медленная добивочная полезность. Складывается до двух раз для \uD83E\uDD81.",
        lines: ["2-3 стака"],
      },
      spincutter: {
        tags: [["util", "Мобильность"], ["util", "Стаки"]],
        note: "Запасной билдер, применяется до 3 раз.",
        lines: ["2 стака", "за применение"],
      },
      turningslash: {
        tags: [["util", "Синергия"], ["util", "Активирует предназначение"], ["immune", "Антистагер"]],
        note: "При попадании накладывает синергию +4% к наносимому урону и +5% к направленному. Активирует Предназначение для \uD83D\uDC2F.",
        lines: ["5 стаков"],
      },
      bladeassault: {
        tags: [["util", "Ультимейт"], ["dmg", "Урон"], ["immune", "Антистагер"]],
        note: "Придерживайте ради урона и генерации стаков.",
        lines: ["20 стаков"],
      },
      flashblink: {
        tags: [["util", "Ультимейт"], ["util", "Генерация сфер"], ["immune", "Антистагер"]],
        note: "Быстро генерирует сферы в начале боя - для игроков, которым лень тратить Стимулянт.",
        lines: ["шкала 20472", "3 стака"],
      },
      deathlyslash: {
        tags: [["dmg", "Урон"], ["util", "Стаки"], ["util", "Мобильность"]],
        note: "Усиливается при активации Предназначения и последующем применении обычного умения для \uD83D\uDC06.",
        lines: ["11-12 стаков"],
      },
      darkaxel: {
        tags: [["util", "Мобильность"], ["immune", "Антистагер"]],
        note: "Прыжок вперёд и прямо над боссом, чтобы облегчить атаку со спины.",
        lines: ["2-3 стака"],
      },
      upperslash: {
        tags: [["immune", "Антистагер"]],
        note: "Основной билдер и полезность для \uD83D\uDC06.",
        lines: ["5 стаков"],
      },
      fallstar: {
        tags: [["immune", "Антистагер"]],
        note: "Однажды это наверняка станет метой...",
        lines: ["8 стаков"],
      },
    },
  };

  // SINGLE SOURCE OF TRUTH for skill-tooltip.js's fallback lookup, for the
  // couple of .food-req-item prose mentions (see extra.css's "Inline skill
  // reference for prose" section) that aren't a real skill at all -
  // Atropine and Stimulant are consumable items, so they have no tripods/
  // rune/family split to speak of and don't belong in DB_SKILL_DATA above.
  // Flat id -> note (no tags array - a tag pill would misrepresent a
  // consumable's flat effect text as a skill trait like DAMAGE/SYNERGY).
  // Keyed the same way as everywhere else: matches icon-<id>.png in
  // assets/shared/. A lookup miss here (same as a miss in DB_SKILL_DATA)
  // just means no tooltip renders - fail quietly, see skill-tooltip.js.
  // Food/consumable entries below are the single source of truth for the
  // effect text shown in three places: essentials.md's Food Requirement
  // panel (.food-option divs), Surge's "Mana Food + Maelstrom Bleed" alt
  // line (bare .food-option-icon images), and both families' Engravings
  // section food mentions (bare .skill-icon images/.engraving-chip-food
  // /.engraving-loadout-note). All of that markup used to hand-carry this
  // same text in its own `title` attribute (native tooltip, no styling,
  // easy to drift out of sync across 3+ copies) - skill-tooltip.js now
  // reads it from here instead for all of them, matching icon-<id>.png
  // the same way every other lookup on this file does. Update the text
  // here and every surface picks it up; there's no other copy left to
  // remember to update.
  //
  // Engraving entries (grudge/ambushmaster/raidcaptain/adrenaline/
  // keenbluntweapon/curseddoll/massincrease/maxmp/spiritabsorption) below
  // are the same idea for the Engravings section's .engraving-chip/
  // .engraving-card-name mentions and the bare-prose .skill-mention
  // mentions elsewhere (Quick Tips, engraving card body text) - none of
  // those carry an icon at all (there's no icon slot on a chip, a
  // card-name heading, or prose text), so they're wired by a plain
  // data-skill-id on the span instead of the icon-filename guess
  // skill-inline normally uses - see skill-tooltip.js's attachSkillInline,
  // which already checks data-skill-id first for exactly this reason.
  // `note` is a single flat string, same shape as every consumable entry
  // above - one min-max range per stat line rather than the game
  // tooltip's own Basic/Legendary/Relic/Ability Stone breakdown, which
  // read as too many lines for what's meant to be a quick reference (an
  // earlier version of this file spelled out all 4 tiers; simplified down
  // after the fact). min = the flat Basic effect (what the engraving
  // grants at any level, grade-independent). max = Basic + Legendary's
  // OWN max tier + Relic's OWN max tier + Ability Stone's own max tier,
  // ALL summed - Legendary and Relic are not alternate/exclusive paths,
  // each is its own additive layer on top of Basic (upgrading a
  // Legendary-grade engraving to Relic grade doesn't replace the
  // Legendary bonus already earned, it adds Relic's further bonus on top
  // of it) - confirmed by cross-checking this sum against each
  // screenshot's own "Final Applied Effect" number wherever that person's
  // build happened to have some but not all tiers maxed (e.g. Keen Blunt
  // Weapon's 52.00% = 36 Basic + 8 Legendary max + 8 Relic max, no stone;
  // Ambush Master's 11.00% Outgoing = 4 Basic + 0.80 Legendary max + 2.80
  // Relic max + 3.40 at Stone Lv.2, not Lv.4) - every one matched exactly.
  // A stat with no Legendary/Relic/Stone scaling at all (a flat
  // drawback/cost like Incoming Damage/Recovery/Atk. Speed) is left as a
  // single number, not a range.
  window.DB_SKILL_EXTRAS = {
    atropine: {
      note: "ХП −25%, но сила атаки +30%, а скорость атаки и передвижения — +20%. Эффект действует 10 сек.",
    },
    stimulant: {
      note: "Мгновенно заполняет шкалу абсолютной энергии на 100%.",
    },
    striploin: {
      note: "Сила, ловкость и интеллект +12 000, выносливость +8000, скорость восстановления основного боевого ресурса +24%.",
    },
    steak: {
      note: "Сила, ловкость и интеллект +6000 ед., выносливость +4500 ед., скорость восстановления основного боевого ресурса +24%.",
    },
    fish: {
      note: "Сила, ловкость и интеллект +3000 ед., скорость восстановления основного боевого ресурса +24%.",
    },
    azena: {
      note: "Сила, ловкость, интеллект +6000 ед., макс. здоровье +12 000 ед., скорость восстановления основного боевого ресурса +24% (не действует одновременно с эффектами блюд).",
    },
    feast: {
      note: "Сила атаки оружия +1600/1800. Скорость атаки +5%. Скорость передвижения +5%.",
    },
    vernesewine: {
      note: "Повышает скорость передвижения на 3% в течение 20 мин.",
    },
    ealynsblessing: {
      note: "Повышает скорость атаки на 3% в течение 20 мин.",
    },
    grudge: {
      note: "Урон обычным и рейдовым боссам +15-27%. Входящий урон +20%.",
    },
    ambushmaster: {
      note: "Наносимый урон +4-13%. Урон при атаках со спины +12-15%.",
    },
    raidcaptain: {
      note: "Наносимый урон +32-63% от бонусного процента скорости передвижения.",
    },
    adrenaline: {
      note: "Сила атаки +0.9-1.85% за стак (до 6 стаков). Шанс крит. удара +8-20% при максимуме стаков.",
    },
    keenbluntweapon: {
      note: "Критический урон +36-67%, но атаки с некоторой вероятностью наносят на 20.00% меньше урона.",
    },
    curseddoll: {
      note: "Наносимый урон +11-23%. Эффективность исцеления −25%.",
    },
    massincrease: {
      note: "Скорость атаки −10%. Наносимый урон +13-25%.",
    },
    maxmp: {
      note: "Максимальный объём маны +24-40% (Стандартный ранг даёт +24%).",
    },
    spiritabsorption: {
      note: "Скорость атаки и передвижения +10-22% (Стандартный ранг даёт +10%).",
    },
  };
})();
