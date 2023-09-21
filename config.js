//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6287756593163', 'RenAja', true], //Ganti aja
['6289518562932', 'RepanAja', true],
['6285655730841', 'ArthaAja', true],
['6283123952723', 'SyarifAja', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6289518562932' //Ganti
global.packname = '© Sticker by'
global.author = 'Vanzz-MD'
global.namebot = 'VanzzBotz - MD'
global.wm = '© Vanzz MD'
global.stickpack = '© Sticker by'
global.stickauth = 'Vanzz-MD'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/CMK56xUxfTgAXGZjsZBmwf'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '0823-8992-4037'
// Info Wait
global.wait = 'Tunggu bentar ya mek...'
global.eror = 'Error njir,sorry '
global.multiplier = 69 
// Apikey
global.xyro = '82LFKH7zZh'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "82LFKH7zZh",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
