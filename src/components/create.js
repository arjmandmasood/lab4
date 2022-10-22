import React from "react";

export class Create extends React.Component {

    //constructor
    constructor() {
        super();
        //binding all methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        //set state empty string
        this.state = {
            title: '',
            cover: '',
            author: ''
        }//end state
    }//end constructor

    //handleSubmit method with e parameter
    handleSubmit(e) {
        e.preventDefault();
        console.log(`button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        //set the state as string
        this.setState({
            title: '',
            cover: '',
            author: ''
        })
    }//end handleSubmit method

    //onChangeBookTitle method
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }//end onChangeBookTitle method
    
    //onChangeBookCover method
    onChangeBookCover(e) {
        this.setState({
            title: e.target.value
        })
    }//end onChangeBookCover method
    
    //onChangeBookAuthor method
    onChangeBookAuthor(e) {
        this.setState({
            title: e.target.value
        })
    }//end onChangeBookAuthor method
    
    //render method
    render() {
        //return method
        return (
            <div>
                <h3>Hello from my Create component!</h3>
                {/* when Submit the form call handleSubmit method  */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>


                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>

        );//end retuen method
    }//end render method
}//end class
