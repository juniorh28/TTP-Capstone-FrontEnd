import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import RoutesContainer from "../routes/RoutesContainer";
import GoogleLogin from './GoogleLogin'
import { authThunk,getUser,loginUser,loginUserThunk } from "../../../redux/users/users.actions";

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
        }
    }
    
    handleSubmit=(event) => {
        event.preventDefault()
        console.log(event)
        this.props.loginUserThunk(this.state.email,this.state.password)//send the info to the store
        this.setState({
            password:"",
            email:"",
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render(){
        return(
            <div> 
                <h1>Login: </h1>
                <br/>
                <GoogleLogin/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: 
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required/>
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

const mapStateToProps = (state) =>{
    return{
        loginUserThunk:state.loginUserThunk
    }
}
 
const mapDispatch = dispatch =>{
    return { 
        loginUserThunk:(email,password) => dispatch(loginUserThunk(email,password))
    }
}
export default connect(mapStateToProps,mapDispatch)(Login)