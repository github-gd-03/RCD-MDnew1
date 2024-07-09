//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBYR3VxaFQvcFh1Z0FaNjFsdnhCWlAwd3FEN3FPK3NmWkZoRHpiQ2RrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9oUmRRcmM4dk9hQjZWYUpvMElFdWlqZWE5OERZNWNUT21YUUo3U2Z6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QWM5VlNUdFRmd1Jpa3ZkMHV2U2s0V1ZYcHlQcGNiNHozTHNGT05xVFVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYWZmeUxhN2MyUDl1YlRPYWc5OE1rNGhsNTZWaXZnR0NOQmlvbDk0dlZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPNlJKWXAySlJxa0JlSWhSK3BFalZnK1Z4bHMyWUVsY2s5VlQyeGd5RXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iiszb0ZNY2FvMUFybHIyUmkvdVg5U3hrTU83RGNpMUdxNHgwZWVvVkxjSEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFYQXZneE1nOFpCTlpIbk5jaGY4dTdEQXFNeDUyZ2c5b3RJclgycnlHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFk4YTlncFFqYVBTRFhkRXNURm0xR3Q0WU0wMkhIUk9FdEVEOHlVRHNpYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitrbEJEejk5Z21yZTlFTEJsb242OE5TWnZ5NlhVT3p2ejM5YlhYN0RaOWk1ZWF5eklkYit1NmdkTDdVUnY1S0lhYUZobWdBRFMzbjlRa2pDYkNzRENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJ1dVlYL1ZCN0hvM1krS1NtNVRMTFZQYzFZSFFxOVo2Zll3VElpY1R2c1NNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNjkxMzYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFEQTczNTRCNUIxODk4NjY4NjVDQkU4OUY5M0I4NjhGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA1MTEwMDF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAzNjkxMzYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcwREE3OUNGMEVBRTAzMEQyQzY2NjYwOTczQTFGNEZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA1MTEwMDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldCellHWTlzUUIyOHlidEdhSWlXREEiLCJwaG9uZUlkIjoiNmJjN2RmMTItZmIxNS00MjliLTgxZDUtMGZjZmQ3MjZjNTNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIb3BBa1g1VjZCM0VFUlQ2RkZYc1lZaFkwZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrZllGK1pEYjVuUW9MOHlnQytSVWQrOG5KLzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUExHN0RBSDYiLCJtZSI6eyJpZCI6Ijk0NzAzNjkxMzYxOjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5vIE5hbWXwn5G5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT3Rwbm9RaTlTenRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEYlNPZ0RJQzI3Vjd1cE1ZSW5WVm9NbjJTQ0Z3b3h5bHhGK1dzZENqdlR3PSIsImFjY291bnRTaWduYXR1cmUiOiJDSmFjNlZTRUJ1cEI1bnRBYjIrZm5GdENSelhvU1ZNQ0RQVkhHR2h0eWNQelFEMHRtNkM3eFdUaEpycHhFZkFaS2M2VHlObzVlN3UwVThVR0xKUklDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUDVJYlFNUlRxSHVhS2h1T3NoazVDWHZGeVU0a0t2L1NkUFNmOEdYVmRmQWtMWW1GUUF1eHJKenpYV3JsdWIyb0wrbmRUVGFRRmh1VHlkOFExclFCQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMzY5MTM2MToyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRMjBqb0F5QXR1MWU3cVRHQ0oxVmFESjlrZ2hjS01jcGNSZmxySFFvNzA4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTEwOTk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgyWCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
