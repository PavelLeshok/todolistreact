import React from 'react';
import './header.css';
import RegistrationForm from '../registrationForm/RegistrationForm';
import AuthorizationForm from '../authorizationForm/AuthorizationForm';


const Header = () => {
    return(
        <header className='header-container'>
            <h3 id='header-title'>TODO List</h3>
            <div id='header-buttons'>
                <RegistrationForm />
                <AuthorizationForm />    
            </div> 
        </header>
    )
}; 

export default Header;