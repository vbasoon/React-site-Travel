import React from 'react'
import Slider from '../../Components/Slider/Slider'
import { Container, Row, Col, Card, Button, Jumbotron } from 'react-bootstrap'
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
      </div>
   )
}

export default Home
