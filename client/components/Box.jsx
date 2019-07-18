import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom'

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
    const zoomProps = {width: 300, zoomWidth: 250, img: mainImage}
   
    return (
        <div className="container">
            <div className="row">
                <div className="tnList" onClick={changePhoto} className="col-2">{images}</div>
                {/* <img ref={input => setImageTag(input)} className="col-9 main-modal-image" style={{width: 200 + "px", height: 300 +"px"}} src={mainImage}></img> */}
                <ReactImageZoom ref={input => setImageTag(input)} className="col-10 main-modal-image" src={mainImage}{...zoomProps} />
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