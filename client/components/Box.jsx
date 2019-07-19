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
    
    const firstHalfOfImages = images.slice(0, Math.ceil(images.length / 2));
    const secondHalfOfImages = images.slice(Math.ceil(images.length / 2))
    
   
    const [mainImage, setMainImage] = useState(props.src);
    const [imageTag, setImageTag] = useState(null);
    const zoomProps = {width: 300, zoomWidth: 250, img: mainImage}
   
    return (images.length > 5 ?
        <div className="container">
            <div className="row">
                <div className="tnList" onClick={changePhoto} className="col-2">{firstHalfOfImages}</div>
                <div className="tnList" onClick={changePhoto} className="col-2">{secondHalfOfImages}</div>
                <ReactImageZoom ref={input => setImageTag(input)} className="col-10 main-modal-image" src={mainImage}{...zoomProps} />   
            </div> 
        </div>
        
        :

        <div className="container">
            <div className="row">
                <div className="tnList" onClick={changePhoto} className="col-2">{images}</div>
                <ReactImageZoom ref={input => setImageTag(input)} className="col-10 main-modal-image" src={mainImage}{...zoomProps} />   
            </div> 
        </div>
    )
}

export default Box