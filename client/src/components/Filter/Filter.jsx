import React from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Filter() {
  return (
    <>
      <Card className='mb-4'>
      <Card.Header className='bg-primary text-white fw-bolder'>Filter</Card.Header>
      <Card.Body>
        <Card.Title>Number of Product is 4 </Card.Title>
      <Form.Select className='my-3' aria-label="Default select example">
      <option>Size</option>
      <option value="sm">sm</option>
      <option value="m">M</option>
      <option value="l">l</option>
      <option value="xl">xl</option>
      <option value="2xl">2xl</option>
    </Form.Select>
      <Form.Select className='my-3' aria-label="Default select example">
      <option>Order By</option>
      <option value="Latest">Latest</option>
      <option value="Highest">Highest</option>
      <option value="Lowest">Lowest</option>
      
    </Form.Select>
      </Card.Body>
    </Card>
    </>
  )
}

export default Filter
