import React, { Component } from 'react'

import './custom-button-style.css'

class Custombuttoncomponent extends Component {
    render() {
        const {children,...otherProps}=this.props
        return (
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        )
    }
}

export default Custombuttoncomponent
