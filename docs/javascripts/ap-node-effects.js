// FORK GUIDE: DATA - every entry here is one Ark Passive node's in-game
// tooltip effect text, transcribed from reference screenshots (KR client,
// reconciled against the two most recent KR balance patches - see notes
// below on nodes that changed). Replace with your own class's Evolution/
// Enlightenment/Leap nodes if forking.
//
// SINGLE SOURCE OF TRUTH for the hover/focus/tap tooltip
// ark-passive-tooltip.js attaches to each node rendered by
// ark-passive-tree.js - a lookup miss just means the node renders with no
// tooltip (fails quietly, same rule as every other widget here).
//
// Keyed by the SAME flat node id ap-node-names.js uses (e.g. "keensense"),
// NOT split by column - see that file's own header comment for why.
//
// LANGUAGE: every node's effect text is now Russian. Early passes accepted a
// name only against the lostark.ru Ark Passive page; the RE-specific
// Enlightenment/Leap nodes the Ark Passive page has no entry for were later
// matched against in-game screenshots instead - by effect text, numbers,
// mechanics and unlock conditions, all at once, never by label alone,
// because a plausible-looking but wrong effect number is worse than an
// honest English one (these feed a damage calculator). See ap-node-names.js's
// own LANGUAGE note for the id -> name mapping and for the two English
// labels in that file that turned out to name the game's BUFFS, not nodes.
//
//   - TWO OPEN DISCREPANCIES, both on nodes translated this pass. Neither is
//     silently resolved, and neither may be "cleaned up" without a new
//     in-game screenshot:
//
//     1. swiftstrike (Мгновенная реакция) - the game's tooltip is ONE
//        sentence, and it does NOT contain this file's third clause,
//        "Усиленный Расход активируется, если расходуется достаточно
//        сфер" (english: "Enhanced Surge activates if enough Death Orbs
//        are consumed."). That is a MECHANIC, not prose. The screenshot
//        was transcribed as given; if that screenshot was cropped, the
//        clause has to come back.
//
//     2. chaoticpower (Дисциплина тьмы) - "время восстановления «Неуловимого
//        пируэта» увеличивается на 540.0 сек." is 9 minutes of added
//        cooldown. The english said +540s too, so both agree and it is
//        transcribed as-is, but it reads like a lost decimal (5.4s?) and
//        wants one in-game look.
//
//   - Level 2+ of the five multi-tier nodes translated this pass
//     (orbcompression, limitbreakenl, chaosinfusion, orbcontrol,
//     chaoticpower) use this file's own numbers, not screenshots: only
//     level 1 arrived. In all five, level 1 matched to the percent, and
//     the prose is identical across levels, so only the figure varies.
//     That is a reasoned fill, not a transcription - flag it as such if a
//     screenshot for those levels ever surfaces.
//

