import React, { Component } from "react";
import styles from "./Contact.module.scss";

class Contact extends Component {
    render() {
        return (
            <div className={styles.contact}>
                <h4>Contact Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores fugiat ducimus! In eos illum accusantium voluptatibus sint hic totam deserunt numquam iusto repellendus veritatis dolorum accusamus, incidunt provident inventore.</p>
            </div>
        )
    }
}

export default Contact;