import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import Footer from 'react-footer-comp'

class Footercomp extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="mb-0">
                    <Container>
                        <h1>FIND YOUR CHOICE</h1>
                        <p>
                            E-commerce is revolutionizing the way we all shop in today's time.Why do you want to hop from one store to another in search of the
                            product and price when you can find here the latest updates of items available at store in just single click? FindYourChoice presents
                            you find all the new availabile products  and offers update atthe home in just one click. This is an initiative where you can get all
                            the details of items available and current offers about the store before visiting. Why not just get your shopping list ready before
                            buying?Isn't it amazing and more safe especially in the times like these? Here, you can check the  MRP of all the latest available
                            goods of the our store. We are taking a step forward to make you experience better and safe with our services.Because we care about
                            our customers. We are looking forward to improve and evolve more with time and to make your experience and lives more better and
                            simpler.
    </p>
                    </Container>
                </Jumbotron>
                <Footer copyrightIcon={true} copyrightText={"Find your choice"}  bgColor={"black"} />
            </div>
        )
    }
}

export default Footercomp
