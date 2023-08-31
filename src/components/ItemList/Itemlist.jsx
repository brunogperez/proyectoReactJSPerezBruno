import React from 'react'
import Item from '../Item/Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const ItemList = ({ data = [] }) => {
    return (
        <Container>
            <Row>
                {data.map(product => <Item key={product.id} info={product} />)}
            </Row>
        </Container>

    );
}

export default ItemList;