import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const addUnidad = () => {
        setCounter(counter + 1)
    }

    const resUnidad = () => {
        (counter > 1) && setCounter(counter - 1)
    }

    return (
        <>
            <Button onClick={resUnidad} variant="danger" > - </Button>
            <span >  {counter}  </span>
            <Button onClick={addUnidad} variant="success" > + </Button>
        </>
    )
}

export default ItemCount