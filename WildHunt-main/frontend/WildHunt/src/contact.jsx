import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'; 
import "./contact.css";

const Contact = () =>{
    return(
        <div className='container'>
            <div className='Info'>
                <h2>Get In Touch</h2>
                <h1>Convey Your Ideas to Us</h1>
                <h3>Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.</h3>
                <div className='Icons'> 
                <div className='Email'><a href="WildHunt@Hotmail.com"><FontAwesomeIcon icon={faEnvelope} /> &emsp;WildHunt@Hotmail.com</a>  <br /></div>
               <div className='Phone'><a href="+96171717171"><FontAwesomeIcon icon={faPhone}/>&emsp; +961 71121212</a></div>
                
                </div>
            </div>
            <div className='contact-card'>
                <form action="">
                <label htmlFor="">Name</label><br />
                <input type="text" name='Name'/><br />
                <label htmlFor="">Email</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <label htmlFor="">Phone Number</label><br />
                <input type="email" name='Email'/>&emsp;&emsp;
                <input type="number" className='PhoneNumber' /><br />
                <label htmlFor="">Message</label><br />
                <input type="text" className='message' /><br />
                 <button className='Submit-Btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
