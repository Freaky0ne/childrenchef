import React, { Component } from 'react';
import './Header.css';
import Logo from './logo.js'
import HomeButton from './HomeButton.js'
import Receipts from './Receipts.js'
import AboutUs from './AboutUs.js'
import Contacts from './Contacts.js'

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <Logo />
                <HomeButton />
                <Receipts />
                <AboutUs />
                <Contacts />
            </div>
        );
    }
}

export default Header;