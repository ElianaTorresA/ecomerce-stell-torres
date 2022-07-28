import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <Button variant="primary">Ver detalle</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Item