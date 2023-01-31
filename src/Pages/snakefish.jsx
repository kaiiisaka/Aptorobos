import React from 'react';
import ARL from '../assets/AptoroboMain.png'
import PFP from '../assets/colorPFP.png'
import plus from '../assets/plus.png'

const Snakefish = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-3 pb-4'>
            <div className='flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 sm:w-1/4 rounded-3xl'>
                <h1 className='p-3 text-white font-bold md:text-2xl'>
                    Snakefish#9259
                </h1>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 sm:w-1/2 rounded-3xl hover:opacity-70'>
                <p className='p-3 text-white font-bold'>
                    My name is Alex, but you probably know me as snakefish.
                    I am a big fan of NFT art, a programmer and I am very
                    interested in everything related to the concept of web3.
                    I have been studying blockchain and cryptocurrencies
                    for a long time. I want to connect my life with it.
                    Even on my discord avatar, you see a picture that
                    was drawn by NTF artist Joiceeloo. <br />
                    I wanted to be part of the big Aptos network,
                    and finally found the right community! I tried many
                    times to compete with the guys from Aptoverse in quiz,
                    rumble, and other competitions, but the participants
                    here are so cool that they didn’t leave me a chance!
                    I hope you found this site and what I wrote on it interesting.
                    I hope I can update it after more information about the project
                    becomes, because I'm not the coolest react developer yet. <br />
                    I would be grateful for any feedback!
                </p>
            </div>
            <div className='flex flex-row justify-between'>
                <img src={ARL} alt='Aptorobo' className='md:h-56 h-32 rounded-full'/>
                <img src={plus} alt='plus' className='md:h-56 h-32 rounded-full'/>
                <img src={PFP} alt='snakefish' className='md:h-56 h-32 rounded-full'/>
            </div>
        </div>
    );
};

export default Snakefish;