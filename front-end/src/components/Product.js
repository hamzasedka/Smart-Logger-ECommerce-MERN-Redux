import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
  return (

      <Card >
        <Card.Img style={{height:"300px",width:"100%"}} variant="top" src={product.prodcutImage} />
        <Card.Body >
          <Card.Title>{product.productTitle}</Card.Title>
          <Card.Text>
           {product.productDisc}
          </Card.Text>
        </Card.Body>
      </Card>

  )
}

export default Product