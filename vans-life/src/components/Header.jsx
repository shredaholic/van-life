import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import imageURL from '/src/assets/images/avatar-icon.png'

export default function Header(){
    const activeStyles = {
        color: "red",
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedIn")
    }
    
    return(
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? activeStyles : null}  to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? activeStyles : null}  to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? activeStyles : null}  to="/vans">Vans</NavLink>
                <Link to="login" className="login-link"><img src={imageURL} className="login-icon"/></Link>

                <button onClick={fakeLogOut}>X</button>
            </nav>
         </header>
    )
}