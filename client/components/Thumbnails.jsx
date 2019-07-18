import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box.jsx'

const Thumbnails = (props) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };
    
    const images = props.thumbnailImages.map((url, index) =>
        <img key={index} className="thumbnail" src={url}></img>)


   return (
       <>

    
        <div className="tnList" onClick={toggle} className="col-sm-2 order-2 order-sm-1">{images}</div>
       
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