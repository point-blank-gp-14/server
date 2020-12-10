const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const GameEngine = require('./engine/game')


//database
const players = []


//main code
io.on('connection', socket => {

  //kirim players ke client
  socket.emit('FETCH_USER', players)

  // get random position
  socket.on('GET_POSITION', payload => {
    const newPosition = GameEngine.randomizePosition(+payload)
    socket.emit('GET_NEW_POSITION', newPosition)
  })

  //nerima player dari client
  socket.on('register', payload => {
    const newPlayer = {
      name : payload,
      score : 0
    }
    console.log(newPlayer);
    players.push(newPlayer)
    console.log(players);
    socket.broadcast.emit('FETCH_USER', players)
  })

  socket.on('getPlayers', payload => {
    socket.emit('FETCH_USER', players)
  })
})





server.listen(port, ()=>{
  console.log(port);
})