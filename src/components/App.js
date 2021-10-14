import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Result from './Result';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Step1}></Route>
        <Route path="/step2" component={Step2}></Route>
        <Route path="/result" component={Result}></Route>
      </Switch>
    </Router>
  );
}

export default App;
