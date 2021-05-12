import React, { Component } from 'react'
import Contactcomponent from '../../components/contact-component/contact-component'
import './contact-style.css'

 class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
                <Contactcomponent/>
            </div>
        )
    }
}

export default Contact
