import React, { Component } from 'react'
import Signincomponent from '../../components/sign-in-component/sign-in-component'

import './sign-in-and-sign-up-style.css'

class Signinandsignup extends Component {
    render() {
        return (
            <div className="Signinandsignup">
               <Signincomponent />
            </div>
        )
    }
}

export default Signinandsignup
