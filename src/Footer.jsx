import React from 'react';
import './Footer.css';
const Footer =()=>{
    const year = new Date().getFullYear();
    return(
    <footer>
    <p className="para"> Copyright © {year} </p>
    </footer>
    );
}
export default Footer;