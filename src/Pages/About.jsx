import React from 'react';
import roboarmy from '../assets/RoboArmy.png'
import twitter from '../assets/twitter.png'
import discird from '../assets/discord.png'

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-3 pb-4'>
            <div className='flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 w-1/4 rounded-3xl'>
                <h1 className='p-3 text-white font-bold md:text-2xl'>
                    About
                </h1>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-3xl hover:opacity-70'>
                <p className='p-3 text-white font-bold'>
                    What is roboverse? Well, you can say that this is a collection of 1111 robots in the Aptos network,
                    but we understand that this is something more. This is a whole community of those who want to
                    learn and improve in the crypto space. <br/>
                    As we know<br/>
                    Robos vibe in the Roboverse <br/>
                    Robos learn in the Roboverse <br />
                    Robos spread love in the Roboverse <br/>
                    Robos feel like home in the Roboverse <br/>
                </p>
            </div>
            <div className='flex flex-col sm:flex-row align-middle bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-3xl hover:opacity-70'>
                <div className='rounded rounded-full'>
                    <img src={roboarmy} alt='roboarmy' className='rounded rounded-full p-3'/>
                </div>
                <p className='p-3 text-white font-bold align-baseline'>
                    In the first 24 hours alone, more than 6,000 thousand users gathered in the roboverse,
                    and this is just the beginning! aptorobos will grow further and further! everyone will
                    see what kind of community can be created on Aptos. Be sure to join the most friendly
                    community of all universes! <br/>
                    We are army of robos, but we bring peace!
                </p>
            </div>
            <div className='flex flex-row items-center justify-between gap-x-2'>
                <a href='https://twitter.com/AptoRobos'>
                    <img src={twitter} alt='twitter' className='h-10'/>
                </a>
                <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-1/8 items-center rounded-full animate-pulse'>
                    <p className='p-3 text-white text-center font-bold'>
                        P e a c e
                    </p>
                </div>
                <a href='https://discord.gg/aptorobos'>
                    <img src={discird} alt='discord' className='h-14'/>
                </a>
            </div>
        </div>
    );
};

export default About;