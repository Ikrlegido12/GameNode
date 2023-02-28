const { MessageEmbed } = require('discord.js')
const Command = require('../../structures/Commandos.js')
const { soyultro } = require('soyultro')

const { sendError } = require('../../utils/utils.js')

module.exports = class Think extends Command {
    constructor() {
        super({
            name: 'think',
            description: ['Shows that you are thinking.', 'Muestra que estás pensando.'],
            category: 'Interaccion'
        })
    }
    async run(message, args) {
        try {
            let author = message.author.username
            let embed = new MessageEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
                .setTitle(`${author} ${message.client.language.THINK[1]}`)
                .setColor(process.env.EMBED_COLOR)
                .setImage(soyultro('think'))

            message.channel.send({ embeds: [embed] })
        } catch (e) {
            sendError(e, message)
        }
    }
}
