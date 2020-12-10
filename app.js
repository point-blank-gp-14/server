const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;


//database
const players = []


//main code
io.on('connection', socket => {

  //kirim
  socket.emit('FETCH_USER', players)

  //nerima
  socket.on('register', payload => {
    const newPlayer = {
      name : payload,
      score : 0
    }
    console.log(newPlayer);
    players.push(newPlayer)
    console.log(players);
  })
})





server.listen(port, ()=>{
  console.log(port);
})