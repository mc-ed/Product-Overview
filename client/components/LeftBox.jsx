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
        
        <div class="col">
           
            <ItemNo itemNumber={props.itemNumber} modelNumber={props.modelNumber}/>
            <p class="itemName">{props.name}</p>
            <div class="row">
                <Ratings avgRating={props.avgRating} ratings={props.rating}/>
                <Recommendations percentRecommended={props.percentRecommended}/> 
                <QandA />
            </div>
            <div class="row"> 
            <Button color="none" onClick={toggle}>
                <Thumbnails toggle={props.toggle} thumbnailImages={props.thumbnailImages} />
                <Image name={props.name}  thumbnailImages={props.thumbnailImages} src={props.imagesURL}/>
            </Button>
                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
                <ModalBody>
                   <Box src={props.imagesURL} thumbnails={props.thumbnailImages}/>                      
                </ModalBody>
            </Modal>
            </div>
               
        </div>
    )
};
export default LeftBox;