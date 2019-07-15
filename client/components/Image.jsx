
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box.jsx'
const Image = (props) => {  

   console.log(props)

    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };
    

    
    return (

        <div>
            <Button color="none" onClick={toggle}>
                <img class="col-10" src={props.src}></img>
            </Button>  
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
                <ModalBody>
                   <Box src={props.src} />                      
                </ModalBody>
            </Modal>
        </div>
    )
    
      
  }

  export default Image;