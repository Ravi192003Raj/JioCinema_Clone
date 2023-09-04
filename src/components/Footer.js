import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <div className="foot">
        <div className="more-container">
            <div className="columns">
                <div className="column1">
                    <div className="accordion-head">
                        <div className="item">
                            <h4 className="col-head">Jio Cinema</h4>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">For You</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Sports</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Free</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Premium</h5>
                        </div>
                    </div>
                </div>
                <div className="column2">
                    <div className="accordion-head">
                        <div className="item">
                            <h4 className="col-head">Support</h4>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Help Center</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Term of Use</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Privacy Policy</h5>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="item">
                            <h5 className="name">Content Complaints</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="social-container">
                <div className="social-container1">
                    <span className="cont-head">Connect With Us</span>
                    <div className="handles">
                        <span className="icon"><svg style={{ fill: '#ffffff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></span>
                        <span className="icon"><svg style={{ fill: '#ffffff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></span>
                        <span className="icon"><svg style={{ fill: '#ffffff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></span>
                        <span className="icon"><svg style={{ fill: '#ffffff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></span>
                    </div>
                </div>
                <hr/>
                <div className="social-container2">
                    <span className="cont-head">Download the app</span>
                    <div className="show">
                        <span className="first">
                            <img alt="socials" src="https://www.jiocinema.com/images/googlePlay.svg"/>
                        </span>
                        <span className="first">
                            <img alt="socials" src="https://www.jiocinema.com/images/appleStore.svg"/>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="rights">
        <div id='text'>Copyright © 2023 Ravi&Subhasis Limited (RSL). All rights reserved.</div>
        <div className='footer-logo'><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 44C34.155 44 44 34.155 44 22C44 9.845 34.155 0 22 0C9.845 0 0 9.845 0 22C0 34.155 9.845 44 22 44Z" fill="#D9008D" />
                        <path d="M32.0241 10.1272C31.9935 9.95057 31.9292 9.7818 31.8349 9.63059C31.7405 9.47937 31.618 9.34866 31.4743 9.24594C31.3305 9.14322 31.1684 9.07049 30.9973 9.03192C30.8261 8.99335 30.6491 8.9897 30.4765 9.02116L29.2892 9.23964L26.701 13.8825L32.491 12.831L32.0241 10.1272ZM25.8739 9.85413L20.3908 10.851L17.8026 15.4665L23.2858 14.4833L25.8739 9.85413ZM16.9888 11.4655L12.106 12.3394C11.7631 12.3998 11.4568 12.5949 11.2524 12.8832C11.048 13.1714 10.9618 13.53 11.012 13.8825L11.4656 16.6135L14.3873 16.081L16.9888 11.4655ZM11.6524 17.9791V30.2689C11.6524 30.9932 11.9335 31.6879 12.4339 32.2001C12.9343 32.7123 13.613 33 14.3206 33H30.3298C31.0374 33 31.7161 32.7123 32.2165 32.2001C32.7169 31.6879 32.998 30.9932 32.998 30.2689V17.9791H11.6524ZM25.3403 26.582L21.7916 29.313C21.5934 29.4652 21.3577 29.5579 21.1109 29.5806C20.8642 29.6034 20.6161 29.5554 20.3945 29.442C20.1729 29.3286 19.9865 29.1542 19.8563 28.9385C19.726 28.7228 19.657 28.4742 19.657 28.2206V22.7585C19.657 22.5049 19.726 22.2563 19.8563 22.0406C19.9865 21.8248 20.1729 21.6505 20.3945 21.5371C20.6161 21.4237 20.8642 21.3757 21.1109 21.3984C21.3577 21.4212 21.5934 21.5139 21.7916 21.666L25.3403 24.3971C25.506 24.5243 25.6404 24.6892 25.7331 24.8789C25.8257 25.0685 25.8739 25.2775 25.8739 25.4895C25.8739 25.7015 25.8257 25.9106 25.7331 26.1002C25.6404 26.2898 25.506 26.4548 25.3403 26.582Z" fill="#F6F6F6" />
                    </svg>
                    </div>
    </div>
    </>
  )
}

export default Footer
