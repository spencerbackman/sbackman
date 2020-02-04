import React, { useState } from 'react';
import axios from 'axios';
import './scss/contact.css';

export default function Contact() {
    let [ name, setName ] = useState('');
    let [ email, setEmail ] = useState('');
    let [ message, setMessage ] = useState('');

    function handleSubmit() {
        axios({
            method: "POST",
            url: "/contact",
            data: {
                name: name,
                email: email,
                message: message
            }
        })
        setName('')
        setEmail('')
        setMessage('')
    }
    return(
        <div className="contact-page">
            <h2 className="contact-header">
                Get in touch
            </h2>
            <p className="contact-par">
                If you have any questions or would like to get in touch with me fill out the form below or give me a call at (662) 614-04368.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-row">
                    <label htmlFor="name" className="contact-label">
                        Name*
                    </label>
                    <input type="text"
                        className="input"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        value={name}
                        />
                </div>
                <div className="contact-row">
                    <label htmlFor="email" className="contact-label">
                        Email*
                    </label>
                    <input type="text"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        value={email}
                        />
                </div>
                <div className="contact-row">
                    <label htmlFor="message" className="contact-label">
                        Message/Questions
                    </label>
                    <textarea type="text"
                        className="input"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        value={message}
                        />
                </div>
                <button className="form-button">
                    <i className="far fa-paper-plane"></i>
                    Submit
                </button>
            </form>
        </div>
    )
}
