import { renderHome } from './home.js';
import { renderFeed } from './feed.js';
import { renderProfile } from './profile.js';
import { getAIResponse } from '../brain.js';

export const icon = `<svg class="nav-icon" data-target="ai" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>`;

function renderAI() {
    return `
        <div style="width: 80%; max-width: 800px; height: 80vh; display: flex; flex-direction: column; border: 1px solid #00ffff; padding: 20px; background: rgba(0, 20, 20, 0.8);">
            <div id="chat-history" style="flex-grow: 1; overflow-y: auto; margin-bottom: 20px; text-align: left;">
                <div style="color: #00ffff; margin-bottom: 10px;">[SYSTEM]: AI Interface Initialized.</div>
            </div>
            <div style="display: flex;">
                <input type="text" id="chat-input" placeholder="Enter command..." style="flex-grow: 1; background: transparent; border: 1px solid #00ffff; color: #00ffff; padding: 10px; font-family: inherit; outline: none;">
                <button id="chat-send" style="background: #00ffff; color: #000; border: none; padding: 10px 20px; cursor: pointer; font-family: inherit; font-weight: bold;">SEND</button>
            </div>
        </div>
    `;
}

export function initInteractions() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main-content');
    
    if (!sidebar || !main) return;

    sidebar.addEventListener('click', (e) => {
        const icon = e.target.closest('.nav-icon');
        if (icon) {
            const target = icon.getAttribute('data-target');
            if (target === 'home') main.innerHTML = renderHome();
            else if (target === 'feed') main.innerHTML = renderFeed();
            else if (target === 'profile') main.innerHTML = renderProfile();
            else if (target === 'ai') {
                main.innerHTML = renderAI();
                setupChatListeners();
            }
        }
    });
}

function setupChatListeners() {
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const history = document.getElementById('chat-history');

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        // User message
        const userDiv = document.createElement('div');
        userDiv.style.color = '#fff';
        userDiv.style.marginBottom = '5px';
        userDiv.textContent = `> ${text}`;
        history.appendChild(userDiv);

        input.value = '';

        // AI Response
        const response = getAIResponse(text);
        const aiDiv = document.createElement('div');
        aiDiv.style.color = '#00ffff';
        aiDiv.style.marginBottom = '10px';
        aiDiv.textContent = `[AI]: ${response}`;
        history.appendChild(aiDiv);
        history.scrollTop = history.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}