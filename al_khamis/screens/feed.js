export const icon = `<svg class="nav-icon" data-target="feed" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`;

export function renderFeed() {
    return `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <svg style="width: 150px; height: 150px; fill: none; stroke: #00ffff; stroke-width: 2;" viewBox="0 0 24 24">
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M12 13l-1-4h2l-1 4" stroke-width="1" />
            </svg>
            <h1 style="color: #00ffff; margin-top: 20px; font-family: monospace;">COMING SOON</h1>
        </div>
    `;
}