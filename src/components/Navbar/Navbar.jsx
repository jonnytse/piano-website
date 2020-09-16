import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className={styles.navbar}>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/media">Media</NavLink></li>
                    <li><NavLink to="/teaching">Teaching</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;