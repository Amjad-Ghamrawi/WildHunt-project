import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setErrorMessage(''); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/check-email', { email: values.email })
            .then(res => {
                // if email not found , register new record(new user)
                axios.post('http://localhost:8081/signup', values)
                    .then(res => console.log("Registered successfully"))
                    .catch(err => console.log(err));
            })
            .catch(err => {
                // if email already exist display message to 
                setErrorMessage('Email is already in use. Please choose a different email.');
            });
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="fullname">Username:</label>
                <input type="text" id='fullname' name='name' placeholder='Enter name' onChange={handleChange} required/><br/>
                <label htmlFor="email">Age:</label>
                <input type="number" id='age' name='age' placeholder='Enter your age' onChange={handleChange} required/><br/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter email' onChange={handleChange} required/><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder='Enter password' onChange={handleChange} required/><br />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
