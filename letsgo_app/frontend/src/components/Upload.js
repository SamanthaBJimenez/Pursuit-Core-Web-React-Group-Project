import React from 'react';
import axios from "axios"
import '../css/Upload.css';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // console.log(formData , config)
        axios.post("/uploadphoto",formData,config)
        .then((response) => {
            // debugger
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    render() {
        return (
            <>
            <form onSubmit={this.onFormSubmit}>
                <h1>LOGO!</h1>
                <h3>Upload</h3>
                <label>
                    Image
                    <input type="file" name="myImage" onChange={this.onChange} />
                </label>
                <button type="submit">Upload</button>
            </form>
                <label>
                    Text
                    <input type="text" name="myText" onChange={this.onChange} />
                </label>
            <button>Post</button>
            </>
        )
    }
}


export default Upload;