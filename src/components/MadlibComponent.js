import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { madLibApi } from "../services/DataService.js";

export default function MadlibComponent() {
  const [firstName, setFirstName] = useState("");
  const [creature, setCreature] = useState("");
  const [secondName, setSecondName] = useState("");
  const [presentVerb, setPresentVerb] = useState("");
  const [pastVerb, setPastVerb] = useState("");
  const [item, setItem] = useState("");
  const [place, setPlace] = useState("");
  const [adverb, setAdverb] = useState("");
  const [result, setResult] = useState("");

  const getResult = async () => {
    const response = await madLibApi(
      firstName,
      creature,
      secondName,
      presentVerb,
      item,
      pastVerb,
      place,
      adverb
    );
    setResult(response);
  };
  return (
    <div className="gameBG">
      {/* DESKTOP TITLE */}
      <div className="hidden lg:block">
        <div className="inline-block bg-customBlue2 ps-5 pe-9 py-1 mt-16 ms-16 rounded-md">
          <h1 className="font-hiromisake text-7xl text-white">MadLib</h1>
        </div>
      </div>

      {/* RESPONSIVENESS TITLE */}
      <div className="block lg:hidden">
        <div className="inline-flex bg-customBlue2 ps-5 pe-9 py-1 mt-8 rounded-md">
          <h1 className="font-hiromisake text-5xl text-white">MadLib</h1>
        </div>
      </div>

      {/* INPUTS AND OUTPUT */}
      <div className="grid lg:grid-cols-2 col-span-1">
        <div className="lg:col-span-1 col-span-2 lg:ms-20 lg:mt-5 mt-3 ms-5">
          <div className="col-span-1 grid grid-cols-2">
            <div className="col-span-1 ">
              <p className="text-white font-nova lg:text-2xl text-xl">
                Enter a name
              </p>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                id="nameinput1"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter a second
                <br />
                name
              </p>
              <input
                onChange={(e) => setSecondName(e.target.value)}
                id="nameinput2"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter a creature
              </p>
              <input
                onChange={(e) => setCreature(e.target.value)}
                id="creatureinput"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter a place
              </p>
              <input
                onChange={(e) => setPlace(e.target.value)}
                id="placeinput"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <button
                onClick={async () => await getResult()}
                id="submitBtn"
                className="lg:text-2xl text-lg text-white font-nova bg-customBlue hover:border-2 hover:border-white hover:bg-cyan-800 py-1 px-3 rounded-md mt-3 drop-shadow-2xl"
              >
                Submit
              </button>
            </div>
            <div className="col-span-1">
              <p className="text-white font-nova lg:text-2xl text-lg">
                Enter an -ing verb
              </p>
              <input
                onChange={(e) => setPresentVerb(e.target.value)}
                id="verbinput1"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter a past tense <br />
                verb
              </p>
              <input
                onChange={(e) => setPastVerb(e.target.value)}
                id="verbinput2"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter an item
              </p>
              <input
                onChange={(e) => setItem(e.target.value)}
                id="verbinput3"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
              <br />
              <p
                className="text-white font-nova lg:text-2xl text-lg py-1 lg:pt-2 lg:pb-1"
                style={{ lineHeight: "1.4rem" }}
              >
                Enter an adverb
              </p>
              <input
                onChange={(e) => setAdverb(e.target.value)}
                id="adverbinput"
                type="text"
                className="rounded-md lg:text-2xl text-lg w-44 lg:w-52 font-nova"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 sm:col-span-2 place-self-center lg:mt-10 lg:mb-0 lg:mx-0 mx-5 mt-5">
          <div className="bg-customPurple/70 rounded-lg lg:me-28 text-lg lg:text-xl xl:text-2xl">
            <p className="font-nova text-center px-3 py-3 lg:py-6 text-white">
              {result}
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP BUTTONS */}
      <div className="static hidden md:block">
        <div className="grid grid-cols-2">
          <div className="absolute bottom-0 left-0 ms-16 mb-10">
            <a
              href="greaterOrLess"
              className="bg-customLightP ps-2 pe-4 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl"
            >
              <span className="text-2xl pe-2">&lt;</span>
              Back
            </a>
            <p className="rounded-lg mx-3 my-4 text-3xl opacity-0 font-nova flex items-center justify-center drop-shadow-xl">
              Home
            </p>
          </div>
          <div className="absolute bottom-0 right-0 me-16 mb-10">
            <a
              href="oddOrEven"
              className="bg-customLightP px-3 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl"
            >
              Next
              <span className="text-2xl ps-2">&gt;</span>
            </a>
            <br />
            <button className="bg-customGreen px-4 py-1 rounded-lg text-3xl text-white font-nova flex items-center justify-center drop-shadow-xl">
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      {/* RESPONSIVENESS BUTTONS */}
      <div className="sm:hidden fixed bottom-0 w-full mb-10">
        <div className="static">
          <div className="grid grid-cols-3">
            <div className="ms-5 col-span-1">
              <a
                href="greaterOrLess"
                className="inline-block bg-customLightP rounded-lg ps-2 pe-4 py-2 text-2xl text-white font-nova items-center drop-shadow-xl"
              >
                <span className="text-2xl pe-2">&lt;</span>
                Back
              </a>
            </div>
            <div className="col-span-1 flex justify-center">
              <button className="bg-customGreen rounded-lg px-4 py-2 text-2xl text-white font-nova inline-block justify-center items-center drop-shadow-xl">
                <Link to="/">Home</Link>
              </button>
            </div>
            <div className="col-span-1 flex justify-end me-5">
              <a
                href="oddOrEven"
                className="bg-customLightP rounded-lg px-3 py-1 text-2xl text-white font-nova flex items-center drop-shadow-xl"
              >
                Next
                <span className="text-2xl ps-2">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
