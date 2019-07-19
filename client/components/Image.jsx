import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {useState} from 'react'
const Image = (props) => {  
  
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };

    
    return (props.thumbnailImages.length > 0 ?

        <div className='col-sm-10 order-sm-1'>
            <img className="image-main" onClick={toggle} src={props.src}></img>
        </div>
        :
        <div className='col-sm-12 order-sm-1'>
            <img className="image-main" onClick={toggle} src={props.src}></img>
        </div>
    )
    
      
  }

  export default Image;