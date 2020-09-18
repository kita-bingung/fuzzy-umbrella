const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('fs')
const cors = require('cors');

let cards = JSON.parse(fs.readFileSync('cards.json', 'utf-8'));
let users = [];

cards.forEach(card => card.isFlipped = false)

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

app.use(cors())
io.on("connect", function(socket) {
  console.log('connect');

  socket.emit('init', cards)
  socket.on('userInitData', function(data) {
    if(users.length === 0) {
      data.isPlay = true
    } else {
      data.isPlay = false
    }
    users.push(data)
    io.emit('userInitData', users)
  })
  socket.emit('fetchUserData', users)
  socket.on('flipCard', function(data) {
    socket.broadcast.emit('flipCard', data)
  })
  socket.on('updateCard', function(data) {
    socket.broadcast.emit('updateCard', data)
  })
  socket.on('changeCurrentPlayer', function(data) {
    console.log('masuk current player~~');
    data.isPlay = true;
    users.forEach(user => {
      if (user.name === data.name) {
        user.isPlay = true
      } else {
        user.isPlay = false
      }
    })
    io.emit('fetchUserData', users)
    io.emit('changeCurrentPlayer', data)
  })
  socket.on('updateScore', function(data) {
    socket.broadcast.emit('fetchUserData', data)
  })
  socket.on('winner', function(data) {
    io.emit('winner', data)
  })
})

server.listen(3000, () => {
  console.log('Listen on port 3000')
})