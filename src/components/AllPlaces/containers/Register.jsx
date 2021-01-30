import React, { Component } from 'react'
import Navbar from './Navbar'
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { authThunk } from "../../../redux/users/users.actions";

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
            method:"register"
        }
    }
    
    handleSubmit=(event) => {
        event.preventDefault()
        this.props.authThunk(this.state.email,this.state.password,this.state.method)//send the info to the store
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
                <Navbar/>
                <h1>Register</h1>
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
                <br/>
                <h6>Or did you mean login?...</h6>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        )
    }

}
/* const mapStateToProps = (state) =>{
    return{
        getUser:state.getUser
    }
}
 */
const mapDispatch = (dispatch) =>{
    return { 
        auth:(email,password,method) => dispatch(authThunk(email,password,method))
    }
}
export default connect( mapDispatch)(Register)
