import React, {useEffect,useState} from 'react'
import {API_KEY, imageURL} from "../../Constants/Constants"
import YouTube from "react-youtube"
import axios from "../../axios"
import "./RowPost.css"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
   axios.get(props.url).then((response)=>{
     console.log(response.data.results)
     setMovies(response.data.results)
   }).catch(err=>{
 alert('Network Error')
   })
   
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const handleMovie=((id)=>{
console.log(id)
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    console.log('empty array')
  }
}
)
   })
    return (
      
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? "smallposter":"poster"} src={`${imageURL+obj.backdrop_path}`} alt="poster" />

            )}
           
               
 
    

            </div>
          { urlId && <YouTube videoId={urlId.key} opts={opts}  />}
            
        </div>
    )
}

export default RowPost
