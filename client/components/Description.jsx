import React from 'react';

const Description = (props) => {
    const list = props.summary.map((item, index) =>
    <li key={index}>{item}</li>
    )
 return (<ul className="Description">{list}</ul>)
}

export default Description;