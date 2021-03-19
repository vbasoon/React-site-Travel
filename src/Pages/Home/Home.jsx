import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import picture from '../../image1.jpg'


const Home = () => {
   return (
      <div>
         <Slider />
         <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>

            </Row>
            <Row className="mt-5">
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>
               <Col>
                  <Card style={{ width: '18rem' }}>

                     <Card.Img
                        variant="top"
                        src={picture} />
                     <Card.Body>
                        <Card.Title>
                           BVM Corp
                        </Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde earum, repudiandae obcaecati esse quibusdam sit quaerat aliquam qui hic quod dignissimos quos sunt blanditiis, praesentium quo? Suscipit non praesentium dolorem.
                        </Card.Text>
                        <Button variant="success">Read More</Button>
                     </Card.Body>

                  </Card>

               </Col>
            </Row >
         </Container>
         <Jumbotron />
         <Container>
            <Row>
               <Col md={7}>
                  <img
                     src={picture}
                     height={400} />
               </Col>
               <Col md={5}>
                  <h2>BVM Corp</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni iure sit nulla. Quam at possimus, officiis incidunt quibusdam itaque unde, ducimus consequuntur natus molestias sunt earum, voluptates doloribus deleniti dicta fugiat ullam aperiam nobis! At, sequi recusandae necessitatibus modi vel natus aliquam nisi id veritatis harum! Dolores, sed unde.</p>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Home
