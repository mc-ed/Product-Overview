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
            itemNumber: 0,
            modelNumber: "",
            name: "",
            ratings: 37,
            avgRating: 4.5,
            percentRecommended: 91,
            
            images: [],
            price: 0,
            summary: [],
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
        this.cartListener = this.cartListener.bind(this);
      
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

    cartListener (event) {
        window.dispatchEvent(new CustomEvent('cart', {detail:{
            name: this.state.name,
            id: this.state.SS,
            quantity: this.state.quantity,
            price: this.state.quantity
        }}))
    
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
        .catch(err => console.log(err))
   }

   getItems () {
       const SS = this.state.SS;
        
    
       axios.get(`http://ec2-18-188-213-241.us-east-2.compute.amazonaws.com/${SS}`)
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
           price: results.data.price.toLocaleString("en-US", {style: "currency", currency: "USD"}).slice(1),
           summary: results.data.summary,
            
           quantity: 1,
           items: [],
           total: 0,

            })
        }).catch(err => console.log(err))
   };
   
    render() {
       
        return (
            <div className="row">
                
                <LeftBox itemNumber={this.state.itemNumber} modelNumber ={this.state.modelNumber} name={this.state.name} ratings={this.state.ratings}
                avgRating={this.state.avgRating} percentRecommended={this.state.percentRecommended}
                images={this.state.images}/>
                <RightBox price={this.state.price} summary={this.state.summary} quantity={this.state.quantity}
                plusOne={this.plusOne} minusOne={this.minusOne} typeQuantity={this.typeQuantity} 
                addToCart={this.addToCart} cartListener={this.cartListener}/>
            </div>
            
        )
    }
}

export default App;
