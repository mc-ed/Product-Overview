import React from 'react';
import Image from './Image.jsx';
import Thumbnails from './Thumbnails.jsx'
import ItemNo from './ItemNo.jsx';
import Ratings from './Ratings.jsx';
import Recommendations from './Recommendations.jsx'
import QandA from './QandA.jsx';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*Nested componenets:
Model Number
Name
Main photo
Thumbnails
Rating */
const LeftBox = (props) => {
    
    return (
        
        <div class="col">
           
            <ItemNo itemNumber={props.itemNumber} modelNumber={props.modelNumber}/>
            <p class="itemName">{props.name}</p>
            <div class="row">
                <Ratings avgRating={props.avgRating} ratings={props.rating}/>
                <Recommendations percentRecommended={props.percentRecommended}/> 
                <QandA />
            </div>
            <div class="row"> 
                <Thumbnails toggle={props.toggle} thumbnailImages={props.thumbnailImages} />
                <Image name={props.name} isOpen={props.isOpen} toggle={props.toggle} src={props.imagesURL}/>
                 
            </div>
               
        </div>
    )
};
export default LeftBox;