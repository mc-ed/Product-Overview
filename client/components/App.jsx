import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LeftBox from './LeftBox.jsx';
import RightBox from './RightBox.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
            itemNumber: 638991,
            modelNumber: 1954889,
            name: "IRWIN 16-oz Smooth Face Steel Head Fiberglass Framing Hammer",
            ratings: 37,
            avgRating: 4.5,
            percentRecommended: 91,
            imagesURL: "https://binkardfecimages.s3.amazonaws.com/638991/main.jpg",
            thumbnailImages: ["https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail1.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail2.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail3.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail4.png"],
            price: 9.98,
            summary: ["Forged steel head for superior durability", "ProTouch grip for maximum comfort even after prolonged use", "Smooth face leaves fewer marks on surfaces"],
            quantity: 1,
            items: [],
            total: 0,
            modal: false
            
            } 
        
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.typeQuantity = this.typeQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    plusOne(event) {
        this.setState({quantity: this.state.quantity + 1})
    }

    minusOne(event) {
        this.setState({quantity: this.state.quantity - 1})
    }

    typeQuantity (event) {
        let input = event.target.value
        this.setState({quantity: input})
    }

    addToCart (input) {
        let newItems = [];
        let count = this.state.quantity;
        while (count >=0) {
            newItems.push(this.state.name);
            count--;
        }
        this.setState(prevState => ({
            items: [...prevState.items, newItems.join(',')], total: this.state.quantity * this.state.price
          }))

    }

    toggle() {
        
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    render() {
       
        return (
            <div class="row">
                
                <LeftBox toggle={this.toggle} isOpen={this.state.modal} itemNumber={this.state.itemNumber} modelNumber ={this.state.modelNumber} name={this.state.name} ratings={this.state.ratings}
                avgRating={this.state.avgRating} percentRecommended={this.state.percentRecommended}
                imagesURL={this.state.imagesURL}  thumbnailImages={this.state.thumbnailImages}/>
                <RightBox price={this.state.price} summary={this.state.summary} quantity={this.state.quantity}
                plusOne={this.plusOne} minusOne={this.minusOne} typeQuantity={this.typeQuantity} 
                addToCart={this.addToCart}/>
            </div>
            
        )
    }
}

export default App;
