import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const QandA = () => {
    return (
        <div className="col QandA">
            <p className="icons qanda">{'\uEAC6'}</p>
            <p className="qtext">Community Q&A</p>
            
            <Link
                activeClass="active"
                to="#CommunityQandA"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >View Now</Link>
        </div>
    )
}

export default QandA

