
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

const toxicRegex = /bolsomito|vadia|seu burro|sua burra|é burro|é burra|eh burro|eh burra|qenga|Quenga|Puta|imbecil|sua puta|vagabunda|lugar de mulher|esquerdalha|feminazi|seu merda|merdinha|é rodada|eh rodada|pedaço de merda|seu bosta|seu lixo|neguinho|preto de merda|crioulo vagabundo|selvagem africano|negro serviçal|sai da senzala|mulher negra promíscua|crioulo fedido|escravo inútil|negro burro|negro sujo|escória negra|crioulo malandro|negro ordinário|negro safado|crioulo traidor|negro delinquente|crioulo pilantra|negro favelado|crioulo sem vergonha|negro imprestável|crioulo sem caráter|negro maloqueiro|crioulo nojento|negro vagabundo|crioulo desgraçado|negro marginal|crioulo asqueroso|negro desgraçado|vadia|sua burra|é burra|eh burra|sua puta|lugar de mulher|esquerdalha|feminazi|seu merda|merdinha|é rodada|eh rodada|seu bosta|seu lixo|mulher no volante|mulher só serve para cozinha|frágil como uma mulher|mulher objeto|seja homem de verdade|bichinha delicada|sai do armário|sapatona de merda|mulherzinha fraca|mulher não sabe nada|mulher no volante|mulher só serve para cozinha|frágil como uma mulher|ela está naqueles dias|mulher é tudo igual|elas são emocionais demais|mulheres não deveriam trabalhar|ela estava pedindo por isso|mulheres são ruins em matemática|mulheres são histéricas|mulheres só querem atenção|mulheres falam demais|mulheres são volúveis|mulheres são complicadas|mulheres são fracas|mulheres são manipuladoras|mulheres são sensíveis demais|mulheres são fofoqueiras|mulheres são inferiores|mulheres não são confiáveis/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
  
  function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}


let tempBanimento = async (motivo) => {
   global.db.data.chats[m.chat].users[m.sender].tempBan = true
   
   console.log('1🌙')
     const groupAdms = participants.filter(p => p.admin)
 
  let adms =[]
  const listaAdmin = groupAdms.map((v, i) =>
  adms.push(v.id))
  
   console.log('2🌙')
  console.log(adms)
// Example usage:
adms = adms.filter(adm => adm !== conn.user.jid);
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

   console.log('3🌙')

  
let teks = `─┅──┅❖𓌜❖─┅──┅
𝖀𝖘𝖚á𝖗𝖎𝖔 𝕭𝖆𝖓𝖎𝖉𝖔!

*№ Protocolo: ${generateRandomCode()}*
*Data: ${getDataAtual()}*

_*Usuário:*_
Nome: ${m.name}
Contato: @${m.sender.split`@`[0]}

*Grupo:* ${groupMetadata.subject}
⎔⎓──────────────
_*Motivo do exílio:*_
${motivo}

─┅──┅❖ ❖─┅──┅`
   
   m.reply(teks,destino)
   
 }
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
if (global.db.data.chats[m.chat].isBanned)
return !1
  let user = global.db.data.users[m.sender]
  if (!user.warn) {
    user.warn=0
  }
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = gataImg.getRandom()	
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
global.db.data.chats[m.chat].users[m.sender].adv  += 1
if (!(global.db.data.chats[m.chat].users[m.sender].adv >= 3)) await m.reply(`━━━━━━━⬣⚠️⬣━━━━━━
@${m.sender.split`@`[0]}* 𓂀

${lenguajeGB['smsToxic1']()}
${lenguajeGB['smsToxic2']()} 

   ⚠ *${global.db.data.chats[m.chat].users[m.sender].adv}/4*
   
${wm}`, false, { mentions: [m.sender] })}
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()}*`, `${lenguajeGB['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), 'ok'],
[lenguajeGB.smsToxic5(), '.off antitoxic'],
[lenguajeGB.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}*/

if (global.db.data.chats[m.chat].users[m.sender].adv >= 3) {
global.db.data.chats[m.chat].users[m.sender].adv  = 0
await m.reply(`*${lenguajeGB['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${lenguajeGB['smsToxic7']()}*`, false, { mentions: [m.sender] })

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  await tempBanimento('Foi detectado atividades tóxicas, ofensivas e/ou discriminatórias')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}