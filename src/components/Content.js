import React, { useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Render from './Render.js';
import '../styles/content.css';
import { ContentDataProvider } from './ContentContext.js';

const Content = (props) => {
  console.log(props);
  const title=props.title;
  const boxRef = useRef(null);
  const [isAtExtremeLeft, setIsAtExtremeLeft] = useState(true);
  const [isAtExtremeRight, setIsAtExtremeRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // New state for tracking hover

  const data=props.data;
  const urlParams= new URLSearchParams()
  urlParams.append('title',encodeURIComponent(JSON.stringify(title)));
  urlParams.append('data',encodeURIComponent(JSON.stringify(data)));
  const queryParams=urlParams.toString();


  const updateButtonVisibility = () => {
    if (boxRef.current) {
      const box = boxRef.current;
      setIsAtExtremeLeft(box.scrollLeft === 0);
      setIsAtExtremeRight(box.scrollLeft + box.clientWidth >= box.scrollWidth);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    updateButtonVisibility();
    const box = boxRef.current;

    // Add event listener for scroll
    const handleScroll = () => {
      updateButtonVisibility();
    };

    box.addEventListener('scroll', handleScroll);

    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const btnpressprev = () => {
    if (!isAtExtremeLeft && boxRef.current) {
      const box = boxRef.current;
      const scrollAmount = box.clientWidth;
      box.scrollLeft -= scrollAmount;
    }
  };

  const btnpressnext = () => {
    if (!isAtExtremeRight && boxRef.current) {
      const box = boxRef.current;
      const scrollAmount = box.clientWidth;
      box.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
    <ContentDataProvider sliderData={data}>
      <div className='my-container'>
        <div className='title-bar'>
          <div className='my-heading'>
            {title}
          </div>
          <Link to={`/list?${queryParams}`}>
          <div className='more'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" ><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>

          </div>
          </Link>
        </div>
        <div className="slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {/* Hide the previous button when at extreme left */}
          {!isAtExtremeLeft && isHovering && (
            <button className="pre-btn" onClick={btnpressprev}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg>
            </button>
          )}
          {/* Hide the next button when at extreme right */}
          {!isAtExtremeRight && isHovering && (
            <button className="next-btn" onClick={btnpressnext}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
            </button>
          )}

          <div className='slider-track' ref={boxRef}>
            {
              data.map((item, idx) => {
                return <Render item={item} key={idx} />;
              })}
          </div>
        </div>
      </div>
      </ContentDataProvider>
    </>
  )
}
export default Content;
