import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import './contact.css'

export default function Contact() {
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [emailSuccess, setEmailSuccess] = useState(false);


    const handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === 'user_name') {
            setName(e.target.value);
        } else if (e.target.name === 'user_email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'message') {
            setMessage(e.target.value);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        setName('');
        setEmail('');
        setMessage('');

        setEmailSuccess(true);

    };

    return (
        <div>
            <Collapse in={emailSuccess}>
                <Alert severity="success"
                    action={
                        <IconButton aria-label="close" color="inherit"
                            onClick={() => {
                                setEmailSuccess(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{boxShadow:"1px 1px 8px black", fontSize:"1rem", fontFamily:"Work Sans, sans-serif"}}
                >
                    <AlertTitle sx={{fontSize:"1.3rem", fontFamily:"Lora, sans-serif"}}><b>Success!</b></AlertTitle>
                    Your message has been sent.
                </Alert>
            </Collapse>

            <div className="container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography id="contact-title">Contact</Typography>
                <Typography sx={{fontSize:"1.2rem", fontFamily:"Lora, sans-serif", marginBottom:"18px"}}>Let's get in touch!</Typography>
                <form style={{display:"flex", flexDirection:"column", width: "300px"}} ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className="contact-form-input" type="text" value={name} onChange={(e) => { handleChange(e) }} name="user_name" />
                    <label>Email</label>
                    <input className="contact-form-input" type="email" value={email} onChange={(e) => { handleChange(e) }} name="user_email" />
                    <label>Message</label>
                    <textarea id="contact-message" className="contact-form-input" name="message" value={message} onChange={(e) => { handleChange(e) }} />
                    <input className="button" type="submit" value="Send" />

                </form>
            </div>
        </div>
    );
};
