const {
	WAConnection,
	MessageType,
	Presence,
	Mimetype,
	GroupSettingChange,
	mentionedJid
} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const speed = require('performance-now')
const base64Img = require('base64-img')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { exec } = require("child_process")
const fetch = require('node-fetch')
const ms = require('parse-ms')
const crypto = require('crypto')
const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')
const toMs = require('ms')
const fs = require("fs")
const { fetchJson } = require('./lib/fetcher')
const { nad } = require('./language')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const a = '```'
const {
	color,
	bgcolor
} = require('./lib/color')
const {
	getBuffer,
	getGroupAdmins,
	getRandom,
	banner,
	start,
	info,
	success,
	close
} = require('./lib/functions')
//Load Json

/*
SETTINGS
*/
botName = "GRR-BOT" // NAMA BOT
ownerName = "Crazyy-_-" // NAMA OWNER
vhtear = "1BlnApiIkyPake" // https://vhtear.com
xteam = "AbilGanss" // https://api.xteam.xyz
lolhumankey = "b170074ac846042f35937286"
leyskey = "OneDayOneCharity",
odckey = "onlygay",
onlydev = "ChikaWangyy", 
xteam = "AbilGanss",
BarBarKey = "IDxO1TFYnKADlX4pxcHa",
VhtearKey = "1BlnApiIkyPake",
XteamKey = "AbilGanss",
obzKey = "Bidmzz1sJ2L1TKyqaMEU",
ApiDevolover = "HokageBR",
TechApi = "5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ",
zeksapi = "apivinz",
shizukaapi = "itsmeiky633",
apivhtear = "1BlnApiIkyPake",
lolkey = "dihmasapi",
lolhuman = "yogipwlolkey",
l0lhuman = "hEro",
mbbKey = "IDxO1TFYnKADlX4pxcHa",
	
xteamkey= "dihmasapi",
	
vhkey= "dihmasapi",
	
leyskey= "OneDayOneCharity",

prefix = "!" // PREFIX / AWAmek
blocked = []
limitawal = "90" // LIMIT USER
memberlimit = "1" // MEMBER LIMIT GROUP
cr = "*𝐆𝐫𝐫𝐁𝐨𝐭 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝*" // FAKE REPLY
const ownerNumber = "558282132376@s.whatsapp.net" // NOMOR OWNER
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Crazyy-_-\n' // NAMA OWNER
            + 'ORG:GRR-BOT;\n' // NAMA BOT
            + 'TEL;type=CELL;type=VOICE;waid=558282132376:+55 82 8213-2376\n' // NOMOR OWNER
            + 'END:VCARD'
