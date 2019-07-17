import React from 'react';

const Recommendations = (props) => {
    return (
        <div className="col Recommendations">
            <p className="recNum">{props.percentRecommended}%</p>
            <p className="recText">Recommended this product</p>
        </div>
    )
}

export default Recommendations;