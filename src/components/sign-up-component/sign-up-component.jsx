import React, { Component } from 'react'
import './sign-up-component-style.css'
import Inputcomponent from '../input-component/input-component'
import Custombuttoncomponent from '../custom-button/custom-button-component'
import { auth, createnewprofile } from '../../firebase/firebase.utils'

class Signupcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(this.state.displayName);
        const {displayName,email,password,confirmpassword}=this.state;
         if(password !== confirmpassword)
         {
             alert("password's does not match");
             return;
         }
         
         try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
           await createnewprofile(user,{displayName});
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
           })
         }
         catch(error)
         {
             console.log(error);
             alert(error);
         }
    }
    handleInputchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { displayName, email, password, confirmpassword } = this.state;
        return (
            <div className="sign-up-component">
                <h2 className="title">create an account</h2>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Inputcomponent type='text' name='displayName' value={displayName} handleInputchange={this.handleInputchange} label='Display Name' required />
                    <Inputcomponent type='email' name='email' value={email} handleInputchange={this.handleInputchange} label='Email' required />
                    <Inputcomponent type='password' name='password' value={password} handleInputchange={this.handleInputchange} label='Password' required />
                    <Inputcomponent type='password' name='confirmpassword' value={confirmpassword} handleInputchange={this.handleInputchange} label='confirm password' required />
                    <Custombuttoncomponent type='submit' >Sign up</Custombuttoncomponent>
                </form>
            </div>
        )
    }
}

export default Signupcomponent
