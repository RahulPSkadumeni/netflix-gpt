import { useDispatch } from "react-redux"
import { Api_options } from "../utils/constants"
import { useEffect } from "react"
import { addAiringToday } from "../utils/movieSlice"

const  useAiringToday=()=>{

    const dispatch=useDispatch()
    

const getAiringToday=async()=>{
    const data =await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', Api_options)
    const response = await data.json()
  console.log("upcoming...",response.results)
    
    dispatch(addAiringToday(response.results))
}
useEffect(() => {
    getAiringToday()

  
}, [])


}

export default useAiringToday