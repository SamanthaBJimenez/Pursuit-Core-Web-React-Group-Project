
import React, { useState, useEffect } from 'react'

import axios from "axios";

const SearchAutoComplete =()=> {
    const [list, setList] = useState([])
    const [suggestion, setSuggest]=useState([])
    const [text, setText]=useState("")
    
   const handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value.length>0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=list.sort().filter(v=>regex.test(v));
        }
        setSuggest(suggestion);
        setText(value)
    }

    const handleSelected=(value)=>{
        setText(value);
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
                setData(prevState=>[...prevState,...el.array_agg])
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData("http://localhost:3005/hashtags/",setList)
    }, [])

        return (
            <div>
            <input placeholder="Search Hash Tag" value={text} name="name" type="text" onChange={handleChange}/>
              {renderSuggestion()}
              <button>Search Tag</button>
            </div>
        )
    }

export default SearchAutoComplete
