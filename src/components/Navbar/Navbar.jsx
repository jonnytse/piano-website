import React, { Component } from "react";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className={styles.navbar}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/media">Media</a></li>
                    <li><a href="teaching">Teaching</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;