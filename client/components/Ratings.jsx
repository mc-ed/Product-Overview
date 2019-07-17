import React from 'react';

const Ratings = (props) => {
    const star = '\uECE2';
    const half = '\uECE1';

    let starString = '';
    let avgRating = props.avgRating;
    
    while (avgRating > 0) {
       
        if (avgRating >= 1) {
            
            starString += star;
            avgRating--;
        } else {
            starString += half;
            avgRating = avgRating - .5;
        }    
    }
    
    return (
        <div className="col Ratings">
        
            <p className="ratingsLink">{props.ratings} Ratings</p>
            <p className="icons">{starString}</p>
            <p className="averageRating">{props.avgRating} Average</p>

        </div>
    )
}

export default Ratings;