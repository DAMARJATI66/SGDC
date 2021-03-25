const { fetchJson } = require('../lib/fetcher')
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Mau cari apa?', m)

//  await m.reply('*[ WAIT ]* _Seda..._')
    axios.get(`https://fzn-gaz.herokuapp.com/api/sfile?search=${text}`).then((res) => {
    let hasil = `*Title:*\n*Size:* ${res.data.result.size}\n*Link:* ${res.data.result.link}\n==================\n`
conn.reply(m.chat, hasil, m)
	

	    )}}
							     
handler.command = /^(sfilem)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null


module.exports = handler
