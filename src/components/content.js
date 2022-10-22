import React from "react";

export class Content extends React.Component{
    
    //render method
    render(){
        //return method
        return(
            <div>
                <h1>Hello World!</h1>
                 {/* it shows the date and time on the screen */}
                 <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )//end return method
    }//end render method
}//end class
