
import React, { useState } from 'react';

const ShareSave = (props) => {
    const [clicked, setClicked] = useState(false);
    
    const sendSaveInfo = () => {
        console.log(!clicked)
        window.dispatchEvent(
            new CustomEvent('favorite', {detail: {product_id: props.SS, price: props.price, name: props.name, saved: clicked}})
        )
        setClicked(!clicked);
    }
    return (clicked ?
        <div className="row ShareSave no-gutters">
            <button onClick={sendSaveInfo} className="col clickedSave"><span className="save clickedHeart">{'\uECE9'}</span><span className="saveshare clickedSave"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
        :
        <div className="row ShareSave no-gutters">
            <button onClick={sendSaveInfo} className="col"><span className="save">{'\uECEA'}</span><span className="saveshare"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
    )
}

export default ShareSave;