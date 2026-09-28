// FORK GUIDE: DATA, but read this first - some node ids below (crit,
// specialization, keensense, etc.) are account-wide nodes shared by every
// class in-game and can stay as-is; others (remainingenergy,
// surgeenhancement, orbcirculation, etc.) are Deathblade's own identity
// nodes and must be replaced with your class's.
//
// SINGLE SOURCE OF TRUTH for an Ark Passive node id's display name, icon,
// tier, and max level, used by ark-passive-tree.js so a build's "## Ark
// Setup" JSON can author a node as just its id + invested level (e.g.
// {"id": "keensense", "level": 2}) instead of repeating "Keen Sense",
// "ap-icons/keen-sense.png", which tier column it sits in, and its max
// level by hand on every node, on every build page - all four are fixed
// properties of the node itself (which tree/tier/cap it has never changes
// between builds), never something a build actually chooses. Same
// problem/fix as skill-names.js for skills.
//
// tier is the node's Tier NUMBER within its own column (Evolution/
// Enlightenment/Leap each restart at 1) - ark-passive-tree.js groups a
// build's invested nodes by this number and labels the group "Tier N".
// It is NOT split by column here for the same reason id isn't (see
// below): tier numbers can repeat across columns (e.g. every column has
// a Tier 1), but that's fine, since a node id already only ever appears
// in one column - grouping only ever mixes nodes that are also in the
// same column already, via the column id declared once per build page's
// column entry.
//
// Also home to DB_AP_COLUMNS - the matching per-column lookup (display
// label + total point budget, e.g. "Evolution (140)") keyed by column id
// ("evolution"/"enlightenment"/"leap"), since those are just as fixed
// and just as pointless to retype on every build page.
//
// Keyed flatly by id, NOT split by column - almost every node id is
// unique across all three trees, so one flat map avoids maintaining
// three copies of the lookup logic. The two exceptions are handled with
// distinct ids instead of a shared one:
//
//   - "Limit Break" is a real node in BOTH Evolution and Enlightenment,
//     with a DIFFERENT icon in each (limit-break-evo.png vs
//     limit-break-enl.png) - so id can't just be a name slug here, or
//     one column's icon would silently overwrite the other's. Use
//     "limitbreakevo" / "limitbreakenl" and pick the one matching
//     whichever column the node is actually in.
//   - "Crit" (a Tier 1 Evolution stat node, +50 per point) and
//     "Critical" (a separate Tier 3 Evolution keystone, alternative to
//     Master/Pulverize) are two different real nodes with two different
//     icons that happen to collide under the id.toLowerCase() convention
//     - kept as "crit" (icon crit.png) and "critical" (icon
//     critical.png) instead of colliding on one id.
//
// Id convention: name lowercased with spaces/hyphens stripped (matches
// the skill id convention already used in skill-names.js/skill-data.js),
// e.g. "Standing Striker" -> "standingstriker".
//
// LANGUAGE, MID-TRANSLATION: the site is being moved to Russian one
// string at a time, and this file is mid-way through. A node's `name` is
// Russian ONLY where the Russian client's own name for it was confirmed
// against a source (the lostark.ru Ark Passive page, cross-checked by
// matching effect VALUES rather than by trusting the label - a name was
// only accepted when its numbers matched this file's own to the percent).
// Everything else is still English on purpose: those names are game
// content, and inventing a plausible-looking Russian for a node nobody has
// confirmed is worse than an honest English label, because a reader
// compares it against their own character sheet.
//
// The id and icon are unaffected - ids stay latin (they're also the
// icon filenames), so the tree, the build JSONs on every page
// ({"id": "keensense", "level": 2}) and the calculator all keep working
// regardless of which language the display name is in.
//
// The three COLUMN labels were the last thing this file needed from
// outside: the game's own tabs read Экспансия / Становление / Прогресс.
//
// All 33 node names are now confirmed russian, transcribed from in-game
// screenshots. The 9 RE-specific Enlightenment/Leap nodes that this file
// used to carry in english (swiftstrike, surgeenhancement, orbcompression,
// orbcontrol, limitbreakenl, chaosinfusion, chaoticpower,
// transcendentpower, instantspell) were each matched to a screenshot by
// their effect text - numbers, mechanics and unlock conditions - not by
// name similarity and not by a single cross-reference.
//
//   - Two of this file's old ENGLISH names are wrong labels, and the
//     corrected mapping is worth knowing before anyone "fixes" it back:
//       orbcompression   = "Orb Compression"   -> Твердая воля (the 60-stack surge buff, not orb count)
//       surgeenhancement = "Surge Enhancement" -> Предельное усилие (the orb-count damage rule)
//     "Сжатие сфер" and "Усиление Расхода" are the game's names for the
//     BUFFS, not for these two nodes. That is the whole reason the english
//     reads as if the ids were swapped - the effect text inside
//     ap-node-effects.js uses "Surge Enhancement stacks" the same way.
//
//   - instantspell used to be listed here as "Мгновенная реакция", which
//     was wrong: that name belongs to swiftstrike (an Enlightenment node).
//     instantspell is the Leap node "Божественное вдохновение" - the only
//     node on the site whose text touches Архиумений.
//
//   - One node the game has is still absent here, deliberately: "На пике
//     возможностей" (Прогресс, 4 оч. за уровень - "Когда шкала
//     Архипробуждения заполняется на максимум, время восстановления уже
//     использованного умения Пробуждения сокращается на 10.0%."). The
//     game has 10 Leap nodes, this file has 9. Adding it would mean
//     inventing an id, a tier, a max and an icon path - ap-icons/
//     peak-potential.png does not exist - so it waits for the icon rather
//     than shipping a broken image card.
//
// THREE EARLIER GUESSES, since all three were wrong and a reader will hit
// the corrected names here first - the corrections are in place, this is
// just the record of why:
//   - crit/specialization were rendered "Крит"/"Специализация" from their
//     ids. The game's own six tier-1 stat names are Смертоносность and
//     Мастерство; the numbers check out (50/level, so Lv.10 = 500 and
//     Lv.30 = 1500, both matching the screenshots).
//   - limitbreakevo was left English over a level-count conflict: this file
//     has 3 levels (+10/20/30%) where the wiki's "Исключительный дар" listed
//     only 2. A screenshot settles it - it shows Lv.2 at +20% and Lv.3 at
//     +30% - so 3 levels was right all along and the wiki was incomplete.
//   - optimizedtraining is spelled "Изнурительные тренировки" on the
//     screenshots but "Изнурительные тренировки" in the wiki's own text. The
//     screenshot reading is used, since that is the game's UI and the wiki
//     reading appears nowhere else. Same effect either way (all-skill
//     cooldowns except Awakening/Stand Up/Movement -4%, then -8%; Evolution
//     damage +5%, then +10%), so the numbers were never in question.
//
// Must load before ark-passive-tree.js - see the extra_javascript order
// in mkdocs.yml.
(function () {
  window.DB_AP_COLUMNS = {
    evolution: { label: "Экспансия", points: 140 },
    enlightenment: { label: "Становление", points: 100 },
    leap: { label: "Прогресс", points: 70 },
  };

  window.DB_AP_NODE_NAMES = {
    // Evolution
    crit: { name: "Смертоносность", icon: "ap-icons/crit.png", tier: 1, max: 30 },
    specialization: { name: "Мастерство", icon: "ap-icons/specialization.png", tier: 1, max: 30 },
    // Goddess of Blessings/Illicit Spell/Optimized Training: Tier 1
    // Evolution keystone alternatives to Crit/Specialization. Not used by
    // any current build - added for future builds/prose reference.
    goddessofblessings: { name: "Благосклонность фортуны", icon: "ap-icons/goddess-of-blessings.png", tier: 1, max: 30 },
    illicitspell: { name: "Запретное знание", icon: "ap-icons/illicit-spell.png", tier: 1, max: 30 },
    optimizedtraining: { name: "Изнурительные тренировки", icon: "ap-icons/optimized-training.png", tier: 1, max: 30 },
    keensense: { name: "Отточенные рефлексы", icon: "ap-icons/keen-sense.png", tier: 2, max: 2 },
    limitbreakevo: { name: "Исключительный дар", icon: "ap-icons/limit-break-evo.png", tier: 2, max: 3 },
    strike: { name: "Высший приоритет", icon: "ap-icons/strike.png", tier: 3, max: 2 },
    master: { name: "Мастерский удар", icon: "ap-icons/master.png", tier: 4, max: 1 },
    pulverize: { name: "Сокрушение", icon: "ap-icons/pulverize.png", tier: 4, max: 1 },
    // Critical: Tier 3 Evolution keystone alternative to Master/Pulverize.
    // Not used by any current build - added for future builds/prose
    // reference.
    critical: { name: "Ликование", icon: "ap-icons/critical.png", tier: 3, max: 2 },
    standingstriker: { name: "Пламя войны", icon: "ap-icons/standing-striker.png", tier: 5, max: 2 },

    // Enlightenment
    swiftstrike: { name: "Мгновенная реакция", icon: "ap-icons/swift-strike.png", tier: 1, max: 1 },
    remainingenergy: { name: "Остаточная энергия", icon: "ap-icons/remaining-energy.png", tier: 2, max: 3 },
    firmwill: { name: "Атакующий порыв", icon: "ap-icons/firm-will.png", tier: 3, max: 3 },
    surgeenhancement: { name: "Предельное усилие", icon: "ap-icons/surge-enhancement.png", tier: 1, max: 1 },
    swordcraftenhancement: { name: "Продвинутое фехтование", icon: "ap-icons/swordcraft-enhancement.png", tier: 3, max: 5 },
    extremebodymovement: { name: "Совершенное тело", icon: "ap-icons/extreme-body-movement.png", tier: 4, max: 3 },
    orbcirculation: { name: "Циркуляция энергии", icon: "ap-icons/orb-circulation.png", tier: 4, max: 5 },
    orbcompression: { name: "Твердая воля", icon: "ap-icons/orb-compression.png", tier: 2, max: 3 },
    orbcontrol: { name: "Координация сфер", icon: "ap-icons/orb-control.png", tier: 3, max: 5 },
    limitbreakenl: { name: "За гранью возможного", icon: "ap-icons/limit-break-enl.png", tier: 3, max: 3 },
    chaosinfusion: { name: "Фатальный удар", icon: "ap-icons/chaos-infusion.png", tier: 4, max: 5 },
    chaoticpower: { name: "Дисциплина тьмы", icon: "ap-icons/chaotic-power.png", tier: 4, max: 3 },

    // Leap
    transcendentpower: { name: "Ключевой аспект", icon: "ap-icons/transcendent-power.png", tier: 1, max: 5 },
    awakeningamplifier: { name: "Пробужденное сознание", icon: "ap-icons/awakening-amplifier.png", tier: 1, max: 3 },
    unleashedpower: { name: "Несравненная сила", icon: "ap-icons/unleashed-power.png", tier: 1, max: 5 },
    releasepotential: { name: "Стремительное восстановление", icon: "ap-icons/release-potential.png", tier: 1, max: 5 },
    instantspell: { name: "Божественное вдохновение", icon: "ap-icons/instant-spell.png", tier: 1, max: 3 },
    danceofnightmares: { name: "Неистовый вихрь", icon: "ap-icons/dance-of-nightmares.png", tier: 2, max: 3 },
    danceofscreams: { name: "Танец стали", icon: "ap-icons/dance-of-screams.png", tier: 2, max: 3 },
    pathoftheblade: { name: "Кодекс меча", icon: "ap-icons/path-of-the-blade.png", tier: 2, max: 3 },
    // Flash Slash: Tier 1 Leap keystone alternative to Path of the
    // Blade/Dance of Nightmares/Dance of Screams. Not used by any current
    // build - added for future builds/prose reference.
    flashslash: { name: "Беспрецедентная скорость", icon: "ap-icons/flash-slash.png", tier: 1, max: 3 },
  };
})();
