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
        suggestion:[]
    }

    handleChange=(e)=>{
        const value =e.target.value
        let suggestion=[];
        if(value.length>0){
            const regex = new RegExp(`${value}`,`i`);
            suggestion=this.state.usernameList.sort().filter(v=>regex.test(v));
        }
        this.setState({suggestion})
    }

    renderSuggestion(){
        const {suggestion}=this.state;
        if(suggestion.length===0){
            return null
        }
        return(
            <ul>
            {suggestion.map((user)=><li>{user}</li>)}
            </ul>
        )
    }

    componentDidCatch(){

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
              {this.renderSuggestion()}
            </div>
        )
    }
}

export default SearchAutoComplete
