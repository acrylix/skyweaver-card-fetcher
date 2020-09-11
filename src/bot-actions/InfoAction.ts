import Discord from 'discord.js';
import { Action } from './Action';

const infoRegex = /^!skybot/

export class InfoAction implements Action {
    constructor() { }

    triggerData(message: string) {
        return message.match(infoRegex)?.slice();
    }

    async process(params: string[], channel: Discord.TextChannel | Discord.DMChannel) {
        await channel.send(`my souce is at https://github.com/mikeball1289/skyweaver-card-fetcher.`);
    }
}