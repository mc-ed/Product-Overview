import React from 'react';

const ShareSave = () => {
    return (
        <div className="row ShareSave no-gutters">
            <button className="col"><span className="save">{'\uECEA'}</span><span className="saveshare"> SAVE</span></button>
            <button className="col"><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
        </div>
    )
}

export default ShareSave;