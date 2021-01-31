import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesContainer from "../routes/RoutesContainer";
import GoogleLogin from './GoogleLogin'


export default class Login extends Component{
    render(){
        return(
            <div>
            
                
                <h1>Login: </h1>
                <br/>
                <GoogleLogin/>
                <br/>
                <form>
                    <label> Email: 
                        <input name="email" type="email"/>
                    </label>
                    <br/>
                    <label> Password: 
                        <input name="password" type="password"/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <h6>Or did you mean register?...</h6>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        )
    }
}