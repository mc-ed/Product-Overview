import React, { useState } from 'react';


const Box = (props) => {
   
    
    const changePhoto = (event) => {
        setMainImage(event.target.src)
    } 

    // const zoomIn = (event) => {
    //     setImageTag(imageTag.style.width = imageTag.style.width + 100);
    //     console.log(imageTag.style.width)
    // }
    const images = props.thumbnails.map((url, index) =>
        <img key={index} className="thumbnail" onClick={props.toggle} src={url}></img>)
    
   
    const [mainImage, setMainImage] = useState(props.src);
    const [imageTag, setImageTag] = useState(null);

   
    return (
        <div className="container">
            <div className="row">
                <div className="tnList" onClick={changePhoto} className="col-2">{images}</div>
                <img ref={input => setImageTag(input)} className="col-9 main-modal-image" style={{width: 200 + "px", height: 300 +"px"}} src={mainImage}></img>
                {/* <div className="col-1">

                    <button onClick={zoomIn}>{'\u005A'}</button>
                    <button>{'\u004A'}</button>
                    <button>{'\u002F'}</button>
                </div> */}
            </div>
            
        </div>
    )
}

export default Box