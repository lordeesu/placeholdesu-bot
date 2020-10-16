const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.login(config.BOT_TOKEN);
const prefix = "pb ";
client.on('ready', () => {
	console.log('Bot running.');
});
client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	const commandBody = message.content.slice(preifx.length);
	const args = commandBody.split (' ');
	const command = args.shift().toLowerCase();
	if (command === "ping") {
		const timeTaken = date.now() - message.createdTimestamp;
		message.reply ('<:ping_pong:766746745173704705>Pong! Latencia de ${timeTaken]ms.');
});




