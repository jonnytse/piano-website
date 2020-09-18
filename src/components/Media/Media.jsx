import React, { Component } from "react";
import styles from "./Media.module.scss";

class Media extends Component {
    render() {
        return (
            <div className={styles.media}>
                <h4>Media</h4>
                <p>YouTube links of my playing</p>
                <iframe title="Bridge Over Troubled Water" width="560" height="315" src="https://www.youtube.com/embed/9ojF86BhMk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="Boogie Woogie Bugle Boy" width="560" height="315" src="https://www.youtube.com/embed/XEBFziYOShY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="Lost Chord Dementia Charity" width="560" height="315" src="https://www.youtube.com/embed/YXwcVqQafio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Media;