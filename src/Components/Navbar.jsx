import React from 'react';
import NavLogo from '../assets/robotNavbar.png'
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className='flex flex-row justify-between items-center pt-4 mb-6 text-white font-mono' style={{fontFamily: 'Lilita One'}}>
            <div className='flex flex-row'>
                <Link to='/home' className='flex flex-row'>
                    <img
                    src={NavLogo}
                    alt='Logo robot'
                    className='h-8 px-3'
                    />
                    Aptorobos
                </Link>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About aptorobos</Link>
                <Link to='/snakefish'>Made by</Link>
            </div>
            <div className='px-3 mr-5'>
                <button className='px-2 border-2 rounded-full'>Peace out</button>
            </div>

        </div>
    );
};

export default Navbar;