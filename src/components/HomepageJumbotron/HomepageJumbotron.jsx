import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class HomeJumbotron extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="mt-5 mb-0 container-flex">
                    <h1>Hello, Guest!</h1>
                    <p>
                        This website is made using React,Redux and firbase.It allows users to sign in indivisually<br></br> and then add items to there cart and make
    more convinent by increasing or decreasing<br></br> the items in the cart as well and then to checkout to buy the items in their cart.
    <br></br>
   Please visit the complete website for further functions of the website.....
  </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default HomeJumbotron;

