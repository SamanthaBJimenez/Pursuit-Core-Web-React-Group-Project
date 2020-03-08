import React, { Component } from 'react'
import axios from "axios"

export class UserInfo extends Component {
    state = {
        user:null
    }
    getUserInfo = async()=>{
        let res= await axios.get(url)
        this.setState({user:res.data})
    }

    componentDidMount(){
        this.getUserInfo()
    }
                
    render() {
        return (
            <div>
                {this.user}
            </div>
        )
    }
}

export default UserInfo
