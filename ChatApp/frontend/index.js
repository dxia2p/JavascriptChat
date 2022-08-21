let chatBox = document.getElementById("chatBox");
let messageBox = document.getElementById("messageBox");
let sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);

const socket = io('http://localhost:3000');
socket.on('connect', () => {
    displayMessage('You connected with id: ' + socket.id);
});

socket.on('recieveMessage', (message) => {
    displayMessage(message);
});

function sendMessage(){
    if(messageBox.value != ""){
        let message = messageBox.value;
    
        socket.emit('sendMessage', message);
        messageBox.value = "";
    }

}

function displayMessage(message){
    var div = document.createElement('div');
    chatBox.appendChild(div);
    div.className = 'chatMessageDiv';
    let para = document.createElement("p");
    para.innerHTML = message;
    div.appendChild(para);
}