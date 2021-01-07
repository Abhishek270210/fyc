import React, { Component } from 'react'

import './custom-button-style.css'

class Custombuttoncomponent extends Component {
    render() {
        const {children,isgooglesignin,...otherProps}=this.props
        return (
            <button className={`${isgooglesignin ? 'google-sign-in-button':''} custom-button`} {...otherProps}>
                {children}
            </button>
        )
    }
}

export default Custombuttoncomponent
