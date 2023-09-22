

const ItemCount = ({cantidad, handleRestar , handleSumar, handelAgregar}) => {


    return (
    <div>
        <div className='item-count'>
            <button onClick ={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick ={handleSumar}>+</button>
        </div>
            <button className='agregar-al-carrito'onClick={handelAgregar}>agregar al carrito</button>

    </div>
    )
}

export default ItemCount