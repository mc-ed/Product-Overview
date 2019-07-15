import React from 'react';

const Thumbnails = (props) => {
    
    const images = props.thumbnailImages.map((url) =>
        <img class="thumbnail" onClick={props.toggle} src={url}></img>)
   return (<div class="tnList" class="col-2">{images}</div>)
}

export default Thumbnails