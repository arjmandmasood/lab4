import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    
    //render method
    render() {
        //return method
        return (
            <div>
                {/* card   */}
                <Card>
                    {/* card header */}
                    <Card.Header>{this.props.book.title}</Card.Header>
                    {/* card body */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.book.authors[0]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )//end return method
    }//end render method
}//end class
