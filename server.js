const http = require ('http');
const socketio = require('socket.io');
//http server
const server = http.createServer((req, res)=>{
    res.end('I am connected!')
})

const io = socketio(server);

io.on('connection', (socket, req)=> {
    socket.emit('Welcome to http server!')
    socket.on('message', (msg) => {
        console.log(msg)
    })
})

server.listen(3000);

console.log("I am great")
