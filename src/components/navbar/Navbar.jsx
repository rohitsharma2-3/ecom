import React, { useContext, useState , useRef} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import drop_down from '../Assets/down-arrow.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const drop_downToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="Logo"/>
            <p>SHOPPER</p>
        </div>
        <img onClick={drop_downToggle} className='dropdown_icon' src={drop_down} alt="" />
        <ul ref={menuRef}  className="nav-menu">
            <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration: "none", color:"black"}} to="/">Shop</Link> {menu === "shop" ? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("mens")}}> <Link style={{textDecoration: "none", color:"black"}} to="/mens">Mens</Link> {menu === "mens" ? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("womens")}}> <Link style={{textDecoration: "none", color:"black"}} to="/womens">Womens</Link>{menu === "womens" ? <hr/>: <></>}</li>
            <li onClick={() => {setMenu("kids")}}> <Link style={{textDecoration: "none", color:"black"}} to="/kids">Kids</Link> {menu === "kids" ? <hr/>: <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link style={{textDecoration: "none" , color:"black"}} to="/login">Login</Link></button>
            <Link style={{textDecoration: "none"}} to="/cart"><img  src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
    
  )
}

export default Navbar