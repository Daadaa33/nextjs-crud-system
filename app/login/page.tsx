import React from "react";
import LoginForm from "../_components/LoginForm";

const Login : React.FC = async () => {
  
    const response  = await fetch('http://localhost:3000/api/signup', {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data);
    
   


  return (
    <div>
        <LoginForm />
    </div>   
  );
}

export default Login