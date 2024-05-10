import React, { useState } from 'react';
import './login.css';
import axios from 'axios'; 
import Signup from './signup'; 

const Login = () => {
    const [showLogin, setShowLogin] = useState(true); 
    const [showSignup, setShowSignup] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleSignupClick = () => {
        setShowLogin(false); 
        setShowSignup(true); 
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value; 
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:8081/login', {
                email, 
                password
            });
            console.log('Login successful:', response.data);
            
        } catch (error) {
            console.error('Login error:', error.response.data);
            setErrorMessage(error.response.data.error); 
        }
    };

    return (
        <div className="login-container">
            {showLogin && ( 
                <>
                    <h2 className="login-title">Login</h2>
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <label htmlFor="email">Email:</label> 
                        <input type="email" id='email' name='email' required/><br/> 
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" required/><br />
                        
                        <button type="submit">Login</button>
                    </form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>} 
                    <div className="signup-link">                      
                        Don't have an account? <a href="#" onClick={handleSignupClick}>Sign Up</a>
                    </div>
                </>
            )}
            {showSignup && <Signup />} 
        </div>
    );
};

export default Login;
