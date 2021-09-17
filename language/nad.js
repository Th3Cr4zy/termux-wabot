exports.wait = () => {
	return`*「❗」PERAI GARAI*`
}

exports.succes = () => {
	return`*──『✙ FEITO ✙』──*`
}

exports.lvlon = () => {
	return`*「❗」NIVEIS ATIVADOS*`
}

exports.suicid = () => {
 return`* Seu pedido é uma ordem :)`
 }

exports.baninjusto = (user) => { return `Removi o usuário @${user.replace('@c.us', '')} por quebrar a lei, ele não é mais bem vindo aqui, caso eu tenha feito um erro peço que um administrador verifique a situação.\nRegra = ` }

exports.nopanic = () => { return `"Hasta la vista, baby!"\nEsses malditos travadores de zap-zap! Uma pena que eu não vou deixar, ademiros...tragam minha web-metralhadora, é hora do extermínio dos humanos 😠!` }

exports.recTrava = (user) => { return `Posso ter recebido uma trava de texto pelas mãos do wa.me/${user.replace('@c.us', '')} e então o bloqueei, peço que verifique.` }

exports.idgrupo = (groupId) => { return `A id daqui é ${groupId}.` }

exports.kldica1 = () => { return `Isso precisa de apenas <on> ou <off>.` }



exports.kldica2 = () => { return `Isso precisa ser definido em ativado <on> ou desativado <off> e em seguida deve contar o número de telefone sem + or -.` }

exports.soademiro = () => { return `Você não é um dos ademiros, será que você se tornará digno de usar isso?` }

exports.onoff = () => { return `Especifique entre <on> ou <off>, se quiser algo mais detalhado use o comando com -help.` }

exports.jadisabled = () => { return `Isso já não está ativo, não é necessário que você desative novamente.` }



exports.jaenabled = () => { return `A função já está ativada e não é necessário ativá-la novamente.` }

exports.disabled = () => { return `Desativei a função, se você usou muitas vezes o ativar pode ser conveniente desativar na mesma quantidade, para saber se está desativado digite ${prefix}groupinfo.` }

exports.enabled = () => { return `A função foi ativada, mas cuidado, se você usar muitas vezes, precisará desligar na mesma quantidade e.e` }

exports.lvloff = () => {
	return`*「❗」NIVEIS DESATIVADOS*`
}

exports.lvlnul = () => {
	return`*「❗」SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*「❗」OS NÍVEIS DO GRUPO AINDA NÃO ESTÃO ATIVADO*`
}

exports.noregis = () => {
	return`*「❗」AINDA NÃO VERIFICADO「❗」*\n\nMande : @verify`
}

exports.baned = () => {
	return`*「❗」Desculpe, você foi banido pelo senpaii! Por tanto não pode usar os comandos da Grr.*`
}

exports.nsfwoff = () => {
	return`*「❗」Desculpe, o nsfw está off.*`
}

exports.senpai = () => {
	return`*Quem é você? saí fora*`
}

exports.premium = (prefix) => {
	return`Nananinanão, somente meu senpaii pode usar esse comando, baka!>_<`
}

exports.rediregis = () => {
	return`*Você já verificou -_-*`
}

exports.stikga = () => {
	return`*「 FRACASSO 」Tente responder novamente*`
}

exports.linkga = () => {
	return`*「❗」LINK INVÁLIDO, BURRO*`
}

exports.groupo = () => {
	return`*「❗」SÓ EM GRUPOS, BAKA*`
}

exports.ownerb = () => {
	return`*「❗」SOMENTE MEU SENPAI  PODE USAR ESSE COMANDO, baka >.<*`
}

exports.ownerg = () => {
	return`*「❗」SÓ O DONO DO GRUPO PODE USAR ISSO*`
}

exports.admin = () => {
	return`*「❗」ALA O MEMBRO COMUM QUERENDO USAR COMANDO DE ADMINKKKKKKKKKKKKKKKKK🤡🤡🤡🤡*`
}

exports.badmin = () => {
	return`*「❗」EU TENHO QUE SER ADM PRIMEIRO NÉ PORRA*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*「🗿」Cadê o texto, porra?*`
}

exports.clears = () => {
	return`*Sucesso meu chefe*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 NICE 」*
\`\`\`➸ *Nome* : ${pushname}\`\`\`
\`\`\`➸ *Número* : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ *Xp* : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Desculpe ${pushname} O seu limite de hoje acabou*
*O limite é zerado a cada 24:00*

\`\`\`Upgrade Premium Limit-Free\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Se estiver interessado, entre em contato com o proprietário\`\`\`
\`\`\`Enviar pedidos : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
o resto do seu limite : ${isPrem ? '9999' : `${limitCounts}`}

A atualização premium do meu chefe, por isso é grátis usar bots`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NOME : ${pushname}
┃│➸ NÚMERO : ${sender.split("@")[0]}
┃│➸ DINHEIRO : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 0812-1444-1027
Gopay : 0855-5924-0360
Dana : 0855-5924-0360
Saweria : https://saweria.co/ramlangans

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *PROPAGANDA ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *ALUGAR LISTA E CRIAR UM BOT :*
◯ *ALUGUEL: 25K / GRUPO (BULAN)*
◯ *BUAT: 100K (BISA JADI OWNER)*
◯ *PAGAMENTO PODE ATRAVÉS :*
◯ *OVO, GOPAY, DANA, PULSA+10K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI* (nada disso é relevante)
──────────────────────────────
◯ *EM CASO DE PUBLICIDADE DE INTERESSE*
◯ *CHUPE MEU PAU*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}