import { Telegraf, Markup } from 'telegraf'

const token = '7319758246:AAGam-VqfuaKwM2ys_CqNe0gjqYyGdviTlc'
const webAppUrl = 'https://mining-empire-game.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать!',
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini-app', `${webAppUrl}?ref=${ctx.payload}`
            ),
        ])
    )
})

bot.launch()