import React from 'react';

const Thumbnails = (props) => {
    console.log(props.thumbnailImages)
    const images = props.thumbnailImages.map((url) =>
        <img class="thumbnail" src={url}></img>)
   return (<div class="tnList" class="col-2">{images}</div>)
}

export default Thumbnails