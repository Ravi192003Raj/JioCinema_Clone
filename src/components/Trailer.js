import React from 'react'
import '../styles/trailer.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Trailer = (props) => {
    const{
        id,
        title,
        tbnail,
        language,
        showType,
        ageLicence,
        videoSrc,
        description,
        cast}=props.item;
        const queryParams = new URLSearchParams({
            id,
            title,
            tbnail,
            language,
            showType,
            ageLicence,
            videoSrc,
            description,
            cast
          });
        
    return (
    <>
        <div className="content-container"
         style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(13, 14, 16, 1) 90%), url(${tbnail})`,
            width: "100vw",
            backgroundSize: "100%" ,
            /* other styles here */
          }}>

            <div className="description">
                <div className="watch">
                    <Link to={`/video/${id}/display?${queryParams.toString()}`}>
                    <button className='my-button'>Watch Now</button>
                    </Link>
                </div>
                <div className="info">
                    <h1 className='cont-heading'>{title}</h1>
                    <div className="mylist">
                    <p>{language}</p>
                    <ul>
                        <li>{showType}</li>
                        <li>{ageLicence}</li>
                    </ul>
                    </div>
                    <div className="summary">{description}</div>
                </div>
                <div className="cast-desc">
                    <p className='cast'>Cast</p>
                    <p>{cast}</p>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Trailer