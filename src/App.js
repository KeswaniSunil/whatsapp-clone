import React,{useContext} from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Login from './components/Login';
import {Context as UserContext} from "./context/UserContext";  

function App() {
  // const [user,setUser]=useState(null);
  const {state}=useContext(UserContext);
  return (
    <div className="app">
      {!state.user?(
          <Login />
        ):(
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
              {/* To let it know that always render the sideBar:- */}
              <Route exact path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch> 
            </Router>
          </div>
        )
      }
    </div>
  );
}

export default App;
