import React, { Component } from 'react'
import './Homepage-style.css'
import Menudiv from '../../components/menudiv-component/Menudiv'
import HomeJumbotron from '../../components/HomepageJumbotron/HomepageJumbotron'
import HomepageCarousel from '../../components/HomepageCarousel/HomepageCarousel'
import HomepageCard from '../../components/HomepageCard/HomepageCard'


class Homepage extends Component {
    render() {
        return (
            <div className="homepage-outerdiv">
                 <HomeJumbotron/>
             <HomepageCarousel/>
            <div className="homepage-innerdiv">
               <Menudiv />
            </div>
            <HomepageCard/>
            </div>
        )
    }
}

export default Homepage
