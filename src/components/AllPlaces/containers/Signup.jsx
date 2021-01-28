import React, { Component } from 'react'
import Navbar from '../containers/Navbar'
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class Signup extends Component{
    state={
        firstName:"",
        lasstName:"",
        password:"",
        email:"",
        img:""
    }

    handleSubmit=(e)=>{
        this.setState({
            //send the info to the store
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Sign-Up</h1>
                <form onSubmit="#">
                    <label>First Name: 
                        <input name="firstName" type="text" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <label>Last Name: 
                        <input name="lastName" type="text" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <label>Email: 
                        <input name="email" type="email" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input name="password" type="password" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <label>Image Url: 
                        <input name="user-img" type="img"/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <h6>Or did you mean login?...</h6>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        )
    }
}
