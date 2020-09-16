import React, { Component } from "react";
import styles from "./Gallery.module.scss";

class Gallery extends Component {
    render() {
        return (
            <div className={styles.gallery}>
                <h4>Gallery</h4>
                <p>Some pictures of me</p>
            </div>
        )
    }
}

export default Gallery;