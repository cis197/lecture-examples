var http = require('http');
var path = require('path');
var fs = require('fs');
var io = require('socket.io')

var server = http.createServer(function (req, res) {
  var pathName = __dirname + '/public/index.html';
  if (req.url.indexOf('public') > -1) {
    pathName = __dirname + req.url
  }
  fs.readFile(pathName, function (err, data) {
    if (!err) {
      var filetype = pathName.split('.').pop()
      res.writeHead(200, {'Content-Type': 'text/' + filetype})
      res.write(data);
      res.end()
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write('<h1>Error file not found</h1>');
      res.end()
    }
  })
}).listen(3000)

io = io(server);

var users = []; // in format of [{ id: randomSocketId, userName: usernameString }, ...]

io.on('connection', function(socket) {
  // adds user if they are unique username otherwise asks for new one
  // via pickNew event
  socket.on('askUser', function(potentialUsername) {
    var justUsers = users.map(function (el) {
      return el.userName
    });

    // if we find a username already === potentialUsername emit event
    // to prompt user again
    if (justUsers.includes(potentialUsername)) {
      socket.emit('pickNew');
    } else {
      // push a "user object" with unique id and potentialUsername
      users.push({ id: socket.id, userName: potentialUsername });
    }
  });

  socket.on('chat message', function(msg) {
    var username = "";
    users.map(function (i) {
      if (i.id === socket.id) {
        username = i.userName;
      }
    })
    var msgObj = { message: msg, user: username }
    io.emit('chat message', msgObj); 
  });
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });
});
