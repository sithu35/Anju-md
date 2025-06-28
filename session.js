//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhQUDlrTWVNN01WVnlvdTdrMitObENjN08vYWFWQm1QeURjRU0wTVgxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1VvcGc4MnppcHdtVm5WZFRwbnpKdEl0TW55SE5tQllpeVJxSUJyNHFuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTTVNME1FQi9zVWUvMkJIS3pSdlBOdUlrajJPdGF2YUFEYXgzdHg3REVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQVVWWDY1aW9BOGlxVG5UaDVwUXVqSmlaUVc2UTNQNElXY0xwVk83QVNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJWXdiWm51eWFuTGVEMlVSQlhlVFVPUUVEc0tNeFdvY1NHVUpDaU1WMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdGcURWZjVKQnpQOTcrNW5YQjMzSnZObzhINlJzVzFCemUvVFRnc2hSMFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU82WlpvT0RDcW1GWlloZmlaZ2hQY0ZWVnNTV3c0d2swVTJVaHFVVTNXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZoZ0g3TmJiRkg4S3ZtU1hKYUFWL0VlWUltaVNwNlBHejhwZG05YktHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFU0R6UW90Ym42dFZOQjVjRGlEWXRjUmhVZjhsTmFBbXFUdGR6ZDZqdVZvV3FaRmgrQnRvaGNqOCs1ekZONW0vaGRwWUorNWZSaHJNWWhhVzltN2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiI5aFFoZ2NXV2poajVZbkJjK21SMW1kYm5OeGJ6aDhWcGZmNHhzMjlRNGRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYxNTcyMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0Mzg1NzZDMUVFMDQ4NUEzOTQwM0Y4NUI2MEJCQkU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEwOTA4NDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il9lV2VtTW5aVGUyNDdhMTV0X29qX1EiLCJwaG9uZUlkIjoiMDdjZmMyNjQtYTQ2Mi00MWZhLWI4ZGItZjg1N2U0OTkwOGIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllZdytiUjc5N3dXUmNUM1N5ZFFId2tlYWdYQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOEc0ODNmT2Fvd0twdDNKQnFaTGc3ZUVCNjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRk1WN1kyWlIiLCJtZSI6eyJpZCI6Ijk0NzYxNTcyMDQ2OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZGludWthbGFrbWwiLCJsaWQiOiIyMDg3MjMxMTI4OTAzOTA6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLc3d1UUVFSXlOL3NJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktWRmFrbWpselZJL1FpdHEzV0UraWN6SG81dUZCUGZsM1ZjRkN1em9WanM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii8wVXdsVjZibmE5Z0V1OExlRWdpNnpkWWN1ZnlHSnJZMHJSNU1mVWREcllCMTNaT2JTOVEzMDE0cHNHYWNpbUZ0M3R3YmtkMDZXczcwT3hOeDd3TUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBa1ZNU3BjOFVoNzRSV2FzSzZtRWZ3dEJrdzc4cVhzMkNaYTVpRDMzK09KM1g2VXhKd2hrTklLUFkzSngzc2Y1aGJ0OTJ2b3RNSVpYRXRwdzBCRVBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYxNTcyMDQ2OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2xSV3BKbzVjMVNQMElyYXQxaFBvbk14Nk9iaFFUMzVkMVhCUXJzNkZZNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMDkwODQyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNwVyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94761572046",
  PASSWORD: 
    process.env.PASSWORD || "dinuka12**",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
