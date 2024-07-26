import { useState } from "react";
import './Navbar.css';
function Navbar() {
    const [menu,setMenu] = useState('Shop')
	return (
        <div className='navbar'>
        <div className='nav-logo'>
          <img src={require("../Assets/logo.png")} alt="" />
          <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
            <li onClick={() =>setMenu('shop')}>Shop{menu==='shop' ? <hr/>: <></> }</li>
            <li onClick={() =>setMenu('men')}>Men{menu==='men' ? <hr/>: <></> }</li>
            <li onClick={() =>setMenu('women')}>Women{menu==='women' ? <hr/>: <></> }</li>
            <li onClick={() =>setMenu('kids')}>Kids{menu==='kids' ? <hr/>: <></> }</li>
          </ul>
          <div className='nav-login-cart'>
            <button>Login</button>
            <img src={require("../Assets/cart_icon.png")} alt="" />
          </div>
      </div>
      
    )
}

export default Navbar;

