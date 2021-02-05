import Nav from './component/Navigation'
import './App.scss';
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";



function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Nav />
          <div className="container pt-4">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
