import React, { Component } from 'react';
import styles from './SocialFollow.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faSoundcloud,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"

class SocialFollow extends Component {
  render () {
    return (
        <div className={styles.social}>
            <a href="https://www.instagram.com/louisapiano/" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://twitter.com/louisalampiano" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://soundcloud.com/louisa-lam-109487005" className={styles.soundcloud}><FontAwesomeIcon icon={faSoundcloud} size="2x" /></a>
            <a href="https://www.youtube.com/channel/UCqFsXZw3aQ9_4ECzsEtL2bg" className={styles.youtube}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        </div>
    );
  }
}

export default SocialFollow;
