import React, { Component } from 'react';
import Menu from './Menu';
import {getCustomers,addCustomer} from '../service/CustomerService';
class Home extends Component {
   render() {
      return (
         <div>
            <Menu/>
            <h2>Home</h2>
            <h4>System has {getCustomers().length} customer records. </h4>
         </div>
      );
   }
}
export default Home;