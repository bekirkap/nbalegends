import { useState,Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { data } from '../data/data';
import {Container, Col ,Row} from 'react-bootstrap'

const Legendcard = ({legend}) => {
  const [show, setShow] = useState(false)
  return (
    <Col>    
            <Card className='legendcard d-flex align-content-center justify-content-center ' onClick={()=> setShow(!show)} style={{ width: '18rem' }}>
              {!show ?    <Fragment
              ><Card.Img variant="top" src={legend.img} />
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

  )
}

export default Legendcard