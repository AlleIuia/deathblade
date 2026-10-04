// FORK GUIDE: DATA - Deathblade-site-specific term list, rewrite/trim for
// your own site.
//
// Flat id -> {term, def} map for plain-jargon prose mentions that AREN'T a
// skill, engraving, rune, or Ark Passive node - those already get their own
// tooltip (see skill-tooltip.js/rune-tooltip.js/ark-passive-tooltip.js and
// their own data files). This file is for the ordinary Lost Ark/site
// vocabulary a first-time reader might not know yet: Trixion, Ability
// Stone, Specialization-the-stat, and so on.
//
// `term` is only a display fallback for a mention with no name-bearing
// text of its own - nothing in this repo needs that today (every current
// mention already wraps real visible prose words), but it's kept for shape
// parity with DB_SKILL_EXTRAS' own {tags, note} entries, and so a future
// bare-icon-style trigger could use it without a data shape change here.
//
// `def` is one or two plain sentences, kept free of numbers that go stale
// on a balance patch (build-data.js/skill-data.js/etc. already carry
// those, and re-stating a number here is one more place to forget to
// update it) - EXCEPT backattack below, which is a deliberate exception;
// see that entry's own comment for why. Any other future entry needing a
// number should put it in the relevant build/essentials page's own prose
// instead of here, same as always.
//
// House style: no em-dashes (site-wide convention) - use " - " instead.
//
// EASY EDIT GUIDE: add an entry, then wrap the word/phrase anywhere in
// prose with:
//   <span class="skill-mention" data-glossary-id="id">Word</span>
// See glossary-tooltip.js for how this file gets read.
window.DB_GLOSSARY = {
  trixion: {
    term: "Тризион",
    def: "Попасть можно, нажав F2 — «Песнь Тризиона». В Беатрис выберите «Тренировка», затем в списке — легендарного манекена. Тризион — это место, где можно поставить руны, гравировки и самоцветы, которых у вас нет, и попробовать протестировать билд и потренироваться.",
  },
  abilitystone: {
    term: "Фетранит",
    icon: "abilitystone",
    def: "Фетранит даёт Живучесть и усиливает установленные боевые гравировки — насколько именно, зависит от бонуса сделанной огранки. Если сомневаетесь, берите «Титаноборец» и «Бесшумный убийца»/«Адреналин» в качестве гравировок Фетранита.",
  },
  bracelet: {
    term: "Браслет",
    def: "Слот украшения, который даёт боевые характеристики и особые пассивные эффекты, повышающие твой урон или полезность (баффы).",
  },
  relicbook: {
    term: "Книга реликвий",
    def: "Собираемая рецептура, которая навсегда повышает силу конкретной боевой гравировки на всём аккаунте: чем больше собрал, тем сильнее бонус.",
  },
  specializationstat: {
    term: "Мастерство",
    def: "Основной боевой стат, от которого зависят скорость генерации сфер у Клинка смерти, урон Твёрдой воли и сокращение перезарядки от Боевого транса.",
  },
  // Unlike every other entry here, this one keeps its numbers: back
  // attack's damage/crit bonus is a flat engine constant (not a per-skill
  // or per-build value that a balance patch tends to touch), so it's far
  // less likely to go stale than a skill coefficient or Ark Grid number
  // would be. If that ever changes, update the number here directly -
  // there's no separate "source of truth" file for it the way skill/Ark
  // Grid numbers have.
  backattack: {
    term: "Атака в спину",
    def: "Бонус за позицию: +5% урона и +10% крита, если атаковать сзади.",
  },
  arkgrid: {
    term: "Система А.Р.К.",
    def: "Система поздней прокачки: слоты Порядка (Солнце/Луна/Звезда) и ядер Хаоса, открываемые астрогемами. В названиях сборок указано, какое ядро Порядка выбрано.",
  },
  arkpassive: {
    term: "Пассивки А.Р.К.",
    def: "Система деревьев талантов 4-го уровня (Эволюция, Просветление и Прыжок), задающих поведение сборки.",
  },
  dpsmeter: {
    term: "DPS-метр",
    def: "Сторонний инструмент, который разбирает локальные логи боя и показывает урон, DPS и статистику скилов в реальном времени.",
  },
  cpm: {
    term: "CPM",
    def: "Применений в минуту — сколько раз в минуту ты активируешь классовое умение. Показывает скорость ротации и активность.",
  },
  tripod: {
    term: "Трипод",
    def: "Путь кастомизации каждого скила (3 уровня выбора), меняющий его поведение, урон, перезарядку или генерацию ресурсов.",
  },
  rune: {
    term: "Руна",
    def: "Модификатор, ставящийся прямо в слот скила и дающий полезные эффекты.",
  },
  synergy: {
    term: "Синергия",
    def: "Общий бафф на группу или дебафф на босса от определённых скилов. Одинаковые синергии одного класса не складываются.",
  },
  counter: {
    term: "Контратака",
    def: "Попадание скилом в лоб, когда босс светится синим, прерывающее его атаку.",
  },
  pushimmunity: {
    term: "Неуязвимость к отбрасыванию",
    def: "Суперброня, не дающая отбросить, подбросить и положить. Не защищает от захватов и контрольных дебаффов.",
  },
  // BTB/FTF: each is a specific 3-skill combo (not a generic "recast
  // twice" pattern - see the build pages' own prose for how it's used in
  // a rotation), so kept as two separate entries with the exact sequence
  // rather than one shared "double cast" definition.
  btbcombo: {
    term: "BTB",
    def: "Сокращение для комбо «Охота за головами → Иссечение → Охота за головами».",
  },
  ftfcombo: {
    term: "FTF",
    def: "Сокращение для комбо «Воздушные шакрамы → Иссечение → Воздушные шакрамы».",
  },
};
