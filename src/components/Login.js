function  Login({history}) {
   var doLogin = ()=>{
      history.push('/home');
   }
    return (
       <div>
          <h2>Login</h2>
          <input placeholder="Username"/><br/><br/>
          <input placeholder="Password"/><br/><br/>
          <input type="button" onClick={doLogin} value="Login"/><br/><br/>
       </div>
    );
}
export default Login; 