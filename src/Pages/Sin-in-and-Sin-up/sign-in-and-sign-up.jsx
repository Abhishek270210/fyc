import React, { Component } from 'react'
import Signincomponent from '../../components/sign-in-component/sign-in-component'
import Signupcomponent from '../../components/sign-up-component/sign-up-component'

import './sign-in-and-sign-up-style.css'

class Signinandsignup extends Component {
    render() {
        return (
            <div className="Signinandsignup">
               <Signincomponent />
               <Signupcomponent />
            </div>
        )
    }
}

export default Signinandsignup
