import React from "react";
import '../../assets/css/login/login.css';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        console.log("click login");
    }

    render(){
        return(
            <div className="loginBackground" onClick={this.login}>
                LOGIN
            </div>
        );
    }
}

export default Login;