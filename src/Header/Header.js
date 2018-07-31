import React, { Component } from 'react';
import './Header.css';
import Logo from './logo.js'
import HomeButton from './HomeButton.js'

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <Logo />
                <HomeButton />
            </div>
        );
    }
}

export default Header;