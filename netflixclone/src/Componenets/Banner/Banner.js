import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">movie name</h1>
                <div className="banner-button">
                   <button className="button"> Play</button>
                   <button className='button'>MyList</button>
                </div>
                <h1 className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum nostrum deleniti id, quos, culpa ducimus, officia ab nisi corrupti sint soluta. Commodi nisi cumque, harum labore nesciunt iusto amet.
                </h1>

            </div>
            <div className="fade_bottom"></div>


            
        </div>
    )
}

export default Banner
