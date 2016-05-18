//DEV Antonio Medel
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/demo.html');
});

io.on('connection', function(socket) {
  console.log('te has conectado con el ID: ' + socket.id);

  socket.on('usuario', function(u) {
    socket.broadcast.emit('nuevo usuario', u);
    console.log('Desde el servidor: ' + u);
  });

});

server.listen(8000, function() {
  console.log('Escuchando en el puerto 800000000');
});
