
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box.jsx'
const Image = (props) => {  
    // const images = props.thumbnailImages.map((url) =>
    //     <img class="thumbnail" src={url}></img>)
 
    // const [thumbnails, setThumbnails] = useState(images)
    
    

    
    return (

        <div>
            
                <img class="col-10" src={props.src}></img>
          
            
        </div>
    )
    
      
  }

  export default Image;