let fs = require('fs')
let handler = async (m, { conn, args }) => {

    const json = JSON.parse(fs.readFileSync('./src/moderator.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `${await conn.getName(who)} already a moderator!`
    json.push(`${who.split`@`[0]}`)
    m.reply(`${await conn.getName(who)} now a moderator!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addmods [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)mo(ds)?$/i

handler.rowner = true
handler.owner = true

module.exports = handler