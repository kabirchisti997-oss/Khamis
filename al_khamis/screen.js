export async function loadScreen(screenName) {
    const el = document.getElementById('main-content');
    try {
        let path;
        if (screenName === 'welcome') {
            path = `./${screenName}.js`;
        } else {
            path = `./screens/${screenName}.js`;
        }

        const module = await import(path);
        const funcName = `render${screenName.charAt(0).toUpperCase() + screenName.slice(1)}`;
        
        if (module[funcName]) {
            el.innerHTML = modulefuncName;
        }
    } catch (e) {
        console.error(e);
        el.innerHTML = `<h1 style="color:red">Error loading ${screenName}</h1>`;
    }
}
