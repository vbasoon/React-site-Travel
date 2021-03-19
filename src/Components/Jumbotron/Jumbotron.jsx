import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import picture from '../../image1.jpg'
import styled from 'styled-components'

const Styles = styled.div`
.jumbo {
   background: url(${picture}) no-repeat fixed bottom;
   background-size: cover;
   color: #efefef;
   height: 400px;
   position: relative;
   z-index: -2;
}
.overlay {
   background-color: #000;
   opacity: 0.5;
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
}
`;


const Jumbotron = () => (
   <Styles>
      <Jumbo fluid className="jumbo">
         <div className="overlay"></div>
         <Container>
            <h1>BVM Corp</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni iure sit nulla. Quam at possimus, officiis incidunt quibusdam itaque unde, ducimus consequuntur natus molestias sunt earum, voluptates doloribus deleniti dicta fugiat ullam aperiam nobis! At, sequi recusandae necessitatibus modi vel natus aliquam nisi id veritatis harum! Dolores, sed unde.</p>
         </Container>
      </Jumbo>
   </Styles>
)



export default Jumbotron;