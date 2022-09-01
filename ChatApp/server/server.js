const { Server } = require("socket.io");

const io = new Server(process.env.PORT || 3000, { 
    cors:{
        origin: "https://classy-arithmetic-766bdc.netlify.app",
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
 })

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('sendMessage', (message, username) =>{
        io.emit('recieveMessage', message, username);
    });
});