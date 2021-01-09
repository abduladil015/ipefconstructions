import React from 'react';
import './Home.css';
import HomeData from './HomeData';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


function Home () {
  return (
    <div>
       <ImageSlider slides={SliderData} />
       <HomeData/>
    </div>
  );
}
export default Home;