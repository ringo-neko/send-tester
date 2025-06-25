

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒
socket.onopen = () => {
    // if sended, send messege
    socket.send('Hello from client!');
};

// ユーザーのアクション（ボタンクリックなど）でメッセージを送信する関数
function sendMessageToServer(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message); // ここでsend関数を呼び出す
        console.log('Sent to server:', message);
    } else {
        console.warn('WebSocket is not open. Cannot send message.');
    }
}

function d() {
  message=document.getElementById("message");
  message=document.getElementById("ip");
  message=document.getElementById("port");
  const socket = new WebSocket('ws://'+ip+":"+port);
  sleep(3000);
  sendMessageToServer(message);
}
