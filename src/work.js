import React from 'react'

function Work(props){
    return(
        <div>
            <h1><strong><i><u>work you have to do</u></i></strong></h1>
            <hr></hr>
    <h2>first you have to download {props.download} </h2> 
    <hr></hr>
            <h2>second open it by start command</h2>
            <hr></hr>
            <h2>then open it in vs code</h2>
            <hr></hr>
            <h2> create new file of your choice name</h2>
            <hr></hr>
            <h2> link it with app.js file</h2>
            <hr></hr>
            <h2> make parent to child relation</h2>
            <hr></hr>
            <h2> then deploy it on surge</h2>
            <hr></hr>
            <h2> push on github </h2>
            <hr></hr>
            <h2> now create CI action  </h2>
        </div>
    );
}
export default Work;