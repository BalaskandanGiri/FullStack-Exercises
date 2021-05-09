import React from 'react';
import Part from "./Part";

const Content = (props) => {

    return props.exercises.map((exercise, index) => {
        return <Part part={props.parts[index]} exercise={props.exercises[index]}/>
    });


};

export default Content;