//   - Effect text follows its node's language independently, so a
//     translated node's "Требует <узел> N ур." note quotes the node name
//     in the language THAT node is currently displayed in - an English
//     node name inside a Russian sentence, until that node is translated
//     too. See remainingenergy's note for the case in point.
//   - The {value} token in a perPoint template is a placeholder substituted
//     by ark-passive-tooltip.js, not prose, so it stays latin in every
//     language. The surrounding sentence is what gets translated.
//   - Numbers keep their game's own notation: "−6%" uses a real minus
//     sign (U+2212), not a hyphen, matching the Russian text elsewhere on
//     the site. Don't "fix" those back to "-".
//
// Per-entry shape is one of:
//   { text: "..." }          - flat effect text that doesn't change with
//                               the node's level (a single-tier keystone
//                               like Master/Pulverize, or a node whose
//                               only "level" is unlock/no-unlock).
//   { levels: [ { level: 1, text: "..." }, { level: 2, text: "..." } ] }
//                             - discrete per-level effect text, for any
//                               node whose in-game tooltip shows bracketed
//                               "+[x%/y%/z%]"-style tiers. ark-passive-
//                               tooltip.js looks up ONLY the entry whose
//                               level matches the node's own invested
//                               level (from the build's own JSON) and
//                               shows just that one line - matching the
//                               real in-game tooltip, which never lists
//                               every level either, just the current one
//                               (plus a "next level" preview this site
//                               doesn't replicate). The rest of the array
//                               still needs to exist as a real, correct
//                               lookup table even though only one entry
//                               renders per hover - see that file's
//                               currentLevelText() for the (should-never-
//                               trigger-in-practice) fallback if a node's
//                               own level ever doesn't land on an exact
//                               entry.
// Both shapes accept an optional `note` - a short caveat line shown below
// the effect text, currently only used for keystone mutual-exclusivity
// (e.g. Swift Strike / Surge Enhancement can't both be taken).
//
// A third shape, { perPoint: N }, is for a node that scales linearly with
// no discrete tiers to enumerate - Crit/Specialization (+50 per point, a
// raw stat value not a %, matching how base stats like Crit/
// Specialization/Swiftness/Domination work everywhere else in-game) and
// Goddess of Blessings (+3% Atk./Move Speed per point). ark-passive-
// tooltip.js computes the real number from the node's own invested level
// - "Crit +500" at Lv.10 - rather than this being a 30-entry levels list
// or a generic "+50 per point" rate description. Default output is
// "{node name} +{value}."; an optional `template` string overrides that
// for a node whose number sits inside a longer sentence rather than
// standing alone - use a literal "{value}" token wherever the computed
// number goes (see goddessofblessings below).
//
// Reconciled against two KR balance patches (older, then a newer one that
// overrides it where they overlap) not yet on Global - current values
// below are POST-both-patches. Where that changed a node from what an
// older reference screenshot showed, the old value is noted in a comment
// for context, not carried into the actual tooltip text:
//   - Orb Control: "Orb Consumption Speed -15%" -> "Orb Gauge doesn't
//     decrease"; damage +[0.8/1.6/2.4/3.2/4%] -> +[1/2/3/4/5%]
//   - Limit Break (Enlightenment): trigger changed from reaching MAX Surge
//     stacks to reaching exactly 60 (values unchanged: +[70/95/120%])
//   - "Locked In" renamed "Chaos Infusion": was a 12s on-hit buff
//     +[2/4/6/8/10%], now a flat Back Attack conditional at the same %s
//   - "Sword Spirit Compression" renamed "Chaotic Power", then renamed
//     again to "Chaos Strength" (id stays "chaoticpower" - see
//     ap-node-names.js): completely rewritten mechanic (see chaoticpower
//     below), damage settled at +[6/23/40%] and Deathly Slash Damage
//     penalty settled at -25%
//   - Path of the Blade: Crit Damage buff duration 5s -> 10s; the old
//     "Breaking Moon Damage +[10/20/30%]" line isn't mentioned by the
//     patch note at all, treated as dropped in favor of "Breaking Moon
//     changed to Normal operation"
//   - Dance of Screams: old flat "Deathly Slash Damage +[4/15/25%]" line
//     isn't mentioned by the patch note either, treated as superseded by
//     the new normal/Death-Trance damage split below
//
// Re-transcribed against a fresh set of in-game tooltip screenshots
// (2026-09-17) for six nodes whose EN client wording had drifted from
// what was transcribed above - no numeric values changed on any of the
// six, just phrasing:
//   - Limit Break (Enlightenment): "On reaching 60 Surge stacks" -> "At 60
//     Surge Enhancement stacks"
//   - Orb Control: "Orb Gauge doesn't decrease" -> "Orb Meter is not
//     consumed"; "Damage to foes during Death Trance" -> "Damage during
//     Death Trance"
//   - Chaos Infusion: "When hitting Deathblade Surge as a Back Attack,
//     damage to foes +X%" -> "When Deathblade Surge lands as a Back
//     Attack, Outgoing Damage +X%"
//   - Chaotic Power / Chaos Strength: full rewrite to match the client's
//     current wording ("Partially liberates restrained demonic energy to
//     transform Deathblade Surge into a powerful attack condensed with
//     Chaos Strength..."), see chaoticpower below
//   - Path of the Blade: "Normal operation" -> "Normal Mode"; "Deathblade
//     Surge's Crit Damage" -> "Deathblade Surge Crit Damage"; "This effect
//     is removed after Deathblade Surge is used" -> "Effect is removed on
//     using Deathblade Surge"
//   - Dance of Screams: reformatted from one flat sentence into "Deathly
//     Slash's Flurry attack count +N and Damage +X%. While in Death
//     Trance, Damage +Y%."
//
// Must load after ap-node-names.js (shares its id namespace) and before
// ark-passive-tooltip.js - see the extra_javascript order in mkdocs.yml.
(function () {
  window.DB_AP_NODE_EFFECTS = {
    // ---- Evolution ----
    crit: { perPoint: 50 },
    specialization: { perPoint: 50 },
    illicitspell: {
      levels: [
        {
          level: 1,
          text: "Экспансивный урон +5%. Экспансивный урон умений, расходующих ману, +5%. Расход маны −6%.",
        },
        {
          level: 2,
          text: "Экспансивный урон +10%. Экспансивный урон умений, расходующих ману, +10%. Расход маны −12%.",
        },
      ],
    },
    optimizedtraining: {
      levels: [
        {
          level: 1,
          text: "Время восстановления умений (кроме умений Пробуждения, перемещений и «Подъём!») −4%. Экспансивный урон +5%.",
        },
        {
          level: 2,
          text: "Время восстановления умений (кроме умений Пробуждения, перемещений и «Подъём!») −8%. Экспансивный урон +10%.",
        },
      ],
    },
    goddessofblessings: {
      perPoint: 3,
      template:
        "Во время боя на вашего персонажа и ближайших союзников накладывается «Удача в сражении» (длительность 20 сек., обновляется раз в секунду). " +
        "«Удача в сражении»: сила атаки и скорость передвижения +{value}%.",
    },
    keensense: {
      levels: [
        { level: 1, text: "Вероятность крит. удара +4%. Экспансивный урон +5%." },
        { level: 2, text: "Вероятность крит. удара +8%. Экспансивный урон +10%." },
      ],
    },
    limitbreakevo: {
      levels: [
        { level: 1, text: "Экспансивный урон +10%." },
        { level: 2, text: "Экспансивный урон +20%." },
        { level: 3, text: "Экспансивный урон +30%." },
      ],
    },
    strike: {
      levels: [
        { level: 1, text: "Вероятность крит. удара +10%. Критический урон направленных умений +16%." },
        { level: 2, text: "Вероятность крит. удара +20%. Критический урон направленных умений +32%." },
      ],
    },
    master: {
      text:
        "Получаемый урон −4%. При применении умений (кроме умений перемещения и «Подъём!») на 10 сек. накладывается эффект «Мастерский удар»: " +
        "вероятность крит. удара +1.4%, дополнительный урон +1.7%, суммируется до 5 раз.",
    },
    pulverize: { text: "Экспансивный урон +20%. Получаемый урон −4%." },
    critical: { text: "Нанесение крит. удара: урон +12%. Получаемый урон −4%." },
    standingstriker: {
      levels: [
        {
          level: 1,
          text:
            "Экспансивный урон +6%. Сила стигмы +4%. В начале боя накладывается максимум (6) стаков «Стоящий удар». " +
            "Теряется 3 стака при сбивании с ног, 1 восстанавливается каждые 2 сек. За стак: экспансивный урон +0.75%, сила стигмы +1%.",
        },
        {
          level: 2,
          text:
            "Экспансивный урон +12%. Сила стигмы +8%. В начале боя накладывается максимум (6) стаков «Стоящий удар». " +
            "Теряется 3 стака при сбивании с ног, 1 восстанавливается каждые 2 сек. За стак: экспансивный урон +1.5%, сила стигмы +2%.",
        },
      ],
    },

    // ---- Enlightenment ----
    swiftstrike: {
      text: "Когда Клинок смерти входит в боевой транс, он мгновенно применяет умение «Концентрация воли», опустошая все заполненные сферы, но урон этого умения снижается на 30.0%.",
      note: "Нельзя получить вместе с «Предельное усилие».",
    },
    surgeenhancement: {
      text: "Урон «Концентрации воли» — особого умения, которое можно применить только во время боевого транса — больше не зависит от количества заполненных сфер. Теперь умение всегда наносит урон за три сферы.",
      note: "Нельзя получить вместе с «Мгновенная реакция».",
    },
    remainingenergy: {
      levels: [
        { level: 1, text: "После использования Расхода скорость атаки и скорость передвижения +6% на 30 сек." },
        { level: 2, text: "После использования Расхода скорость атаки и скорость передвижения +9% на 30 сек." },
        { level: 3, text: "После использования Расхода скорость атаки и скорость передвижения +12% на 30 сек." },
      ],
      note: "Требует Swift Strike 1 ур. - сам узел ещё не переведён, см. ap-node-names.js.",
    },
    firmwill: {
      // In-game tooltip groups these per-orb-consumed (3 values) then per
      // level (3 more) - regrouped level-major below so each entry is the
      // node's own level, same as every other node here.
      levels: [
        { level: 1, text: "После использования Расхода сила атаки +8%/16%/24% на 30 сек. в зависимости от количества съеденных Сфер." },
        { level: 2, text: "После использования Расхода сила атаки +11%/22%/33% на 30 сек. в зависимости от количества съеденных Сфер." },
        { level: 3, text: "После использования Расхода сила атаки +14%/28%/42% на 30 сек. в зависимости от количества съеденных Сфер." },
      ],
      note: "Требует «Остаточная энергия» 3 ур.",
    },
    swordcraftenhancement: {
      levels: [
        { level: 1, text: "Урон обычных умений +1.2%." },
        { level: 2, text: "Урон обычных умений +2.4%." },
        { level: 3, text: "Урон обычных умений +3.6%." },
        { level: 4, text: "Урон обычных умений +4.8%." },
        { level: 5, text: "Урон обычных умений +6.0%." },
      ],
    },
    extremebodymovement: {
      levels: [
        {
          level: 1,
          text:
            "Урон по всем целям +7%. Расход превращается в режущий выпад к цели. " +
            "Все попадания считаются ударами в спину. При перемещении игнорирует столкновения с другими персонажами и обычными противниками.",
        },
        {
          level: 2,
          text:
            "Урон по всем целям +14%. Расход превращается в режущий выпад к цели. " +
            "Все попадания считаются ударами в спину. При перемещении игнорирует столкновения с другими персонажами и обычными противниками.",
        },
        {
          level: 3,
          text:
            "Урон по всем целям +21%. Расход превращается в режущий выпад к цели. " +
            "Все попадания считаются ударами в спину. При перемещении игнорирует столкновения с другими персонажами и обычными противниками.",
        },
      ],
      note: "Требует «Атакующий порыв» 3 ур.",
    },
    orbcompression: {
      levels: [
        { level: 1, text: "Во время боевого транса попадание по противнику любым умением (кроме обычной атаки) накладывает на Клинка смерти эффект «Твердая воля», который суммируется до 60 раз. Каждый уровень эффекта восстанавливает энергию воли, достигая максимального значения (100%) на 40 уровне эффекта. Каждый уровень эффекта повышает урон умением «Концентрация воли» вплоть до +25.0% на 60 уровне эффекта." },
        { level: 2, text: "Во время боевого транса попадание по противнику любым умением (кроме обычной атаки) накладывает на Клинка смерти эффект «Твердая воля», который суммируется до 60 раз. Каждый уровень эффекта восстанавливает энергию воли, достигая максимального значения (100%) на 40 уровне эффекта. Каждый уровень эффекта повышает урон умением «Концентрация воли» вплоть до +50.0% на 60 уровне эффекта." },
        { level: 3, text: "Во время боевого транса попадание по противнику любым умением (кроме обычной атаки) накладывает на Клинка смерти эффект «Твердая воля», который суммируется до 60 раз. Каждый уровень эффекта восстанавливает энергию воли, достигая максимального значения (100%) на 40 уровне эффекта. Каждый уровень эффекта повышает урон умением «Концентрация воли» вплоть до +80.0% на 60 уровне эффекта." },
      ],
      note: "Требует «Предельное усилие» 1 ур.",
    },
    orbcirculation: {
      levels: [
        {
          level: 1,
          text: "Урон по всем целям +0.5%. После использования Расхода шкала Специализации заполняется на 0.3% каждую секунду в течение 12 сек.",
        },
        {
          level: 2,
          text: "Урон по всем целям +1.0%. После использования Расхода шкала Специализации заполняется на 0.6% каждую секунду в течение 12 сек.",
        },
        {
          level: 3,
          text: "Урон по всем целям +1.5%. После использования Расхода шкала Специализации заполняется на 0.9% каждую секунду в течение 12 сек.",
        },
        {
          level: 4,
          text: "Урон по всем целям +2.0%. После использования Расхода шкала Специализации заполняется на 1.2% каждую секунду в течение 12 сек.",
        },
        {
          level: 5,
          text: "Урон по всем целям +2.5%. После использования Расхода шкала Специализации заполняется на 1.5% каждую секунду в течение 12 сек.",
        },
      ],
    },
    orbcontrol: {
      levels: [
        { level: 1, text: "Во время боевого транса сферы воли не опустошаются, а наносимый урон повышается на 1.0%." },
        { level: 2, text: "Во время боевого транса сферы воли не опустошаются, а наносимый урон повышается на 2.0%." },
        { level: 3, text: "Во время боевого транса сферы воли не опустошаются, а наносимый урон повышается на 3.0%." },
        { level: 4, text: "Во время боевого транса сферы воли не опустошаются, а наносимый урон повышается на 4.0%." },
        { level: 5, text: "Во время боевого транса сферы воли не опустошаются, а наносимый урон повышается на 5.0%." },
      ],
    },
    limitbreakenl: {
      levels: [
        { level: 1, text: "Когда эффект «Твердая воля» суммируется до 60 уровня, его сила действия повышается на 70.0%." },
        { level: 2, text: "Когда эффект «Твердая воля» суммируется до 60 уровня, его сила действия повышается на 95.0%." },
        { level: 3, text: "Когда эффект «Твердая воля» суммируется до 60 уровня, его сила действия повышается на 120.0%." },
      ],
      note: "Требует «Твердая воля» 3 ур.",
    },
    chaosinfusion: {
      levels: [
        { level: 1, text: "Попадание умением «Концентрация воли» наносит на 2.0% больше урона противникам при атаке со спины." },
        { level: 2, text: "Попадание умением «Концентрация воли» наносит на 4.0% больше урона противникам при атаке со спины." },
        { level: 3, text: "Попадание умением «Концентрация воли» наносит на 6.0% больше урона противникам при атаке со спины." },
        { level: 4, text: "Попадание умением «Концентрация воли» наносит на 8.0% больше урона противникам при атаке со спины." },
        { level: 5, text: "Попадание умением «Концентрация воли» наносит на 10.0% больше урона противникам при атаке со спины." },
      ],
    },
    chaoticpower: {
      levels: [
        {
          level: 1,
          text:
            "Клинок смерти обращается к силе Хаоса, и умение «Концентрация воли» становится более мощным." +
            "Дальность атаки и урон умения увеличиваются на 6.0%." +
            "Максимальный уровень эффекта «Твердая воля» повышается до 80." +
            "По завершении боевого транса расходуется до 60 уровней эффекта, при этом эффект заполнения сфер воли и повышения урона умения «Концентрация воли» сохраняется." +
            "Время восстановления умения «Неуловимый пируэт» увеличивается на 540.0 сек., однако в боевом трансе попадание этим умением дополнительно накапливает 60 ур. эффекта «Твердая воля»." +
            "Время восстановления умения «Убийственная сталь» сокращается на 40.0 сек., однако его урон снижается на 25.0%.",
        },
        {
          level: 2,
          text:
            "Клинок смерти обращается к силе Хаоса, и умение «Концентрация воли» становится более мощным." +
            "Дальность атаки и урон умения увеличиваются на 23.0%." +
            "Максимальный уровень эффекта «Твердая воля» повышается до 80." +
            "По завершении боевого транса расходуется до 60 уровней эффекта, при этом эффект заполнения сфер воли и повышения урона умения «Концентрация воли» сохраняется." +
            "Время восстановления умения «Неуловимый пируэт» увеличивается на 540.0 сек., однако в боевом трансе попадание этим умением дополнительно накапливает 60 ур. эффекта «Твердая воля»." +
            "Время восстановления умения «Убийственная сталь» сокращается на 40.0 сек., однако его урон снижается на 25.0%.",
        },
        {
          level: 3,
          text:
            "Клинок смерти обращается к силе Хаоса, и умение «Концентрация воли» становится более мощным." +
            "Дальность атаки и урон умения увеличиваются на 40.0%." +
            "Максимальный уровень эффекта «Твердая воля» повышается до 80." +
            "По завершении боевого транса расходуется до 60 уровней эффекта, при этом эффект заполнения сфер воли и повышения урона умения «Концентрация воли» сохраняется." +
            "Время восстановления умения «Неуловимый пируэт» увеличивается на 540.0 сек., однако в боевом трансе попадание этим умением дополнительно накапливает 60 ур. эффекта «Твердая воля»." +
            "Время восстановления умения «Убийственная сталь» сокращается на 40.0 сек., однако его урон снижается на 25.0%.",
        },
      ],
      note: "Требует «За гранью возможного» 3 ур.",
    },

    // ---- Leap ----
    transcendentpower: {
      levels: [
        { level: 1, text: "Урон аспектов Архипробуждения повышается на 10.0%." },
        { level: 2, text: "Урон аспектов Архипробуждения повышается на 20.0%." },
        { level: 3, text: "Урон аспектов Архипробуждения повышается на 30.0%." },
        { level: 4, text: "Урон аспектов Архипробуждения повышается на 40.0%." },
        { level: 5, text: "Урон аспектов Архипробуждения повышается на 50.0%." },
      ],
    },
    awakeningamplifier: {
      levels: [
        { level: 1, text: "Допустимое число применений умений Пробуждения +1." },
        { level: 2, text: "Допустимое число применений умений Пробуждения +2." },
        { level: 3, text: "Допустимое число применений умений Пробуждения +3." },
      ],
    },
    unleashedpower: {
      levels: [
        { level: 1, text: "Урон Архиумений +3%." },
        { level: 2, text: "Урон Архиумений +6%." },
        { level: 3, text: "Урон Архиумений +9%." },
        { level: 4, text: "Урон Архиумений +12%." },
        { level: 5, text: "Урон Архиумений +15%." },
      ],
    },
    releasepotential: {
      levels: [
        { level: 1, text: "Время восстановления Архиумений −2%." },
        { level: 2, text: "Время восстановления Архиумений −4%." },
        { level: 3, text: "Время восстановления Архиумений −6%." },
        { level: 4, text: "Время восстановления Архиумений −8%." },
        { level: 5, text: "Время восстановления Архиумений −10%." },
      ],
    },
    instantspell: {
      levels: [
        { level: 1, text: "Время применения Архиумений сокращается на 4.0%, а расход маны на них — на 30.0%." },
        { level: 2, text: "Время применения Архиумений сокращается на 8.0%, а расход маны на них — на 60.0%." },
        { level: 3, text: "Время применения Архиумений сокращается на 12.0%, а расход маны на них — на 90.0%." },
      ],
    },
    pathoftheblade: {
      levels: [
        {
          level: 1,
          text:
            "«Неуловимый пируэт» становится обычным умением, при этом его применение на 10.0 сек. повышает критический урон умения «Концентрация воли» на 20%. " +
            "Использование умения «Концентрация воли» рассеивает этот эффект.",
        },
        {
          level: 2,
          text:
            "«Неуловимый пируэт» становится обычным умением, при этом его применение на 10.0 сек. повышает критический урон умения «Концентрация воли» на 40%. " +
            "Использование умения «Концентрация воли» рассеивает этот эффект.",
        },
        {
          level: 3,
          text:
            "«Неуловимый пируэт» становится обычным умением, при этом его применение на 10.0 сек. повышает критический урон умения «Концентрация воли» на 60%. " +
            "Использование умения «Концентрация воли» рассеивает этот эффект.",
        },
      ],
      note: "Нельзя получить вместе с «Беспрецедентная скорость», «Неистовый вихрь» или «Танец стали».",
    },
    // Flash Slash: the fourth Tier 1 Leap keystone alongside Path of the
    // Blade/Dance of Nightmares/Dance of Screams above - not used by any
    // current build, kept in sync with their mutual-exclusivity note
    // anyway since it's a real option in that same exclusive group.
    flashslash: {
      levels: [
        {
          level: 1,
          text: "Урон умения «Неуловимый пируэт» повышается на 10%, а скорость его применения — на 10.0%. При полной подготовке урон этого умения дополнительно повышается на 10%.",
        },
        {
          level: 2,
          text: "Урон умения «Неуловимый пируэт» повышается на 20%, а скорость его применения — на 10.0%. При полной подготовке урон этого умения дополнительно повышается на 20%.",
        },
        {
          level: 3,
          text: "Урон умения «Неуловимый пируэт» повышается на 30%, а скорость его применения — на 10.0%. При полной подготовке урон этого умения дополнительно повышается на 30%.",
        },
      ],
      note: "Нельзя получить вместе с «Кодекс меча», «Неистовый вихрь» или «Танец стали».",
    },
    danceofnightmares: {
      levels: [
        {
          level: 1,
          text:
            "Урон умения «Убийственная сталь» повышается на 25%. Техника исполнения умения меняется: Клинок смерти устремляется вперёд и сразу переходит к заключительной атаке, " +
            "совершая восемь ударов.",
        },
        {
          level: 2,
          text:
            "Урон умения «Убийственная сталь» повышается на 50%. Техника исполнения умения меняется: Клинок смерти устремляется вперёд и сразу переходит к заключительной атаке, " +
            "совершая восемь ударов.",
        },
        {
          level: 3,
          text:
            "Урон умения «Убийственная сталь» повышается на 75%. Техника исполнения умения меняется: Клинок смерти устремляется вперёд и сразу переходит к заключительной атаке, " +
            "совершая восемь ударов.",
        },
      ],
      note: "Нельзя получить вместе с «Беспрецедентная скорость», «Кодекс меча» или «Танец стали».",
    },
    danceofscreams: {
      levels: [
        {
          level: 1,
          text: "При применении умения «Убийственная сталь» Клинок смерти наносит на 2 удара больше, повышая общий урон умения на 20%. Во время боевого транса урон дополнительно повышается на 16%.",
        },
        {
          level: 2,
          text: "При применении умения «Убийственная сталь» Клинок смерти наносит на 3 удара больше, повышая общий урон умения на 30%. Во время боевого транса урон дополнительно повышается на 38%.",
        },
        {
          level: 3,
          text: "При применении умения «Убийственная сталь» Клинок смерти наносит на 4 удара больше, повышая общий урон умения на 40%. Во время боевого транса урон дополнительно повышается на 57%.",
        },
      ],
      note: "Нельзя получить вместе с «Беспрецедентная скорость», «Кодекс меча» или «Неистовый вихрь».",
    },
  };
})();
