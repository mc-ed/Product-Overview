import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import LeftBox from './LeftBox.jsx';
import RightBox from './RightBox.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            SS: 1,
            itemNumber: 638991,
            modelNumber: 1954889,
            name: "IRWIN 16-oz Smooth Face Steel Head Fiberglass Framing Hammer",
            ratings: 37,
            avgRating: 4.5,
            percentRecommended: 91,
            
            images: [" https://binkardfecimages.s3.amazonaws.com/638991/main.jpg", "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail1.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail2.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail3.jpg",
                "https://binkardfecimages.s3.us-east-2.amazonaws.com/638991/thumbnail4.png"],
            price: 9.98,
            summary: ["Forged steel head for superior durability", "ProTouch grip for maximum comfort even after prolonged use", "Smooth face leaves fewer marks on surfaces"],
            quantity: 1,
            items: [],
            total: 0,
            
            } 
        
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.typeQuantity = this.typeQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.getItems = this.getItems.bind(this);
        this.getRatings = this.getRatings.bind(this);
      
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

    componentDidMount () {
        
       this.getItems();
       this.getRatings()
       window.addEventListener('product', e => {
           const SS = e.detail.product_id;
           this.setState({ SS }, () => {
               this.getItems()
               this.getRatings()
            })
       })
   }

   getRatings () {
      
       axios.get(`http://ec2-18-225-6-113.us-east-2.compute.amazonaws.com/api/stats/${this.state.SS}`)
        .then(results => 

            this.setState(
               {
               ratings: results.data.reviewStats.reviewCount,
                avgRating: results.data.reviewStats.averageStars,
                percentRecommended: results.data.reviewStats.percentRecommended
                }
               )
        )
   }

   getItems () {
       const SS = this.state.SS;
        
    
       axios.get(`/${SS}`)
       .then(results => {
           
           const editedURLs = results.data.largeImages.filter(url => url.slice(-3) === 'jpg')
           
           const items = editedURLs.map((file) =>{
               
               return `https://binkardfecimages.s3.us-east-2.amazonaws.com/FECPhotos/${results.data.SS}/${file}`
            })
           
           this.setState({
           SS: results.data.SS,
           
           itemNumber: results.data.itemNumber,
           modelNumber: results.data.modelNumber,
           name: results.data.name,
           ratings: 'chris API',
           avgRating: 'chris API',
           percentRecommended: 'chrisAPI',
           
           images: items,
           price: results.data.price,
           summary: results.data.summary,
            
           quantity: 1,
           items: [],
           total: 0,

            })
        }).catch(err => console.log(err))
   };
   
    render() {
       
        return (
            <div class="row">
                
                <LeftBox itemNumber={this.state.itemNumber} modelNumber ={this.state.modelNumber} name={this.state.name} ratings={this.state.ratings}
                avgRating={this.state.avgRating} percentRecommended={this.state.percentRecommended}
                images={this.state.images}/>
                <RightBox price={this.state.price} summary={this.state.summary} quantity={this.state.quantity}
                plusOne={this.plusOne} minusOne={this.minusOne} typeQuantity={this.typeQuantity} 
                addToCart={this.addToCart}/>
            </div>
            
        )
    }
}

export default App;
