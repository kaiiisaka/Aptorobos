import React from 'react';
import rAI1 from '../assets/RoboAI1.png'
import rAI2 from '../assets/RoboAI2.png'
import robopack from '../assets/RoboPack.png'

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-4 pb-4'>
            <div className='flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 w-1/4 rounded-3xl'>
                <h1 className='p-3 text-white font-bold md:text-2xl'>
                    Aptoverse
                </h1>
            </div>
           <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-3xl hover:opacity-70'>
            <p className='p-3 text-white font-bold'>
                Welcome to Roboverse! <br/>
                On this site you can find out some of the
                things that are known about the roboverse
                right now, as well as some thoughts on what
                will happen in the expanses of the robot universe in aptos!
            </p>
           </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-3xl hover:opacity-70'>
                <p className='p-3 text-white font-bold'>
                    The time has come to the vast expanse to learn web-3. Here is the best community in Aptos!
                    Some people came here because of the hype, some people came here because of the free mint,
                    but personally I came here because I feel like I belong to something more than just a mint.
                    I came here because I am very interested in robots, metaverses, aptos and education in the
                    field of web technologies (you can see this if only because you are now on a site that I
                    personally wrote from scratch).
                    I hope you enjoy what I have done for you.
                    peace out!
                </p>
            </div>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-3xl hover:opacity-70'>
                <p className='p-3 text-white font-bold'>
                    Below you can see my fantasies/reasonings on how Aptorobos might look like. Yes, this is
                    AI generated, but it took me a very long time to make these pictures to get exactly what
                    I think. Yes, and if I could draw, I would participate in an art contest with such pictures :)
                </p>
            </div>
            <h1 className='p-3 text-white font-bold md:text-2xl'>Gallery</h1>
            <div className='flex flex-col md:flex-row justify-between items-center mx-10 gap-y-2'>
                <div className='flex flex-col rounded rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 md:w-1/4 h-2/3 rounded-3xl hover:opacity-70 text-white font-bold'>
                    <img src={rAI1} alt='AI robo 1' className='rounded rounded-full p-2'/>
                    <p className='p-2'>
                        This robot seems to be quite thoughtful, you can ask him questions that interest you. I think he will gladly answer them for you.
                    </p>
                </div>
                <div className='flex flex-col rounded rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 md:w-1/4 h-2/3 rounded-3xl hover:opacity-70 text-white font-bold'>
                    <img src={rAI2} alt='AI robo 2' className='rounded rounded-full p-2'/>
                    <p className='p-2'>
                        And this robot seems to be very utilitarian. I'm sure you can turn to him when you need any of the tools for a variety of things.
                    </p>
                </div>
                <div className='flex flex-col rounded rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 w-3/4 md:w-1/4 h-2/3 rounded-3xl hover:opacity-70 text-white font-bold'>
                    <img src={robopack} alt='robopack' className='rounded rounded-full p-2'/>
                    <p className='p-2'>
                        These guys you can pick up for your sticker pack. You can be sure that they will bring a lot of good emotions to your server!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;