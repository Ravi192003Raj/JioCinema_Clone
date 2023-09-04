import React from 'react';
import Navbar from './Navbar';
import Trailer from './Trailer';
import { useParams, useLocation } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  const index=parseInt(id);
  // Access the location object to get URL search parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Retrieve the data parameter and parse it back into an object
  const dataParam = searchParams.get('data');
  const sliderData = JSON.parse(decodeURIComponent(dataParam));
  console.log(sliderData);
  console.log("Slider ="+sliderData);
  // Now you have access to the specific data passed from the link

  return (
    <>
      <Navbar />
      <Trailer item={sliderData[index]}/>
    </>
  );
}

export default Video;
