import { useDispatch } from "react-redux"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { useEffect } from "react"
import { Api_options } from "../utils/constants"

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const getNowPlaying =async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options)
        const response = await data.json()
        console.log(response.results)
        dispatch(addNowPlayingMovie(response.results))
       
       
        
      }
      useEffect(() => {
        getNowPlaying()
       
        return () => {
        
        }
      }, [])
}

export default useNowPlayingMovies;