import React from 'react';
import Price from './Price.jsx';
import Description from './Description.jsx';
import Cart from './Cart.jsx'
import ShareSave from './ShareSave.jsx'
import Availability from './Availability.jsx'

/*Nested componenets:
Price
Snippet description
Add quantity
Add to cart
Favorite */

const RightBox = (props) => {
    return (
        <div className="col-6 RightBox columnAdjust">
            <Price price={props.price}/>
            <Description summary={props.summary}/>
            <Cart quantity={props.quantity} plusOne={props.plusOne} 
            minusOne={props.minusOne} typeQuantity={props.typeQuantity} addToCart={props.addToCart} cartListener={props.cartListener}/>
            <ShareSave clickedItems={props.clickedItems} name={props.name} id={props.id} price={props.price}/>
            <Availability />
            
        </div>
    )
};

export default RightBox;