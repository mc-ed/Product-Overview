import React from 'react';

const Price = (props) => {
   return (<div class="Price"><span class="dollar">$</span>
        <span class="price">{props.price}</span>
    </div>)
}

export default Price;