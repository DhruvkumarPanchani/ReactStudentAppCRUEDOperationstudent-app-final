var customers =[
     {id:1,name:"Vivek",email:"vivek@abc.com",phone:'9724232344',address:'Gujarat, India'},
     {id:2,name:"Speeka",email:"sipeeks@abc.com",phone:'7878787837',address:'Gujarat, India'},
     {id:3,name:"Pari",email:"pari@abc.com",phone:'7878787837',address:'Ahmedabad, India'}
 ];

 export var getCustomers = () =>{
     return customers;
 }

 export var addCustomer = (customer) =>{
    customers.push(customer);
}

export var deleteCustomer = (customer) =>{
    var list = customers.filter((item)=>(item.id != customer.id))
    customers = list;
}
export var getCustomerById = (id) =>{
    var list = customers.filter((item)=>(item.id == id))
    if(list.length > 0){
        return list[0];
    }else{
        return {};
    }
}
export var updateCustomer = (customer) =>{
    for(var i =0 ; i<customers.length; i++){
        if(customers[i].id == customer.id){
            customers[i] = customer;
            break;
        }
    }
}