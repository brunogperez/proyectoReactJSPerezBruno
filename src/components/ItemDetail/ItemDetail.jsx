import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import imagenes from '../../assets/imagenes.js'
import ItemCount from '../ItemCount/ItemCount.jsx'

export const ItemDetail = ({ info }) => {
    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Image src={imagenes[info.id - 1]} fluid />
                <Card.Title>
                    {info.nombre}
                </Card.Title>
                <Card.Text>
                    ${info.precio}
                </Card.Text>
                <ItemCount />
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}

export default ItemDetail