
import React, { useState, useEffect } from 'react'
import axios from "axios";

const SearchAutoComplete =()=> {
    const [list, setList] = useState([])
    const [suggestion, setSuggest]=useState([])
    const [search, setSearch]=useState("")
    
   const handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value.length>0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=list.sort().filter(v=>regex.test(v));
        }
        setSuggest(suggestion);
        setSearch(value)
    }

    const handleSelected=(value)=>{
        setSearch(value);
        setSuggest([])
    }

    const renderSuggestion =()=>{
        if(suggestion.length===0){
            return null
        }else{
            return (
                <ul>
                    {suggestion.map((item)=><li key={item} onClick={()=>handleSelected(item)}>{item}</li>)}
                </ul>
            )
        }
    }

    const fetchData= async(url,setData)=>{
        let res= await axios.get(url)
        try {
            res.data.payload.map((el)=>{
                return setData(prevState=>[...prevState,...el.array_agg])
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handleSearch=(e)=>{
        e.preventDefault() 
        window.location="../homepage"
        sessionStorage.searchTerm=e.target.elements[0].value
    }

    useEffect(()=>{
        fetchData("http://localhost:3005/hashtags/",setList)
    }, [])

        return (
            <form onSubmit={handleSearch}>
            <input placeholder="Search Hash Tag" value={search} type="text" onChange={handleChange}/>
              {renderSuggestion()}
              <button type="submit">Search Tag</button>
            </form>
        )
    }

export default SearchAutoComplete
