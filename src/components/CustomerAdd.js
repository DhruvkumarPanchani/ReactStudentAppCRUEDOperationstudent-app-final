import React, {useState,useEffect} from 'react';
import Menu from './Menu';
import {getCustomers,addCustomer,deleteCustomer,updateCustomer, getCustomerById} from '../service/CustomerService';
// function 
//export default About;
export default function CustomerFuncApp({history,match}) { //p 46
   //
   // destructure useState
   const [items,setItems] = useState(getCustomers());
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [label,setLabel] = useState("Add");

    useEffect(()=>{
        if(match.params.id){ //edit
            let customer = getCustomerById(match.params.id);
            setId(customer.id);
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
            setAddress(customer.address);
            setLabel("Update");
        }
    },[]);
  var deleteItem = (id) =>{
    deleteCustomer({id});
    setItems(getCustomers());
  }
  var handleChange = (e) => {
      if(e.target.name == "name"){
        setName(e.target.value);
      }else if(e.target.name == "email"){
        setEmail(e.target.value);
      }else if(e.target.name == "phone"){
        setPhone(e.target.value);
      }else if(e.target.name == "address"){
        setAddress(e.target.value);
    }
  }

  var editItem = (id) =>{
    console.log('edit record '+id);
    var customers = items.filter((item)=>(item.id == id))
    if(customers.length > 0){
      let customer = customers[0];
      setId(customer.id);
      setName(customer.name);
      setEmail(customer.email);
      setPhone(customer.phone);
      setAddress(customer.address);
      setLabel("Update");
    }
    //this.setState({items:customers});
  }
    var handleSubmit = (e) =>  {
      e.preventDefault();
      if (!name.length) {
        return;
      }
      const newItem = {
          name: name,
          email:email,
          phone:phone,
          address: address,
          id:Date.now()
      };
      if(id != 0){ //edit
        newItem.id = id;
        updateCustomer(newItem);
      }else{ //new
        addCustomer(newItem);
        //tempItems = items.concat(newItem);
      }/*
        setId(0);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setLabel("Add");
        setItems(getCustomers());*/
        history.push("/customer");
    }
    return (
      <div>
          <Menu/>
        <h3>Customers</h3>
        <form>
          <input name='name' placeholder="name"
            onChange={handleChange}
            value={name}
          /> <br/><br/>
          <input name='email' placeholder="email"
            onChange={handleChange}
            value={email}
          /> <br/><br/>
          <input name='phone' placeholder="phone"
            onChange={handleChange}
            value={phone}
          /> <br/><br/>
          <input name='address' placeholder="address"
            onChange={handleChange}
            value={address}
          /> <br/><br/>
          <button onClick={handleSubmit}> 
            {label}
          </button>
        </form>
        </div>
    );
  }

