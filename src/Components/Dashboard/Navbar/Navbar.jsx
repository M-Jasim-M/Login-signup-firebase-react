import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="nav">
<div className="logo">Online Library</div>
<div className="links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
</div>

<div className="logout">Logout</div>

    </div>
    </>
  )
}

export default Navbar;