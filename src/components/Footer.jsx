import React from 'react';
import '../Styles/Footer.css';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 Rockezzers  All rights reserved</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    );
}

export default Footer;