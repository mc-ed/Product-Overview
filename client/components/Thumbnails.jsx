import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box.jsx'

const Thumbnails = (props) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };
    
    const images = props.thumbnailImages.map((url) =>
        <img class="thumbnail" src={url}></img>)


   return (
       <>

    
        <div class="tnList" onClick={toggle} class="col-2">{images}</div>
       
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
            <ModalBody>
               <Box src={props.main} thumbnails={props.thumbnailImages}/>                      
            </ModalBody>
        </Modal>

       </>
    )
}

export default Thumbnails