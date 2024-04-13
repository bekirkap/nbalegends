import Legendcard from './Legendcard';
import Form from 'react-bootstrap/Form'
import { data } from '../data/data';
import Card from 'react-bootstrap/Card';
import {Container, Col ,Row} from 'react-bootstrap'
import { useState,Fragment } from 'react';



const Legendscontainer = () => {
const [search,setsearch] = useState('')
const handleChange = (e) =>{
  setsearch(e.target.value);
}
const filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(search.trim().toLowerCase()))


  return (
  <div className='legendsdiv'>
    <Form.Control type="search" placeholder="Enter Name" onChange={handleChange}/>

      <Container className='mt-3 rounded-4 p-3'>
      <Row className='justify-content-center '>
        {filteredData.map((legend) => (
          
        <Legendcard legend={legend} key={legend.name} ></Legendcard>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Legendscontainer