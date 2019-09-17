
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ShareModal = () => {

    return (

    <div className="socialMedia">
        <p>
            <img src="https://binkardfecimages.s3.us-east-2.amazonaws.com/fillerImages/facebook+logo.png"></img>
            <span>
                <a style={{display: "table-cell"}} href="https://facebook.com/login" target="_blank">Post it</a>
            </span>
        </p>

        <p>
            <img src="https://binkardfecimages.s3.us-east-2.amazonaws.com/fillerImages/twitter+logo.png"></img>
            <span>
                <a style={{display: "table-cell"}} href="https://twitter.com/login" target="_blank">Tweet it</a>
            </span>

        </p>

        <p>
            <img src="https://binkardfecimages.s3.us-east-2.amazonaws.com/fillerImages/pinterest+logo.png"></img>
            <span>
                <a style={{display: "table-cell"}} href="https://www.pinterest.com/login" target="_blank">Pin it</a>
            </span>
        </p>
    </div>
    )
}

export default ShareModal;
