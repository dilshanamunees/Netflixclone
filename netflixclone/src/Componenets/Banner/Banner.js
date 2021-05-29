import React, {useEffect, useState} from 'react'
import {API_KEY,imageURL} from '../../Constants/Constants'
import axios from "../../axios"
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         console.log(response.data.results[0])
         const movie_num = Math.floor(Math.random() * response.data.results.length)
         console.log(movie_num)
         setMovie(response.data.results[movie_num])



     })  
        
    }, [])
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path:""})`}}
         className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner-button">
                   <button className="button"> Play</button>
                   <button className='button'>MyList</button>
                </div>
                <h1 className='description'>{movie ? movie.overview :""}
                       </h1>

            </div>
            <div className="fade_bottom"></div>


            
        </div>
    )
}

export default Banner
