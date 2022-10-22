import React from "react";
import { ThemeProvider } from "react-bootstrap";
import {Books} from "./books";
import axios from "axios";

export class Read extends React.Component{

    //componentDidMount method
    componentDidMount(){
        // getting axios from this 'https://jsonblob.com/api/jsonblob/1027219693823606784'
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=>{
            //setting the state here
            this.setState({books:response.data})
        })//end then method
        
        //catch method catch the error
        .catch((error)=>{
            //console.log() shows the error
            console.log(error);
        })//end catch method
        
    }//end componentDidMount method

    //state
    state ={
        books:[  ]     
    }
    
    //render method
    render(){
        //return method
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        )//end return method
    }//end render method
}//end class
