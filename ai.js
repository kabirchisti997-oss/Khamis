// AI UI Logic - Handles chat interaction
const chatHistory = document.getElementById('chatHistory');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.textContent = text;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Auto scroll to bottom
}

function handleSend() {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        userInput.value = '';
        
        // Use the AI Brain (from ai_brain.js) to generate a response
        if (typeof aiBrain !== 'undefined') {
            aiBrain.think(text).then(response => {
                addMessage(response, 'ai');
            });
        }
    }
}

if (sendButton && userInput) {
    sendButton.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}