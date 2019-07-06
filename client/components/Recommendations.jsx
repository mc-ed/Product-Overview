import React from 'react';

const Recommendations = (props) => {
    return (
        <div class="col Recommendations">
            <p class="recNum">{props.percentRecommended}%</p>
            <p class="recText">Recommended this product</p>
        </div>
    )
}

export default Recommendations;