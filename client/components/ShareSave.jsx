import React from 'react';

const ShareSave = () => {

    const sendShareInfo = () => {
        window.dispatchEvent(
            new CustomEvent('favorite', {detail: {product_id: props.SS, price: props.price, name: props.name}})
        )
    }
    return (
        <div className="row ShareSave no-gutters">
            <button onClick={sendShareInfo} className="col"><span className="save">{'\uECEA'}</span><span className="saveshare"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
    )
}

export default ShareSave;