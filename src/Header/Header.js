import React, { Component } from 'react';
import './Header.css';
import Logo from './logo.js'
import HomeButton from './HomeButton.js'
import Receipts from './Receipts.js'

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <Logo />
                <HomeButton />
                <Receipts />
            </div>
        );
    }
}

export default Header;