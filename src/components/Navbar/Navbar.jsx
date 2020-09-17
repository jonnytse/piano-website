import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className={styles.navbar}>
                    <li><Link to="/">HOME</Link></li>
                    <li><NavLink to="/about">ABOUT ME</NavLink></li>
                    <li><NavLink to="/events">EVENTS</NavLink></li>
                    <li><NavLink to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink to="/media">MEDIA</NavLink></li>
                    <li><NavLink to="/teaching">TEACHING</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;