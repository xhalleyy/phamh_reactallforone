import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurantApi } from '../services/DataService.js';

export default function RestaurantComponent() {

    const [category, setCategory] = useState('');
    const [result, setResult] = useState('What restaurant should you eat at?');

    const getResult = async () => {
        const response = await restaurantApi(category);
        setResult(response);
    }

    return (
        <div className='gameBG'>
            {/* DESKTOP TITLE */}
            <div className="hidden lg:block">
                <div className="inline-block bg-customBlue2 ps-5 pe-9 py-1 mt-16 ms-16 rounded-md">
                    <h1 className="font-hiromisake text-7xl text-white">Restaurant Picker</h1>
                </div>
            </div>
            {/* RESPONSIVENESS TITLE */}
            <div className="block lg:hidden">
                <div className="inline-flex bg-customBlue2 ps-5 pe-9 py-1 mt-10 rounded-md">
                    <h1 className="font-hiromisake text-5xl md:text-6xl text-white">Restaurant<br />
                        Picker
                    </h1>
                </div>
            </div>
            {/* INPUTS AND OUTPUT */}
            <div className="grid lg:grid-cols-2">
                <div className="lg:col-span-1 lg:ms-20 lg:mt-24 mt-10 ms-10">
                    <p className="text-white font-nova lg:text-2xl text-xl">Between Asian, American, <br /> and
                        Mexican, What type of <br /> food
                        would you like?</p>
                    <input onChange={(e) => setCategory(e.target.value)} id="foodinput" type="text" className="rounded-sm lg:text-2xl text-xl font-nova" />
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
                        <a href="magic"
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

                        <button
                            className="bg-customGreen px-4 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl">
                            <Link to='/'>
                                Home
                            </Link>
                        </button>
                        <br />
                        <p
                            className="rounded-lg mx-3 text-3xl opacity-0 font-nova flex items-center justify-center drop-shadow-xl">
                            Home
                        </p>

                    </div>
                </div>
            </div>
            {/* RESPONSIVENESS BUTTONS */}
            <div className="sm:hidden fixed bottom-0 w-full mb-10">
                <div className="static">
                    <div className="grid grid-cols-3">
                        <div className="ms-5 col-span-1">
                            <a href="magic"
                                className="bg-customLightP inline-block rounded-lg ps-2 pe-4 py-2 text-2xl text-white font-nova items-center drop-shadow-xl">
                                <span className='text-2xl pe-2'>
                                    &lt;
                                </span>
                                Back</a>
                        </div>
                        <div className="col-span-1 flex justify-center">
                        </div>
                        <div className="col-span-1 flex justify-end me-5">
                            <button
                                className="bg-customGreen rounded-lg px-4 py-2 text-2xl text-white font-nova inline-block justify-center items-center drop-shadow-xl"> <Link to='/'>
                                    Home
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
