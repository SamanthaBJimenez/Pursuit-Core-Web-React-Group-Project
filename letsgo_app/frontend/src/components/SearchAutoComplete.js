import React, { Component } from 'react'

export class SearchAutoComplete extends Component {
    state = {
        usernameList:[
            'David',
            'Damien',
            'Sara',
            'Jane'
        ],
        hashTagList:[],
        suggestion:[],
        text:""
    }

    handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value.length>0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=this.state.usernameList.sort().filter(v=>regex.test(v));
        }
        this.setState({suggestion,text:value})
    }
    handleSelected(value){
        this.setState({
            text:value,
            suggestion:[]
        })
    }

    renderSuggestion(){
        const {suggestion}=this.state;
        if(suggestion.length===0){
            return null
        }
        return(
            <ul>
            {suggestion.map((user)=><li key={user} onClick={()=>this.handleSelected(user)}>{user}</li>)}
            </ul>
        )
    }

    componentDidCatch(){

    }

    render() {
        return (
            <div>
                <input value={this.state.text} type="text" onChange={this.handleChange}/>
              {this.renderSuggestion()}
            </div>
        )
    }
}

export default SearchAutoComplete


// // import React, { Component } from 'react'
// import React, { useState, useEffect } from 'react'

// import axios from "axios"

// const SearchAutoComplete =()=> {
//     const [usernameList, setUser] = useState([])
//     const [hashTagList,setHashTag] = useState("")
//     const [suggestion, setSuggest]=useState("")
//     const [text, setText]=useState("")

 
//    const handleChange=(e)=>{
//         const value =e.target.value
//         let suggestion=[];
//         if(value.length>0){
//             const regex = new RegExp(`${value}`,`i`);
//             suggestion=usernameList.sort().filter(v=>regex.test(v));
//         }
//         setSuggest({suggestion})
//     }

//     const renderSuggestion=()=>{
//         if(suggestion.length===0){
//             return null
//         }
//         return(
//             <ul>
//             {suggestion.map((user)=><li key={user}>{user}</li>)}
//             </ul>
//         )
//     }

//     const fetchData= async(url,setData)=>{
//         let res= await axios.get(url)
//         // debugger
//         if(res.data.payload[0].username){
//             res.data.payload.map((el)=>{
//                 setData(prevState=>[...prevState,el.username.toLowerCase()])
//             })
//         }else if (res.data.payload[0].tag_name){
//                 res.data.payload.map((el)=>{
//                     setData(prevState=>[...prevState,el.tag_name.toLowerCase()])
//                 })
//         }
//     }

//     useEffect(()=>{
//         fetchData("http://localhost:3005/users/",setUser)
//         fetchData("http://localhost:3005/hashtags/",setHashTag)

//     }, [])

//         return (
//             <div>
//                 <input type="text" onChange={handleChange}/>
//               {renderSuggestion()}
//             </div>
//         )
//     }

// export default SearchAutoComplete
