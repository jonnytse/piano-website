import React, { Component } from "react";
import styles from "./Media.module.scss";

class Media extends Component {
    render() {
        return (
            <div className={styles.media}>
                <h4>Media</h4>
                {/* <p>YouTube links of my playing</p> */}
                <div className={styles.iframecontainer}>
                    {/* 560/315 */}
                    <iframe title="Bridge Over Troubled Water" width="504" height="283" src="https://www.youtube.com/embed/9ojF86BhMk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
                    <iframe title="Boogie Woogie Bugle Boy" width="504" height="283" src="https://www.youtube.com/embed/XEBFziYOShY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
                    <iframe title="Lost Chord Dementia Charity" width="504" height="283" src="https://www.youtube.com/embed/YXwcVqQafio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Media;