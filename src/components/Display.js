import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/display.css'
import Footer from './Footer';
function Display() {
  const [show,setShow]=useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoSrc = queryParams.get('videoSrc');
  const title = queryParams.get('title');
  // const tbnail = queryParams.get('tbnail');
  const language = queryParams.get('language');
  const showType = queryParams.get('showType');
  const ageLicence = queryParams.get('ageLicence');
  const description = queryParams.get('description');
  const cast = queryParams.get('cast');

  return (
    <>
      <Navbar />
      <div className='video'>
        <iframe
          width="873"
          height="491"
          src={videoSrc} // Use the correct property name here
          title="Video Title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className='content-description'>
        <div className='content-heading'>{title}</div>
        <div className="mylist">
          <p>{language}</p>
          <ul>
            <li>{showType}</li>
            <li>{ageLicence}</li>
          </ul>
        </div>
        <hr/>
        <div className="item-desc">
          {description}
          {!show && (
            <span className="show-more-less" onClick={() => setShow(true)}>
              show more
            </span>
          )}
          {show && (
            <div className='sub-item'>
              Cast : {cast}
              <span className="show-more-less" onClick={() => setShow(false)}>
                show less
              </span>
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default Display;