/*
SETTINGS
*/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const audioya = JSON.parse(fs.readFileSync('./media/audio.json'))
const imegya = JSON.parse(fs.readFileSync('./media/image.json'))
const setimker = JSON.parse(fs.readFileSync('./media/stik.json'))
const vidioya = JSON.parse(fs.readFileSync('./media/video.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
// Blau

const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
//fakeja

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await client.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, ' Numeros estrangeiros ou fakes não sao Permitidos neste grupo, 🏌️', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
			    }
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨!❤

𝙈𝙞𝙣𝙤𝙧𝙞𝙖𝙨 𝙨𝙚𝙧𝙖𝙤 𝙗𝙖𝙣𝙞𝙙𝙖𝙨🤡
___________________________
${a}Não seja ghost!${a}`
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `
    .      　。　　　　•　    　ﾟ　　。
    　　.　　　.　　　  　　.　　　　　。　　   。　.
    　.　　      。　        ඞ   。　    .    •
    •            @${num.split('@')[0]} was E j e c t e d
                      1 impostor restante   。　.
    　 　　。　　 　　　　ﾟ　　　.　      　　`
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	rmln.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
			blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})
	rmln.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isEventon = isGroup ? event.includes(from) : false
			const isRegistered = checkRegisteredUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
			const Rank = getLevelingLevel(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, { quoted: mek })
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
			}
			const sendImage = (teks) => {
				client.sendMessage(from, teks, image, { quoted: mek })
			}
			const costum = (pesan, tipe, target, target2) => {
				client.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
			}
			const sendPtt = (teks) => {
				client.sendMessage(from, audio, mp3, { quoted: mek })
			}
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": cr,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./src/image/thumbnail.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="           
                        }
                    }
                }
            })
        }
			var prema = 'Free'
			if (isPrem) {
				prema = 'Premium'
			}
			if (isOwner) {
				prema = '㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺Ser Inexplicável㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ度❗'
			}
			  var role = 'Newbie㋡'
        if (Rank <= 2) {
            role = 'Newbie ㋡'
        } else if (Rank <= 4) {
            role = 'Iniciante1 ⚊¹'
        } else if (Rank <= 6) {
            role = 'Iniciante2 ⚊²'
        } else if (Rank <= 8) {
            role = 'Iniciante3 ⚊³'
        } else if (Rank <= 10) {
            role = 'Iniciante4 ⚊⁴'
        } else if (Rank <= 12) {
            role = 'Intermediário1 ⚌¹'
        } else if (Rank <= 14) {
            role = 'Intermediário2 ⚌²'
        } else if (Rank <= 16) {
            role = 'Intermediário3 ⚌³'
        } else if (Rank <= 18) {
            role = 'Intermediário4 ⚌⁴'
        } else if (Rank <= 20) {
            role = 'Intermediário5 ⚌⁵'
        } else if (Rank <= 22) {
            role = 'Avançado1 ☰¹'
        } else if (Rank <= 24) {
            role = 'Avançado2 ☰²'
        } else if (Rank <= 26) {
            role = 'Avançado3 ☰³'
        } else if (Rank <= 28) {
            role = 'Avançado4 ☰⁴'
        } else if (Rank <= 30) {
            role = 'Avançado5 ☰⁵'
        } else if (Rank <= 32) {
            role = 'Sargento1 ≣¹'
        } else if (Rank <= 34) {
            role = 'Sargento2 ≣²'
        } else if (Rank <= 36) {
            role = 'Sargento3 ≣³'
        } else if (Rank <= 38) {
            role = 'Sargento4 ≣⁴'
        } else if (Rank <= 40) {
            role = 'Sargento5 ≣⁵'
        } else if (Rank <= 42) {
            role = 'Swag1 ﹀¹'
        } else if (Rank <= 44) {
            role = 'Swag2 ﹀²'
        } else if (Rank <= 46) {
            role = 'Swag3 ﹀³'
        } else if (Rank <= 48) {
            role = 'Swag4 ﹀⁴'
        } else if (Rank <= 50) {
            role = 'Swag5 ﹀⁵'
        } else if (Rank <= 52) {
            role = 'Brabo1 ︾¹'
        } else if (Rank <= 54) {
            role = 'Brabo2 ︾²'
        } else if (Rank <= 56) {
            role = 'Brabo3 ︾³'
        } else if (Rank <= 58) {
            role = 'Brabo4 ︾⁴'
        } else if (Rank <= 60) {
            role = 'Brabo5 ︾⁵'
        } else if (Rank <= 62) {
            role = 'Segundo-Tenente1 ♢¹ '
        } else if (Rank <= 64) {
            role = 'Segundo-Tenente2 ♢²'
        } else if (Rank <= 66) {
            role = 'Segundo-Tenente3 ♢³'
        } else if (Rank <= 68) {
            role = 'Segundo-Tenente4 ♢⁴'
        } else if (Rank <= 70) {
            role = 'Segundo-Tenente5 ♢⁵'
        } else if (Rank <= 72) {
            role = 'Primeiro-Tenente1 ♢♢¹'
        } else if (Rank <= 74) {
            role = 'Primeiro-Tenente2 ♢♢²'
        } else if (Rank <= 76) {
            role = 'Primeiro-Tenente3 ♢♢³'
        } else if (Rank <= 78) {
            role = 'Primeiro-Tenente4 ♢♢⁴'
        } else if (Rank <= 80) {
            role = 'Primeiro-Tenente5 ♢♢⁵'
        } else if (Rank <= 82) {
            role = 'Major1 ✷¹'
        } else if (Rank <= 84) {
            role = 'Major2 ✷²'
        } else if (Rank <= 86) {
            role = 'Major3 ✷³'
        } else if (Rank <= 88) {
            role = 'Major4 ✷⁴'
        } else if (Rank <= 90) {
            role = 'Major5 ✷⁵'
        } else if (Rank <= 92) {
            role = 'Coronel1 ✷✷¹'
        } else if (Rank <= 94) {
            role = 'Coronel2 ✷✷²'
        } else if (Rank <= 96) {
            role = 'Coronel3 ✷✷³'
        } else if (Rank <= 98) {
            role = 'Coronel4 ✷✷⁴'
        } else if (Rank <= 100) {
            role = 'Coronel5 ✷✷⁵'
        } else if (Rank <= 102) {
            role = 'Tenente Bronze ✰'
        } else if (Rank <= 104) {
            role = 'Tenente Prata ✩'
        } else if (Rank <= 106) {
            role = 'Tenente Ouro ✯'
        } else if (Rank <= 108) {
            role = 'Tenente Platina ✬'
        } else if (Rank <= 110) {
            role = 'Tenente Diamante ✪'
        } else if (Rank <= 112) {
            role = 'Major General Early ✰'
        } else if (Rank <= 114) {
            role = 'Major General Silver ✩'
        } else if (Rank <= 116) {
            role = 'Major General gold ✯'
        } else if (Rank <= 118) {
            role = 'Major General Platinum ✬'
        } else if (Rank <= 120) {
            role = 'Major General Diamond ✪'
        } else if (Rank <= 122) {
            role = 'Cavaleiro Bronze ✰'
        } else if (Rank <= 124) {
            role = 'Cavaleiro Prata ✩'
        } else if (Rank <= 126) {
            role = 'Cavaleiro Ouro ✯'
        } else if (Rank <= 128) {
            role = 'Cavaleiro Platina ✬'
        } else if (Rank <= 130) {
            role = 'Cavaleiro Diamante ✪'
        } else if (Rank <= 132) {
            role = 'Tenente Cavaleiro Bronze ✰'
        } else if (Rank <= 134) {
            role = 'Tenente Cavaleiro Prata ✩'
        } else if (Rank <= 136) {
            role = 'Tenente Cavaleiro Ouro ✯'
        } else if (Rank <= 138) {
            role = 'Tenente Cavaleiro Platina ✬'
        } else if (Rank <= 140) {
            role = 'Tenente Cavaleiro Diamante ✪'
        } else if (Rank <= 142) {
            role = 'Comandante Bronze ★'
        } else if (Rank <= 144) {
            role = 'Comandante Intermediário ⍣'
        } else if (Rank <= 146) {
            role = 'Comandante Elite ≛'
        } else if (Rank <= 148) {
            role = 'O Cavaleiro da Luz ⍟'
        } else if (Rank <= 152) {
            role = 'Legends I 忍'
        } else if (Rank <= 154) {
            role = 'Legends I 忍'
        } else if (Rank <= 156) {
            role = 'Legends I 忍'
        } else if (Rank <= 158) {
            role = 'Legends I 忍'
        } else if (Rank <= 160) {
            role = 'Legends I 忍'
        } else if (Rank <= 162) {
            role = 'Legends I 忍'
        } else if (Rank <= 164) {
            role = 'Legends I 忍'
        } else if (Rank <= 166) {
            role = 'Legends II 忍'
        } else if (Rank <= 168) {
            role = 'Legends II 忍'
        } else if (Rank <= 170) {
            role = 'Legends II 忍'
        } else if (Rank <= 172) {
            role = 'Legends II 忍'
        } else if (Rank <= 174) {
            role = 'Legends II 忍'
        } else if (Rank <= 176) {
            role = 'Legends II 忍'
        } else if (Rank <= 178) {
            role = 'Legends II 忍'
        } else if (Rank <= 180) {
            role = 'Legends II 忍'
        } else if (Rank <= 182) {
            role = 'Legends II 忍'
        } else if (Rank <= 184) {
            role = 'Legends II 忍'
        } else if (Rank <= 186) {
            role = 'Legends II 忍'
        } else if (Rank <= 188) {
            role = 'Legends II 忍'
        } else if (Rank <= 190) {
            role = 'Legends II 忍'
        } else if (Rank <= 192) {
            role = 'Legends I 忍'
        } else if (Rank <= 194) {
            role = 'Legends II 忍'
        } else if (Rank <= 196) {
            role = 'Legends II 忍'
        } else if (Rank <= 198) {
            role = 'Legends II 忍'
        } else if (Rank <= 200) {
            role = 'Legends III 忍'
        } else if (Rank <= 210) {
            role = 'Legends III 忍'
        } else if (Rank <= 220) {
            role = 'Legends III 忍'
        } else if (Rank <= 230) {
            role = 'Legends III 忍'
        } else if (Rank <= 240) {
            role = 'Legends III 忍'
        } else if (Rank <= 250) {
            role = 'Legends III 忍'
        } else if (Rank <= 260) {
            role = 'Legends III 忍'
        } else if (Rank <= 270) {
            role = 'Legends III 忍'
        } else if (Rank <= 280) {
            role = 'Legends III 忍'
        } else if (Rank <= 290) {
            role = 'Legends III 忍'
        } else if (Rank <= 300) {
            role = 'Legends IV 忍'
        } else if (Rank <= 310) {
            role = 'Legends IV 忍'
        } else if (Rank <= 320) {
            role = 'Legends IV 忍'
        } else if (Rank <= 330) {
            role = 'Legends IV 忍'
        } else if (Rank <= 340) {
            role = 'Legends IV 忍'
        } else if (Rank <= 350) {
            role = 'Legends IV 忍'
        } else if (Rank <= 360) {
            role = 'Legends IV 忍'
        } else if (Rank <= 370) {
            role = 'Legends IV 忍'
        } else if (Rank <= 380) {
            role = 'Legends IV 忍'
        } else if (Rank <= 390) {
            role = 'Legends IV 忍'
        } else if (Rank <= 400) {
            role = 'Legends V 忍'
        } else if (Rank <= 410) {
            role = 'Legends V 忍'
        } else if (Rank <= 420) {
            role = 'Legends V 忍'
        } else if (Rank <= 430) {
            role = 'Legends V 忍'
        } else if (Rank <= 440) {
            role = 'Legends V 忍'
        } else if (Rank <= 450) {
            role = 'Legends V 忍'
        } else if (Rank <= 460) {
            role = 'Legends V 忍'
        } else if (Rank <= 470) {
            role = 'Legends V 忍'
        } else if (Rank <= 480) {
            role = 'Legends V 忍'
        } else if (Rank <= 490) {
            role = 'Legends V 忍'
        } else if (Rank <= 500) {
            role = 'Legends VI 忍'
        } else if (Rank <= 600) {
            role = 'Legends VII 忍'
        } else if (Rank <= 700) {
            role = 'Legends VIII 忍'
        } else if (Rank <= 800) {
            role = 'Legends IX 忍'
        } else if (Rank <= 900) {
            role = 'Legends X 忍'
        } else if (Rank <= 1000) {
            role = 'Imortal I 上帝'
        } else if (Rank <= 2000) {
            role = 'Imortal II 上帝'
        } else if (Rank <= 3000) {
            role = 'Imortal III 上帝'
        } else if (Rank <= 4000) {
            role = 'Imortal IV 上帝'
        } else if (Rank <= 5000) {
            role = 'Imortal V 上帝'
        } else if (Rank <= 6000) {
            role = 'Imortal VII 上帝'
        } else if (Rank <= 7000) {
            role = 'Imortal VIII 上帝'
        } else if (Rank <= 8000) {
            role = 'Imortal IX 上帝'
        } else if (Rank <= 9000) {
            role = 'Imortal X 上帝'
        } else if (Rank <= 10000) {
            role = 'Super Imortal 特尔邦贡'
	    } else if (Rank <= 99999999999) {
   	         role = 'ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺S҉ E҉ R҉  ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧS҉ U҉ P҉ R҉ E҉ M҉ O҉ ♚ ཽ͢͢ '
        }

			if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(nad.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return client.sendMessage(from, `Limit Anda Sudah Habis\nUpgrade Premium Biar Bebas Limit Kak`, text, { quoted: mek })
						client.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted: mek })
						found = true
					}
				}
				if (found === false) {
					let obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					client.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted: mek })
				}
			}
			const isLimit = (sender) => {
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal) {
							position = true
							client.sendMessage(from, nad.limitend(pushname, prefix), text, { quoted: mek })
							return true
						} else {
							_limit
							position = true
							return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					return false
				}
			}
			if (isRegistered) {
				const checkATM = checkATMuser(sender)
				try {
					if (checkATM === undefined) addATM(sender)
					const uangsaku = Math.floor(Math.random() * 10) + 90
					addKoinUser(sender, uangsaku)
				} catch (err) {
					console.error(err)
				}
			}
			const limitAdd = (sender) => {
				if (isOwner && isPrem) { return false; }
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id == sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				}
			}
			if (isGroup) {
				try {
					const getmemex = groupMembers.length
					if (getmemex <= memberlimit) {
						reply(`Tem muita pouca gente nessa jossa : ${memberlimit}`)
						setTimeout(() => {
							client.groupLeave(from)
						}, 5000)
						setTimeout(() => {
							client.updatePresence(from, Presence.composing)
							reply("Flw kak")
						}, 4000)
						setTimeout(() => {
							client.updatePresence(from, Presence.composing)
							reply("Ah sim, não me esqueça:(")
						}, 3000)
						setTimeout(() => {
							client.updatePresence(from, Presence.composing)
							reply("Apenas me convide novamente:)")
						}, 2000)
						setTimeout(() => {
							client.updatePresence(from, Presence.composing)
							reply("Os membros adicionam primeiro")
						}, 1000)
						setTimeout(() => {
							client.updatePresence(from, Presence.composing)
							reply("Tchau:)")
						}, 0)
					}
				} catch (err) { console.error(err) }
			}
				
				for (let kemem of bad) {

				if (budy.includes(kemem)) {

				if (!isGroup) return
				if (!isBadWord) return
				if (isGroupAdmins) return reply('Não fala essas coisas 😾')
				client.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`HEY ${sender.split("@")[0]} LAVA ESSA BOCA😡`)
				setTimeout(() => {
					client.groupRemove(from, [kic]).catch((e) => { reply(`BOCA PORCA`) })
				}, 3000)
				setTimeout(() => {
					client.updatePresence(from, Presence.composing)
					reply("Baybay")
				}, 2000)
				setTimeout(() => {
					client.updatePresence(from, Presence.composing)
					reply("Eu tenho uma coisa pra dizer antes de ir")
				}, 1000)
				setTimeout(() => {
					client.updatePresence(from, Presence.composing)
					reply("O JOGO")
				}, 0)
			}
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Adm tá liberado:v')
				client.updatePresence(from, Presence.composing)
				if (budy.includes("#izinbos")) return reply("Ei arrombado, sem spam")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} Arrombado enfia esse link na bunda`)
				setTimeout(() => {
					client.groupRemove(from, [kic]).catch((e) => { reply(`EU TENHO QUE SER ADM GARAI`) })
				}, 3000)
			}
			
			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBABYBOT\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mR4ML4N\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBABYBOT\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mR4ML4N\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
			switch (command) {
			
				case 'help':
				case 'menu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					me = client.user
					const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const lvl = getLevelingLevel(sender)
					gmenu = await getBuffer(me.imgUrl)
					const menunya = `━━ 「 *GRR BOT* 」 ━━

*INFORMAÇÕES DO USUÁRIO*
${a}❏ Nome : ${pushname}${a}
${a}❏ User : ${prema}${a}
${a}❏ Dinheiro : ${uangku}${a}
${a}❏ Xp : ${reqXp}${a}
${a}❏ Rank : ${role}${a}
${a}❏ Level : ${lvl}${a}

*INFORMAÇÕES DA BOT*
${a}❏ Meu nome : ${botName}${a}
${a}❏ Meu Senpaii :3 : ${ownerName}${a}
${a}❏ Prefix : 「 ${prefix} 」${a}
${a}❏ Total de Usuários : ${_registered.length}${a}
${a}❏ Privilegiados : ${premium.length}${a}

*LISTA DE MENUs*
${a}❏ ${prefix}simplesmenu${a}
${a}❏ ${prefix}grupomenu${a}
${a}❏ ${prefix}downloadmenu${a}
${a}❏ ${prefix}makermenu${a}
${a}❏ ${prefix}certificadomenu${a}
${a}❏ ${prefix}gabutmenu${a}
${a}❏ ${prefix}nsfwmenu${a}
${a}❏ ${prefix}randommenu${a}
${a}❏ ${prefix}toolsmenu${a}
${a}❏ ${prefix}crushmenu${a}
${a}❏ ${prefix}othermenu${a}
${a}❏ ${prefix}storagemenu${a}
${a}❏ ${prefix}ownermenu${a}

*IRRELEVÂNCIAS*
${a}❏ ${prefix}runtime${a}
${a}❏ ${prefix}creator${a}
${a}❏ ${prefix}donasi${a}
${a}❏ ${prefix}ikmek${a}
${a}❏ ${prefix}speed${a}
${a}❏ ${prefix}info${a}
(Lembre que você pode usar 100 comando a cada 24hrs)
━━ 「 *GRR BOT* 」 ━━`
				client.sendMessage(from, gmenu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg",  "caption": cr,  "jpegThumbnail": fs.readFileSync(`./src/image/thumbnail.jpeg`) } } }, caption: menunya })
				break
				case 'fake':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (args.length !== 1) return await reply(nad.onoff(), id)
				if (args[0] == 'on') {
					if (faki.includes(groupId)) return await reply(nad.jaenabled(), id)
					faki.push(groupId)
					await fs.writeFileSync('./lib/config/Grupos/fake.json', JSON.stringify(faki))
					await reply(nad.enabled(), id)
				} else if (args[0] == 'off') {
					if (!faki.includes(groupId)) return await reply(nad.jadisabled(), id)
					faki.splice(groupId, 1)
					await fs.writeFileSync('./lib/config/Grupos/fake.json', JSON.stringify(faki))
					await reply(nad.disabled(), id)
				} else return await reply(nad.kldica1(), id)
            } else return await reply(nad.soademiro(), id)
            break
				case 'owner':
				case 'creator':
				case 'senpaii':
				case 'senpai':
					client.sendMessage(from, { displayname: "Jeff", vcard: vcard }, MessageType.contact, { quoted: mek })
					client.sendMessage(from, 'Esse é o meu senpaii>_<(número dele)', MessageType.text, { quoted: mek })
					break
					
					if (budy.includes('!suicidio')) {
				if (!isGroup) return
				if (budy.includes('Eu quero tomar ban')) return reply("Seu desejo foi realizado :)")
				if (budy.includes('Eu quero levar ban')) return reply("Seu desejo foi realizado :)")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} pedido atendido`)
				setTimeout(() => {
					client.groupRemove(from, [kic]).catch((e) => { reply(`EU TENHO QUE SER ADM GARAI`) })
				}, 3000)
			}
			break

				case 'donasi':
				case 'donate':
				client.sendMessage(from, nad.donasi(), text, { quoted: mek })
					break
				case 'ikmek':
				client.sendMessage(from, nad.ikmek(botName, ownerNumbers, ownerName), text, { quoted: mek })
					break
					
					case 'antifake':
					try {
					if (!isGroup) return reply(nad.groupo)
					if (!isGroupAdmins) return reply(nad.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break

				case 'speed':
				case 'ping':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					const timestamp = speed();
					const latensi = speed() - timestamp
					fakestatus(`Speed: ${latensi.toFixed(4)} _ms_`)
					break
				case 'runtime':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					runtime = process.uptime()
					runte = `「 *RUNTIME* 」\n${kyun(runtime)}`
					fakestatus(`${runte}`)
					break
					
					case 'info':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                anu = process.uptime()
					mee = client.user
					ca = totalchat
					ginfo = await getBuffer(mee.imgUrl)
					inponya = `━━ 「 *SOBRE EU UwU* 」 ━━
${a}❏ Tipo de Bot : NodeJS V14(= FODA)${a}
${a}❏ Nome : ${client.user.name}${a}
${a}❏ Browser : ${client.browserDescription[1]}${a}
${a}❏ Server : ${client.browserDescription[0]}${a}
${a}❏ Versão : ${client.browserDescription[2]}${a}
${a}❏ Velocidade: ${latensii.toFixed(4)} Second${a}
${a}❏ Celular : ${client.user.phone.device_manufacturer}${a}
${a}❏ Versão do zap : ${client.user.phone.wa_version}${a}
${a}❏ Grupos : ${giid.length}${a}
${a}❏ Gados : ${totalchat.length - giid.length}${a}
${a}❏ Chats totais : ${totalchat.length}${a}
${a}❏ Contatos bloqueados : ${blocked.length}${a}

「 *GRR BOT* 」`
				client.sendMessage(from, ginfo, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg",  "caption": cr,  "jpegThumbnail": fs.readFileSync(`./src/image/thumbnail.jpeg`) } } }, caption: inponya })
				break

				case 'simplemenu':
				case 'simplesmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const simpel = `「 *MENU SIMPLES* 」
${a}❏ ${prefix}sticker(ou !s)${a}
${a}❏ ${prefix}stickergif(ou !s)${a}
${a}❏ ${prefix}stickerwa(⚠️aviso de flood!⚠️)${a}
${a}❏ ${prefix}nuliskiri${a}
${a}❏ ${prefix}nuliskanan${a}
${a}❏ ${prefix}stalkig${a}
${a}❏ ${prefix}tts${a}
${a}❏ ${prefix}ttp${a}
${a}❏ ${prefix}attp${a}
${a}❏ ${prefix}simi${a}
${a}❏ ${prefix}quotes${a}
${a}❏ ${prefix}bikinquote${a}

「 *${botName}* 」`
					fakestatus(simpel)
					break
				case 'sticker':
				case 'stiker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 's':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								costum('[❗] PROCESSANDO...', text, tescuk, cr)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('[❗] PROCESSADO...', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falha, no momento da conversão ${tipe} para o sticker`)
							})
							.on('end', function () {
								console.log('Finish')

								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker\nDuração do sticker de vídeo 1-9 Segundos`)
					}
					break
     case 'stickerwa':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Você foi banido pelo senpaii!!! Por tanto não pode usar os comandos da Grr u.u!!')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Anime \n(Obs. cuidado ao usar, eu envio vários stickers)`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=b170074ac846042f35937286&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=b170074ac846042f35937286&img=${x}`)
                        client.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'wait':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Você está banido pelo senpai!!')
				reply(nad.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        get_video = await getBuffer(get_result.video)
                        ini_txt = `Anilista id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Título Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Título Nativo : ${get_result.title_native}\n`
                        ini_txt += `Título English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episódio : ${get_result.episode}\n`
                        ini_txt += `Similaridade : ${get_result.similarity}`
                        client.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    } else {
                        reply(`Envie fotos com legendas ${prefix + command} ou marque as imagem que já foram enviadas`)
                    }
                    break
                    case 'buscar':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Você está banido pelo senpai!!')
				reply(nad.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_txt = `Anilista id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Título Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Título Nativo : ${get_result.title_native}\n`
                        ini_txt += `Título English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episódio : ${get_result.episode}\n`
                        ini_txt += `Similaridade : ${get_result.similarity}`
                    } else {
                        reply(`Envie fotos com legendas ${prefix + command} ou marque as imagem que já foram enviadas`)
                    }
                    break
                    case 'stickerwa2':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Você foi banido pelo senpaii!!! Por tanto não pode usar os comandos da Grr u.u!!')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Anime \n(Obs. cuidado ao usar, eu envio vários stickers)`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=b170074ac846042f35937286&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=b170074ac846042f35937286&img=${x}`)
                        client.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case 'stctag':
                    case 'stickertag':
                                        if (!isQuotedSticker) return reply('Isto é um sticker?')
                                        if (!isPrem) return reply(nad.premium(prefix))
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await client.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await client.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        client.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag': 
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    if (!isPrem) return reply(nad.premium(prefix))
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Essa imagem agora marca geral`)
                    }
                    break
                   
				case 'nuliskiri':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto? Exemplo : ${prefix}nuliskiri Crazyy-_- bondoso`)
					reply('「❗」Perai garai')
					kir = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${q}&APIKEY=${xteam}`)
					client.sendMessage(from, kir, image, { quoted: mek, caption: 'Aqui, mano' })
					break
				case 'nuliskanan':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto? Exemplo : ${prefix}nuliskanan Crazyy-_- bondoso`)
					reply('「❗」Perai garai')
					kan = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${q}&APIKEY=${xteam}`)
					client.sendMessage(from, kan, image, { quoted: mek, caption: 'Aqui, mano' })
					break
				case 'stalkig':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Manda o username da pessoa!\nExemplo :\n${prefix}stalkig ysael_mario008_`)
					anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${q}&APIKEY=${xteam}`)
					reply('「❗」Tenta de novo')
					stig = await getBuffer(anu.result.user.hd_profile_pic_url_info.url)
					abu = anu.result.user
					hasil = `KKKKKKKKK ACHOO ${q}
◯ Nome : ${abu.full_name}
◯ Seguidores : ${abu.follower_count}
◯ Seguindo : ${abu.following_count}
◯ Post : ${abu.media_count}
◯ Biografia : ${abu.biography}`
					client.sendMessage(from, stig, image, { quoted: mek, caption: hasil })
					break

				case 'tts':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return client.sendMessage(from, `Cadê o código de idioma? mande !idiomas pra saber quais são`, text, { quoted: mek })
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, `Cadê o texto porra | Exemplo : ${prefix}tts id ah yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('O texto é muito longo porra')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(nad.stikga())
								client.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
								fs.unlinkSync(rano)
							})
						})
					break
					
					case 'idiomas':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply('af = Afrikaans \n sq = Albanian  \n ar = Arabic \n hy = Armenian \n ca = Catamek \n zh = Chinese\n zh-cn = Chinese (Mandarin/China) \nzh-tw = Chinese (Mandarin/Taiwan) \n zh-yue = Chinese (Cantonese) \n hr = Croatian \n cs = Czech \n da = Danish \n nl = Dutch \n en = English \n en-au = English (Australia) \n en-uk = English (United Kingdom) \n en-us = English (United States) \n eo = Esperanto \n fi = Finnish \n fr = French \n de = German \n el = Greek \n ht = Haitian Creole \n  hi = Hindi \n  hu = Hungarian \n  is = Icemekdic \n id = Indonesian \n it = Italian \n  ja = Japanese \n  ko = Korean \n  la = Latin \n  lv = Latvian \n  mk = Macedonian \n  no = Norwegian \n  pl = Polish \n  pt = Portuguese \n  pt-br = Portuguese (Brazil) \n  ro = Romanian \n  ru = Russian \n  sr = Serbian \n  sk = Slovak \n  es = Spanish \n es-es = Spanish (Spain) \n es-us = Spanish (United States) \n sw = Swahili \n  sv = Swedish \n  ta = Tamil \n th = Thai \n tr = Turkish \n  vi = Vietnamese \n  cy =Welsh' )


				case 'ttpp':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Seu texto?\nExemplo :\n${prefix}tts id ah yamate kudasai`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BEM SUCEDIDO")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									client.sendMessage(from, buffer, sticker)
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
				case 'attp':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Sempre esquecem o texto, aff\nExemplo :\n${prefix}attp BOT`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					client.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
                case 'attp2':  
                     if (!isRegistered) return reply(nad.noregis())
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     client.sendMessage(from, atetepe, sticker, {quoted: mek})
                     break

				case 'simi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					
					if (!q) return reply(`O que você quer fazer?\nExemplo :\n${prefix}simi hello`)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=halo&APIKEY=${xteam}`)
					reply(anu.jawaban)
					break

				case 'quotes':
					client.updatePresence(from, Presence.composing)
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./R4ML4N/quote.json');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randQuote = '' + randKey.quote + '\n\n_By: ' + randKey.by + '_'
					fakestatus(randQuote)
					break

				case 'bikinquote':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `Que tipo de citação você quer, titit?\nTipo :\n${prefix}bikinquote A Grr chupa o crazy`
					if (args.length < 1) return reply(pref)
					reply(nad.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, { method: 'get' })
					biquote = await getBuffer(anu.result)
					client.sendMessage(from, biquote, image, { caption: 'Aqui >_<', quoted: mek })
					break
				case 'groupmenu':
				case 'grupomenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const menugrup = `「 *MENU DO GRUPO* 」
