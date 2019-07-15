import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Image extends Component {  
    constructor(props) {
        super(props);
        
        this.state = {
            name: "IRWIN 16-oz Smooth Face Steel Head Fiberglass Framing Hammer",
            imagesURL: "https://binkardfecimages.s3.amazonaws.com/638991/main.jpg",
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }

    render() {
        return (
        <div>
            <Button color="none" onClick={this.toggle}>
                <img class="col-10" src={this.state.imagesURL}></img>
            </Button>  
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
            </Modal>
        </div>
        )
    }
      
  }

  export default Image;