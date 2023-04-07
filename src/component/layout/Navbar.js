import React, { Component } from 'react'

const NavBar = (props) =>{
    return (
        <nav className="navbar bg-primary">
        <h1>{props.title} </h1>
    </nav>
    );
}
export default NavBar;
