import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch('https://api.jikan.moe/v4/anime?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { title, status, episodes, favorites, url } = json.data[0]
let animeingfo = `
• Nama: ${title}
• Status: ${status}
• Episode: ${episodes}
• Favorit: ${favorites}
• Url: ${url}
`
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'animek.jpg', animeingfo, m)
}
handler.help = ['anime']
handler.tags = ['anime']
handler.command = /^(anime)$/i

export default handler