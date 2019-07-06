import React from 'react';

const Ratings = (props) => {
    return (
        <div class="col Ratings">
            <p class="ratingsLink">{props.ratings} Ratings</p>
            <p class="icons stars">{'\uECE2'}{'\uECE2'}{'\uECE2'}{'\uECE2'}{'\uECE1'}</p>
            <p class="averageRating">{props.avgRating} Average</p>

        </div>
    )
}

export default Ratings;