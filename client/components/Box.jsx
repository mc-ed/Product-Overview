import React, { useState } from 'react';


const Box = (props) => {
    console.log(props)
    
    const changePhoto = (event) => {
        setMainImage(event.target.src)
    } 
    const images = props.thumbnails.map((url) =>
        <img class="thumbnail" onClick={props.toggle} src={url}></img>)
    
   
    const [mainImage, setMainImage] = useState(props.src)
   
    return (
        <div class="container">
            <div class="row">
                <div class="tnList" onClick={changePhoto} class="col-2">{images}</div>
                <img class="col-10" src={mainImage}></img>
            </div>
            
        </div>
    )
}

export default Box