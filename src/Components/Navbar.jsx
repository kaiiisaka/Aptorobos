import React, {useState} from 'react';
import NavLogo from '../assets/robotNavbar.png'
import {Link} from "react-router-dom";
import peaceLogo from '../assets/peace.svg'

const Navbar = () => {

    const [peace, setPeace] = useState(false)

    const peaceFunc = () => {
        setPeace(prevState => !prevState)
    }

    const peaceAnim = () => peace ? "h-8 w-8 mr-4 animate-spin" : "h-8 w-8 mr-4"

    return (
        <div className='flex flex-row justify-between items-center pt-4 mb-6 text-xs sm:text-base text-white font-mono' style={{fontFamily: 'Lilita One'}}>
            <div className='flex flex-col sm:flex-row'>
                <Link to='/home' className='flex flex-col sm:flex-row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                    <img
                    src={NavLogo}
                    alt='Logo robot'
                    className='h-8 sm:px-3'
                    />
                    Aptorobos
                </Link>
            </div>
            <div className='flex flex-row items-center gap-2 sm:gap-5'>
                <Link to='/home' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Home</Link>
                <Link to='/about' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>About aptorobos</Link>
                <Link to='/snakefish' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Made by</Link>
            </div>
            <div className='px-3 mr-5 flex flex-row'>
                <img
                    src={peaceLogo}
                    alt='peace'
                    className={peaceAnim()}
                />
                <button onClick={peaceFunc} className='px-2 border-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>Peace out</button>
            </div>

        </div>
    );
};

export default Navbar;