import React, { Component } from 'react'

import './custom-button-style.css'

class Custombuttoncomponent extends Component {
    render() {
        const {children,isgooglesignin,inverted,...otherProps}=this.props
        return (
            <button className={`${inverted ? 'inverted':''} ${isgooglesignin ? 'google-sign-in-button':''} custom-button`} {...otherProps}>
                {children}
            </button>
        )
    }
}

export default Custombuttoncomponent
