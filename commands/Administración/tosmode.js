const { MessageEmbed } = require('discord.js')
const guildSchema = require('../../models/guild.js')
const Command = require('../../structures/Commandos.js')
const { sendError } = require('../../utils/utils.js')

module.exports = class ToSMode extends Command {
    constructor(client) {
        super(client, {
            name: 'tosmode',
            description: [
                'Enables or disables the ToS extreme commands.',
                'Habilita o deshabilita los comandos al límite del ToS.'
            ],
            permissions: ['ADMINISTRATOR'],
            subcommands: ['enable', 'disable'],
            cooldown: 1,
            nochannel: true,
            usage: ['<enable/disable>', '<enable/disable>'],
            category: 'administracion',
            args: true
        })
    }
    async run(client, message, args, prefix, lang, ipc) {
        try {
            if (args[0]) {
                if (args[0].toLowerCase() == 'enable') {
                    guildSchema
                        .findOne({
                            guildID: message.guild.id
                        })
                        .then((data) => {
                            data.config.tos = true
                            data.save().catch((err) => console.error(err))
                        })
                    message.guild.config.tos = true
                    const embed = new MessageEmbed()
                        .setColor(process.env.EMBED_COLOR)
                        .setTitle(client.language.SUCCESSEMBED)
                        .setDescription(client.language.TOSMODE[1])
                        .setFooter({ text: message.author.username, iconURL: message.author.avatarURL() })
                    return message.channel.send({ embeds: [embed] })
                } else if (args[0].toLowerCase() == 'disable') {
                    guildSchema
                        .findOne({
                            guildID: message.guild.id
                        })
                        .then((data) => {
                            data.config.tos = false
                            data.save().catch((err) => console.error(err))
                        })
                    message.guild.config.tos = false
                    const embed = new MessageEmbed()
                        .setColor(process.env.EMBED_COLOR)
                        .setTitle(client.language.SUCCESSEMBED)
                        .setDescription(client.language.TOSMODE[2])
                        .setFooter({ text: message.author.username, iconURL: message.author.avatarURL() })
                    return message.channel.send({ embeds: [embed] })
                }
            }
        } catch (e) {
            sendError(e, message)
        }
    }
}
