import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { magicApi } from '../services/DataService.js';

export default function MagicComponent() {


    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await magicApi();
        setResult(response);
    }

    return (
        <div className='gameBG'>
            {/* DESKTOP TITLE */}
            <div className="hidden lg:block">
                <div className="inline-block bg-customBlue2 ps-5 pe-9 py-1 mt-16 ms-16 rounded-md">
                    <h1 className="font-hiromisake text-7xl text-white">Magic 8 Ball</h1>
                </div>
            </div>
            {/* RESPONSIVENESS TITLE */}
            <div className="block lg:hidden">
                <div className="inline-flex bg-customBlue2 ps-5 pe-9 py-1 mt-12 rounded-md">
                    <h1 className="font-hiromisake text-5xl md:text-6xl text-white">Magic 8 Ball</h1>
                </div>
            </div>
            {/* INPUTS AND OUTPUT */}
            <div className="grid lg:grid-cols-2">
                <div className="lg:col-span-1 lg:ms-20 lg:mt-24 mt-16 ms-10">
                    <p className="text-white font-nova lg:text-2xl text-xl">Enter a question</p>
                    <div className="w-60 bg-white overflow-y-hidden break-words lg:text-2xl text-xl rounded-sm mt-1 font-nova" contentEditable="true"></div>
                    <br />
                    <button onClick={async () => await getResult()} id="submitBtn"
                        className="lg:text-2xl text-xl text-white font-nova bg-customBlue hover:border-2 hover:border-white hover:bg-cyan-800 py-1 px-3 rounded-md mt-3 drop-shadow-2xl">Submit</button>
                </div>

                <div className="lg:col-span-1 sm:col-span-2 place-self-center lg:mt-40 lg:mb-0 lg:mx-0 mx-10 mt-24">
                    <div className="bg-customPurple/70 rounded-lg lg:me-28 text-3xl lg:text-5xl">
                        <p className='font-nova text-center px-3 py-10 text-white'>{result}</p>
                    </div>
                </div>
            </div>
            {/* DESKTOP BUTTONS */}
            <div className="static hidden md:block">
                <div className="grid grid-cols-2">
                    <div className="absolute bottom-0 left-0 ms-16 mb-10">
                        <a href="numReverse"
                            className="bg-customLightP ps-2 pe-4 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl">
                            <span className='text-2xl pe-2'>
                                &lt;
                            </span>
                            Back
                        </a>
                        <p
                            className="rounded-lg mx-3 my-4 text-3xl opacity-0 font-nova flex items-center justify-center drop-shadow-xl">
                            Home
                        </p>
                    </div>
                    <div className="absolute bottom-0 right-0 me-16 mb-10">
                        <a href="restaurant"
                            className="bg-customLightP px-3 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl">
                            Next <span className='text-2xl ps-2'>&gt;</span>
                        </a>
                        <br />
                        <button
                            className="bg-customGreen px-3 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl">
                            <Link to='/'>
                                Home
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* RESPONSIVENESS BUTTONS */}
            <div className="sm:hidden fixed bottom-0 w-full mb-10">
                <div className="static">
                    <div className="grid grid-cols-3">
                        <div className="ms-5 col-span-1">
                            <a href="numReverse"
                                className="bg-customLightP inline-block rounded-lg ps-2 pe-4 py-2 text-2xl text-white font-nova items-center drop-shadow-xl">
                                <span className='text-2xl pe-2'>
                                    &lt;
                                </span>
                                Back
                            </a>
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <button
                                className="bg-customGreen rounded-lg px-4 py-2 text-2xl text-white font-nova inline-block justify-center items-center drop-shadow-xl"> <Link to='/'>
                                    Home
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 flex justify-end me-5">
                            <a href="restaurant"
                                className="bg-customLightP rounded-lg px-3 py-1 text-2xl text-white font-nova flex items-center drop-shadow-xl">Next <span className='text-2xl ps-2'>&gt;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
