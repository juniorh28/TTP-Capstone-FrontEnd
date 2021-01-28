import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesContainer from "../routes/RoutesContainer";


export default class Login extends Component{
    render(){
        return(
            <div>
                <li>
                    <Link to="/login">
                        <button>Login with GOOGLE</button>
                    </Link>
                </li> 
                <Link to="/signup">
                    <button>Sign-Up</button>
                </Link>
            </div>
        )
    }
}