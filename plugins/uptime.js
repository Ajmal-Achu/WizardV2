let handler = async (m, { usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let fetch = require("node-fetch")
let who = m.sender
let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let runnya = `
*───「 RUNTIME BOT 」───*

⏲️ Time: ${time}
💌 Active During : ${uptime}
🌹 Tag : @${who.split`@`[0]}`
conn.sendButton(m.chat, runnya, wm, 'Menu', '.menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`, itemCount: 99999, thumbnail: await (await fetch('https://i.imgur.com/SKUjlZw.jpeg')).buffer(),}}})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
