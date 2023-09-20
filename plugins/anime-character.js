import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Judul Anime Yang Ingin Kamu Cari !*`
let res = await fetch('https://api.jikan.moe/v4/characters?q=' + text)
if (!res.ok) throw 'Tidak Ditemukan'
let json = await res.json()
let { name, mal_id, anime, favorites, url, about } = json.data[0]
let animeingfo = `
❏──「 *Character Has Found* 」
│⇛ *Nama:* ${name}
│⇛ *MAL UID:* ${mal_id}
│⇛ *Favorit:* ${favorites}
│⇛ *Url:* ${url}
❏──────────────๑

❏──「 *Info Character* 」
⇛ *_${about}_*
❏──────────────๑

❏──────────────๑ 
`
let rath = ` *Cmd Lamar*
🩷 .lamar

_GvDF6qJpRsTtCdJGmTdaxsTfvDsJnFeVvwIhvKjvOwndUgxwuYbbw7baUgjwhbYgcsjjGxrgbUycsOaknyfevjajiyfFyqhqbbsuujnagfcsjjnqnasysuaajbFdxvgvwGgGsyTavdCharacterHabaaNAajbsxTfwvwOajwbssuHfafayhBfdTyUhwbsgsyaGwgywshBHsgwgvwayYgcdRgwhbwbHYywgvwvHVCFGbbaagyGgg5gGg7aab=jIdaygv8ReshbYddbnuatg_
`
setTimeout (() => {
conn.reply(m.chat, rath, m,
{ mentions: conn.parseMention(rath) })
}, 1000)

conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'animek.jpg', animeingfo, m)
}
handler.help = ['character']
handler.tags = ['anime']
handler.command = /^(character)$/i

export default handler