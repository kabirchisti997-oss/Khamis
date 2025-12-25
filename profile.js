// Profile Screen Logic
document.addEventListener('DOMContentLoaded', async () => {
    const profileIconTop = document.getElementById('profile-icon');
    const profileIconSide = document.getElementById('nav-profile');
    
    let currentSession = null;

    // Function to update UI
    const updateProfileUI = (session) => {
        if (session && session.user) {
            const avatarUrl = session.user.user_metadata.avatar_url;
            
            if (avatarUrl) {
                // Update Top Right Icon
                if (profileIconTop) {
                    profileIconTop.innerHTML = `<img src="${avatarUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
                    profileIconTop.style.padding = '0';
                    profileIconTop.style.border = '2px solid #00ffff';
                }

                // Update Sidebar Icon
                if (profileIconSide) {
                    const svg = profileIconSide.querySelector('svg');
                    if (svg) {
                        const img = document.createElement('img');
                        img.src = avatarUrl;
                        img.style.width = '24px';
                        img.style.height = '24px';
                        img.style.borderRadius = '50%';
                        img.style.objectFit = 'cover';
                        svg.replaceWith(img);
                    }
                }
            }
        }
    };

    // Check if user is already logged in
    const { data: { session } } = await supabaseClient.auth.getSession();
    currentSession = session;
    if (currentSession) updateProfileUI(currentSession);

    // Listen for auth changes
    supabaseClient.auth.onAuthStateChange((event, session) => {
        currentSession = session;
        if (event === 'SIGNED_IN') updateProfileUI(session);
        if (event === 'SIGNED_OUT') window.location.reload();
    });

    const handleProfileClick = () => {
        if (currentSession) {
            const confirmLogout = confirm(`Logged in as ${currentSession.user.email}\nDo you want to log out?`);
            if (confirmLogout) {
                supabaseClient.auth.signOut().then(() => window.location.reload());
            }
        } else {
            createLoginModal();
        }
    };

    if (profileIconTop) profileIconTop.addEventListener('click', handleProfileClick);
    if (profileIconSide) profileIconSide.addEventListener('click', handleProfileClick);

    function createLoginModal() {
        // Remove existing modal if any
        const existingModal = document.getElementById('login-modal');
        if (existingModal) existingModal.remove();

        // Create Overlay
        const overlay = document.createElement('div');
        overlay.id = 'login-modal';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.backdropFilter = 'blur(5px)';
        overlay.style.zIndex = '1000';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';

        // Create Modal Box
        const modal = document.createElement('div');
        modal.style.background = 'rgba(30, 30, 30, 0.9)';
        modal.style.padding = '30px';
        modal.style.borderRadius = '20px';
        modal.style.border = '1px solid rgba(0, 255, 255, 0.3)';
        modal.style.textAlign = 'center';
        modal.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.2)';
        modal.style.color = '#fff';

        // Title
        const title = document.createElement('h2');
        title.innerText = 'Sign In';
        title.style.marginBottom = '20px';
        title.style.color = '#00ffff';
        title.style.fontFamily = 'monospace';

        // Google Button
        const googleBtn = document.createElement('button');
        googleBtn.innerText = 'Sign in with Google';
        googleBtn.style.padding = '12px 24px';
        googleBtn.style.borderRadius = '30px';
        googleBtn.style.border = 'none';
        googleBtn.style.background = '#fff';
        googleBtn.style.color = '#333';
        googleBtn.style.fontSize = '16px';
        googleBtn.style.fontWeight = 'bold';
        googleBtn.style.cursor = 'pointer';
        googleBtn.style.display = 'flex';
        googleBtn.style.alignItems = 'center';
        googleBtn.style.gap = '10px';
        googleBtn.style.transition = 'transform 0.2s';

        googleBtn.onmouseover = () => googleBtn.style.transform = 'scale(1.05)';
        googleBtn.onmouseout = () => googleBtn.style.transform = 'scale(1)';

        googleBtn.onclick = async () => {
            try {
                const { data, error } = await supabaseClient.auth.signInWithOAuth({
                    provider: 'google',
                });
                if (error) throw error;
            } catch (error) {
                alert('Error logging in: ' + error.message);
            }
        };

        // Close when clicking outside
        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };

        modal.appendChild(title);
        modal.appendChild(googleBtn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }
});