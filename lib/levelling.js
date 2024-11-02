
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

export const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75;
export function xpRange(level, multiplier = global.multiplier || 1) {
  if (level < 0) {
    throw new TypeError('level cannot be negative value');
  }
  level = Math.floor(level);
  const min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1;
  const max = Math.round(Math.pow(++level, growth) * multiplier);
  return {
    min,
    max,
    xp: max - min,
  };
}
export function findLevel(xp, multiplier = global.multiplier || 1) {
  if (xp === Infinity) {
    return Infinity;
  }
  if (isNaN(xp)) {
    return NaN;
  }
  if (xp <= 0) {
    return -1;
  }
  let level = 0;
  do {
    level++;
  }
  while (xpRange(level, multiplier).min <= xp);
  return --level;
}
export function canLevelUp(level, xp, multiplier = global.multiplier || 1) {
  if (level < 0) {
    return false;
  }
  if (xp === Infinity) {
    return true;
  }
  if (isNaN(xp)) {
    return false;
  }
  if (xp <= 0) {
    return false;
  }
  return level < findLevel(xp, multiplier);
}