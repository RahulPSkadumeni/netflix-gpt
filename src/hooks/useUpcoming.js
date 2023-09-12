import { useDispatch } from "react-redux"
import { Api_options } from "../utils/constants"
import { useEffect } from "react"
import { addTopRatedMovies,addUpcomingMovies } from "../utils/movieSlice"

const useUpcoming=()=>{

    const dispatch=useDispatch()
    

const getUpcoming=async()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', Api_options)
    const response = await data.json()
  console.log("upcoming...",response.results)
    
    dispatch(addUpcomingMovies(response.results))
}
useEffect(() => {
    getUpcoming()

  
}, [])


}

export default useUpcoming