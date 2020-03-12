import React from 'react';
import "./footer.css";

function Footer (props) {
   return (
      <button className="footer" onClick={props.game}>
         <h1>START A NEW GAME!</h1>
      </button>
   )
}

export default Footer;