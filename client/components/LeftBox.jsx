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
                <Thumbnails toggle={props.toggle} thumbnailImages={props.images.slice(1)} />
                <Image name={props.name}  thumbnailImages={props.images.slice(1)} src={props.images[0]}/>
            </Button>
                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
                <ModalBody>
                   <Box src={props.images[0]} thumbnails={props.images.slice(1)}/>                      
                </ModalBody>
            </Modal>
            </div>
               
        </div>
    )
};
export default LeftBox;