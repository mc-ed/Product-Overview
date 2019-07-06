import React from 'react';

const Description = (props) => {
    const list = props.summary.map((item) =>
    <li>{item}</li>
    )
 return (<ul class="Description">{list}</ul>)
}

export default Description;