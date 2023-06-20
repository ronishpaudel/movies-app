import { useQuery } from "@tanstack/react-query"
import { API } from "./api"

const fetchMovieData=async()=>{
try{
    const response= await API.get("?&language=en-Us")
    return response.data.results
}catch(e){
    if(e instanceof Error){
        console.log(e.message)
    }
}

}
const useMovies=()=>{
    const moviesQuery=useQuery({
        queryKey:["moviesData"],
        queryFn:fetchMovieData,
        onError:(e:Error)=>{
          console.log(e.message)
        }
    })
    return moviesQuery;
}
export {useMovies}