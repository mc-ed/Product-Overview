import React from 'react';

const Cart = (props) => {

    if (props.quantity < 2) {
        return (
            <div className="row no-gutters Cart">
                <span className="quantity col-sm-6">
                    <button className="col-3 minusOne-gray">{'\ued5b'}</button>
                    <input type="text" className="col-3" onChange={props.typeQuantity} value={props.quantity}/>
                    <button className="col-3 plusOne" onClick={props.plusOne}>{'\ued5a'}</button>
                </span>
                <span className="cartButton col-sm-6">
                    <button className="col-12 addToCart" onClick={props.cartListener}>ADD TO CART</button>
                </span>
       
            </div>

        )
    }
    
    return (
        <div className="row no-gutters Cart">
            <span className="quantity col-sm-6">
                <button className="col-3 minusOne" onClick={props.minusOne}>{'\ued5b'}</button>
                <input type="text" className="col-3" onChange={props.typeQuantity} value={props.quantity}/>
                <button className="col-3 plusOne" onClick={props.plusOne}>{'\ued5a'}</button>
            </span>
            <span className="cartButton col-sm-6">
                <button className="col-12 addToCart" onClick={props.cartListener}>ADD TO CART</button>
            </span>
        
        </div>
    )

}

export default Cart; 