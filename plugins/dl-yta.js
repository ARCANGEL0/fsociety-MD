
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
  import poji_ytmp3 from 'youtube-to-mp3-poji'
  import { join } from 'path'
let handler = async (m, { text, __dirname,isAdmin, conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}❖─┅──┅𝗡𝘂𝗺 𝗿𝗲𝗶𝗻𝗼 𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗮𝘀, 𝗼𝗻𝗱𝗲 𝗼𝘀 𝗰𝗼𝗿𝘃𝗼𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗺 𝘀𝗲𝗴𝗿𝗲𝗱𝗼𝘀 𝗽𝗿𝗼𝗶𝗯𝗶𝗱𝗼𝘀, 𝗮𝗴𝘂𝗮𝗿𝗱𝗼 𝗻𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮. ─┅──┅❖ \n𝗥𝗲𝘃𝗲𝗹𝗲-𝗺𝗲 𝗼 𝗟𝗶𝗻𝗸 𝗱𝗼 𝘀𝗲𝘂 𝗱𝗲𝘀𝗲𝗷𝗼 𝗻𝗼 𝗲𝗹𝗼 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗾𝘂𝗲 𝘁𝗿𝗮𝗿𝗲𝗶 𝗮 𝘀𝘂𝗮 𝗯𝘂𝘀𝗰𝗮 𝗲𝗻𝘁𝗮𝗼\n𝙀𝙓:\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].autolevelup && global.db.data.chats[m.chat].users[m.sender].money < 80) {
await conn.sendMessage(m.chat ,{text: `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑺𝒆𝒎 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`},{quoted:m})
 return !0
}
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeGB['smsAvisoFG']()} ❖─┅──┅𝗤𝘂𝗲 𝗶𝗻𝗳𝗼𝗿𝘁𝘂𝗻𝗶𝗼, 𝗺𝗮𝘀 𝗿𝗲𝗰𝗲𝗶𝗼 𝗾𝘂𝗲 𝗻ã𝗼 𝘀𝗲 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮 𝗯𝘂𝘀𝗰𝗮 𝗮𝗹𝗴𝘂𝗺𝗮 𝗮𝗼 𝗻𝘂𝗺𝗲𝗿𝗼 𝗾𝘂𝗲 𝗺𝗲 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝘀.─┅──┅❖ 𝗗𝗲𝘀𝘃𝗲𝗻𝗱𝗮, 𝘀𝗼𝗺𝗯𝗿𝗮, 𝘂𝗺 𝗻𝘂𝗺𝗲𝗿𝗼 𝗱𝗲𝗻𝘁𝗿𝗲 𝗮 𝗺𝗶𝗿𝗶𝗮𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗶𝗮, 𝗱𝗲 𝘂𝗺 𝗮
  ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}}}  
  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}❖─┅──┅𝙏𝙚𝙪 𝙖𝙪𝙙𝙞𝙤 𝙧𝙚𝙨𝙨𝙤𝙖 𝙘𝙤𝙢𝙤 𝙪𝙢 𝙡𝙪𝙜𝙪𝙗𝙧𝙚 𝙨𝙪𝙨𝙨𝙪𝙧𝙧𝙤, 𝙖 𝙚𝙨𝙥𝙚𝙧𝙖 𝙙𝙚 𝙨𝙪𝙖 𝙘𝙝𝙚𝙜𝙖𝙙𝙖. ─┅──┅❖
𝘼𝙜𝙪𝙖𝙧𝙙𝙚 𝙗𝙧𝙚𝙫𝙚𝙢𝙚𝙣𝙩𝙚 𝙦𝙪𝙚 𝙤 𝙡𝙖𝙢𝙚𝙣𝙩𝙤 𝙙𝙚 𝙨𝙚𝙪 𝙖𝙪𝙙𝙞𝙤 𝙧𝙚𝙘𝙖𝙞𝙧𝙖 𝙨𝙤𝙗𝙧𝙚 𝙤 𝙘𝙝𝙖𝙩. . . 🐈‍⬛⌛
`, fkontak, m)
/*
 let mp3f = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + mp3f); // Ensure filename has .wav extension


    const data = await poji_ytmp3(youtubeLink); // link youtube
    console.log(data.data.link);

await conn.sendFile(m.chat, data.data.link, 'error.mp3', null,m)

*/

let req = await
fetch(`https://api.neoxr.eu/api/youtube?url=${youtubeLink}&type=audio&quality=128kbps&apikey=${neoxr}`)
let data = await req.json()
  conn.sendFile(m.chat, data.data.url,'erro.mp3',null,m)


m.react("☑️")
  if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 80
await m.reply("༒︎ 80 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 𝙐𝙎𝘼𝘿𝙊𝙎")}
}

handler.level = 6
handler.command = ['yta']

export default handler
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}