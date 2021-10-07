import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './pages/index'
import ForIndivisuals from './pages/forIndivisuals'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/forIndivisuals' exact component={ForIndivisuals}/>
            <Route path='/' component={Index}/>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
