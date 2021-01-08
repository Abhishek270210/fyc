import React, { Component } from 'react'
import './Menuitem-style.css'
import {withRouter} from 'react-router-dom'

class Menuitem extends Component {
    render() {
        const {title,imageUrl,size,linkUrl,history,match}=this.props;
        const style={
            backgroundImage:`url(${imageUrl})`
        }
        return (
            <div className={`${size} menu-item`} onClick={()=>{
                history.push(`${match.url}${linkUrl}`)
            }}>
                <div className="background-image" style={style}>
                 
                </div>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Menuitem);
