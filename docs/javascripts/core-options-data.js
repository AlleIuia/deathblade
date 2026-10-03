// FORK GUIDE: DATA - every entry here is one Order Core's full in-game
// "Core Option" tooltip text (10P/14P/17P/18P/19P/20P), Relic-grade values.
// Replace with your own class's cores if forking; keyed by the exact
// core `label` string used in a build page's ark-cores JSON (see
// ark-core-badge.js) - NOT by the "sun"/"moon"/"star" slot, since a
// label is unique across the whole site (every core has its own in-game
// name) and the same label can appear in more than one build's JSON.
//
// SINGLE SOURCE OF TRUTH for the hover tooltip ark-core-badge.js attaches
// to each Ark Grid core card - a lookup miss just means the card renders
// with no tooltip (fails quietly, same rule as every other widget here).
//
// Relic only, matching the in-game reference screenshots this was
// transcribed from - Ancient-grade values run higher on every
// percentage line but aren't tracked here.
//
// LANGUAGE: all 15 cores below have both a confirmed Russian name
// (DB_CORE_NAMES) and Russian option text, transcribed from in-game
// screenshots. The last five - the Order Moon (Луна Порядка) line - were
// confirmed by matching the option text to this file's existing English
// across all six breakpoint rows at once, numbers included; no Russian
// name in DB_CORE_NAMES was guessed.
//
//   - The option text is the game's own wording, including its decimal
//     style ("1.5%", not "1,5%") and the guillemets around skill names.
//   - Numbers are reproduced EXACTLY as the screenshots show them, even
//     where they disagree with the english this file used to carry. Three
//     such disagreements exist and are recorded in DB_CORE_CONFLICTS below
//     rather than silently resolved - one of them changes a number.
//   - Skill names inside the text are the game's own russian names, which
//     already match DB_SKILL_NAMES (skill-names.js) - "Воздушные шакрамы"
//     is fatalwave, "Концентрация воли" is surge, and so on.
//
// Optional per-entry fields:
//   note - short caveat shown at the bottom of the tooltip, e.g.
//          flagging a core that's a Korea-only placeholder for a
//          not-yet-released replacement.
//   tier - rarity grade for the tooltip's icon fill + "Core Options"
//          label color (skill-tip-icon-rarity-<tier> / ark-core-tip-
//          subtitle-<tier> in extra.css). Defaults to "relic" when
//          omitted (every entry below is Relic-grade), so this only
//          needs setting for a future non-Relic core.
//
// All option text below is written as-is (no more (KR)-tagged lines) -
// the balance-patch values transcribed from Korea are now just treated
// as this core's values, full stop, ahead of the Global patch landing.
(function () {
  // Display name per core, in the order the map above lists them. Only
  // cores whose in-game Russian name was confirmed get an entry; the rest
  // fall back to the english key (see ark-core-badge.js's own comment).
  //
  // The english label stays the lookup key on purpose: every build page's
  // ark-cores JSON names its cores by that string, and ark-core-badge.js
  // looks DB_CORE_OPTIONS up by it - so the key is load-bearing data, not
  // prose. Translating the keys would mean editing 27 JSON entries across 7
  // build pages by hand for no reader-visible gain. Same split as the rune
  // chips (DB_RUNE_NAMES) and the engraving rows (engravingName()).

  // Three places where the screenshots disagree with the english this file
  // carried before, recorded rather than silently resolved. The first
  // changes a number, so it is the one to actually check in game.
  window.DB_CORE_CONFLICTS = [
    {
      core: "Swift Resolution",
      bp: "10P",
      was: "Перезарядка «Убийственной стали» −2.0 сек.",
      now: "Урон умения «Убийственная сталь» повышается на 1.5%.",
      note:
          "На скриншоте этого ядра указан эффект на урон, тогда как в английском тексте " +
           "говорилось о сокращении перезарядки, и общих чисел нет. Всё остальное на ядре " +
           "(14P/17P/18-20P) совпадает со скриншотом точно, поэтому в самом ядре сомнений " +
           "нет — расходится только эта строка. Возможно, это другое ядро, совпадающее " +
           "по остальному, либо английский текст просто ошибался. Оставлено неразрешённым намеренно.",
    },
    {
      core: "Death Sword Energy",
      bp: "10P",
      was: "даёт невосприимчивость к параличу",
      now: "невосприимчив к ошеломлению",
      note:
          "Паралич и оглушение — разные дебаффы в Lost Ark. На скриншоте указано оглушение. " +
           "На числа не влияет; английский текст сохранён как запись о том, что было указано раньше.",
    },
    {
      core: "Art Master",
      bp: "17P",
      was: "+16.0%",
      now: "+16.0% (Relic) / +20.0% (Ancient)",
      note:
          "Два скриншота этого ядра делят одно игровое название и различаются только классом: " +
           "Реликвия даёт +16.0% на 17P, Древнее — +20.0%, а максимальный заряд 15 против 17. " +
           "Карта в этом файле ключуется по названию, поэтому может хранить только одно " +
           "значение — сохранена Реликвия, по уже действующему здесь правилу «только Реликвия». " +
           "Разделение по классам требует другого ключа и здесь не сделано.",
    },
  ];

  window.DB_CORE_NAMES = {
    "Levin Slash": "Ветрорез",
    "Death Sword Energy": "Неизбежность смерти",
    "Art Master": "Путь клинка",
    "Basics": "Дуэлянт",
    "Deathblade Surge": "Триумф воли",
    "Strike": "Наказание",
    "Swift Resolution": "Предрешенный финал",
    "Deathblade Rush": "Сверкающая сталь",
    "Frostfire Blade": "Песнь крови и стали",
    "Slaughter Spectacle": "Последний танец",
    "Deathblade Wave": "Вездесущий меч",
    "Arts Core": "Мастер трех клинков",
    "Surge Core": "Средоточие воли",
    "Twin Swords Dance": "Молниеносные удары",
    "Death Blitz": "Мрачное знамение",
  };

  window.DB_CORE_OPTIONS = {
    "Levin Slash": {
      options: [
        { bp: "10P", text: "Урон обычных умений +2.0%." },
        { bp: "14P", text: "Активация Предназначения повышает урон следующего использованного умения «Воздушные шакрамы» на 40.0% (1 раз)." },
        { bp: "17P", text: "Активация Предназначения мгновенно восстанавливает умение «Воздушные шакрамы»." },
        { bp: "18P", text: "Урон обычных умений +0.2%." },
        { bp: "19P", text: "Урон обычных умений +0.2%." },
        { bp: "20P", text: "Урон обычных умений +0.2%." },
      ],
    },
    "Deathblade Wave": {
      options: [
        { bp: "10P", text: "Урон обычных умений повышается на 2.0%." },
        { bp: "14P", text: "Умение «Иссечение» активирует Предназначение." },
        { bp: "17P", text: "Время восстановления умения «Воздушные шакрамы» уменьшается на 4.0 сек., его урон повышается на 16.0%, а расход маны на его применение снижается на 50.0%." },
        { bp: "18P", text: "Урон обычных умений повышается на 0.2%." },
        { bp: "19P", text: "Урон обычных умений повышается на 0.2%." },
        { bp: "20P", text: "Урон обычных умений повышается на 0.2%." },
      ],
    },
    "Death Sword Energy": {
      options: [
        { bp: "10P", text: "Урон умения «Воздушные шакрамы» повышается на 8.0%. Во время использования этого умения Клинок смерти невосприимчив к ошеломлению." },
        { bp: "14P", text: "Скорость применения умения «Воздушные шакрамы» повышается на 30.0%, а его урон — на 14.0%." },
        { bp: "17P", text: "Если в качестве эффекта трипода третьего уровня для умения «Воздушные шакрамы» выбран «Волна смерти», урон этого умения повышается на 20.0%." },
        { bp: "18P", text: "Урон умения «Воздушные шакрамы» повышается на 0.6%." },
        { bp: "19P", text: "Урон умения «Воздушные шакрамы» повышается на 0.6%." },
        { bp: "20P", text: "Урон умения «Воздушные шакрамы» повышается на 0.6%." },
      ],
    },
    "Arts Core": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.5%." },
        { bp: "14P", text: "Умение «Концентрация воли» активирует Предназначение." },
        { bp: "17P", text: "Скорость применения умений «Двойная плеть», «Иссечение» и «Смертный приговор» повышается на 15.0%. Урон обычных умений повышается на 5.0%." },
        { bp: "18P", text: "Наносимый урон повышается на 0.15%." },
        { bp: "19P", text: "Наносимый урон повышается на 0.15%." },
        { bp: "20P", text: "Наносимый урон повышается на 0.15%." },
      ],
    },
    "Art Master": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.5%." },
        { bp: "14P", text: "Активация Предназначения на 15.0 сек. повышает наносимый урон на 5.0%." },
        { bp: "17P", text: "Активация Предназначения повышает урон следующих 3 использованных умений «Двойная плеть», «Иссечение» или «Смертный приговор» на 16.0%." },
        { bp: "18P", text: "Наносимый урон повышен на 0.15%." },
        { bp: "19P", text: "Наносимый урон повышен на 0.15%." },
        { bp: "20P", text: "Наносимый урон повышен на 0.15%." },
      ],
    },
    "Basics": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.0%." },
        { bp: "14P", text: "Урон умения «Смертный приговор» повышается на 15.0%." },
        { bp: "17P", text: "Урон умения «Иссечение» повышается на 20.0%." },
        { bp: "18P", text: "Наносимый урон повышен на 0.15%." },
        { bp: "19P", text: "Наносимый урон повышен на 0.15%." },
        { bp: "20P", text: "Наносимый урон повышен на 0.15%." },
      ],
    },
    "Deathblade Surge": {
      options: [
        { bp: "10P", text: "Урон умения «Концентрация воли» повышается на 2.5%." },
        { bp: "14P", text: "Активация Предназначения на 30.0 сек. повышает наносимый урон на 5.0%." },
        { bp: "17P", text: "Активация Предназначения повышает урон следующего использованного умения «Концентрация воли» на 6.0% (1 раз)." },
        { bp: "18P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "19P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "20P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
      ],
    },
    "Surge Core": {
      options: [
        { bp: "10P", text: "Урон умения «Концентрация воли» повышается на 2.5%." },
        { bp: "14P", text: "Умение «Боевой транс» активирует Предназначение." },
        { bp: "17P", text: "Наносимый урон повышается на 4.0%. Умение «Двуручный хват» теперь имеет 2 заряда." },
        { bp: "18P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "19P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "20P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
      ],
      note: "Только для специализации «Твердая воля». Необходимо активировать эффект «Дисциплина тьмы» (4-я ступень) в системе А.Р.К.",
    },
    "Strike": {
      options: [
        { bp: "10P", text: "Урон умения «Концентрация воли» повышается на 1.5%." },
        { bp: "14P", text: "Урон умения «Неуловимый пируэт» повышается на 30.0%." },
        { bp: "17P", text: "Наносимый урон повышается на 1.0%. Урон умения «Концентрация воли» повышается на 2.0%." },
        { bp: "18P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "19P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
        { bp: "20P", text: "Урон умения «Концентрация воли» повышается на 0.25%." },
      ],
    },
    "Swift Resolution": {
      options: [
        { bp: "10P", text: "Урон умения «Убийственная сталь» повышается на 1.5%." },
        { bp: "14P", text: "Если в качестве эффекта трипода второго уровня для умения «Блиц» выбран «Быстрая подготовка», время восстановления этого умения увеличивается на 6.0 сек., а наносимый им урон повышается на 90.0%." },
        { bp: "17P", text: "Урон умения «Убийственная сталь» повышается на 15.0%." },
        { bp: "18P", text: "Урон обычных умений +0.3%." },
        { bp: "19P", text: "Урон обычных умений +0.3%." },
        { bp: "20P", text: "Урон обычных умений +0.3%." },
      ],
    },
    "Deathblade Rush": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.5%." },
        { bp: "14P", text: "Активация Предназначения мгновенно восстанавливает умение «Охота за головами»." },
        { bp: "17P", text: "Активация Предназначения повышает урон следующего использованного умения «Охота за головами» на 26.0% (1 раз)." },
        { bp: "18P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "19P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "20P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
      ],
    },
    // Still ENGLISH, deliberately. Ten of the fifteen cores below now have a
    // confirmed Russian name and option text; this one never got one, and
    // translating its option text anyway would mean writing the prose
    // myself rather than transcribing it - which is the one thing this
    // file's numbers must never be, since they feed a damage calculator.
    // See this file's LANGUAGE note.
    "Death Blitz": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.5%." },
        { bp: "14P", text: "Умение «Иссечение» активирует Предназначение." },
        { bp: "17P", text: "Скорость применения умения «Охота за головами» повышается на 20.0%, его урон — на 16.0%, а расход маны снижается на 50.0%." },
        { bp: "18P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "19P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "20P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
      ],
    },
    "Frostfire Blade": {
      options: [
        { bp: "10P", text: "Наносимый урон повышается на 1.0%." },
        { bp: "14P", text: "Урон умения «Охота за головами» повышается на 7.0%." },
        { bp: "17P", text: "Если в качестве эффекта трипода второго уровня для умения «Охота за головами» выбран «Отработанный прием», урон этого умения повышается на 100.0%." },
        { bp: "18P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "19P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
        { bp: "20P", text: "Урон умения «Охота за головами» повышается на 0.6%." },
      ],
    },
    "Slaughter Spectacle": {
      options: [
        { bp: "10P", text: "Урон обычных умений +3.0%." },
        { bp: "14P", text: "Активация Предназначения накладывает на Клинка смерти эффект «Предназначение: Последний танец». «Предназначение: Последний танец»: урон следующего использованного умения «Убийственная сталь» повышается на 30.0%. Использование умения рассеивает этот эффект." },
        { bp: "17P", text: "Пока действует эффект «Предназначение: Последний танец», использование обычных умений (кроме умения «Убийственная сталь») накладывает на Клинка смерти эффект «Предназначение: Острота бритвы», который суммируется до 5 раз. «Предназначение: Острота бритвы»: следующее использованное умение «Убийственная сталь» нанесёт на 4.0% больше урона за уровень эффекта. Использование умения рассеивает этот эффект." },
        { bp: "18P", text: "Урон обычных умений +0.3%." },
        { bp: "19P", text: "Урон обычных умений +0.3%." },
        { bp: "20P", text: "Урон обычных умений +0.3%." },
      ],
    },
    "Twin Swords Dance": {
      options: [
        { bp: "10P", text: "Урон обычных умений повышается на 3.0%." },
        { bp: "14P", text: "Умение «Боевой транс» активирует Предназначение." },
        { bp: "17P", text: "Скорость применения умений «Блиц» и «Убийственная сталь» повышается на 10.0%, а урон этих умений — на 12.0%." },
        { bp: "18P", text: "Урон обычных умений повышается на 0.3%." },
        { bp: "19P", text: "Урон обычных умений повышается на 0.3%." },
        { bp: "20P", text: "Урон обычных умений повышается на 0.3%." },
      ],
    },
  };
})();
