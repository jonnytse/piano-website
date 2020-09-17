import React, { Component } from "react";
import styles from "./Contact.module.scss";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className={styles.contact}>
                <h4>Contact Me</h4>
                <p>Please get in touch with press, licensing and booking enquiries.</p>
                <div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" placeholder="Name" id="name" required onChange={this.handleChange} />

                        {/* <label htmlFor="email">Email</label> */}
                        <input type="text" placeholder="Email" id="email" required onChange={this.handleChange} />
                        
                        {/* <label htmlFor="mobile">Mobile</label> */}
                        <input type="text" placeholder="Mobile" id="mobile" onChange={this.handleChange} />
                       
                        {/* <label htmlFor="message">Message</label> */} 
                        {/* <input type="text" placeholder="Your message" id="message" required onChange={this.handleChange} /><br></br> */}

                        {/* text area for message? */}
                        <textarea placeholder="Your message..." rows="7" id="message" required onChange={this.handleChange} ></textarea><br></br>

                        <button>SEND</button>
                    </form>
                </div>
                <p>To download a press pack, please find pictures and biography in this Dropbox: (This is not done yet!)</p>
            </div>
        )
    }
}

export default Contact;