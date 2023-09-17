import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { useEffect } from "react"
import { Api_options } from "../utils/constants"

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
   
    const getNowPlaying =async()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options)
        const response = await data.json()
      
        dispatch(addNowPlayingMovie(response.results))
       
       
        
      }
      useEffect(() => {
        if(! nowPlayingMovies){
          console.log("api call>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
          getNowPlaying()
        }
      
       
        return () => {
        
        }
      }, [])
}

export default useNowPlayingMovies;