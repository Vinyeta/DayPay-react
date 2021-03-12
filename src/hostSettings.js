let backendHost;
const hostname = window && window.location && window.location.hostname;
if(hostname === 'localhost') {
    backendHost = 'http://127.0.0.1:5000';
} else if(hostname === 'app.XXXX.com') {
    backendHost = 'https://placeholder.com';
}
else backendHost = 'http://127.0.0.1:5000';
export const API_ROOT = `${backendHost}`;
export const HOSTNAME = `${hostname}`;