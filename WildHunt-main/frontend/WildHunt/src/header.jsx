import React, { useState } from 'react';
import Login from './Login';
import Modal from './Modal';
import './Header.css'; 

const Header = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    return (
        <div className="header">
            <div className="logo">WILDHUNT</div>
            <div className="navigation">
               <a href="/Home">HOME</a>
               <a href="/Shop">SHOP</a>
               <a href="">COMMUNITY</a>
               <a href="/Contact">CONTACT</a>
               <a href="">CART</a>
               <a href="#" onClick={handleLoginClick}>LOGIN</a>
            </div>
            {showLoginForm && (
                <Modal onClose={handleCloseLoginForm}>
                    <Login />
                </Modal>
            )}
        </div>


            
    );
};




export default Header;
