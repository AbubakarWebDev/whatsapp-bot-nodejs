const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const chatName = "<--- Person Contact Name --->";
const msg = "Hello How Are You?";

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: false }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', async () => {
    console.log('Client is ready!');

    const chats = await client.getChats();
    const targetChat = chats.find((chat) => chat.name === chatName);

    if (!targetChat) {
        console.log("Target not found!");
        return;
    }

    for (let i = 0; i <= 1000; i++) {
        client.sendMessage(targetChat.id._serialized, msg);
    }

    console.log("done!");
});

client.on('message', message => {
    console.log(message.body);
});

client.on('change_state', state => {
    console.log('CHANGE STATE', state);
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});

client.initialize();