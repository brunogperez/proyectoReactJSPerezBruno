import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial))

    const showToast = () => {
        toast.success('El producto ha sido agregado al carrito!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const addUnidad = () => {
        setCount(count + 1)
    }

    const resUnidad = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <div className='counter'>
                <Button disabled={count <= 1} onClick={resUnidad} variant="danger" > - </Button>
                <span >  {count}  </span>
                <Button disabled={count >= stock} onClick={addUnidad} variant="success" > + </Button>
            </div>
            <div className='btnCounter'>
                <Button disabled={stock <= 0} onClick={() => { onAdd(count); showToast() }} id="btnDetail">Add to cart</Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemCount