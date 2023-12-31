import { useDispatch, useSelector } from "react-redux"
import { Api_options } from "../utils/constants"
import { useEffect } from "react"
import { addTopRatedMovies } from "../utils/movieSlice"

const useTopRated=()=>{

    const dispatch=useDispatch()
    const topRated=useSelector((store)=>store.movies.topRatedMovies)

const getTopRated=async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_options)
    const response = await data.json()

    console.log("first top rated", response.results)
    dispatch(addTopRatedMovies(response.results))
}
useEffect(() => {
   if(!topRated){
     getTopRated()
    
   }
  
}, [])


}

export default useTopRated