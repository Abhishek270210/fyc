import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class HomepageCarousel extends Component {
  render() {
    return (
      <>
        <Carousel className="container py-1">
          <Carousel.Item>
            <img
              className="d-block w-100" height="550px"
              src='https://static.toiimg.com/photo/78170852.cms'
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height="550px"
              src='https://media.bizj.us/view/img/11829100/chipotle-clothes*1200xx1200-675-0-102.jpg'
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height="550px"
              src='https://i2-prod.dailystar.co.uk/incoming/article19032268.ece/ALTERNATES/s1200b/0_GettyImages-854321536.jpg'
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height="550px"
              src='https://www.fragrancex.com/blog/wp-content/uploads/2019/08/GBSiuxtw.jpeg'
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}

export default HomepageCarousel