${a}❏ ${prefix}welcome${a}
${a}❏ ${prefix}leveling${a}
${a}❏ ${prefix}antilink${a}
${a}❏ ${prefix}nsfw${a}
${a}❏ ${prefix}antipalavrao${a}
${a}❏ ${prefix}grupo${a}
${a}❏ ${prefix}admin${a}
${a}❏ ${prefix}add${a}
${a}❏ ${prefix}kick${a}
${a}❏ ${prefix}suicidio${a}
${a}❏ ${prefix}hidetag${a}
${a}❏ ${prefix}hidetag20${a}
${a}❏ ${prefix}level${a}
${a}❏ ${prefix}linkgrupo${a}
${a}❏ ${prefix}tagall${a}
${a}❏ ${prefix}setname${a}
${a}❏ ${prefix}setdesc${a}
${a}❏ ${prefix}demote${a}
${a}❏ ${prefix}promote${a}
${a}❏ ${prefix}headshot${a}
${a}❏ ${prefix}fitnah${a}
${a}❏ ${prefix}casal${a}
${a}❏ ${prefix}leave(eu saio do gp)${a}
${a}❏ ${prefix}delete${a}
${a}❏ ${prefix}mining${a}

「 *${botName}* 」`
					fakestatus(menugrup)
					break
                    
				case 'antibadword':
				case 'antipalavrao':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`para ativar o comando : ${prefix}antipalavrao 1`)
					if (Number(args[0]) === 1) {
						if (isBadWord) return reply('Já ativo irmão')
						badword.push(from)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('──『✙ FEITO ✙』──\nO grupo é educacional agora🙏🏻')
						client.sendMessage(from, `ALLERT!!! Nada de palavrão no grupo hein!\nSe você falar, eu vou te banir`, text)
					} else if (Number(args[0]) === 0) {
						if (!isBadWord) return reply('Já Morto')
						var ini = antilink.indexOf(from)
						badword.splice(ini, 1)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('──『✙ FEITO ✙』──\nO GRUPO NÃO É MAIS EDUCACIONAL PORRA CARALHO BUCETA FILHO DA PUTAAAAAAAAKKKKKKKK🤡🤡👉👌')
					} else {
						reply('1 para ligar, 0 para desligar')
					}
					break

				case 'welcome':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply(`para ativar o comando : ${prefix}welcome 1`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já ativo')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('──『✙ FEITO ✙』──\nRecurso de boas-vindas ativado')
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Ja feito')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('──『✙ FEITO ✙』──\nRecurso de boas-vindas desativado')
					} else {
						reply('1 para ligar, 0 para desligar')
					}
					break

				case 'leveling':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply(`Para ativar o comando : ${prefix}leveling 1`)
					if (Number(args[0]) === 1) {
						if (isLevelingOn) return reply('Já ativo')
						_leveling.push(from)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('──『✙ FEITO ✙』──\nRecurso de nível ativado')
					} else if (Number(args[0]) === 0) {
						_leveling.splice(from, 1)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('──『✙ FEITO ✙』──\nRecurso de nível desativado')
					} else {
						reply('1 para ligar, 0 para desligar')
					}
					break

				case 'antilink':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`Para ativar o comando : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Já ativo')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('──『✙ FEITO ✙』──\nQUEM VIR FLOODAR NOSSO GRUPO VAI TER O CU COMIDO(e é sem cuspe)')
						client.sendMessage(from, `ALLERTA!!! Este grupo está protegido pela companhia GRR-SECURITY KAKAK\nQuem mandar link vai pra vala!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Ja morto')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('──『✙ FEITO ✙』──\nPodem divulgar link')
					} else {
						reply('1 para ligar, 0 para desligar')
					}
					break
					
					case 'nsfw':
				if (!isGroup) return reply(nad.groupo())
				if (!isGroupAdmins) return reply(nad.admin())
				if (args.length < 1) return reply('Ative usando 1, Desative usando 0 ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*O recurso NSFW já estava ativo antes*')
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('Ativando o modo nsfw, PUTARIA LIBERADA 🔞🤡\n 😈 *QUERO COISAR*')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('Desativando o modo nsfw, SEM PUTARIA!')
				} else {
				reply(nad.satukos())
				}
				break

				case 'grup':
				case 'grupo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply(`abrir : ${prefix}grupo buka\n fechar: ${prefix}grupo tutup`)
					if (args[0] === 'buka') {
						reply(`Release`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`ZAWARUDOO`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

				case 'admin':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isGroup) return reply(nad.groupo())
					adm = `*Ô os homi ae* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adm, groupAdmins, true)
					break

				case 'add':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply('Quem você deseja adicionar??')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Nao da pra adicionar essa pessoa, deve ter colocado pra apenas contatos :)')
					}
					break

				case 'kick':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o desgraçado')
					kicknya = mek.message.extendedTextMessage.contextInfo.participant
					await client.groupRemove(from, [kicknya])
					break
					
					case 'hidetag':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isGroup) return reply(nad.groupo())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
                case 'hidetag2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isOwner) return reply(nad.ownerb())
					if (!isGroup) return reply(nad.groupo())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'hidetag20':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					var value = body.slice(11)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break

				case 'level':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isLevelingOn) return reply(nad.lvlnoon())
					if (!isGroup) return reply(nad.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(nad.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME : ${pushname}\n┃│➸ NÚMERO : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃│➸ RANK: ${role}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
					client.sendMessage(from, resul, text, { quoted: mek })
						.catch(async (err) => {
							console.error(err)
							await reply(`Error!\n${err}`)
						})
					break

				case 'linkgrup':
				case 'linkgrupo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (!isGroup) return reply(nad.groupo())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					linkgc = await client.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
					client.sendMessage(from, yeh, text, { quoted: mek })
					break

				case 'tagall':
					if (isBanned) return reply(nad.baned())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					members_id = []
					taga = (args.length > 1) ? body.slice(8).trim() : ''
					taga += '\n\n'
					for (let mem of groupMembers) {
						taga += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(taga, members_id, true)
					break

				case 'setname':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMessage(from, '──『✙ FEITO ✙』──\nNome do grupo mudado', text, { quoted: mek })
					break

				case 'setdesc':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					client.sendMessage(from, '*──『✙ FEITO ✙』──\nDescrição do grupo mudada', text, { quoted: mek })
					break

				case 'demote':
				case 'demot':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						dem = ''
						for (let _ of mentioned) {
							dem += `*Virou membro comumkkkkkkkkkkkkkkkk*🏃 :\n`
							dem += `@_.split('@')[0]`
						}
						mentions(dem, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Você virou membro comumkkkkkkkkkkkkkk🤡🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promote':
				case 'promot':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o bem aventurado')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						prom = ''
						for (let _ of mentioned) {
							prom += `Yeee🥳 Não é mais membro comum >_< :\n`
							prom += `@_.split('@')[0]`
						}
						mentions(prom, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Parabéns🥳 @${mentioned[0].split('@')[0]} *Você não é mais membro comum* >_<`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'autopromote':
					case 'golpe_de_estado':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
	    if (!isOwner) return reply(nad.ownerb())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o bem aventurado')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						prom = ''
						for (let _ of mentioned) {
							prom += `Golpe muito bem sucedido silenciosamente..\n`
							prom += `@_.split('@')[0]`
						}
						mentions(prom, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Bem sucessido @${mentioned[0].split('@')[0]} sama, como um peixe nandando entre os tubarões`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break

				case 'hedsot':
				case 'headshot':
				case 'hs':
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o Alvo hehe')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						heds = 'Headshot otariokkkkkkkkkk :\n'
						for (let _ of mentioned) {
							heds += `@${_.split('@')[0]}\n`
						}
						mentions(heds, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(heds, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Receba na boca: @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break

				case 'fitnah':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					if (args.length < 1) return reply(`Assim oh : ${prefix}fitnah [@tag&mensagem&resposta]\n\nExemplo : ${prefix}fitnah @tagmember&Sou gay&Ata :3`)
					var gh = body.slice(8)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					client.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
					break

				case 'jadian':
				case 'casal':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `E o novo casal do grupo é...!!!\n*@${aku.jid.split('@')[0]}* ♥️ *@${cintax.jid.split('@')[0]}*\nEspero que dure ksksks`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break
					
					case 'transa':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `🔞Uiui.. olha quem tão no bem bom rsrs🌚🔥\n*@${aku.jid.split('@')[0]}* Transou gostoso com *@${cintax.jid.split('@')[0]}🔥❤️🔞🔞*\n`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break

				case 'leave':
				case 'sair':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					setTimeout(() => {
						client.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						client.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(nad.noregis())
						if (isBanned) return reply(nad.baned())
						fakestatus('Adeus galera')
					}, 0)
					break

				case 'del':
				case 'delete':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break

				case 'mining':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(nad.groupo())
					if (!isEventon) return reply(`Desculpe ${pushname} o mining de evento não foi ativada pelo senpaii ${ownerName}`)
					if (isOwner) {
						const one = 999999999
						addLevelingXp(sender, one)
						addLevelingLevel(sender, 999999999999)
						reply(`O ${ownerName} mandou dar ${one}Xp >_<`)
					} else {
						const mining = Math.ceil(Math.random() * 10000)
						addLevelingXp(sender, mining)
						await reply(`*Parabéns* ${pushname} toma (｡･ω･｡)ﾉ *${mining}Xp*`)
					}
					break

				case 'downloadmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const donlot = `「 *DOWNLOAD MENU* 」
${a}❏ ${prefix}play${a}
${a}❏ ${prefix}play2${a}
${a}❏ ${prefix}ytsearch${a}
${a}❏ ${prefix}baixarmp3${a}
${a}❏ ${prefix}baixarmp32${a}
${a}❏ ${prefix}baixarmp4${a}
${a}❏ ${prefix}baixarmp42${a}
${a}❏ ${prefix}spotify${a}
${a}❏ ${prefix}spotifysearch${a}
${a}❏ ${prefix}tiktod${a}
${a}❏ ${prefix}igdl${a}
${a}❏ ${prefix}fbdl${a}
${a}❏ ${prefix}joox${a}
${a}❏ ${prefix}jooxplay${a}

「 *${botName}* 」`
					fakestatus(donlot)
					break

				case 'ytplay':
                case 'play':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Lil Peep - Beamerboy`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Título : ${get_info.title}\n`
                    ini_txt += `Autor : ${get_info.uploader}\n`
                    ini_txt += `Duração : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Descrição :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_  = await getBuffer(get_result.video[0].link)
                    client.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                case 'ytplay2':
                case 'play2':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Lil Peep - Beamerboy`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    client.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytsearch':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Crazy - Tipo Jovem Dex`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Publicado : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
                case 'baixarmp3':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://youtu.be/-91SZOniINw`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Autor : ${get_result.uploader}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Descrição :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                case 'baixarmp32':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://youtu.be/-91SZOniINw`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp4':
                case 'baixarmp4':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://youtu.be/-91SZOniINw`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Descrição :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp42':
                case 'baixarmp42':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://youtu.be/-91SZOniINw`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    
                    case 'spotify':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhumankey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Artistas : ${get_result.artists}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `Popularidade : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                case 'spotifypcr':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Lil Peep - Beamerboy`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Artistas : ${x.artists}\n`
                        ini_txt += `Duração : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                    
                    case 'igdl':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                    
                    case 'jooxplay':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.info.song}\n`
                    ini_txt += `Artistas : ${get_result.info.singer}\n`
                    ini_txt += `Duração : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Postado : ${get_result.info.date}\n`
                    ini_txt += `letra :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break

				case 'tiktod':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply('TikTok irmão?')
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${q}&APIKEY=${xteam}`)
					reply('[PERA] O vídeo será enviado imediatamente...')
					tik = await getBuffer(anu.server_1)
					client.sendMessage(from, tik, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'igphoto':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply('O link')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${q}&APIKEY=${xteam}`)
					reply(nad.wait())
					buff = await getBuffer(anu.result.data[0].data)
					client.sendMessage(from, buff, image, { quoted: mek })
					break

				case 'igvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (args.length < 1) return reply('O link')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${q}&APIKEY=${xteam}`)
					reply(nad.wait())
					buffe = await getBuffer(anu.result.data[0].data)
					client.sendMessage(from, buffe, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'joox':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Quer encontrar uma foda?\nExemplo :\n${prefix}joox r.i.p roach`)
					reply(nad.wait())
					anu = await fetchJson(`https://api.xteam.xyz/dl/jooxdl?lagu=${q}&APIKEY=${xteam}`)
					asu = anu.result
					infojoox = `*「❗」Canção encontrada「❗」*
➸ Título : ${asu.songname}
➸ Tamanho : ${asu.filesize}
➸ Artista : ${asu.singers}
➸ Album : ${asu.album}

[PERA] Processandoo...`
					buft = await getBuffer(asu.album_url)
					lakgu = await getBuffer(asu.download_url)
					client.sendMessage(from, buft, image, { quoted: mek, caption: infojoox })
					client.sendMessage(from, lakgu, audio, { mimetype: 'audio/mp4', quoted: mek })
					break
				case 'makermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const meker = `「 *MAKER MENU* 」
${a}❏ ${prefix}comictext${a}
${a}❏ ${prefix}darkneon${a}
${a}❏ ${prefix}candlemug${a}
${a}❏ ${prefix}lovemsg${a}
${a}❏ ${prefix}narutobanner
${a}❏ ${prefix}paperonglass${a}
${a}❏ ${prefix}romancetext${a}
${a}❏ ${prefix}shadowtext${a}
${a}❏ ${prefix}coffeecup${a}
${a}❏ ${prefix}coffeecup2${a}
${a}❏ ${prefix}glowingneon${a}
${a}❏ ${prefix}underwater${a}
${a}❏ ${prefix}hpotter${a}
${a}❏ ${prefix}gtav${a}
${a}❏ ${prefix}nightbeach${a}
${a}❏ ${prefix}gay${a}
${a}❏ ${prefix}fisheye${a}
${a}❏ ${prefix}skullmask${a}
${a}❏ ${prefix}alien${a}
${a}❏ ${prefix}removebg${a}
${a}❏ ${prefix}laptop${a}
${a}❏ ${prefix}woodblock${a}
${a}❏ ${prefix}Hackerlogo${a}
${a}❏ ${prefix}graffiti${a}
${a}❏ ${prefix}glowtext${a}
${a}❏ ${prefix}covertext${a}
${a}❏ ${prefix}narutotext${a}
${a}❏ ${prefix}erodedtext${a}
${a}❏ ${prefix}walltext${a}
${a}❏ ${prefix}vietteltext${a}
${a}❏ ${prefix}wingstext${a}
${a}❏ ${prefix}halloween${a}
${a}❏ ${prefix}graffiti2${a}
${a}❏ ${prefix}graffiti3${a}
${a}❏ ${prefix}foiltext${a}
${a}❏ ${prefix}bloodtext${a}
${a}❏ ${prefix}Hackertext${a}
${a}❏ ${prefix}bokehtext${a}
${a}❏ ${prefix}carbontext${a}
${a}❏ ${prefix}avengerstext${a}
${a}❏ ${prefix}watertext${a}
${a}❏ ${prefix}firetext${a}
${a}❏ ${prefix}metaltext${a}
${a}❏ ${prefix}ballontext${a}
${a}❏ ${prefix}gemboktext${a}
${a}❏ ${prefix}bannerff${a}
${a}❏ ${prefix}aloklogo${a}
${a}❏ ${prefix}miyalogo${a}
${a}❏ ${prefix}gamelogo${a}
${a}❏ ${prefix}blackpink${a}
${a}❏ ${prefix}thundername${a}
${a}❏ ${prefix}silktext${a}
${a}❏ ${prefix}partytext${a}
${a}❏ ${prefix}romancetext${a}
${a}❏ ${prefix}googletext${a}
${a}❏ ${prefix}glowtext2${a}
${a}❏ ${prefix}lovemessage${a}
${a}❏ ${prefix}glitchtext${a}
${a}❏ ${prefix}galaxytext${a}
${a}❏ ${prefix}pornhub${a}
${a}❏ ${prefix}hartatahta${a}
${a}❏ ${prefix}wetglass${a}
${a}❏ ${prefix}stylelogo${a}
${a}❏ ${prefix}watercolor${a}

「 *${botName}* 」`
					fakestatus(meker)
					break
					
				           	case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
                    if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} crazy`)
                    manikg = args.join(" ")
                    reply(nad.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${manikg}`)
                    client.sendMessage(from, buffer, image, {caption: 'Aqui mano.. *Divirta-se Y:V*', quoted: mek})
                break
                
                case 'alien':
	if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolhumankey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolhuman}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolhuman}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolhuman}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	
	    case 'gtav':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
  reply(nad.wait())
  owgi = await client.downloadAndsavemediamessage(encmedia)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 client.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('Marque a imagem, burro!!')
}
break
			case 'gay':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
  reply(nad.wait())
  owgi = await client.downloadAndsavemediamessage(encmedia)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${media} && ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(ran)
client.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Use uma foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
  reply(nad.wait())
  owgi = await client.downloadAndsavemediamessage(encmedia)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 client.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('Marque a imagem burro!')
}
break
	case 'laptop':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(rmln).replace('quotedM', 'm')).message.extendedTextMessage.contextinfo: mek
  reply(nad.wait())
  owgi = await client.downloadAndsavemediamessage(encmedia)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 client.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('Marque a imagem, burro!!')
}
break
                
				case 'comictext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}comictext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/comic_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'hekerlogo':
				case 'hackerlogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}Hackerlogo Crazyy-_-`)
					reply(`[🗿] Enfeite de Hacker`)
					vhbuff = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'graffiti':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}graffiti Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cool_wall_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'glowtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}glowtext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'covertext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}covertext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cover_banner?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'narutotext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}narutotext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/naruto_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'erodedtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}erodedtext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/eroded_metal?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'walltext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}walltext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/the_wall?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'vietteltext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}vietteltext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/viettel_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'wingstext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}wingstext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wings_galaxy?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'halloween':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}halloween Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/halloween_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'graffiti2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(11)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}graffiti2 Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'graffiti3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}graffiti3 Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cartoon_graffiti?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'foiltext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}foiltext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/foil_text?text=VHTEAR&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'bloodtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}bloodtext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/blood_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'hekertext':
				case 'hackertext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}hekertext Crazyy-_-`)
					reply(`[😎] Hacker AbiZzz`)
					vhbuff = await getBuffer(`https://api.vhtear.com/matrix_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'bokehtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}bokehtext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bokeh_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'carbontext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}carbontext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/carbon_text?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'avengerstext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(14)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}avengerstext Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avengers_text?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'watertext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}watertext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/water_maker?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'firetext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}firetext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/fire_maker?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'metaltext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}metaltext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/metal_maker?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'ballontext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}ballontext Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'gemboktext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}gemboktext 11 01 2021 & Crazyy-_- e Peach`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/padlock?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'bannerff':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}bannerff Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bannerff?title=${ve}&text=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'aloklogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}aloklogo Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'miyalogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}miyalogo Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'gamelogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}gamelogo Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'blackpink':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}blackpink Crazyy-_-`)
					reply(`[😱] Kpop, vc e gay :v`)
					vhbuff = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'thundername':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}thundername Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/thundertext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'silktext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}silktext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/silktext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'partytext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}partytext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/partytext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'romancetext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}romancetext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/romancetext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'googletext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					var ga = gh.split("&")[2];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}googletext Crazyy-_- & Crazyy-_- Gans & Crazyy-_- Baik`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/googletext?text1=${ve}&text2=${za}&text3=${ga}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'glowtext2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}glowtext2 Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glowtext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'lovemessage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}lovemessage Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'glitchtext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}glitchtext Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'galaxytext':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}galaxytext Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/galaxytext?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'pornhub':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(9)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}pornhub Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'hartatahta':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}hartatahta Crazyy-_-`)
					reply(`[❗] Hirti Tihti Tai Anjg :v`)
					vhbuff = await getBuffer(`https://api.vhtear.com/hartatahta?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'wetglass':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}wetglass Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wetglass?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'stylelogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}stylelogo Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'watercolor':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}watercolor Crazyy-_-`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/watercolor?text=${q}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
				case 'wolflogo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Cadê o texto?\nExemplo :\n${prefix}wolflogo Crazyy-_- & Gamteng`)
					reply(nad.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					client.sendMessage(from, vhbuff, image, { quoted: mek })
					break
/*]====> BY Crazyy-_- ID <====[*/
				case 'sertifikatmenu':
				case 'comandos':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const serti = `「 *LISTA DE MENUS* 」
${a}❏ ${prefix}simplesmenu${a}
${a}❏ ${prefix}grupomenu${a}
${a}❏ ${prefix}downloadmenu${a}
${a}❏ ${prefix}makermenu${a}
${a}❏ ${prefix}gabutmenu${a}
${a}❏ ${prefix}nsfwmenu${a}
${a}❏ ${prefix}randommenu${a}
${a}❏ ${prefix}toolsmenu${a}
${a}❏ ${prefix}crushmenu${a}
${a}❏ ${prefix}othermenu${a}
${a}❏ ${prefix}storagemenu${a}
${a}❏ ${prefix}ownermenu${a}

「 *${botName}* 」`
					fakestatus(serti)
					break
                    case 'sertiharam':                   
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiharam botgrr`)
                    reply(nad.wait())
                    menghayu = await getBuffer(`http://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${q}`)
                    client.sendMessage(from, menghayu, image, { quoted: mek })
                    break
                    case 'sertibabu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertibabu botgrr`)
                    reply(nad.wait())
                    sertibab = await getBuffer(`http://onlydevcity.xyz/BabuSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertibab, image, { quoted: mek })
                    break
                    case 'sertibucin':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertibucin botgrr`)
                    reply(nad.wait())
                    sertibuci = await getBuffer(`http://onlydevcity.xyz/BucinSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertibuci, image, { quoted: mek })
                    break
                    case 'sertibocilff':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertibocilff botgrr`)
                    reply(nad.wait())
                    sertibocilf = await getBuffer(`http://onlydevcity.xyz/CilEpepSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertibocilf, image, { quoted: mek })
                    break
                    case 'sertigay':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertigay botgrr`)
                    reply(nad.wait())
                    sertiga = await getBuffer(`http://onlydevcity.xyz/GaySerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertiga, image, { quoted: mek })
                    break
                    case 'sertipacar':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertipacar botgrr`)
                    reply(nad.wait())
                    sertipaca = await getBuffer(`http://onlydevcity.xyz/PacarSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertipaca, image, { quoted: mek })
                    break
                    case 'sertisadboy':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertisadboy botgrr`)
                    reply(nad.wait())
                    sertisadbo = await getBuffer(`http://onlydevcity.xyz/SadBoySerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertisadbo, image, { quoted: mek })
                    break
                    case 'sertisurga':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertisurga botgrr`)
                    reply(nad.wait())
                    sertisurg = await getBuffer(`http://onlydevcity.xyz/SurgaSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertisurg, image, { quoted: mek })
                    break
                    case 'sertipinter':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertipinter botgrr`)
                    reply(nad.wait())
                    sertipinte = await getBuffer(`http://onlydevcity.xyz/PintarSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertipinte, image, { quoted: mek })
                    break
                    case 'sertibadboy':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertibadboy botgrr`)
                    reply(nad.wait())
                    sertibadbo = await getBuffer(`http://onlydevcity.xyz/BadBoySerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertibadbo, image, { quoted: mek })
                    break
                    case 'sertibadgirl':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertibadgirl botgrr`)
                    reply(nad.wait())
                    sertibadgir = await getBuffer(`http://onlydevcity.xyz/BadGirlSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertibadgir, image, { quoted: mek })
                    break
                    case 'sertigoodgirl':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertigoodgirl botgrr`)
                    reply(nad.wait())
                    sertigoodgir = await getBuffer(`http://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertigoodgir, image, { quoted: mek })
                    break
                    case 'sertigoodboy':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertigoodboy botgrr`)
                    reply(nad.wait())
                    sertigoodbo = await getBuffer(`http://onlydevcity.xyz/GoodBoySerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertigoodbo, image, { quoted: mek })
                    break
                    case 'sertieditor':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertieditor botgrr`)
                    reply(nad.wait())
                    sertiedito = await getBuffer(`http://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertiedito, image, { quoted: mek })
                    break
                    case 'sertigudluking':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertigudluking botgrr`)
                    reply(nad.wait())
                    sertigudlukin = await getBuffer(`http://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertigudlukin, image, { quoted: mek })
                    break
                    case 'sertipakboy':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertipakboy botgrr`)
                    reply(nad.wait())
                    sertipakbo = await getBuffer(`http://onlydevcity.xyz/FucekBoySerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertipakbo, image, { quoted: mek })
                    break
                    case 'sertijamet':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertijamet botgrr`)
                    reply(nad.wait())
                    sertijame = await getBuffer(`http://onlydevcity.xyz/JametSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertijame, image, { quoted: mek })
                    break
                    case 'sertiyutub':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiyutub botgrr`)
                    reply(nad.wait())
                    sertiyutu = await getBuffer(`http://onlydevcity.xyz/YoutuberSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertiyutu, image, { quoted: mek })
                    break
                    case 'sertiheker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiheker botgrr`)
                    reply(nad.wait())
                    sertiheke = await getBuffer(`http://onlydevcity.xyz/HekerSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertiheke, image, { quoted: mek })
                    break
                    case 'sertiff1':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiff1 botgrr`)
                    reply(nad.wait())
                    sertiff = await getBuffer(`http://onlydevcity.xyz/FFSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertiff, image, { quoted: mek })
                    break
                    case 'sertiff2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiff2 botgrr`)
                    reply(nad.wait())
                    sertif = await getBuffer(`http://onlydevcity.xyz/FFSerti2/img.php?nama=${q}`)
                    client.sendMessage(from, sertif, image, { quoted: mek })
                    break
                    case 'sertiff3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiff3 botgrr`)
                    reply(nad.wait())
                    sertifa = await getBuffer(`http://onlydevcity.xyz/FFSerti3/img.php?nama=${q}`)
                    client.sendMessage(from, sertifa, image, { quoted: mek })
                    break
                    case 'sertiff4':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiff4 botgrr`)
                    reply(nad.wait())
                    sertifb = await getBuffer(`http://onlydevcity.xyz/FFSerti4/img.php?nama=${q}`)
                    client.sendMessage(from, sertifb, image, { quoted: mek })
                    break
                    case 'sertiff5':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiff5 botgrr`)
                    reply(nad.wait())
                    sertifc = await getBuffer(`http://onlydevcity.xyz/FFSerti5/img.php?nama=${q}`)
                    client.sendMessage(from, sertifc, image, { quoted: mek })
                    break
                    case 'sertipubg1':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertipubg1 botgrr`)
                    reply(nad.wait())
                    sertipubg = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertipubg, image, { quoted: mek })
                    break
                    case 'sertipubg2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertipubg2 botgrr`)
                    reply(nad.wait())
                    sertipub = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${q}`)
                    client.sendMessage(from, sertipub, image, { quoted: mek })
                    break
                    case 'sertiml':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Cadê o texto?\nExemplo :\n${prefix}sertiml botgrr`)
                    reply(nad.wait())
                    sertim = await getBuffer(`http://onlydevcity.xyz/MLTourSerti/img.php?nama=${q}`)
                    client.sendMessage(from, sertim, image, { quoted: mek })
                    break
				case 'gabutmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const gabut = `「 *DIVERSÃO* 」
