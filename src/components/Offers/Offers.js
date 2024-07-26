import { useState } from "react";
import './Offers.css';
function Offers() {

	return (
        <div className='offers'>

        <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
        </div>

        <div className='offers-right'>
            <img src={require("../Assets/exclusive_image.png")} alt="" />
          </div>
      </div>
    
    )
}

export default Offers;

