// Encriptar pass crypto  / js-sha256
import './App.css';
import LoginForm from "./components/LoginForm/loginForm";
import SignUpForm from "./components/SignUpForm/signUpForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';
import { UserProvider } from './contexts/userContext/userContext';


function App() {




  return (
    <UserProvider>
      <div>
        <Router>
          <Switch>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <SignUpForm />
            </Route>
            <Route path='/dashboard'>
              <DashboardPage />
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;