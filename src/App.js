import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import statement
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent';
import AddNumbersComponent from './components/AddNumbersComponent';
import QuestionsComponent from './components/QuestionsComponent';
import GreaterComponent from './components/GreaterComponent';
import MadlibComponent from './components/MadlibComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';
import AlphaReverseComponent from './components/AlphaReverseComponent';
import NumReverseComponent from './components/NumReverseComponent';
import MagicComponent from './components/MagicComponent';
import RestaurantComponent from './components/RestaurantComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HomePageComponent /> */}
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="sayHello" element={<SayHelloComponent />} />
          <Route path="addNumbers" element={<AddNumbersComponent />} />
          <Route path="questions" element={<QuestionsComponent/> }/>
          <Route path="greaterOrLess" element={<GreaterComponent/> }/>
          <Route path="madlib" element={<MadlibComponent/> }/>
          <Route path="oddOrEven" element={<OddOrEvenComponent/> }/>
          <Route path="alphaReverse" element={<AlphaReverseComponent/> }/>
          <Route path="numReverse" element={<NumReverseComponent/> }/>
          <Route path="magic" element={<MagicComponent/> }/>
          <Route path="restaurant" element={<RestaurantComponent/> }/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
