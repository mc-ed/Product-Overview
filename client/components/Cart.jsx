import React from 'react';

const Cart = (props) => {
    
    return (
    <div className="row no-gutters Cart">
        <button className="col-4 col-md-2 minusOne" onClick={props.minusOne}>{'\ued5b'}</button>
        <input type="text" className="col-4 col-md-2" onChange={props.typeQuantity} value={props.quantity}/>
        <button className="col-4 col-md-2 plusOne" onClick={props.plusOne}>{'\ued5a'}</button>
        <button className="col-12 col-md-6 addToCart" onClick={props.cartListener}>ADD TO CART</button>
       
    </div>)

}

export default Cart;