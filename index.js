const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', // Name of session
    // Set multidevice to true for version not supporting multidevice
    multidevice: true, // Default is true
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); // Return object success
        })
        .catch((error) => {
          console.error('Error when sending: ', error); // Return object error
        });
    }
  });
}
