import React, { Component } from 'react'
import {CardDeck,Card} from 'react-bootstrap'
import first from '../../Carousel-images/card-1.png'
import second from '../../Carousel-images/card-2.png'
import third from '../../Carousel-images/card-3.png'

class HomepageCard extends Component {
    render() {
        return (
            <div className="container my-5">

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={first} height="450px" />
                        <Card.Body>
                            <Card.Title>Item-1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={second} height="450px" />
                        <Card.Body>
                            <Card.Title>Item-2</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={third} height="450px" />
                        <Card.Body>
                            <Card.Title>Item-3</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>

            </div>
        )
    }
}

export default HomepageCard
