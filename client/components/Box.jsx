import React, { useState } from 'react';


const Box = (props) => {
    console.log(props)
    
    const changePhoto = (event) => {
        setMainImage(event.target.src)
    } 

    const zoomIn = (event) => {
        setImageTag(imageTag.style.width = imageTag.style.width + 100);
        console.log(imageTag.style.width)
    }
    const images = props.thumbnails.map((url) =>
        <img class="thumbnail" onClick={props.toggle} src={url}></img>)
    
   
    const [mainImage, setMainImage] = useState(props.src);
    const [imageTag, setImageTag] = useState(null);

   
    return (
        <div class="container">
            <div class="row">
                <div class="tnList" onClick={changePhoto} class="col-2">{images}</div>
                <img ref={input => setImageTag(input)} class="col-9 main-modal-image" style={{width: 200 + "px", height: 300 +"px"}} src={mainImage}></img>
                <div class="col-1">

                    <button onClick={zoomIn}>{'\u005A'}</button>
                    <button>{'\u004A'}</button>
                    <button>{'\u002F'}</button>
                </div>
            </div>
            
        </div>
    )
}

export default Box