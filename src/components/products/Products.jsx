import React from 'react'
import iphone from '../../images/iphone.png'
import ipad from '../../images/ipad.png'
import NintendoSwitch from '../../images/NintendoSwitch.png'
import PcGamer from '../../images/PcGamer.png'
import Playstation from '../../images/Playstation.png'
import './Products.css'
import {Card , Button} from 'react-bootstrap'
const Products = () => {
    const elementList = [{name:"Iphone",description:"Hello World",img:iphone}, 
        {name:"Ipad",description:"Hello World",img:ipad}, 
        {name:"Pc Gamer",description:"Hello World",img:PcGamer}, 
        {name:"Nintendo Switch",description:"Hello World",img:NintendoSwitch}, 
        {name:"Playstation 5",description:"Hello World",img:Playstation}];
    const listItems = elementList.map((element,index) =>
    <div className='Item' key={index}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.img} />
        <Card.Body>
            <Card.Title>{element.name}</Card.Title>
                <Card.Text>
                     {element.description}
                </Card.Text>
        <Button variant="success">Purchase</Button>
        </Card.Body>
  </Card>
  </div>
    );
  return (
    <div className="Products">
    {listItems}
    </div>
  )
}

export default Products