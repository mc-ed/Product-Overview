import React from 'react';

const Price = (props) => {
    return (
        <div className="Price">
            <span className="dollar">$</span>
            <span className="price">{props.price}</span>
        </div>
    )
}

export default Price;