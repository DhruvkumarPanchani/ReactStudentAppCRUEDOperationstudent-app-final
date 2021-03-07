import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Menu({}) {
    return (
       <div>
          <Link to={'/home'}>Home</Link> &nbsp;|&nbsp;  
          <Link to={'/about'}>About</Link> &nbsp;| &nbsp;
          <Link to={'/customer'}>Customer</Link>&nbsp; | &nbsp;
          <Link to={'/login'}>Logout</Link>
       <hr />
       </div>
    );
 }
export default Menu;