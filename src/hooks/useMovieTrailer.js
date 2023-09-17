import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { Api_options } from "../utils/constants"

const useMovieTrailer=(movie_id)=>{
    
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo)
const dispatch=useDispatch()
    const geMovieVideos= async()=>{
        const  data= await
        fetch("https://api.themoviedb.org/3/movie/"+ movie_id+"/videos?language=en-US", Api_options)
        const response=await data.json()
        const filterData=await response.results.filter((video)=>video.type === "Trailer")
       const trailer= filterData.length ?filterData[0]:response.result[0]
     
       dispatch(addTrailerVideo(trailer))
       }
       useEffect(() => {
        if(!trailerVideo){
            geMovieVideos()
        }
          
         
       }, [])
}

export default useMovieTrailer