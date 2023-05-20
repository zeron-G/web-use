// 在页面加载完成后执行以下代码
window.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const userInputText = document.getElementById('user-input-text');
    const sendButton = document.getElementById('send-button');

    // 当点击发送按钮时执行
    sendButton.addEventListener('click', () => {
        const userMessage = userInputText.value;
        userInputText.value = '';  // 清空用户输入框

        // 将用户消息显示在聊天窗口中
        chatLog.innerHTML += `<div class="user-message">${userMessage}</div>`;

        // 调用ChatGPT API并显示响应消息
        callChatGPTAPI(userMessage);
    });

    // 调用ChatGPT API的函数
    async function callChatGPTAPI(message) {
        const response = await fetch('/api/chatgpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        const botMessage = data.message;

        // 将机器人响应消息显示在聊天窗口中
        chatLog.innerHTML += `<div class="bot-message">${botMessage}</div>`;
    }
});
