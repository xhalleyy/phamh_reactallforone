import React from 'react'
import { Link } from 'react-router-dom'
// import './styles/styles.css'

export default function HomePageComponent() {
    return (
        <div className='homeBG'>
            <div className="text-center lg:text-right">
                <h1 className="inline-block justify-end lg:text-end font-hiromisake text-7xl md:text-8xl mt-20 lg:me-32">All for <span className='text-8xl'>One</span></h1>
            </div>

            <div className="static hidden lg:block">
                <div className="absolute bottom-24 lg:left-6 xl:left-52 2xl:left-96">
                    <div className="grid grid-cols-5 justify-center mb-10 items-center ">
                        {/* <div className="col-span-1"></div> */}
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to="sayHello">
                                    <p className="font-nova px-4 py-1 text-3xl text-white">Say Hello</p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='questions'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white">
                                        Questions
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='madlib'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white">
                                        MadLib
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">

                                <Link to='alphaReverse'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white leading-8 text-center">
                                        Reverse It
                                        <br /><span className="text-xl">
                                            (alphanumeric)
                                        </span>
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='magic'>
                                    <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '26px' }}>
                                        Magic 8 Ball
                                    </p>
                                </Link>
                            </button>
                        </div>
                        {/* <div className="col-span-1"></div> */}
                    </div>

                    <div className="grid grid-cols-5  justify-center items-center">
                        {/* <div className="col-span-1"></div> */}
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='addNumbers'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white">
                                        Summation
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='greaterOrLess'>
                                    <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '23px' }}>
                                        Greater or Less
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='oddOrEven'>
                                    <p className="font-nova px-4 py-1 text-white" style={{ fontSize: '26px' }}>
                                        Odd or Even
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">
                                <Link to='numReverse'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white leading-8 text-center">
                                        Reverse It
                                        <br /><span className="text-xl">
                                            (numeric)
                                        </span>
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 mx-auto px-3">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70">

                                <Link to='restaurant'>
                                    <p className="font-nova px-4 py-1 text-3xl text-white">
                                        Restaurant
                                    </p>
                                </Link>
                            </button>
                        </div>
                        {/* <div className="col-span-1"></div> */}
                    </div>
                </div>
            </div>


            {/* <!-- Responsiveness for Mobile: Page Buttons --> */}
            <div className=" lg:hidden static grid place-items-center">
                <div className="absolute bottom-36">
                    <div className="grid grid-cols-2 justify-center items-center">
                        <div className="col-span-1 grid grid-cols-1 mx-auto ms-5 md:pe-10">
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='sayHello'>
                                    <p className="font-nova px-3 py-1 text-2xl text-white text-center">
                                        Say Hello
                                    </p>

                                </Link>

                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='addNumbers'>
                                    <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                        Summation
                                    </p>

                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='madlib'>
                                    <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                        MadLib
                                    </p>
                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='alphaReverse'>
                                    <p className="font-nova px-4 py-1 text-2xl text-white text-center" style={{ lineHeight: '1.3rem' }}>
                                        Reverse It
                                        <br /><span style={{ fontSize: '18px' }}>
                                            (alphanumeric)
                                        </span>
                                    </p>
                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='magic'>
                                    <p className="font-nova px-2 py-1 text-white text-2xl text-center">
                                        Magic 8 Ball
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <div className="col-span-1 grid grid-cols-1 mx-auto md:ps-10">
                        <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='questions'>
                                    <p className="font-nova px-3 py-1 text-2xl text-white text-center">
                                        Questions
                                    </p>

                                </Link>

                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='greaterOrLess'>
                                    <p className="font-nova px-4 py-1.5 text-xl text-white text-center">
                                        Greater or Less
                                    </p>

                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='oddOrEven'>
                                    <p className="font-nova px-4 py-1 text-2xl text-white text-center">
                                        Odd or Even
                                    </p>
                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='numReverse'>
                                    <p className="font-nova px-4 py-1 text-2xl text-white text-center" style={{ lineHeight: '1.3rem' }}>
                                        Reverse It
                                        <br /><span style={{ fontSize: '18px' }}>
                                            (numeric)
                                        </span>
                                    </p>
                                </Link>
                            </button>
                            <button className="inline-block bg-teal-800 rounded-lg border-2 border-black/70 w-44 my-3">
                                <Link to='restaurant'>
                                    <p className="font-nova px-2 py-1 text-white text-2xl text-center">
                                        Restaurant
                                    </p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
