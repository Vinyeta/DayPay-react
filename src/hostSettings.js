let backendHost;
const hostname = window && window.location && window.location.hostname;
if (hostname === "localhost") {
  backendHost = "http://127.0.0.1:5000/";
} else if (hostname === "loving-heisenberg-90995c.netlify.app") {
  backendHost = "https://day-pay-node-5fnpv.ondigitalocean.app/";
} else backendHost = "http://127.0.0.1:5000/";
export const API_ROOT = `${backendHost}`;
export const HOSTNAME = `${hostname}`;
