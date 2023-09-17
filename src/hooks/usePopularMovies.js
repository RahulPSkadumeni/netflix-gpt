import { useDispatch, useSelector } from "react-redux"
import { Api_options } from "../utils/constants"
import { useEffect } from "react"
import { addPopularMovies } from "../utils/movieSlice"

const usePopularMovies=()=>{

    const dispatch=useDispatch()
    
  const popularNow=useSelector((store)=>store.movies.popularMovies)
const getPopularMovies=async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_options)
    const response = await data.json()

    console.log("first", response.results)
    dispatch(addPopularMovies(response.results))
}
useEffect(() => {
    if(!popularNow){getPopularMovies()}

  
}, [])


}

export default usePopularMovies