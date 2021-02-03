// Encriptar pass crypto  / js-sha256
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { useState } from 'react';
import Landing from './pages/Landing';


function App() {

  const history = useHistory();

  const token = localStorage.getItem('token');

  return ( 
    <div>
      <Landing />
      {/* <Router>
        <Switch>
          <Route path='/login'>
          { token ?
             history.push('/dashboard') 
            :
              undefined // <Login />
            }
          </Route>
          <Route path='/signup'>
          { token ?
             history.push('/dashboard') 
            :
              undefined // <SignUp />
            }
          </Route>
          <Route path='/dasboard'>
            { token ?
             undefined //<Dashboard /> 
            :
              history.push('/login')
            }

          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
      */}
    </div> 
  );
}

export default App;
