import React, { Component } from 'react'
import './sign-in-component-style.css'
import Inputcomponent from '../input-component/input-component'
import Custombuttoncomponent from '../custom-button/custom-button-component'
import { auth, signinwithgoogle } from '../../firebase/firebase.utils'

 class Signincomponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email:'',
              password:''
         }
     }

     handlesubmit=async(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }
        catch(error){
            console.log(error);
            alert(error);
        }
     }
     handleInputchange=(e)=>{
         const {name,value}=e.target
           this.setState({
              [name]:value
           })
     }
     
    render() {
        const {email,password}=this.state;
        // console.log(email);
        return (
            <div className="Signincomponent">
                <h2>I already have an account</h2>
                <span>Sign-in with your account</span>
                <form onSubmit={this.handlesubmit}>
                    <Inputcomponent type='email' name="email" value={email} label="email" handleInputchange={this.handleInputchange} required   />
                    <Inputcomponent type='password' name="password" value={password} label="password" handleInputchange={this.handleInputchange} required  />
                    <div className="buttons">
                    <Custombuttoncomponent type='submit'>Sign in</Custombuttoncomponent>
                    <Custombuttoncomponent onClick={signinwithgoogle} isgooglesignin >Sign in with google</Custombuttoncomponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signincomponent
