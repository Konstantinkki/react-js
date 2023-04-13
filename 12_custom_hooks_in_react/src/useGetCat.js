import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';

export const useGetCat = () =>{
    const { data, refetch, isLoading: isCatLoading, error } = useQuery (["cat"], async()=>{
        return Axios.get("https://catfact.ninja/fact").then((res) =>res.data);
    });

    /*const {data, isLoading:isCatLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then(res => res.data);
    })*/

    const refetchData = () => {
        alert("refetching Data");
        refetch();
    }

    return { data, refetchData, isCatLoading }
}