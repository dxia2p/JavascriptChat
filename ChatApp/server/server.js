const { Server } = require("socket.io");

const io = new Server(process.env.PORT || 3000, { 
    cors:{
        origin: "https://classy-arithmetic-766bdc.netlify.app/",
        methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
        allowedHeaders:["secretHeader"],
        credentials: true
    }
 });

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('sendMessage', (message) =>{
        io.emit('recieveMessage', message);
    });
});