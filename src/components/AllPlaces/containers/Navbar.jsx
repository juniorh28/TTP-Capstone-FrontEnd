import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import RoutesContainer from "../routes/RoutesContainer";
import Login from './Login'
import '../views/styles/Navbar.css'
import UserInfo from './UserInfo'
export default class Navbar extends Component{
    state={
        isLoggedin:false
    }
    

    loggedIn = () => {
        if(this.state.isLoggedin){
           return(
               <p>sup</p>
           )
        }
    }

    render(){
        return(
           <nav className="navbar">
               
               <ul>
                   <li>
                       <Link to="/">
                           <button>Home</button>
                       </Link>
                    </li>
                    {this.state.isLoggedin ? <UserInfo/> : <Login/> }
               </ul>
               
           </nav>
        )
    }
}