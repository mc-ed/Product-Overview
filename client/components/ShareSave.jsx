
import React, { useState } from 'react';

const ShareSave = (props) => {
    const [clicked, setClicked] = useState(false);
    
    const sendShareInfo = () => {
        
        window.dispatchEvent(
            new CustomEvent('favorite', {detail: {product_id: props.SS, price: props.price, name: props.name}})
        )
        setClicked(true);
    }
    return (clicked ?
        <div className="row ShareSave no-gutters">
            <button className="col clickedSave"><span className="save clickedHeart">{'\uECE9'}</span><span className="saveshare clickedSave"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
        :
        <div className="row ShareSave no-gutters">
            <button onClick={sendShareInfo} className="col"><span className="save">{'\uECEA'}</span><span className="saveshare"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
    )
}

export default ShareSave;