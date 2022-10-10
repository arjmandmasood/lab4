import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component{
    render(){
        return this.props.books.map(  (book)=>{
            return <BookItem book={book} key={book.isbn}></BookItem>

            }
        );
        // return(
        //     <div>
        //         <h3>My Books</h3>
        //         <BookItem></BookItem>
        //     </div>        
        // )
    }
}