
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShareModal from './ShareModal.jsx'

const ShareSave = (props) => {
   //const [clicked, setClicked] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
       
    };
    
    const sendSaveInfo = () => {
        if (props.clickedItems[props.id]) {
            props.clickedItems[props.id] = 0;
        } else {
            props.clickedItems[props.id] = props.id;
        }

        
        window.dispatchEvent(
            new CustomEvent('favorite', {detail: {product_id: props.id, price: props.price, name: props.name, saved: props.clickedItems[props.id]}})
        )
        //setClicked(!clicked);
    }

    return (props.clickedItems[props.id] ?
        <>
        <div className="row ShareSave no-gutters">
            <button onClick={sendSaveInfo} className="col clickedSave"><span className="save clickedHeart">{'\uECE9'}</span><span className="saveshare clickedSave"> SAVE</span></button>
            <button className="col" onClick={toggle}><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Share with a friend</ModalHeader>
                <ModalBody>
                    <ShareModal />                      
                </ModalBody>
            </Modal>
        </div>
        </>
        
        :
        <>
        <div className="row ShareSave no-gutters">
            <button onClick={sendSaveInfo} className="col"><span className="save">{'\uECEA'}</span><span className="saveshare"> SAVE</span></button>
            <button className="col" onClick={toggle}><span className="share">{'\uEEC6'}</span><span className="saveshare"> SHARE</span></button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Share with a friend</ModalHeader>
                <ModalBody>
                    <ShareModal />                      
                </ModalBody>
            </Modal>
        </div>
        </>
    )
}

export default ShareSave;