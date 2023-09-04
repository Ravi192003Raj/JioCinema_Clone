import React from 'react'
import { useLocation ,Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/list.css'
const List = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const data1Param = searchParams.get('title');
  const data2Param = searchParams.get('data');

  let parsedData1 = null;
  let parsedData2 = null;

  if (data1Param && data2Param) {
    try {
      parsedData1 = JSON.parse(decodeURIComponent(data1Param));
      parsedData2 = JSON.parse(decodeURIComponent(data2Param));
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  }
  return (
    <>
      <Navbar/>
      <div className="list-container">
        <div className="list-header">
        <div className='list-nav'><Link to='/'><svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg></Link></div>        <div className="list-heading">{parsedData1}</div>
        </div>
        <div className="list-body">
          {parsedData2.map((item, index) => (
            <Link
            key={index}
            to={`/video/${index}?data=${encodeURIComponent(JSON.stringify(parsedData2))}`}
          >
            <div className="list-item" key={index}>
              <img src={item.src} alt=''/>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default List