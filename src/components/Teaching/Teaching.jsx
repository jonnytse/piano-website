import React, { Component } from "react";
import styles from "./Teaching.module.scss";

class Teaching extends Component {
    render() {
        return (
            <div className={styles.teaching}>
                <h4>Teaching</h4>
                <p>Since the beginning of the Covid-19 pandemic in 2020, Louisa has successfully transitioned to online piano and theory teaching.</p>   
                <p>The advantage of online teaching is that I am now able to teach anyone anywhere in the world!</p>
                <p>For information on availability and teaching rates, please contact me via the Contact page.</p>
                    <div className={styles.testimonials}>
                        <p>“I have recently started taking piano lessons with Louisa using the Zoom app. It has been many years since I played seriously and I was a little apprehensive. However my initial worries were soon allayed by Louisa’s teaching skills and enthusiasm, such that I am now eagerly awaiting my next lesson! Teaching through Zoom proved surprisingly effective to the extent that after a while one forgets it is not a conventional face to face lesson. Thank you, Louisa!” - Graham (80), Sussex</p>
                        <p>“Due to the Covid-19 pandemic, we had to switch to Zoom lessons, which we found to be a very seamless and effective experience. Throughout the lockdown period, Louisa continued to offer high quality teaching via online lessons, in a proactive and engaging manner. My children responded well to Louisa’s approach and have continued to steadily improve during lockdown.” - Father of George (9) and Lottie (8), London</p>
                    </div>
                <p>I am doing all my online teaching on Zoom. You will need a strong internet connection. PC or laptop is best in terms of audio and visual quality, but an ipad or smartphone will suffice if necessary.</p>
                <p>Please click here to download a pdf showing the optimum Zoom set up (I haven’t done this yet!)</p>
            </div>
        )
    }
}

export default Teaching;