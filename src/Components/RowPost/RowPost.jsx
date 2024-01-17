import React, { useEffect, useState } from 'react'
import '../RowPost/RowPost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


function RowPost({ url, title,  isSmall }) {

    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get(url).then((res) => {

            setPost(res.data.results)

        })
    }, [])

    const [urlId, setUrl] = useState("")
    function clickImage(id){
         axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).
         then((value)=>{
           if(value.data.results.length != 0){
                        setUrl(value.data.results[0])
           }else{
            console.log("array is empty");
           }
         })
    }
    return (

        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {post.map((obj) =>
                    <img onClick={() => clickImage(obj.id)}
                        className={isSmall ? 'poster-small' : 'poster'}
                        alt='poster'
                        src={imageUrl + (obj.backdrop_path ? obj.backdrop_path : "")}
                    />
                )}


            </div>
          {   urlId && <YouTube videoId={urlId.key}  opts={opts}/>   }  
        </div>
    )
}

export default RowPost