import React from 'react';

const Cart = (props) => {
    
    return (
    <div class="row Cart">
        <button class="col-2 minusOne" onClick={props.minusOne}>{'\ued5b'}</button>
        <input type="text" class="col-2" onChange={props.typeQuantity} value={props.quantity}/>
        <button class="col-2 plusOne" onClick={props.plusOne}>{'\ued5a'}</button>
        <button class="col-6 addToCart" onClick={props.addToCart}>ADD TO CART</button>
       
    </div>)

}

export default Cart;