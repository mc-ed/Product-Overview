import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {useState} from 'react'
const Image = (props) => {  
  
    const [modal, setModal] = useState(false);
    
    const toggle = () => {
        setModal(!modal)
    };

    
    return (

        <div className='col-sm-10'>
            <img className="image-main" onClick={toggle} src={props.src}></img>
        </div>
    )
    
      
  }

  export default Image;