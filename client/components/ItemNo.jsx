import React from 'react';

const ItemNo = (props) => {

   return
      <div>
         <span className="item itemNo">Item #:</span>
         <span className="itemNo">{props.itemNumber}</span>
         <span className="item itemNo">     Model #:</span>
         <span className="itemNo">{props.modelNumber}</span>
      </div>
}

export default ItemNo;