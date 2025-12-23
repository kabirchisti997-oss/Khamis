export const icon = `<svg class="nav-icon" data-target="profile" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

export function renderProfile() {
    return `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <svg style="width: 100px; height: 100px; fill: #00ffff; margin-bottom: 20px;" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <h1 style="color: #00ffff;">USER PROFILE</h1>
            <div style="text-align: left; border: 1px solid #00ffff; padding: 20px; width: 300px;">
                <p>ID: USER-001</p>
                <p>ROLE: ADMINISTRATOR</p>
                <p>ACCESS: UNLIMITED</p>
            </div>
        </div>
    `;
}