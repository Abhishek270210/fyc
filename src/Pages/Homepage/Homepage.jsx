import React, { Component } from 'react'
import './Homepage-style.css'
import Menudiv from '../../components/menudiv-component/Menudiv'
class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
               <Menudiv />
            </div>
        )
    }
}

export default Homepage
