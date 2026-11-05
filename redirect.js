const localCallback = 'http://localhost:8765/auth/instagram/callback';
window.location.replace(`${localCallback}${window.location.search}${window.location.hash}`);
