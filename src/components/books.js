import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component{
    
    //render method
    render(){
        //return method
        return this.props.books.map(  (book)=>{
            return <BookItem book={book} key={book.isbn}></BookItem>

            }
        );//end return menthod
        // return(
        //     <div>
        //         <h3>My Books</h3>
        //         <BookItem></BookItem>
        //     </div>        
        // )
        
    }//end render method
}//end class
