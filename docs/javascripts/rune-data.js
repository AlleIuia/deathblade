// FORK GUIDE: DATA, but mostly class-agnostic - the Skill Rune system
// itself (Galewind/Focus/Rage/Wealth/Bleed/Poison/Vision/Purify/etc.) is
// shared by every class in the game, same as the account-wide Ark Passive
// nodes in ap-node-names.js. The only thing to touch when forking is this
// file - rune-tooltip.js and skill-setup.js read whatever is defined here
// and need no code changes.
//
// FOUR MAPS, in the order they get read:
//
//   DB_RUNE_EFFECTS    id -> { tier -> effect text }, the tooltip's body
//   DB_RUNE_NAMES      id -> the name shown on a chip and in a tooltip
//                       header (may be any language)
//   DB_RUNE_TIER_NAMES tier -> the name of the rarity itself, i.e. what
//                       "legendary" is CALLED in the game's own language
//   DB_RUNE_IDS        any name (ascii id OR display name) -> ascii id
//                       ...built from the two maps above, not hand-listed
//
// WHY THE IDS STAY ASCII: the id is doing three jobs at once - it's the
// DB_RUNE_EFFECTS key, it's the `data-rune-name` rune-tooltip.js looks
// its own lookup up by, AND with the ".png" appended it's the file it
// requests from assets/shared/rune-icons/. If the id were the Russian
// name, all three would break at once on a file that doesn't exist
// (rune-icons/джар.png). So the ids stay latin and the translation lives
// in DB_RUNE_NAMES only, which is the one map here a reader is meant to
// look at. Nothing below hard-codes a display name into a lookup.
//
// The lowercase-no-punctuation id convention matches every other lookup on
// this site (skill-names.js, ap-node-names.js), and deliberately does NOT
// match the icon-<id>.png convention the rest of the site uses for icons:
// a rune name collides with an unrelated icon-<id>.png that already
// exists for a different purpose (e.g. "bleed" is also a DB_SKILL_NAMES
// id for the Trixion DPS rune-proc row - see skill-names.js's own comment
// on that collision), so rune art lives in its own folder under its own
// names.
//
// Tier keys are the actual item-rarity names in english ("uncommon" and
// "rare", NOT the chip's display colors "green"/"blue"). An earlier
// version of this file used the color names as the tier keys themselves,
// which was a real mistake, not just a display nit: it silently
// mislabeled the rarity everywhere that string surfaced rather than just
// picking an unconventional-but-consistent internal id. The KEYS here and
// in every markdown page's "rune": {"tier": ...} JSON stay english;
// extra.css's .rune-chip/.rune-tip-tier class suffixes pair with them;
// what gets RENDERED comes from DB_RUNE_TIER_NAMES, so the site can show
// "Легендарный" while every class, id and class name in the code stays
// english. --dbc-green/--dbc-blue in extra.css keep their own (color, not
// rarity) names - they're also reused for unrelated tripod-chip tier
// coloring.
//
// Four rarities exist (Необычный/Редкий/Эпический/Легендарный), but not
// every rune drops in all four: Ульд is Epic/Legendary only; Солум is
// Uncommon/Epic/Legendary, no Rare; Эйтур is Uncommon/Rare/Legendary, no
// Epic - only include the tiers that are real, don't pad missing ones
// with a guessed number. A chip asking for a tier that isn't listed just
// gets no tooltip (attachRune bails on the lookup miss), same
// fail-quietly rule as every other widget here.
//
// SOURCING: effect text and tier values below are transcribed VERBATIM
// from the Russian community wiki (lostark.ru/wiki/Rune) - the effect
// sentences below are the wiki's own sentences with X/Y/Z substituted
// for the per-tier number, and nothing here is reworded or re-translated
// from the game's english tooltip. One of the wiki's cells is wrong and
// is corrected below; a second is only a known doubt, and is left as the
// wiki has it:
//
//   - The wiki lists Эйтур (poison) as Необычный 3s and Легендарный 6s
//     only, with Редкая/Эпическая marked "Нет в игре". In game Эйтур does
//     also drop Rare, at 4s. Its Эпическая version does not exist at all
//     and is deliberately absent below. An earlier version of this file
//     had poison at rare 4s / epic 5s, where epic was pure guesswork -
//     5s was copied off bleed's ladder on the assumption the two runes
//     share one, and no such value exists in the game.
//   - Эйге (wealth) reads below exactly as the wiki writes it, "при
//     применении умения" and all. Flagging, not changing: the english
//     tooltip this file used to carry said "On skill HIT", and a resource
//     gain on skill use is a different rune from one on skill hit, and
//     this site's own guides put Эйге on hit-skills specifically for orb
//     generation. If a future check against the game shows the wiki wrong
//     here too, the fix is to put "При попадании умением по противнику"
//     back in place of "При применении умения" - and to change all four
//     tiers together, since they share one sentence.
//
// One deliberate departure from the wiki's literal text, on both Джар and
// Эйтур: the wiki fills one "на X секунд" template for all four tiers, but
// after 3 and 4 Russian needs the genitive singular - "на 3 секунды",
// "на 4 секунды" - and only 5+ takes "секунд". The tiers below inflect
// accordingly. That is grammar, not a data difference; don't "fix" it back
// to the wiki's uninflected form.
//
// Before this pass every entry in this file was either transcribed from
// an in-game tooltip screenshot (english) or reconstructed from
// Maxroll's guides, and the file said so at length. That provenance note
// is gone because the entries it described are: the numbers are now the
// wiki's, confirmed against the game where the two disagreed.
(function () {
  window.DB_RUNE_EFFECTS = {
    // ---- Джар ----
    bleed: {
      legendary: "При попадании умением по противнику накладывает на него эффект кровотечения на 6 секунд.",
      epic: "При попадании умением по противнику накладывает на него эффект кровотечения на 5 секунд.",
      rare: "При попадании умением по противнику накладывает на него эффект кровотечения на 4 секунды.",
      uncommon: "При попадании умением по противнику накладывает на него эффект кровотечения на 3 секунды.",
    },
    // ---- Эйтур ---- (no Эпическая - see SOURCING)
    poison: {
      legendary: "При попадании умением по противнику накладывает на него эффект отравления на 6 секунд.",
      rare: "При попадании умением по противнику накладывает на него эффект отравления на 4 секунды.",
      uncommon: "При попадании умением по противнику накладывает на него эффект отравления на 3 секунды.",
    },
    // ---- Раш ----
    rage: {
      legendary: "С некоторой вероятностью скорость атаки и передвижения персонажа могут повыситься на 16% на 6 секунд.",
      epic: "С некоторой вероятностью скорость атаки и передвижения персонажа могут повыситься на 12% на 6 секунд.",
      rare: "С некоторой вероятностью скорость атаки и передвижения персонажа могут повыситься на 8% на 6 секунд.",
      uncommon: "С некоторой вероятностью скорость атаки и передвижения персонажа могут повыситься на 4% на 6 секунд.",
    },
    // ---- Марх ----
    focus: {
      legendary: "Умение расходует на 40% меньше маны",
      epic: "Умение расходует на 30% меньше маны",
      rare: "Умение расходует на 20% меньше маны",
      uncommon: "Умение расходует на 10% меньше маны",
    },
    // ---- Агель ----
    galewind: {
      legendary: "Время применения умения сокращается на 14%.",
      epic: "Время применения умения сокращается на 12%.",
      rare: "Время применения умения сокращается на 8%.",
      uncommon: "Время применения умения сокращается на 5%.",
    },
    // ---- Солум ---- (no Редкая)
    purify: {
      legendary: "При применении умения с вашего персонажа с вероятностью 80% будет снят один негативный эффект.",
      epic: "При применении умения с вашего персонажа с вероятностью 70% будет снят один негативный эффект.",
      uncommon: "При применении умения с вашего персонажа с вероятностью 50% будет снят один негативный эффект.",
    },
    // ---- Ульд ---- (no Необычная/Редкая)
    vision: {
      legendary: "Время применения умения сокращается на 10%, а изнуряющий урон повышается на 20%.",
      epic: "Время применения умения сокращается на 8%, а изнуряющий урон повышается на 16%.",
    },
    // ---- Эйге ----
    // Wiki wording verbatim, trigger clause included - see SOURCING.
    wealth: {
      legendary: "При применении умения персонаж получает на 40% больше ресурса, позволяющего использовать абсолютное умение.",
      epic: "При применении умения персонаж получает на 30% больше ресурса, позволяющего использовать абсолютное умение.",
      rare: "При применении умения персонаж получает на 20% больше ресурса, позволяющего использовать абсолютное умение.",
      uncommon: "При применении умения персонаж получает на 10% больше ресурса, позволяющего использовать абсолютное умение.",
    },
  };

  // Display name per rune id - the only place a non-ascii name appears.
  // Russian, matching how the game's own RU client names them; the ids
  // above/below stay english. Read by skill-setup.js for a chip's label
  // and by rune-tooltip.js's buildHeader for the tooltip's title, so the
  // chip, the tooltip and any prose mention all say the same thing
  // without any of them repeating the string.
  window.DB_RUNE_NAMES = {
    bleed: "Джар",
    poison: "Эйтур",
    rage: "Раш",
    focus: "Марх",
    galewind: "Агель",
    purify: "Солум",
    vision: "Ульд",
    wealth: "Эйге",
  };

  // What each rarity tier is CALLED, as the game writes it. Kept apart
  // from the tier KEYS (which stay english - see the header comment) so
  // that adding a language never means renaming a class or a data key.
  window.DB_RUNE_TIER_NAMES = {
    legendary: "Легендарный",
    epic: "Эпический",
    rare: "Редкий",
    uncommon: "Необычный",
  };

  // Name -> canonical id, and the display-name alias into DB_RUNE_EFFECTS,
  // both derived from the two maps above in one pass. Inverting rather
  // than hand-listing means a rune's name is typed exactly once (in
  // DB_RUNE_NAMES) and a new one can't half-work by being added to one
  // map and forgotten in the other - which is exactly how this file used
  // to break, with a hand-written `DB_RUNE_IDS["джар"] = "bleed"` line
  // and a hand-written `DB_RUNE_EFFECTS["джар"]` alias that each covered
  // half of what a "Джар" chip needed and had to be kept in sync by hand.
  //
  // The DB_RUNE_EFFECTS alias is belt-and-suspenders now that
  // skill-setup.js writes the ascii id into data-rune-name: nothing should
  // ever look a rune up by its display name. It stays so that a
  // hand-written `<span data-rune-name="Джар">` in any markdown page
  // still resolves instead of silently rendering no tooltip.
  window.DB_RUNE_IDS = {};
  Object.keys(window.DB_RUNE_EFFECTS).forEach(function (id) {
    window.DB_RUNE_IDS[id] = id;
  });
  Object.keys(window.DB_RUNE_NAMES).forEach(function (id) {
    var display = String(window.DB_RUNE_NAMES[id]).toLowerCase();
    window.DB_RUNE_IDS[display] = id;
    window.DB_RUNE_EFFECTS[display] = window.DB_RUNE_EFFECTS[id];
  });
})();
