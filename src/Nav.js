import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Nav;