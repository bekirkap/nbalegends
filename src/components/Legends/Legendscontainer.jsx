
import Form from 'react-bootstrap/Form'
import { data } from '../data/data';
import Card from 'react-bootstrap/Card';
import {Container, Col ,Row} from 'react-bootstrap'
import { useState,Fragment } from 'react';
const Legendscontainer = () => {
const [show, setShow] = useState(false)
   


  return (
  <div>
    <Form.Control type="search" placeholder="Enter Name" />

        <Container className='mt-3'>
      <Row>
        {data.map((legend) => (
          <Col>    
            <Card onClick={()=> setShow(!show)} style={{ width: '18rem' }}>
              {!show ?    <Fragment
              ><Card.Img variant="top" src={legend.img} />
            <Card.Body>
            <Card.Title>{legend.name}</Card.Title>
            </Card.Body>
            </Fragment>
            :
            <> 
            <Card.Title>{legend.name}</Card.Title>
            <ul>
              {legend.statistics.map(stats => <li className='list-unstyled text-start '>🏀{stats}</li>)}
            </ul> 
            </> 
              }
        
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Legendscontainer