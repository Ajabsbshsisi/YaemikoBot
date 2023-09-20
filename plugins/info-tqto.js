let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0345b0e3ae0ab9d4d3934.jpg'
let tqto = `
❏──「 *TqTo* 」
│ • *(ImYanXiao)* Base Ran
│ • *(VynaaChan)* Base RanPrototype
│ • *(DwiRizqi):* Our inspiration
│ • *(Wira)* Helper
❏──────────────๑
❏──「 *Staff* 」
│ • *(Syarif)* Our Developer 2
│ • *(Repan)* Our Tester
│ • *(Arthadana)* Our Designer
│ • *(Teguh)* Rest Api Client
❏──────────────๑
❏──「 *Last Tqto* 」
│ • *WhiskeySockets* 
│ • *Adiwajshing* 
│ • *God* 
❏──────────────๑
│ 📌 Thanks For All │Developer Bot!!!
❏──────────────๑
`
conn.reply(m.chat, tqto, m)
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto)$/i

export default handler