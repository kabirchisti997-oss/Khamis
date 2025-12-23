import { icon as homeIcon } from './screens/home.js';
import { icon as feedIcon } from './screens/feed.js';
import { icon as profileIcon } from './screens/profile.js';
import { icon as aiIcon } from './screens/universal_ai.js';

export function initUI() {
    const sidebar = document.getElementById('sidebar');
    
    const icons = homeIcon + feedIcon + aiIcon + profileIcon;
    
    if (sidebar) {
        sidebar.innerHTML = icons;
    }
}