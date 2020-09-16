import React, { Component } from "react";
import styles from "./Media.module.scss";

class Media extends Component {
    render() {
        return (
            <div className={styles.media}>
                <h4>Media</h4>
                <p>YouTube links of my playing</p>
            </div>
        )
    }
}

export default Media;