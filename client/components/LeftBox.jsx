import React from 'react';
import Image from './Image.jsx';
import ItemNo from './ItemNo.jsx';
import Ratings from './Ratings.jsx';
import Recommendations from './Recommendations.jsx'
import QandA from './QandA.jsx';
/*Nested componenets:
Model Number
Name
Main photo
Thumbnails
Rating */
const LeftBox = (props) => {
    
    return (
        <div class="col">
            <ItemNo itemNumber={props.itemNumber} modelNumber={props.modelNumber}/>
            <p class="itemName">{props.name}</p>
            <div class="row">
                <Ratings avgRating={props.avgRating} ratings={props.rating}/>
                <Recommendations percentRecommended={props.percentRecommended}/> 
                <QandA />
            </div>
            <Image src={props.imagesURL} style={{width: '100%'}}/>     
        </div>
    )
};
export default LeftBox;