import React from 'react';
import Part from "./Part";

const Content = (props) => {

    return props.parts.map((part, index) => {
        return <Part part={props.parts[index].name} exercise={props.parts[index].exercises}/>
    });


};

export default Content;