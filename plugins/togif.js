let { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `reply sticker with command *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `reply sticker with command *${usedPrefix + command}*`
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    await conn.sendFile(m.chat, out, 'out.gif', '*Here It Is*', m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}
handler.help = ['gif']
handler.tags = ['sticker']
handler.command = ['gif']

module.exports = handler