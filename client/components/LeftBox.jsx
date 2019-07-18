import React, { useState } from 'react';
import Image from './Image.jsx';
import Thumbnails from './Thumbnails.jsx'
import ItemNo from './ItemNo.jsx';
import Ratings from './Ratings.jsx';
import Recommendations from './Recommendations.jsx'
import QandA from './QandA.jsx';
import Box from './Box.jsx'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*Nested componenets:
Model Number
Name
Main photo
Thumbnails
Rating */
const LeftBox = (props) => {
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };
    
    return (
        
        <div className="col-6">
           
            <ItemNo itemNumber={props.itemNumber} modelNumber={props.modelNumber}/>
            <p className="itemName">{props.name}</p>
            
            <div className="row">
                <Ratings avgRating={props.avgRating} ratings={props.rating}/>
                <Recommendations percentRecommended={props.percentRecommended}/> 
                <QandA />
            </div>
            
            <div className="row"> 
           

                <Thumbnails toggle={toggle} thumbnailImages={props.images.slice(1)} name={props.name} main={props.images[0]} />
                <Image name={props.name}  thumbnailImages={props.images.slice(1)} src={props.images[0]}/>
           
           
            </div>
               
        </div>
    )
};
export default LeftBox;