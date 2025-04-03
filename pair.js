const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Mvelase_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function TECHSYNC_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Mvelase_Tech = Mvelase_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Mvelase_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Mvelase_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Mvelase_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Mvelase_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Mvelase_Tech.sendMessage(Pair_Code_By_Mvelase_Tech.user.id, { text: '' + b64data });

               let TECHSYNC_MD_TEXT = `
*𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑 𝐁𝐘 𝐌𝐕𝐄𝐋𝐀𝐒𝐄 𝐓𝐄𝐂𝐇 𝐇𝐔𝐁.*
_______________________________


*𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐂𝐇𝐎𝐎𝐒𝐈𝐍𝐆 𝐓𝐄𝐂𝐇𝐒𝐘𝐍𝐂-𝐌𝐃*
 
🌟 *𝐎𝐖𝐍𝐄𝐑 : 𝐊𝐇𝐔𝐋𝐄𝐊𝐀𝐍𝐈 𝐌𝐕𝐄𝐋𝐀𝐒𝐄*

🌟 *𝐑𝐄𝐏𝐎 : 𝐃𝐌 𝟐𝟔𝟑𝟕𝟏𝟏𝟑𝟑𝟕𝟎𝟗𝟒*

🌟 *𝐃𝐄𝐏𝐋𝐎𝐘𝐀𝐁𝐋𝐄 𝐎𝐍 : 𝐇𝐄𝐑𝐎𝐊𝐔 & 𝐇𝐎𝐒𝐓𝐓𝐀𝐋𝐊𝐃𝐑𝐎𝐕𝐄*

*𝐃𝐎𝐍𝐓 𝐒𝐇𝐀𝐑𝐄 𝐘𝐎𝐔𝐑 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐖𝐈𝐓𝐇 𝐀𝐍𝐘𝐎𝐍𝐄*

________________________________
`
 await Pair_Code_By_Mvelase_Tech.sendMessage(Pair_Code_By_Mvelase_Tech.user.id,{text:TECHSYNC_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Mvelase_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    TECHSYNC_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await TECHSYNC_MD_PAIR_CODE()
});
module.exports = router