${a}❏ ${prefix}acho${a}
${a}❏ ${prefix}caklontong${a}
${a}❏ ${prefix}slot${a}
${a}❏ ${prefix}vocepode${a}
${a}❏ ${prefix}quando${a}
${a}❏ ${prefix}pergunta${a}
${a}❏ ${prefix}nota${a}
${a}❏ ${prefix}hobby${a}
${a}❏ ${prefix}verdade${a}
${a}❏ ${prefix}desafio${a}
${a}❏ ${prefix}gay${a}
${a}❏ ${prefix}quantogay${a}
${a}❏ ${prefix}quantolesbica${a}
${a}❏ ${prefix}personalidade${a}
${a}❏ ${prefix}casal${a}
${a}❏ ${prefix}transa(esse comando pode gerar treta sksksk)${a}
${a}❏ ${prefix}maislindo${a}
${a}❏ ${prefix}gostosa${a}
${a}❏ ${prefix}carta${a}

「 *${botName}* 」`
					fakestatus(gabut)
					break
					
					
					
					                   case 'suratto': 
case 'carta':
         if (!isRegistered) return reply(nad.noregis())
				if (args.length < 1) return reply(`Modelo: ${prefix}carta Destinatário|Conteúdo da carta`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Carta de ${sender.replace('@s.whatsapp.net')}`
				client.sendMessage(`${noorg2}@s.whatsapp.net`, `╔════ ◤ *CARTA VIRTUAL* ◢
║╔▸
║╠ A partir de* : ${pushname}
║╠ Número* : @${sender.split("@")[0]}
║╠ Para* : You
║╚▸
║╔▸   ﹝ *CONTEÚDO DA CARTA* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *RESPOSTA À CARTA* ﹞  
║╠ Para a resposta:
║╠ #carta (Sua resposta|Nº do destinatário)
║╠ Exemplo: 
║╠ #carta(ou !carta) (Olá também|55xxxxx)
║╚▸
╚═══ ◤ *${botName}* ◢ `, text, {quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},
				message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender] }}}});	
				reply('Carta enviada')
				break
				                    case 'quantogay':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pergunta: *'+gayy+'*\n\nA viadagem dele é nível🏳️‍🌈: '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'quantolesbica':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Pergunta: *'+lesbicek+'*\n\nOlha o quanto lésbica ela é👩‍❤️‍💋‍👩: '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				
				case 'detecgenero':
	if (!isRegistered) return reply( nad.noregis())
	if (isLimit(sender)) return reply(nad.limitend(pusname))
	if (isLimit(sender)) return reply(nad.limitend(pusname))
	if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETECÇÃO DE GÊNERO ] \nDe acordo com meus cálculos... Essa pessoa é = *${hehe.result}*\n\nFÊMEA = MULHER\nMACHO = VIADO`
	 client.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	case 'detecidade':
	if (!isRegistered) return reply( nad.noregis())
	if (isLimit(sender)) return reply(nad.limitend(pusname))
	if (isLimit(sender)) return reply(nad.limitend(pusname))
	if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(nad.wait())
	  owgi = await client.downloadAndsavemediamessage(encmedia)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETECÇÃO DE IDADE ] \nDe acordo meus cálculos... essa pessoa tem= *${hehe.result}*`
	 client.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Não adicione nada ao comando')
	}
	break
	
	    case 'gay2':
