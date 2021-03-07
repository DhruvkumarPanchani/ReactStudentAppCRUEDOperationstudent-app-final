import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import CustomerFuncApp from './components/CustomerFunc';
import AddCustomer from './components/CustomerAdd';

function App() {
  return (
    <Router>
    <div style={{marginLeft:"2%"}}>
       <h2>Student App</h2>
       <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/customer' component={CustomerFuncApp} />
          <Route exact path='/customer/add' component={AddCustomer} />
          <Route exact path='/customer/edit/:id' component={AddCustomer} />
       </Switch>
    </div>
 </Router>
  );
}
export default App;