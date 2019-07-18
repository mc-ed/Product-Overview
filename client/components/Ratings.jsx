import React from 'react';

const Ratings = (props) => {
    //set array of empty stars
    const getStarString = (num) => {
    
        let counter = num;
        const starString = ['\uECE0', '\uECE0', '\uECE0', '\uECE0', '\uECE0'];
        
        
        
        let stringPointer = 0
        //loop through size of avg rating
        while (counter > 0 && stringPointer <= 5) {
            
            //if the remaining rating is a larger than 0 but less than 1
            if (counter < 1) {
                //replace current empty stars with a half star
                starString[stringPointer] = '\uECE1';
                counter = 0
                //return empty stars.join
            }
            //if the remaining rating is greater or equal to 1
            if (counter >= 1) {
                //replace current empty stars with a full star
                starString[stringPointer] = '\uECE2';
                //decrement avg rating
                counter--;
                stringPointer++;
            }
        }
        
        return starString.join('');
    }
    
    
    
    return (
        <div className="col Ratings">
        
            <p className="ratingsLink">{props.ratings} Ratings</p>
            <p className="icons">{getStarString(props.avgRating)}</p>
            <p className="averageRating">{props.avgRating} Average</p>

        </div>
    )
}

export default Ratings;