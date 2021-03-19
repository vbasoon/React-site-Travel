import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
   return (
      <div>
         <Container
            fluid
            style=
            {{
               backgroundColor: '#212529',
               color: "white"
            }}>
            <Container
               style=
               {{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px'
               }}>
               <span style={{ marginRight: '10px' }}>BVM Corp 2020. </span>
               <span> Сайт створений за допомогою бібілотек React.js i React-bootstrap</span>
            </Container>
         </Container>
      </div >
   )
}

export default Footer
