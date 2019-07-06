import React from 'react';

const ItemNo = (props) => {
  
   return <div>
      <span class="item itemNo">Item #:</span><span class="itemNo">{props.itemNumber}    </span>
      <span class="item itemNo">     Model #:</span><span class="itemNo">{props.modelNumber}</span>
      </div>
}

export default ItemNo;