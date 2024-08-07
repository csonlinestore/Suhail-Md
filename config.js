const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://chamod:mongochamod@cluster0.uhcpl.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_28_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFBjRnc3UDBFdGg4SUNVZTNMNmE5ak5Zc3g5TVJDUi81TXJJWFIwdEM5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMDVkaV83ajRRVDIyWGQ0Rk5JVlhCZ1wiLFxuICBcInBob25lSWRcIjogXCI4MmZiZWY4MC1kNTkwLTQ1NmMtYTczOC1hNjg5Mjk3NzYwOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgODYsXG4gICAgICA3MyxcbiAgICAgIDE5MixcbiAgICAgIDMwLFxuICAgICAgMTAsXG4gICAgICA0MCxcbiAgICAgIDc2LFxuICAgICAgNDUsXG4gICAgICAxMjUsXG4gICAgICAxMjUsXG4gICAgICAxMTksXG4gICAgICAyMzIsXG4gICAgICAzNyxcbiAgICAgIDEzNSxcbiAgICAgIDIwNyxcbiAgICAgIDIzNSxcbiAgICAgIDM4LFxuICAgICAgNjgsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE0NCxcbiAgICAgIDg0LFxuICAgICAgMjM2LFxuICAgICAgMTAsXG4gICAgICA0MyxcbiAgICAgIDQzLFxuICAgICAgOTEsXG4gICAgICAxODUsXG4gICAgICAyMyxcbiAgICAgIDg3LFxuICAgICAgNDEsXG4gICAgICAxMDEsXG4gICAgICAxNjEsXG4gICAgICAxMDYsXG4gICAgICAxMTAsXG4gICAgICA1MixcbiAgICAgIDUwLFxuICAgICAgMTM1LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZSMkNYSlg2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MjM3NzU4MDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTU5OTYzNzgzOTk3MzoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPakJuK29FRU9XSXpyVUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitUR2MraWFNUHltMVpHdHM5WXl3Z0lWcjh4QWpSclF2OEpkcnRzU0gzQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTN0dGkzVklXTVJ2dy9vdE1veDlFRXNYM0ZpSktKMVV0dERGSGRoUVhuSzJTNjZpZFpCOUdWUmNkSWtNa0xUT1JJZGd6N0xRMFFwR0N2WHRNOU80RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiai9ia1FiUm53THJxcm9vVVFRdEFPdlhaazdpSzY2UjFjSjVXeWlRYnBRZjNWaFdqSWs4eFI2Kzc5QzFTbVQ4L1E5OFRRWnZSYU01L0RVMGRPcEMzQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjIzNzc1ODA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNDA4NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJFQUFHeEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkVBQUd4RS5qc29uIjogIntcImtleURhdGFcIjpcIlBxVEpNZENtaWlXZHVwSkNGMGJRczhGRHBia01PM2FKQ2dhdTZZblQ4VU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5NjU1NjI2NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg0MDQ2NTQ4NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
