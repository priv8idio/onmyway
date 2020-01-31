/*----------------------------------
Create Simple Telegram bot 
with Telegraf Framework ~ NodeJS
-----------------------------------*/

const Telegraf = require('telegraf')
const bot = new Telegraf('1050838735:AAHuw4TAd2EhDuZJC6ai0JHen_6rgY_RXRo')

bot.on('text', (ctx) => {
 console.log(ctx.message)

 if (ctx.message.text == '/start') {
    ctx.replyWithHTML(
     '<i>Welcome</i> <b>'+ ctx.from.first_name +'</b>',
  {'reply_to_message_id':ctx.message.message_id})}

 if (ctx.message.text == '/hey') {
    ctx.replyWithMarkdown(
     'Hey *'+ ctx.from.first_name +'*',
  {'reply_to_message_id':ctx.message.message_id})}

 })

bot.startPolling()