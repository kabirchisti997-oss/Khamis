// Feed Screen Logic
document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feed-interface');
    
    if (feedContainer) {
        feedContainer.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; height: 100%; width: 100%; padding: 40px; gap: 20px; box-sizing: border-box; color: #00ffff;">
                
                <!-- Top Left: Computer Icon -->
                <div style="display: flex; justify-content: center; align-items: center; border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 15px; background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(5px);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>

                <!-- Top Right: English Text -->
                <div style="display: flex; justify-content: center; align-items: center; text-align: center; padding: 20px; border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 15px; background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(5px);">
                    <h2 style="font-family: monospace; font-size: 1.2rem; line-height: 1.5;">We'll teach you english with expert teachers we're here to broke your limits of learning</h2>
                </div>

                <!-- Bottom Left: Coming Soon -->
                <div style="display: flex; justify-content: center; align-items: center; border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 15px; background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(5px);">
                    <h3 style="font-family: monospace; font-size: 1.5rem;">coming soon</h3>
                </div>

                <!-- Bottom Right: Coming Soon -->
                <div style="display: flex; justify-content: center; align-items: center; border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 15px; background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(5px);">
                    <h3 style="font-family: monospace; font-size: 1.5rem;">coming soon</h3>
                </div>

            </div>
        `;
    }
    console.log("Feed module initialized");
});