if (!isRegistered) return reply(nad.noregis())
if (isBanned) return reply(nad.baned())
if (isLimit(sender)) return reply(nad.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(nad.wait())
  owgi = await client.downloadAndsavemediamessage(encmedia)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(ran)
client.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(ran)
  })

} else {
  reply('Use uma foto!')
}
break
				
				case 'tebakin':
				case 'acho':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vhtear}`)
					tebak = await getBuffer(anu.result.soalImg)
					setTimeout(() => {
						client.sendMessage(from, '*➸ Responda :* ' + anu.result.jawaban, text, { quoted: mek })
					}, 30000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, tebak, image, { caption: '_Jawab Ye, Gak Bisa Jawab\nHarus Donasi_', quoted: mek })
					}, 0) // 1000 = 1s,
					break
				case 'caklontong':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtear}`)
					setTimeout(() => {
						client.sendMessage(from, '*➸ Jawaban :* ' + anu.result.jawaban + '\n' + anu.result.desk, text, { quoted: mek })
					}, 30000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout(() => {
						client.sendMessage(from, anu.result.soal, text, { quoted: mek })
					}, 0) // 1000 = 1s,
					break

				case 'vocepode':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					bisakah = body.slice(1)
					const bisa =['Claro que eu posso! Você é a pessoa mais caseira', 'Nem fudendo kjjkkk', 'Hmm, eu não sei, pergunte ao seu pai', 'Repete, eu não entendi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pergunta : *'+bisakah+'*\n\nResposta: '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'quando':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					kapankah = body.slice(1)
					const kapan =['Amanhã', 'Depois de Amanhã', 'Agora mesmo', 'Em 4 dias', 'Em 5 dias', ' Em 6 dias', 'Em 1 semana', 'Em 2 semanas', 'Em 3 semanas', 'Em 1 mês', 'Em 2 meses', 'Em 3 meses', 'Em 4 meses', 'Em 5 meses', 'Em 6 meses', 'Em 1 ano', 'Em 2 anos', 'Em 3 anos', 'Em 4 anos', 'Em 5 anos', 'Em 6 anos', 'Daqui 1 século', 'Em 3 dias']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pergunta : *'+kapankah+'*\n\nResposta: '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'pergunta':
		            
                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					apakah = body.slice(1)
					const apa =['Sim', 'Não', 'Talvez', 'Repete mano, eu não entendi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pergunta : *'+apakah+'*\n\nResposta: '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            
		            case 'nota':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pergunta : *'+rate+'*\n\nA nota é: '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            client.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Descrição: Se você receber 3 peças iguais, significa que você ganhou
Exemplo : ${somtoy4}<=====`, text, { quoted: mek })
            break
     
    case 'personalidade':

                 if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					watak = body.slice(1)
					const wa =['Compassiva','Generosa','Amorosa','Boiola','Grosseira','Bondosa','De gente troxa','De puta','Arrogante','UwU','Top de qualquer maneira','Maligna']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pergunta : *'+watak+'*\n\nEssa pessoa tem uma personalidade: '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break

				case 'hobby':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					hobby = body.slice(1)
					const hob = ['Trair escondido e negar dps rs', 'Paquerar', 'Perseguir a(o) ex nas redes sociais', 'Fazer nada, vagabs', 'cozinhar', 'Chupar pica', 'Dar o cu', 'Fofocar', 'Agiotagem', 'Ajudar os outros', 'Assistir anime', 'Assistir porno', 'Ver hentai', 'Cantar', 'Dançar', 'Se masturbar', 'Desenhar', 'Iludir', 'Jogar', 'Dar golpe']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pergunta: *'+hobby+'*\n\nEssa pessoa costuma: '+ by, text, { quoted: mek })
					break

				case 'truth':
				case 'verdade':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const trut = ['Você já gostou de alguém? Quanto tempo?','Se possível ou se você quiser, no gp, com quem você transaria?','Qual é o seu maior medo?','Você já gostou de alguém e sentiu que essa pessoa gosta de você também?','Qual é o nome da ex-namorada do seu amigo de que você gostava secretamente?','Você já roubou o dinheiro de sua mãe ou do seu pai? Pra que?','O que te faz feliz quando você está triste?','Ja teve um amor nunca correspondido?','Já teve um caso com alguém?','Do que você mais tem medo?','Quem é a pessoa mais influente em sua vida?','Qual o seu maior orgulho desse ano?','Quem é a pessoa que pode fazer você se sentir desconfortável','Quem é a pessoa que te deixou desconfortável','Quem está mais próximo do seu tipo de parceiro(a) ideal aqui','Com quem você gosta de jogar?','Você já deu fora em alguém? por quê?','Mencione o incidente que te machucou e que você ainda se lembra','Que conquistas você obteve este ano?','Qual era o seu pior hábito na escola?','Já tentou chupar o próprio pau?','Já chupou o próprio peito?','Quem é a pessoa mais bonita do grupo pra você?(marque ela)']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: mek })
					break

				case 'dare':
				case 'desafio':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const dare = ['Envie uma mensagem para o seu(sua) ex e diga "Eu ainda gosto de você" ','Marque a(as) gostosa do grupo','Marque 3 membros, o último que responder chupara seu pau','Marque alguém e diga que essa pessoa é extremamente linda','Ligue pra alguém do grupo em chamada de video(tire print)','Mande o Emoji 🤥 a cada mensagem que você mandar por 1 dia','Mande um áudio gemendo baixinho','Cite um trecho de uma música e marque o membro apropriado para a citação','Use a foto que o primeiro membro que responder isso escolher(que não seja pornográfica ou gore) por 1 dia','Mande um áudio famekdo "alguém come meu cuzinho?" ','Mude seu nome para "Chama no pv pra ver meus packs grátis" por 5 horas','Saia do grupo e volte só daqui 6 horas😂😂😂','Va no pv do seu(sua) ex e diga "eu te amo, e eu te quero de volta(mande print da resposta)','Mande uma foto de agora(do seu rosto)','Acresecente "lgbT🏳️‍🌈" no seu nick por 24 hrs','indique o seu tipo de namorado(a)!','Marque alguém dizendo "Se o @(pessoa) quiser me comer eu deixo 🥰" ','Mande uma foto do pé','Mostra a raba gostosa hehe','Mande sua foto com uma legenda, quem quer me adotar?','Marque a pessoa que você menoa gosta no grupo','Grite "KYAAAAA YAMETE KUDASAI" na frente de sua casa(e grave, não precisa gravar seu rosto mas grave a frente da sua casa)','Coloque "Cadelinha do Crazy" no seu nick por 24 hrs','Mande um video mostrando o rosto']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n' + der })
					break
					
					case 'maislindo':
				
				if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `O membro mais lindo do grupo ai😳😋👉🏻👈🏻 @${akuutc.jid.split('@')[0]}\n (Depois do senpaii, claro rs)`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					
      case 'gostosa':
				
				if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Descupa você foi banido!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. ')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `A mais gostosa do grupo ae😋😏🔥 @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	

				case 'cekbapak': // By Rammek ID
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					const bapak = ['Nossa, você ainda tem Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Rammek ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					client.sendMessage(from, cek, text, { quoted: mek })
					break
					
					case 'nsfwmenu2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const otaku = `「 *MENU NSFW PT.2* 」
					
${a}❏ ${prefix}ero${a}
${a}❏ ${prefix}cum${a}
${a}❏ ${prefix}feet${a}
${a}❏ ${prefix}yuri${a}
${a}❏ ${prefix}trap${a}
${a}❏ ${prefix}lewd${a}
${a}❏ ${prefix}feed${a}
${a}❏ ${prefix}eron${a}
${a}❏ ${prefix}solo${a}
${a}❏ ${prefix}gasm${a}
${a}❏ ${prefix}poke${a}
${a}❏ ${prefix}anal${a}
${a}❏ ${prefix}holo${a}
${a}❏ ${prefix}tits${a}
${a}❏ ${prefix}kuni${a}
${a}❏ ${prefix}kiss${a}
${a}❏ ${prefix}erok${a}
${a}❏ ${prefix}smug${a}
${a}❏ ${prefix}baka${a}
${a}❏ ${prefix}solog${a}
${a}❏ ${prefix}feetg${a}
${a}❏ ${prefix}lewdk${a}
${a}❏ ${prefix}waifu${a}
${a}❏ ${prefix}pussy${a}
${a}❏ ${prefix}femdom${a}
${a}❏ ${prefix}cuddle${a}
${a}❏ ${prefix}hentai${a}
${a}❏ ${prefix}eroyuri${a}
${a}❏ ${prefix}cum_jpg${a}
${a}❏ ${prefix}blowjob${a}
${a}❏ ${prefix}erofeet${a}
${a}❏ ${prefix}holoero${a}
${a}❏ ${prefix}classic${a}
${a}❏ ${prefix}erokemo${a}
${a}❏ ${prefix}fox_girl${a}
${a}❏ ${prefix}futanari${a}
${a}❏ ${prefix}lewdkemo${a}
${a}❏ ${prefix}wallpaper${a}
${a}❏ ${prefix}pussy_jpg${a}
${a}❏ ${prefix}kemonomimi${a}
${a}❏ ${prefix}nsfw_avatar${a}
${a}❏ ${prefix}nhentai${a}
${a}❏ ${prefix}nhentaisearch${a}
${a}❏ ${prefix}nhentaipdf${a}
${a}❏ ${prefix}nekopoi${a}
${a}❏ ${prefix}nekopoisearch${a}
${a}❏ ${prefix}xhamstersearch${a}
${a}❏ ${prefix}xhamster${a}
${a}❏ ${prefix}xnxxsearch${a}
${a}❏ ${prefix}xnxx${a}

「 *${botName}* 」`
                case 'randombokep':
                if (!isNsfw) return reply(nad.nsfwoff())
			     client.updatePresence(from, Presence.composing) 
				 dappz = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(dappz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 dapbokepp = await getBuffer(anjglu.image)
                 reply(nad.wait())
                 asww = anjglu.teks
                 client.sendMessage(from, dapbokepp, image, {quoted: mek, caption: asww})
                 break
                
		        case 'pussyy': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'nekonimee': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'bakaa': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'blowjobb': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'lewdd': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'hentaii': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'waifu2': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui, seu safado...'})
				break
		        case 'hug': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Abaxuuu(つ≧▽≦)つ'})
				break
		        case 'hug2': 
		if (!isNsfw) return reply(nad.nsfwoff())
		if (!isRegistered) return reply(nad.noregis())
				if (isBanned) return reply('Você foi banido pelo senpaii!')
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				reply(nad.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Abaxuoo'})
					break
					           
					           case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
				reply(nad.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumankey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpa você está banido!!')
				reply(nad.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		        if (!isRegistered) return reply(nad.noregis())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        client.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break



























				case 'randommenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const random = `「 *MENU ALEATÓRIO* 」
${a}❏ ${prefix}gachacewek${a}
${a}❏ ${prefix}gachacowok${a}
${a}❏ ${prefix}sagiri${a}
${a}❏ ${prefix}megumin${a}
${a}❏ ${prefix}waifu${a}
${a}❏ ${prefix}neko${a}
${a}❏ ${prefix}shinobu${a}
${a}❏ ${prefix}loli${a}
${a}❏ ${prefix}nekonime${a}
${a}❏ ${prefix}memes${a}
${a}❏ ${prefix}casal${a}
${a}❏ ${prefix}gimage (pesquisa uma foto)${a}
${a}❏ ${prefix}xhamster${a}
${a}❏ ${prefix}xhamstersearch${a}
${a}❏ ${prefix}xnxx${a}
${a}❏ ${prefix}xnxxsearch${a}
${a}❏ ${prefix}estetik${a}

「 *${botName}* 」`
					fakestatus(random)
					break

				case 'gachacewek':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./R4ML4N/cewek.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, mek, 'Então, que tal Bwang?:v')
					break

				case 'gachacowok':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./R4ML4N/cowok.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, mek, 'E quanto a Mba?:v')
					break
				case 'meme':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
					mimi = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=${xteam}`)
					client.sendMessage(from, mimi, image, { quoted: mek })
					break

				case 'darkjokes':
				case 'memes':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./R4ML4N/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, mek, '* :V*')
					break
					
					case 'xhamstersearch':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr.')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duração : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhumankey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comentários : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duração : ${x.duration}\n`
                        ini_txt += `Autor : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                if (!isNsfw) return reply(nad.nsfwoff())
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhumankey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comentários : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Descrição : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
			case 'waifu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/waifu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					client.sendMessage(from, ifu, image, {quoted: mek, caption: "Wibu AbiZzz"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'neko':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/neko`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					client.sendMessage(from, ifu, image, {quoted: mek})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'megumin':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/megumin`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					client.sendMessage(from, ifu, image, {quoted: mek})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'shinobu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/shinobu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					client.sendMessage(from, ifu, image, {quoted: mek})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
				case 'loli':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					client.sendMessage(from, lomli, image, { quoted: mek, caption: 'Cintai Loli Mu>_<' })
					break

				case 'nekonime':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/neko?apikey=pensiB`)
					reply(nad.wait())
					neko = await getBuffer(anu.result.url_gbr)
					client.sendMessage(from, neko, image, { quoted: mek, caption: 'Nekonime >_<' })
					break

				case 'sagiri':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					sagi = await getBuffer(`http://lolhuman.herokuapp.com/api/random/sagiri?apikey=pensiB`)
					reply(nad.wait())
					client.sendMessage(from, sagi, image, { quoted: mek })
					break
				case 'estetik':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
					reply(nad.wait())
					este = await getBuffer(anu.result.result)
					client.sendMessage(from, este, image, { quoted: mek })
				break
				
				case 'bokep':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
    if (!isOwner) return reply(nad.ownerb())
				                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					data = fs.readFileSync('./R4ML4N/bokep.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
						costum('.', text, tescuk, cr)
						await ffmpeg('./media/sticker')
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`r`)
							})
							.on('end', function () {
								console.log('Finish')

								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					break
					
					case 'bokep2':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
    if (!isOwner) return reply(nad.ownerb())
				                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					buffer = fs.readFileSync(`./media/video/foss.mp4`)
					client.sendMessage(from, buffer, video,  { mimetype: 'video/mp4', quoted: mek })
					break
					
					case 'teste':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
    if (!isOwner) return reply(nad.ownerb())
				                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					buffer = fs.readFileSync(`./media/sticker/um.webp`),
					client.sendMessage(from, buffer, sticker, { mimetype: 'sticker/webp', quoted: mek })
					break
					
					case 'semoji':
                    
					if (args.length == 0) return reply(`Example: ${prefix + command} 💀`)
                    
					emoji = args[0]
                    
					try {emoji = encodeURI(emoji[0])} catch {emoji = encodeURI(emoji)}
                    
					ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=b170074ac846042f35937286`)
                    
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=&img=` + ini_buffer.result.emoji.whatsapp)
                    
					await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
					
					case 'teste2':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
    if (!isOwner) return reply(nad.ownerb())
				                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					buffer = fs.readFileSync(`./media/video/fos.mp4`)
					client.sendMessage(from, buffer, gif, video,  { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'dompetmenu':
				case 'nsfwmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const dompet = `「 *MENU NSFW* 」
${a}❏ ${prefix}randombokep${a}
${a}❏ ${prefix}pussy${a}
${a}❏ ${prefix}nekonime${a}
${a}❏ ${prefix}baka${a}
${a}❏ ${prefix}blowjob${a}
${a}❏ ${prefix}lewd${a}
${a}❏ ${prefix}hentai${a}
${a}❏ ${prefix}waifu${a}
${a}❏ ${prefix}eroyuri${a}
${a}❏ ${prefix}hug${a}
${a}❏ ${prefix}hug2${a}
${a}❏ ${prefix}chiisaihentai${a}
${a}❏ ${prefix}trap${a}
${a}❏ ${prefix}blowjob${a}
${a}❏ ${prefix}yaoi${a}
${a}❏ ${prefix}ecchi${a}
${a}❏ ${prefix}hentai${a}
${a}❏ ${prefix}ahegao${a}
${a}❏ ${prefix}hololewd${a}
${a}❏ ${prefix}sideoppai${a}
${a}❏ ${prefix}animefeets${a}
${a}❏ ${prefix}animebooty${a}
${a}❏ ${prefix}animethighss${a}
${a}❏ ${prefix}hentaiparadise${a}
${a}❏ ${prefix}animearmpits${a}
${a}❏ ${prefix}hentaifemdom${a}
${a}❏ ${prefix}lewdanimegirls${a}
${a}❏ ${prefix}biganimetiddies${a}
${a}❏ ${prefix}animebellybutton${a}
${a}❏ ${prefix}hentai4everyone${a}
${a}❏ ${prefix}ero${a}
${a}❏ ${prefix}cum${a}
${a}❏ ${prefix}feet${a}
${a}❏ ${prefix}yuri${a}
${a}❏ ${prefix}trap${a}
${a}❏ ${prefix}lewd${a}
${a}❏ ${prefix}feed${a}
${a}❏ ${prefix}eron${a}
${a}❏ ${prefix}solo${a}
${a}❏ ${prefix}gasm${a}
${a}❏ ${prefix}poke${a}
${a}❏ ${prefix}anal${a}
${a}❏ ${prefix}holo${a}
${a}❏ ${prefix}tits${a}
${a}❏ ${prefix}kuni${a}
${a}❏ ${prefix}kiss${a}
${a}❏ ${prefix}erok${a}
${a}❏ ${prefix}smug${a}
${a}❏ ${prefix}baka${a}
${a}❏ ${prefix}solog${a}
${a}❏ ${prefix}feetg${a}
${a}❏ ${prefix}lewdk${a}
${a}❏ ${prefix}waifu${a}
${a}❏ ${prefix}pussy${a}
${a}❏ ${prefix}femdom${a}
${a}❏ ${prefix}cuddle${a}
${a}❏ ${prefix}hentai${a}
${a}❏ ${prefix}eroyuri${a}
${a}❏ ${prefix}cum_jpg${a}
${a}❏ ${prefix}blowjob${a}
${a}❏ ${prefix}erofeet${a}
${a}❏ ${prefix}holoero${a}
${a}❏ ${prefix}classic${a}
${a}❏ ${prefix}erokemo${a}
${a}❏ ${prefix}fox_girl${a}
${a}❏ ${prefix}futanari${a}
${a}❏ ${prefix}lewdkemo${a}
${a}❏ ${prefix}wallpaper${a}
${a}❏ ${prefix}pussy_jpg${a}
${a}❏ ${prefix}kemonomimi${a}
${a}❏ ${prefix}nsfw_avatar${a}
${a}❏ ${prefix}nhentai${a}
${a}❏ ${prefix}nhentaisearch${a}
${a}❏ ${prefix}nhentaipdf${a}
${a}❏ ${prefix}nekopoi${a}
${a}❏ ${prefix}nekopoisearch${a}
${a}❏ ${prefix}xhamstersearch${a}
${a}❏ ${prefix}xhamster${a}
${a}❏ ${prefix}xnxxsearch${a}
${a}❏ ${prefix}xnxx${a}

「 *${botName}* 」`
     fakestatus(dompet)
					break

				case 'limit':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					checkLimit(sender)
					break

				case 'transfer':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q.includes('|')) return reply(nad.wrongf())
					const tujuan = q.substring(0, q.indexOf('|') - 1)
					const jumblah = q.substring(q.lastIndexOf('|') + 1)
					if (checkATMuser(sender) < jumblah) return reply(`Você não tem dinheiro suficiente para fazer a transferência`)
					const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
					fee = 0.005 * jumblah
					hasiltf = jumblah - fee
					addKoinUser(tujuantf, hasiltf)
					confirmATM(sender, jumblah)
					addKoinUser(`${ownerNumber}`, fee)
					reply(`*──『✙ FEITO ✙』──\n*\n\nTransferência de dinheiro foi bem sucedida\n➸ a partir de : +${sender.split("@")[0]}\n➸ para : +${tujuan}\n➸ valor da transferência : ${jumblah}\n➸ imposto : ${fee}`)
					break

				case 'atm':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					const kantong = checkATMuser(sender)
					reply(nad.uangkau(pushname, sender, kantong))
					break

				case 'buylimit':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const total = koinPerlimit * payout
					if (checkATMuser(sender) <= total) return reply(`Desculpe, o dinheiro não é suficiente, colete o dinheiro primeiro >_<`)
					if (checkATMuser(sender) >= total) {
						confirmATM(sender, total)
						bayarLimit(sender, payout)
						await reply(`*「 PAGAMENTO FEITO 」*\n\n➸ remetente : Crazyy-_- \n➸ receptor : ${pushname}\n➸ compra nominal : ${payout} \n➸ preço limite : ${koinPerlimit}/limit\n➸ o resto do dinheiro : ${checkATMuser(sender)}\n\nO processo foi bem sucedido com SN\n${createSerial(15)}`)
					}
					break
				case 'toolsmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const tools = `「 *TOOLS MENU* 」
${a}❏ ${prefix}tomp3${a}
${a}❏ ${prefix}tomp4${a}
${a}❏ ${prefix}toptt${a}
${a}❏ ${prefix}toimg${a}
${a}❏ ${prefix}imgtourl${a}
${a}❏ ${prefix}trigered${a}
${a}❏ ${prefix}komenyt${a}
${a}❏ ${prefix}nightcore${a}
${a}❏ ${prefix}slow${a}
${a}❏ ${prefix}tupai${a}
${a}❏ ${prefix}blub${a}
${a}❏ ${prefix}gemuk${a}
${a}❏ ${prefix}ghost${a}
${a}❏ ${prefix}bass${a}
${a}❏ ${prefix}traduzir

「 *${botName}* 」`
					fakestatus(tools)
					break
				case 'tomp3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					client.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('O vídeo aqui')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha, tenta dnv mano:)')
						mhee = fs.readFileSync(ran)
						client.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', quoted: mek })
						fs.unlinkSync(ran)
					})
					break

				case 'toimg':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isQuotedSticker) return reply('A imagem aqui')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, { quoted: mek, caption: 'aqui [(^.^)]' })
						fs.unlinkSync(ran)
					})
					break

                case 'tomp4':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(nad.wait())
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        owgi = await client.downloadAndsavemediamessage(encmedia)
                        data = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", owgi)
                        axios.get(`https://ezgif.com/webp-to-mp4?url=${data.display_url}`)
                            .then(({ data }) => {
                                $ = cheerio.load(data)
                                bodyFormThen = new FormData()
                                file = $('input[name="file"]').attr('value')
                                token = $('input[name="token"]').attr('value')
                                convert = $('input[name="file"]').attr('value')
                                gotdata = {
                                    file: file,
                                    token: token,
                                    convert: convert
                                }
                                bodyFormThen.append('file', gotdata.file)
                                bodyFormThen.append('token', gotdata.token)
                                bodyFormThen.append('convert', gotdata.convert)
                                axios({
                                    method: 'post',
                                    url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                                    data: bodyFormThen,
                                    headers: {
                                        'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                                    }
                                }).then(({ data }) => {
                                    $ = cheerio.load(data)
                                    result = 'https:' + $('div#output > p.outfile > video > source').attr('R4ML4N')
                                    getBuffer(result).then(tog => {
                                        client.sendMessage(from, tog, video, { mimetype: 'video/mp4', quoted: mek })
                                    })
                                })
                            })
                    } else {
                        reply('Responde StickerGif!')
                    }
                    break
                    
				case 'imgtourl':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					costum('[PERA] Paciência mano', text, tescuk, cr)
					var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					var media = await client.downloadAndSaveMediaMessage(encmedia)
					var imgbb = require('imgbb-uploader')
					imgbb('9ba3ffa6160a701a61ebafebca46f4cf', media)
						.then(data => {
							var caps = `「 *IMAGEM PARA URL* 」
➸ ID : ${data.id}
➸ MimeType : ${data.image.mime}
➸ Extension : ${data.image.extension}
➸ URL : ${data.display_url}`
							ibb = fs.readFileSync(media)
							client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
						})
						.catch(err => {
							throw err
						})
					break
					
					case 'traduzir':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `A partir de : ${get_result.from}\n`
                    init_txt += `Para : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Traduzido : ${get_result.translated}\n`
                    init_txt += `Pronúncia : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break

				case 'komenyt':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					gh = body.slice(9)
					usnm = gh.split("&")[0];
					cmn = gh.split("&")[1];
					var imgbb = require('imgbb-uploader')
					try {
						pp = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
						pp = 'https://i.ibb.co/Tv6JR98/baby.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", 'getpp.jpeg')
					buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					client.sendMessage(from, buffer, image, { caption: 'Nih Cok', contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_COMENTÁRIO DO YOUTUBE_*' } } })
					break
					
					case 'nsfwcheck':
					case 'putaria':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr. !')
				reply(nad.wait())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "Não"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Sim"
                        reply(`isso é PUTARIA? ${is_nsfw}\n Pontuação de PUTARIA: ${get_result}`)
                    } else {
                        reply(`Envie fotos com a legenda ${prefix + command} ou marque imagens já enviadas`)
                    }
                    break

				case 'trigered':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						reply(nad.wait())
						owgi = await Manik.downloadAndsavemediamessage(encmedia)
						anu = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", owgi)
						trig = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${trig}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return reply('HM FALHOU')
							nobg = fs.readFileSync(rano)
							client.sendMessage(from, nobg, sticker, { quoted: mek })
							fs.unlinkSync(rano)
						})
					} else {
						reply('Use uma foto')
					}
					break
			    case 'nightcore':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)			    
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Erro!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'slow':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'tupai':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'gemuk':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
				case 'ghost':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						ghs = fs.readFileSync(ran)
					client.sendMessage(from, ghs, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)		   
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						fs.unlinkSync(ran)
					   })
				       break
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('Marca o áudio, tio')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter áudio para ptt')
						topt = fs.readFileSync(ran)
					client.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
						})
						await limitAdd(sender)
					    break
				case 'mutualmenu':
				case 'crushmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const mtal = `「 *CRUSH MENU* 」
${a}❏ ${prefix}crush${a}
${a}❏ ${prefix}amigo${a}

「 *${botName}* 」`
					fakestatus(mtal)
					break
				case 'mutual':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isGroup) return reply('Desculpe, não pode estar no grupo')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Ache um companheiro >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Par encontrado :\n*${prefix}next* — Encontre uma nova correspondência`)
					break
					case 'crush':
if (isBanned) return reply(nad.baned())    
if (!isRegistered) return reply(nad.noregis())
if (isGroup) return  reply( 'Este recurso não pode ser executado em grupos')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Carregando... — Procurando um(a) crush')
				try {
				ppimg = await client.getProfilePicture(`${anug.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
  teks = `‣ *Nick* : ${pushname}
  ‣ *Número* : ${anug.split("@")[0]}
‣ *APi* : wa.me/${anug.split("@")[0]}?text=Oiiee

Clique em APi para iniciar o chat`
  Ciecie = await getBuffer (ppimg)
  client.sendMessage(from, Ciecie, image, {
quoted: mek, caption: teks
  })
                await reply( `Para tentar de novo: \n*${prefix}next* —`)
				await limitAdd(sender)
				break

				case 'next':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isGroup) return reply('Desculpe esse comando não funciona em grupos')
					hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Procurando por alguém...')
try {
ppimg = await client.getProfilePicture(`${hem.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nick* : ${pushname}
  ‣ *Número* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=Oiiii

Clique em APi para iniciar o chat`
  its = await getBuffer (ppimg)
  client.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
                await reply( `Para tentar de novo: \n*${prefix}next* — Encontre um(a) amigo(a) novamente`)
                await limitAdd(sender)
            break
					case 'amigo':
if (isBanned) return reply(nad.baned())    
if (!isRegistered) return reply(nad.noregis())
if (isGroup) return  reply( 'Este recurso não pode ser executado em grupos')
hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Procurando por alguém...')
try {
ppimg = await client.getProfilePicture(`${hem.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nick* : ${pushname}
  ‣ *Número* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=Oii

Clique em APi para iniciar o chat`
  its = await getBuffer (ppimg)
  client.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
                await reply( `Para tentar de novo: \n*${prefix}next* — Encontre um(a) amigo(a) novamente`)
                await limitAdd(sender)
            break
				case 'othermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const other = `「 *OTHER MENU* 」
${a}❏ ${prefix}lacakip${a}
${a}❏ ${prefix}brainly${a}
${a}❏ ${prefix}wiki${a}
${a}❏ ${prefix}kbbi${a}
${a}❏ ${prefix}covid${a}
${a}❏ ${prefix}pinterest${a}
${a}❏ ${prefix}ytsearch${a}
${a}❏ ${prefix}cronograma${a}
${a}❏ ${prefix}spamss${a}

「 *${botName}* 」`
					fakestatus(other)
					break
					case 'spamsms':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (args[0].startsWith('08')) return reply('Use o código de idioma')
					await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${q}&APIKEY=${xteam}`)
					reply('Feito')
                    break
              case 'ytsearch': 
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
				client.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`quer ver o que no yt?`) 
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ytsearch?q=${body.slice(9)}&apikey=OnlyDevCity01`)
				njuk = '=================\n'
				for (let i of anu.results) {
					njuk += `*Canal :* ${i.channel}\n*Título* : ${i.title}\n*Link* : ${i.urlyt}\n*Duração* : ${i.duration}\n*ID* : ${i.id}\n*Views* : ${i.views}\n=================\n`
				}
				fakestatus(njuk)
				break
				case 'gimage':
                if (!isRegistered) return reply( nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (isBanned) return reply('Você foi banido pelo senpaii!!! Por tanto não pode usar os comandos da Grr u.u!!')
				reply(nad.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhumankey}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
				case 'lacakip':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length === 0) return reply(`Exemplo :\n${prefix}lacakip 10.43.180.140`)
					iplu = `${body.slice(9)}`
					data = await fetchJson(`https://videfikri.com/api/iplookup/?ip=${iplu}`, { method: 'get' })
					lacaks = data.result
					lacak = `➸ Ip : ${lacaks.ip}
➸ País : ${lacaks.country}
➸ Código do país : ${lacaks.country_code}
➸ Região : ${lacaks.region}
➸ Nome da região : ${lacaks.region_name}
➸ Cidade : ${lacaks.city}
➸ Latitude : ${lacaks.latitude}
➸ Longitude : ${lacaks.longtitude}
➸ Fuso horário : ${lacaks.timezone}
➸ Isp : ${lacaks.isp}
➸ Org : ${lacaks.org}
➸ nós : ${lacaks.as}`
					client.sendMessage(from, lacak, text, { quoted: mek })
					break

				case 'brainly':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					if (args.length < 1) return reply(`O que você deseja procurar?\nExemplo :\n${prefix}brainly o que é um pênis`)
					await limitAdd(sender)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
						teks = '♡───────────♡\n'
						for (let Y of res.data) {
							teks += `\n*「 BRAINLY 」*\n\n*➸ Pergunta:* ${Y.Pergunta}\n\n*➸ Resposta:* ${Y.Resposta[0].text}\n♡───────────♡\n`
						}
						client.sendMessage(from, teks, text, { quoted: mek, detectLinks: false })
						console.log(res)
					})
					break

				case 'wiki':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`O que você deseja procurar?\nExemplo :\n${prefix}wiki online`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${bby}&apikey=apivinz`)
					reply('[PERA] Pesquisando no momento...')
					wikiped = `「 WIKI PEDIA 」\n Resposta : ${anu.result.result}`
					client.sendMessage(from, wikiped, text, { quoted: mek })
					break

				case 'kbbi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`O que você deseja procurar?\nExemplo :\n${prefix}kbbi humano`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/kbbi/?query=${bby}`)
					reply('[PERA] Pesquisando no momento...')
					kabebei = `「 *KBBI* 」\nResposta : ${anu.result.hasil}`
					client.sendMessage(from, kabebei, text, { quoted: mek })
					break
					
				case 'covid':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
					cvd = `「 *COVID INFO* 」

País : ${anu.result.country}
Positivo : ${anu.result.positif}
Curados : ${anu.result.sembuh}
Falecidos : ${anu.result.meninggal}`
					client.sendMessage(from, cvd, text, { quoted: mek })
					break
					
				case 'pinterest':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					client.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, { method: 'get' })
					reply(nad.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*` })
					break
					case 'jadwalsholat':
					case 'cronograma':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Sua área é?\nExemplo :\n${prefix}cronograma São Paulo`)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${q}`)
					jsholat `${anu.data.string}`
					client.sendMessage(from, jsholat, text, {quoted: mek})
					break

				case 'storagemenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					const storage = `「 *STORAGE* 」
