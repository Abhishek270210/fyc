import React, { Component } from 'react'

import './input-component-style.css'

 class Inputcomponent extends Component {
    render() {
        const {handleInputchange,label,...otherprops}=this.props
        return (
            <div className="Inputcomponent">
                <input className="form-input" onChange={handleInputchange} {...otherprops}  />
                {
                    label ? <label className={`${otherprops.value.length ? 'shrink':''}  form-input-label`} >{label}</label> :null
                }
            </div>
        )
    }
}

export default Inputcomponent
