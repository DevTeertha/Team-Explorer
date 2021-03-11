import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Teams></Teams>
          </Route>
          <Route path='/:id'>
            <TeamDetails></TeamDetails>
          </Route>
          <Route path='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
