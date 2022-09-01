let chatBox = document.getElementById("chatBox");
let usernameBox = document.getElementById("usernameBox");
let messageBox = document.getElementById("messageBox");
let sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", sendMessage);
// 
const socket = io('https://vast-springs-01432.herokuapp.com/', {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
});
socket.on('connect', () => {
    displayMessage('You connected with id: ' + socket.id, "server");
});

socket.on('recieveMessage', (message, username) => {
    displayMessage(message, username);
});

function sendMessage(){
    if(messageBox.value != ""){
        let message = messageBox.value;
        let username = usernameBox.value;
    
        socket.emit('sendMessage', message, username);
        messageBox.value = "";
    }

}

function displayMessage(message, username){
    var div = document.createElement('div');
    chatBox.appendChild(div);
    div.className = 'chatMessageDiv';
    let usernameText = document.createElement("p");
    usernameText.innerHTML = username;
    div.appendChild(usernameText);
    let messageText = document.createElement("p");
    messageText.innerHTML = message;
    div.appendChild(messageText);
}