${a}❏ ${prefix}addstiker${a}
${a}❏ ${prefix}getsticker${a}
${a}❏ ${prefix}liststicker${a}
${a}❏ ${prefix}addvideo${a}
${a}❏ ${prefix}getvideo${a}
${a}❏ ${prefix}listvideo${a}
${a}❏ ${prefix}addvn${a}
${a}❏ ${prefix}getvn${a}
${a}❏ ${prefix}listvn${a}
${a}❏ ${prefix}addimage${a}
${a}❏ ${prefix}getimage${a}
${a}❏ ${prefix}listimage${a}
${a}❏ ${prefix}iri${a}
${a}❏ ${prefix}pale${a}
${a}❏ ${prefix}pota${a}
${a}❏ ${prefix}welot${a}
${a}❏ ${prefix}alay${a}
${a}❏ ${prefix}bernyanyi${a}
${a}❏ ${prefix}bwa${a}
${a}❏ ${prefix}ganteng${a}
${a}❏ ${prefix}gatal${a}
${a}❏ ${prefix}ladida${a}
${a}❏ ${prefix}rusher${a}
${a}❏ ${prefix}boong${a}
${a}❏ ${prefix}tengteng${a}
${a}❏ ${prefix}sound1${a}
${a}❏ ${prefix}sound2${a}
${a}❏ ${prefix}sound3${a}
${a}❏ ${prefix}sound4${a}
${a}❏ ${prefix}sound5${a}
${a}❏ ${prefix}sound6${a}
${a}❏ ${prefix}sound7${a}

