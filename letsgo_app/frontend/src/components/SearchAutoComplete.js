
import React, { useState, useEffect } from 'react'

import axios from "axios";

const SearchAutoComplete =()=> {
    const [usernameList, setUser] = useState([])
    const [hashTagList,setHashTag] = useState([])
    const [suggestion, setSuggest]=useState([])
    const [text, setText]=useState("")

 
   const handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value[0]==="#"){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=hashTagList.sort().filter(v=>regex.test(v));
        }else {
            const regex = new RegExp(`${value}`,`i`);
            suggestion=usernameList.sort().filter(v=>regex.test(v));
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
        // debugger
        if(res.data.payload[0].username){
            res.data.payload.map((el)=>{
                setData(prevState=>[...prevState,el.username.toLowerCase()])
            })
        }else if (res.data.payload[0].tag_name){
                res.data.payload.map((el)=>{
                    setData(prevState=>[...prevState,el.tag_name.toLowerCase()])
                })
        }
    }

    useEffect(()=>{
        fetchData("http://localhost:3005/users/",setUser)
        fetchData("http://localhost:3005/hashtags/",setHashTag)

    }, [])
        console.log(text)
        return (
            <div>
            <input value={text} type="text" onChange={handleChange}/>
              {renderSuggestion()}
            </div>
        )
    }

export default SearchAutoComplete
