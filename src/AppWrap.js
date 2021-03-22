import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./user-context";

const AppWrap = () => (
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);

export default AppWrap;
