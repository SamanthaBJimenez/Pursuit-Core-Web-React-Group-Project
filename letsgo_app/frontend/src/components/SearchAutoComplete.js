// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'

import axios from "axios"

const SearchAutoComplete =()=> {
    const [usernameList, setUser] = useState([])
    const [hashTagList,setHashTag] = useState("")
    const [suggestion, setSuggest]=useState("")

 
   const handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value.length>0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=usernameList.sort().filter(v=>regex.test(v));
        }
        setHashTag(suggestion)
    }

    const renderSuggestion=()=>{
        // const {suggestion}=this.state;
        if(suggestion.length===0){
            return null
        }
        return(
            <ul>
            {suggestion.map((user)=><li>{user}</li>)}
            </ul>
        )
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

    console.log(usernameList,hashTagList)

        return (
            <div>
                <input type="text" onChange={handleChange}/>
              {renderSuggestion()}
            </div>
        )
    }

export default SearchAutoComplete
