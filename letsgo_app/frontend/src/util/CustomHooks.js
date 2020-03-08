import { useEffect, useState } from 'react';
import axios from 'axios';
export const useInput = ( url, initialValue ) =>{
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async (url) => {
        try{
            let res = await axios.get(url);
            setData(res.data.payload);
            setIsLoading(false)
        }catch(error){
            setData(initialValue);
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchData(url)
    },[])
    return [data, isLoading]
}