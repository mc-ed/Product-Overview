import React from 'react';

const Ratings = (props) => {
    const star = '\uECE2';
    const half = '\uECE1';

    const starString;
    const avgRating = props.avgRating;
    
    while (avgRating > 0) {
        if (Math.floor(avgRating) === avgRating) {
            starString += star;
            avgRating --;
        } else {
            starString += half;
            avgRating = avgRating - .5;
        }    
    }
    
    
    return (
        <div class="col Ratings">
        
            <p class="ratingsLink">{props.ratings} Ratings</p>
            <p class="icons stars">{starString}</p>
            <p class="averageRating">{props.avgRating} Average</p>

        </div>
    )
}

export default Ratings;