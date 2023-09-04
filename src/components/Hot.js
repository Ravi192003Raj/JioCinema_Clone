import React from 'react'
import '../styles/hot.css';
function Hot() {
    return (
        <div className='main-container'>
            <div className='heading'>
                <h2 className='title'>
                    Hot Right Now 🔥
                </h2>
            </div>
            <div className='container'>
                <div className='container1'>
                    <img src='https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/bbo-ep-16-16x9-1689576904901.jpg?imformat=chrome' />
                </div>
                <div className='container1'>
                    <img src='https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/16x9-dgp-cta-1689527181439.jpg?imformat=chrome'/>
                </div>
            </div>
        </div>
    )
}

export default Hot