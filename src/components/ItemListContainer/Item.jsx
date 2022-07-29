import { prettyDOM } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {name, price, stock, image} = item
    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    ${price}
                    <br />
                    Stock: {stock}
                </Card.Text>
                    <Link to={'/detalle ${item.id}'}>
                        <Button variant="primary">Ver detalle</Button>
                    </Link>
                
            </Card.Body>
        </Card>
    </div>
    )
}

export default Item