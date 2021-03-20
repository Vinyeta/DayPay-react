import { useContext } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import LoginForm from "./components/LoginForm/loginForm";
import SignUpForm from "./components/SignUpForm/signUpForm";
import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';
import { UserContext } from './user-context';


function App() {

  const { token } = useContext(UserContext);



  if (token) {

    return (

      <div>
        <Switch>
          <Route path='/login'>
            <Redirect to='/dashboard' />
          </Route>
          <Route path='/signup'>
            <Redirect to='/dashboard' />
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/'>
            <Redirect to='/dashboard' />
          </Route>
        </Switch>
      </div>
    )
  } else {
    return (
      <div>
        <Switch>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <SignUpForm />
          </Route>
          <Route path='/dashboard'>
            <Redirect to='/login' />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    )
  }

}

export default App;