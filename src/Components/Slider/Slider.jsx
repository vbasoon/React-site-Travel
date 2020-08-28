import React from 'react'
import { Carousel } from 'react-bootstrap'
import picture from '../../image1.jpg'

const Slider = () => {
   return (
      <div>
         <Carousel>

            <Carousel.Item style={{ "height": "760px" }}>
               <img
                  className="d-block w-100"
                  src={picture}
                  alt="palm leaf"
               />
               <Carousel.Caption>
                  <h3>Jungle</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, atque natus corporis ipsum veniam vel dolorum quidem odio, iste rerum pariatur! Adipisci quaerat veritatis numquam ullam, et sunt assumenda cumque.</p>
                  <span>Photo by <a href="https://unsplash.com/@sh1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">SHAHBAZ SHAIKH</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ "height": "760px" }}>
               <img
                  className="d-block w-100"
                  src={picture}
                  alt="palm leaf"
               />
               <Carousel.Caption>
                  <h3>Jungle</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, atque natus corporis ipsum veniam vel dolorum quidem odio, iste rerum pariatur! Adipisci quaerat veritatis numquam ullam, et sunt assumenda cumque.</p>
                  <span>Photo by <a href="https://unsplash.com/@sh1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">SHAHBAZ SHAIKH</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ "height": "760px" }}>
               <img
                  className="d-block w-100"
                  src={picture}
                  alt="palm leaf"
               />
               <Carousel.Caption>
                  <h3>Jungle</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, atque natus corporis ipsum veniam vel dolorum quidem odio, iste rerum pariatur! Adipisci quaerat veritatis numquam ullam, et sunt assumenda cumque.</p>
                  <span>Photo by <a href="https://unsplash.com/@sh1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">SHAHBAZ SHAIKH</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
               </Carousel.Caption>
            </Carousel.Item>

         </Carousel>
      </div>
   )
}

export default Slider
