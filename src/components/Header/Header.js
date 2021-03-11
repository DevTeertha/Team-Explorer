import React from 'react';
import cover from '../../dist/Cover/cover.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-overlay'>
                <img className='background-cover' src={cover} alt="Cover" />
                <h1 className='header-text'>Team Explorer</h1>
            </div>
        </div>
    );
};

export default Header;