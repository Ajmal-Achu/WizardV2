let fs = require('fs')
let handler = async (m, { conn, args }) => {

    const json = JSON.parse(fs.readFileSync('./src/owner.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `${await conn.getName(who)} already an owner!`
    json.push(`${who.split`@`[0]}`)
    m.reply(`${await conn.getName(who)} now become owner!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)ow(ner)?$/i

handler.rowner = true
handler.owner = true

module.exports = handler