「 *${botName}* 」`
					fakestatus(storage)
					break
				case 'addstiker':
				case 'addsticker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isQuotedSticker) return reply('Seu sticker-_-')
					stikmek = body.slice(11)
					if (!stikmek) return reply('Agora nomeie o sticker!')
					adds = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mek = await client.downloadMediaMessage(adds)
					setimker.push(`${stikmek}`)
					fs.writeFileSync(`./media/sticker/${stikmek}.webp`, mek)
					fs.writeFileSync(`./media/stik.json`, JSON.stringify(setimker))
					await reply('Pronto, sticker adicionado ao meu banco de dados✧◝(⁰▿⁰)◜✧')
					break

				case 'getstiker':
				case 'getsticker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Qual é o nome do sticker?\nSe você não sabe, digite :\n${prefix}liststicker`)
					stikeram = body.slice(11)
					hasilya = fs.readFileSync(`./media/sticker/${stikeram}.webp`)
					client.sendMessage(from, hasilya, sticker, { quoted: mek })
					break

				case 'liststiker':
				case 'liststicker':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lis = '╭──「 *LISTA DE STICKER* 」\n'
					for (let cieee of setimker) {
						lis += `◯ ${cieee}\n`
					}
					lis += `\n╰─────「 *${setimker.length}* 」`
					client.sendMessage(from, lis.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setimker } })
					break

				case 'addvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isQuotedVideo) return reply('Marca o video grr')
					adv = body.slice(10)
					if (!adv) return reply('Agora nomeie o video')
					deo = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					dvi = await client.downloadMediaMessage(deo)
					vidioya.push(`${adv}`)
					fs.writeFileSync(`./media/video/${adv}.mp4`, dvi)
					fs.writeFileSync(`./media/video.json`, JSON.stringify(vidioya))
					client.sendMessage(from, `Pronto, video adicionado ao meu banco de dados✧◝(⁰▿⁰)◜✧`, MessageType.text, { quoted: mek })
					break

				case 'getvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Qual o nome do video?\nSe você não sabe, digite :\n${prefix}listvideo`)
					getvi = body.slice(10)
					buffer = fs.readFileSync(`./media/video/${getvi}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break

				case 'listvideo':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					list = '╭──「 *LISTA DE VIDEOS* 」\n'
					for (let nihh of vidioya) {
						list += `◯ ${nihh}\n`
					}
					list += `\n╰─────「 *${vidioya.length}* 」`
					client.sendMessage(from, list.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vidioya } })
					break

				case 'addvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isQuotedAudio) return reply('Marca o audio')
					advn = body.slice(7)
					if (!advn) return reply('Agora nomeie o áudio')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audioya.push(`${advn}`)
					fs.writeFileSync(`./media/audio/${advn}.mp3`, delb)
					fs.writeFileSync('./media/audio.json', JSON.stringify(audioya))
					client.sendMessage(from, `Pronto, áudio adicionado ao meu banco de dados✧◝(⁰▿⁰)◜✧`, MessageType.text, { quoted: mek })
					break

				case 'getvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Qual o nome do áudio?\nSe você não sabe, digite :\n${prefix}listvn`)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./media/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break

				case 'listvn':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lisv = '╭──「 *LISTA DE ÁUDIOS* 」\n'
					for (let awokwkwk of audioya) {
						lisv += `◯ ${awokwkwk}\n`
					}
					lisv += `\n╰─────「 *${audioya.length}* 」`
					client.sendMessage(from, lisv.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audioya } })
					break

				case 'addimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (!isQuotedImage) return reply('Marque a imagen')
					sepimg = body.slice(10)
					if (!sepimg) return reply('Agora nomeie a imagem')
					svimeg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					imej = await client.downloadMediaMessage(svimeg)
					imegya.push(`${sepimg}`)
					fs.writeFileSync(`./media/image/${sepimg}.jpeg`, imej)
					fs.writeFileSync('./media/image.json', JSON.stringify(imegya))
					client.sendMessage(from, `Pronto, imagem adicionado ao meu banco de dados✧◝(⁰▿⁰)◜✧`, MessageType.text, { quoted: mek })
					break

				case 'getimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Qual o nome da imagem?\nSe você não sabe, digite :\n${prefix}listimage`)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./media/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek })
					break

				case 'listimage':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					lisi = '╭──「 *LISTA DE IMAGENS* 」\n'
					for (let menghilih of imegya) {
						lisi += `◯ ${menghilih}\n`
					}
					lisi += `\n╰─────「 *${imegya.length}* 」`
					client.sendMessage(from, lisi.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imegya } })
					break
				case 'iri':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					irim = fs.readFileSync('./media/dj/iri.mp3');
					client.sendMessage(from, irim, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'pale':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					pal = fs.readFileSync('./media/dj/pale.mp3');
					client.sendMessage(from, pal, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'pota':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					pot = fs.readFileSync('./media/dj/pota.mp3');
					client.sendMessage(from, pot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'welot':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					wel = fs.readFileSync('./media/dj/welot.mp3');
					client.sendMessage(from, wel, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'alay':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					ala = fs.readFileSync('./media/dj/alay.mp3');
					client.sendMessage(from, ala, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'bernyanyi':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					ber = fs.readFileSync('./media/dj/bernyanyi.mp3');
					client.sendMessage(from, ber, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'bwa':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					bw = fs.readFileSync('./media/dj/bwa.mp3');
					client.sendMessage(from, bw, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'ganteng':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					gan = fs.readFileSync('./media/dj/ganteng.mp3');
					client.sendMessage(from, gan, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'gatal':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					ga = fs.readFileSync('./media/dj/gatal.mp3');
					client.sendMessage(from, ga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'ladida':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					lada = fs.readFileSync('./media/dj/ladadida.mp3');
					client.sendMessage(from, lada, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'rusher':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					rus = fs.readFileSync('./media/dj/rusher.mp3');
					client.sendMessage(from, rus, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'boong':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					boo = fs.readFileSync('./media/dj/tb.mp3');
					client.sendMessage(from, boo, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'tengteng':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					teng = fs.readFileSync('./media/dj/tengteng.mp3');
					client.sendMessage(from, teng, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound1':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					satu = fs.readFileSync('./media/music/sound1.mp3');
					client.sendMessage(from, satu, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound2':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					dua = fs.readFileSync('./media/music/sound2.mp3');
					client.sendMessage(from, dua, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound3':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					tiga = fs.readFileSync('./media/music/sound3.mp3');
					client.sendMessage(from, tiga, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound4':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					empat = fs.readFileSync('./media/music/sound4.mp3');
					client.sendMessage(from, empat, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound5':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					lima = fs.readFileSync('./media/music/sound5.mp3');
					client.sendMessage(from, lima, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound6':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					enam = fs.readFileSync('./media/music/sound6.mp3');
					client.sendMessage(from, enam, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break

				case 'sound7':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
					await limitAdd(sender)
					tujuh = fs.readFileSync('./media/music/sound7.mp3');
					client.sendMessage(from, tujuh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					break
				case 'ownermenu':
					const bosnya = `「 *MENU DO SENPAII* 」
${a}❏ ${prefix}addprem${a}
${a}❏ ${prefix}dellprem${a}
${a}❏ ${prefix}ban${a}
${a}❏ ${prefix}unban${a}
${a}❏ ${prefix}addbadword${a}
${a}❏ ${prefix}delbadword${a}
${a}❏ ${prefix}badwordlist${a}
${a}❏ ${prefix}bc${a}
${a}❏ ${prefix}setreply${a}
${a}❏ ${prefix}setprefix${a}
${a}❏ ${prefix}setbio${a}
${a}❏ ${prefix}setppbot${a}
${a}❏ ${prefix}setthumb${a}
${a}❏ ${prefix}clearall${a}
${a}❏ ${prefix}resetlimit${a}
${a}❏ ${prefix}event${a}
${a}❏ ${prefix}term${a}
${a}❏ ${prefix}return${a}
${a}❏ ${prefix}readall${a}

*ABOUT* 
${a}❏ ${prefix}runtime${a}
${a}❏ ${prefix}creator${a}
${a}❏ ${prefix}donasi${a}
${a}❏ ${prefix}ikmek${a}
${a}❏ ${prefix}ping${a}
${a}❏ ${prefix}info${a}
${a}❏ cekprefix${a}

「 *${botName}* 」`
					fakestatus(bosnya)
					break				
                case 'setthumb':
                if (!isOwner) return reply(nad.ownerb())
                    if (!isQuotedImage) return reply('A imagem de resposta está bloqueada!')
                    const messimagethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const downiamgethumb = await client.downloadMediaMessage(messimagethumb)
                    fs.unlinkSync(`./src/image/thumbnail.jpeg`)
                    await sleep(2000)
                    fs.writeFileSync(`./src/image/thumbnail.jpeg`, downiamgethumb)
                    reply('Feito')
                    break
				case 'setppbot':
				client.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return reply(nad.ownerb())
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
                 case 'readall':
					if (!isOwner) return reply(nad.ownerb())
					var chats = await client.chats.all()
                    chats.map( async ({ jid }) => {
                          await client.chatRead(jid)
                    })
					rdl = `${a}Berhasil membaca ${chats.length} Chat !${a}`
					await client.sendMessage(from, rdl, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
				case 'addprem':
					if (!isOwner) return reply(nad.ownerb())
					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					premium.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`ADICIONANDO AOS PREMIUMS COM SUCESSO AFF`)
					break

				case 'dellprem':
					if (!isOwner) return reply(nad.ownerb())
					delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					delp = ban.indexOf(delprem)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`O USUÁRIO NÃO É MAIS PREMIUM`)
					break
					
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname, prefix))
				pemlist = '╭──「 *USER PREMIUM* 」\n'
				for (let premm of premium) {
					pemlist += `> @${premm.split('@')[0]}\n`
					}
					pemlist += `Total : ${premium.length}`
				client.sendMessage(from, pemlist.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
				break
				
				case 'ban':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`O número ${bnnd} foi banido!`)
					break

				case 'unban':
					if (!isOwner) return reply(nad.ownerb())
					ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`O número ${ya} foi perdoado pelo senpaii!`)
					break
                   case 'addbadword':
					if (!isOwner) return reply(nad.ownerb())
                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addbadword [palavrão]. Exemplo ${prefix}addbadword idiota`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Sucesso em adicionar palavrões!')
                    break
                case 'delbadword':
					if (!isOwner) return reply(nad.ownerb())
                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addbadword [Palavrão]. Exemplo ${prefix}addbadword idiota`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Sucesso ao remover PALAVRÃO')
                    break 
                case 'listbadword':
                case 'badwordlist':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
                    let lbw = `Esta é uma lista de PALAVRÕES\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➢ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
				case 'bc':
					client.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, { caption: `*「 ${botName} AVISO 」*\n\n${body.slice(4)}` })
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `* ╔╦══• •✠•❀${botName} AVISO ❀•✠ • •══╦╗*\n\n${body.slice(4)}`)
						}
						reply('*「 FEITO, SENPAII :3 」*')
					}
					break

				case 'setreply':
					if (!isOwner) return reply(nad.ownerb())
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					cr = body.slice(10)
					fakestatus(`A resposta foi alterada com sucesso para : ${cr}`)
					await limitAdd(sender)
					break					
					
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(nad.ownerb())
					prefix = args[0]
					fakestatus(`*──『✙ FEITO ✙』──\n* Prefixo é ➸ : ${prefix}`)
					break

				case 'setbio':
					if (!isOwner) return reply(nad.ownerb())
					iyek = body.slice(8)
					client.setStatus(`${iyek}`)
					fakestatus(`A minha Bio foi atualizada com sucesso para :\n*[ ${iyek} ]*`)
					break
					
				case 'clearall':
					if (!isOwner) return reply(nad.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					fakestatus(nad.clears())
					break

				case 'resetlimit':
					if (!isOwner) return reply(nad.ownerb())
					var ngonsol = []
					rest = _limit.indexOf([])
					_limit.splice(rest)
					fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
					fakestatus(`LIMITE FUNCIONAU`)
					break

				case 'event':
					if (isBanned) return reply(nad.baned())
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*RECURSOS DO EVENTO JÁ ATIVO*')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*──『✙ FEITO ✙』──\nATIVEI OS EVENTOS EM GRUPO*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*──『✙ FEITO ✙』──\nEVENTOS DESLIGADOS EM GRUPO*')
					} else {
						reply('Selecione 1/0')
					}
					break

				case 'term':
					if (!isOwner) return reply(nad.ownerB())
					const cmd = body.slice(6)
					var itsme = `0@s.whatsapp.net`
					var split = `EXECUTOR`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(cmd, (err, stdout) => {
						if (err) return client.sendMessage(from, `root@Rammek:~ ${err}`, text, { quoted: mek })
						if (stdout) {
							client.sendMessage(from, stdout, text, term)
						}
					})
					break

				case 'return':
					return client.sendMessage(from, JSON.stringify(eval(args.join(''))), text, { quoted: mek })
					break
				default:
					if (budy == '@verify') {
						if (isBanned) return reply(nad.baned())
						if (isRegistered) return reply(nad.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFICAÇÃO CONCLUÍDA UWU* 」
${a}➸ Nome : ${pushname}${a}
${a}➸ Número : wa.me/${sender.split("@")[0]}${a}
${a}➸ Hora(onde eu moro) : ${time}${a}
${a}➸ SN/RG : ${serialUser}${a}
${a}➸ Total de Usuários: ${_registered.length}${a}
╰─────「 *${botName}* 」`
							let peripi = await getBuffer(ppadd)
							client.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `╭──「 *VERIFICAÇÃO CONCLUÍDA UWU* 」
${a}➸ Nome : ${pushname}${a}
${a}➸ Número : wa.me/${sender.split("@")[0]}${a}
${a}➸ Hora : ${time}${a}
${a}➸ SN/RG : ${serialUser}${a}
${a}➸ Total de Usuários: ${_registered.length}${a}
╰─────「 *${botName}* 」`
							let peripi = await getBuffer(ppadd)
							client.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			}
                  if (budy.includes(`@558282132376`)) {
       	     var value = (`Hey\n Essa é a marcação do senpaii?( ╹▽╹ ), eu gosto dele :3`)
                var group = await client.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                client.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
			if (budy == 'cekprefix') {
				fakestatus(`*${botName} tá usando o prefixo :「 ${prefix} 」*`)
			}
			if (budy == 'p') {
				reply(`au`)
			}
				if (budy == 'P') {
				reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)
			}
			if (budy == 'bot') {
				reply(`Sim, eu posso te ajudar?(人 •͈ᴗ•͈) Se tipo, estiver confuso, use ${prefix}menu Tá?`)
			}
			if (budy == 'Bot') {
				reply(`Sim, eu posso te ajudar?(人 •͈ᴗ•͈) Se tipo, estiver confuso, use ${prefix}menu Tá?`)
			}
			if (budy == 'assalamualaikum') {
				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)
			}
			if (budy == 'Assalamualaikum') {
				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)
			}
			if (budy == 'Terimakasih') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'terimakasih') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'makasih') {
			}
			if (budy == 'Thanks') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'thanks') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'Grr') {
				reply(`Grrr sou eu >:3`)
			}
			if (budy == 'grr') {
				reply(`Grrr sou eu >:3`)
			}
			if (budy == 'Vai tomar no cu bot') {
				reply(`Vai você lixo`)
			}
			if (budy == 'Vai se fuder bot') {
				reply(`Vai você lixo`)
			}
			if (budy == 'Cadê a bot?') {
				reply(`Tô aquiii`)
			}
		if (budy == 'Bot on?') {
				reply(`Mãe tá On!!!, mande !menu (ou !comandos) pra ver os comandos ;)`)
			}
			if (budy == 'Te amo grr') {
			if (!isOwner) return reply(nad.senpai())
				reply(`Tambem te amo♡`)
			}

			if (budy == 'Grrzinha') {
			if (!isOwner) return reply(nad.senpai())
				reply(`Oiiii :3`)
			}
			if (budy == 'Bot me chupa') {
			if (!isOwner) return reply(nad.senpai())
				reply(`**Gluub Gluub >o<**`)
			}
			if (budy == 'Me chupa grr') {
			if (!isOwner) return reply(nad.senpai())
				reply(`**Gluub Gluub >o<**`)
			}
			if (budy == 'Grr me chupa') {
		 if (!isOwner) return reply(nad.senpai())
buffer = fs.readFileSync(`./media/video/fos.mp4`)
					client.sendMessage(from, buffer, video,  { mimetype: 'video/mp4', quoted: mek })
					}
			if (budy == 'Grrr me chupa') {
		 if (!isOwner) return reply(nad.senpai())
buffer = fs.readFileSync(`./media/video/fas.mp4`)
					client.sendMessage(from, buffer, video,  { mimetype: 'video/mp4', quoted: mek })
					}
			if (budy == 'grr me chupa') {
		 if (!isOwner) return reply(nad.senpai())
buffer = fs.readFileSync(`./media/video/fes.mp4`)
					client.sendMessage(from, buffer, video,  { mimetype: 'video/mp4', quoted: mek })
					}
			if (budy == 'grrr me chupa') {
		 if (!isOwner) return reply(nad.senpai())
buffer = fs.readFileSync(`./media/video/fis.mp4`)
					client.sendMessage(from, buffer, video,  { mimetype: 'video/mp4', quoted: mek })
			}
			if (budy == 'Cadê minha gostosa') {
			if (!isOwner) return reply(nad.senpai())
				reply(`Tô bem aqui docinho`)
			}
			if (budy == 'Coisa cmg') {
				reply(`Não, só com o senpaii`)
			}
			if (budy == 'Coisa comigo') {
				reply(`Não, só com o senpaii`)
			}
			if (budy == 'Oi') {
				reply(`Oii`)
			}
			if (budy == 'Oii') {
				reply(`Oii`)
			}
			if (budy == 'Oiii') {
				reply(`Oii`)
			}
			if (budy == 'Oiiii') {
				reply(`Oii`)
			}
			if (budy == 'Tudo bem?') {
				reply(`Tudo, e com você?`)
			}
			if (budy == 'Td bem?') {
				reply(`Tudo, e com você?`)
			}
			if (budy == 'Tudo bom?') {
				reply(`Tudo, e com você?`)
			}
			if (budy == 'Td bom?') {
				reply(`Tudo, e com você?`)
			}
			if (budy == 'To bem') {
				reply(`Que bom (. ❛ ᴗ ❛.)`)
			}
			if (budy == 'Tô bem') {
				reply(`Que bom (. ❛ ᴗ ❛.)`)
			}
			if (budy == 'Estou bem') {
				reply(`Que bom (. ❛ ᴗ ❛.)`)
			}
			if (budy == 'Né grr') {
			if (!isOwner) return reply(nad.senpai())
				reply(`Uhuum`)
			}
			if (budy == 'Grr sai do grupo') {
			if (!isOwner) return reply(nad.senpai())
					setTimeout(() => {
						client.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						client.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(nad.noregis())
						if (isBanned) return reply(nad.baned())
						fakestatus('Xaau :(')
					}, 0)
			}
			if (budy == 'Sai do grupo grr') {
			if (!isOwner) return reply(nad.senpai())
					setTimeout(() => {
						client.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						client.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(nad.noregis())
						if (isBanned) return reply(nad.baned())
						fakestatus('Xaau :(')
					}, 0)
			}
			if (budy == 'Pede desculpa') {
			if (!isOwner) return reply(nad.senpai())
				reply(`Desculpa crazy-sama(｡•́︿•̀｡)`)
			}
			if (budy == 'Coisa comigo') {
				reply(`Não, só com o senpaii`)
			}
			if (budy == 'Vem coisar comigo') {
				reply(`Sai, fora, só quero se for o senpaii`)
			}
			if (budy == 'Obrigado') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'Obrigada') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'obrigado') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'obrigada') {
				reply(`De nada, tenha um bom dia(✿^‿^)`)
			}
			if (budy == 'vlw') {
				reply(`Tmjj(✿^‿^)`)
			}
			if (budy == 'Boa garota') {
			if (!isOwner) return reply(nad.senpai())
				reply(`^w^`)
			}
			if (budy == 'Boa menina') {
			if (!isOwner) return reply(nad.senpai())
				reply(`^w^`)
			}
			if (budy == 'Vlw') {
				reply(`Tmjj(✿^‿^)`)
			}
			if (budy == 'Bot lixo') {
				reply(`Lixo é você, seu pedaço de merda`)
			}
			if (budy == 'Tq') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			}
			if (budy == 'tq') {
				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
			
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                          
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
