var handler = async (m, {text}) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes mengganti nama !*`, m)
        global.db.data.users[m.sender].name = text
}
handler.help = ['setname']
handler.tags = ['main']
handler.command = /^(setname)$/i
handler.group = false
handler.owner = false 
handler.rowner = false
handler.botAdmin = false

export default handler