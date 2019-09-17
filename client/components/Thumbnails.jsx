import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box.jsx';

const Thumbnails = (props) => {
    const [modal, setModal] = useState(false);
    const [mainImage, setMainImage] = useState(props.main)

    const toggle = () => {
        setModal(!modal)
        if (!event.target.src){
            setMainImage(props.main)
        } else {
            setMainImage(event.target.src)
        }

    };

    const images = props.thumbnailImages.map((url, index) =>
        <img key={index} className="thumbnail" data-index={index} src={url}></img>
    )

    const numberMore = (array) => {
        if (array.length > 6) {
            return (
                <span onClick={toggle} className="moreThumbnails">+{array.length - 6} More</span>
            )
        }
    }

   return (images.length > 0 ?
       <>
        <div className="tnList" onClick={toggle} className="col-sm-2 order-2 order-sm-1">
            {images.slice(0, 6)} {numberMore(images)}
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
            <ModalBody>
               <Box src={mainImage} thumbnails={props.thumbnailImages}/>
            </ModalBody>
        </Modal>
       </>
       :
       <>
        <div className="tnList" onClick={toggle} className="col-sm-0 order-2 order-sm-1">
            {images.slice(0, 6)} {numberMore(images)}
        </div>

       <Modal isOpen={modal} toggle={toggle}>
           <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
           <ModalBody>
              <Box src={mainImage} thumbnails={props.thumbnailImages}/>
           </ModalBody>
       </Modal>
      </>
    )
}

export default Thumbnails;