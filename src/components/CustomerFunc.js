import React, {useState,useEffect} from 'react';
import Menu from './Menu';
import {getCustomers,addCustomer,deleteCustomer,updateCustomer} from '../service/CustomerService';
// function 
//export default About;
export default function CustomerFuncApp({history}) { //p 46
   //
   // destructure useState
   const [items,setItems] = useState(getCustomers());

    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [label,setLabel] = useState("Add");

  var deleteItem = (id) =>{
    deleteCustomer({id});
    //console.log('delete record '+id);
    //var customers = items.filter((item)=>(item.id != id))
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
    history.push("/customer/edit/"+id);
  /*  var customers = items.filter((item)=>(item.id == id))
    if(customers.length > 0){
      let customer = customers[0];
      setId(customer.id);
      setName(customer.name);
      setEmail(customer.email);
      setPhone(customer.phone);
      setAddress(customer.address);
      setLabel("Update");
    }*/
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
      }
        setId(0);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setLabel("Add");
        setItems(getCustomers());
    }
    return (
      <div>
          <Menu/>
        <h3>Customers</h3>
        <button onClick={()=>{
          history.push("/customer/add");
        }}> Add</button><br/><br/>
        <CustomerList items={items} editItem={editItem} deleteItem={deleteItem}/>
      </div>
    );
  }

function CustomerList({items,editItem,deleteItem}){
    return (
      <div>
        <table style={{width:"100%"}}>
          <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th></th>
            <th></th>
            </tr>
          </thead>
          <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td id={item.id}> {item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td><button onClick={()=>editItem(item.id)} >Edit</button></td>
              <td><button onClick={()=>deleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
}
