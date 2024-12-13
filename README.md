# WhatsApp Bot

This project is a simple WhatsApp bot built using the [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) library. The bot automates sending a specified message to a target contact repeatedly.

## Features
- QR code-based authentication using `whatsapp-web.js` and `LocalAuth`.
- Sends a predefined message to a specified contact.
- Logs various client states, including authentication status and connection state.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or later)
- A WhatsApp account

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbubakarWebDev/whatsapp-bot-nodejs
   cd https://github.com/AbubakarWebDev/whatsapp-bot-nodejs
   ```

2. Install the dependencies:

   ```bash
   npm install whatsapp-web.js qrcode-terminal
   ```

## Configuration

1. Open the source code (`index.js` or equivalent).
2. Set the following variables:
   - `chatName`: Replace `<--- Person Contact Name --->` with the contact name as it appears in your WhatsApp chat list.
   - `msg`: Replace `"Hello How Are You?"` with the message you want to send.

## Usage

1. Start the bot:

   ```bash
   node index.js
   ```

2. Scan the QR code displayed in the terminal using your WhatsApp app to authenticate.

3. Once authenticated, the bot will:
   - Search for the target contact in your chat list.
   - Send the specified message repeatedly to the contact (1000 times).

## Code Overview

### Main Logic

- **QR Code Authentication**: The bot generates a QR code for authentication. You need to scan this code using the WhatsApp app.
- **Message Sending**: Once authenticated and the client is ready, the bot searches for the target contact by name and sends the specified message repeatedly.

### Event Handlers

- `client.on('qr', qr)`: Generates and displays the QR code for authentication.
- `client.on('ready')`: Triggered when the client is ready to send messages.
- `client.on('message', message)`: Logs incoming messages.
- `client.on('disconnected', reason)`: Logs the reason for disconnection.

## Notes

- The bot uses the `LocalAuth` strategy to persist the session locally, so you won’t need to scan the QR code again unless the session is cleared.
- Ensure the contact name in `chatName` matches exactly as it appears in WhatsApp.

## Disclaimer

This project is intended for educational purposes only. Use responsibly and comply with WhatsApp's terms of service.

## License

MIT License
