import React from "react";
import { CoursePart } from "../types";

const Body = ({courseParts}: {courseParts: CoursePart[]}) => {

    return (
        <div>
            {courseParts.map((part, i) => {
                switch(part.type) {
                    case "normal":
                        return (<div>
                            <h2>{part.name} {part.exerciseCount}</h2>
                            <p>{part.description}</p>
                        </div>)
                        break;
                    case "groupProject":
                        return (
                            <div>
                                <h2>{part.name} {part.exerciseCount}</h2>
                                <p>Group projects count - {part.groupProjectCount}</p>
                            </div>
                        )
                    case "submission":
                        return (
                            <div>
                                <h2>{part.name} {part.exerciseCount}</h2>
                                <p>{part.description}</p>
                                <a href={part.exerciseSubmissionLink}>{part.exerciseCount}</a>
                            </div>
                        )
                    case "special":
                        return (
                            <div>
                                <h2>{part.name} {part.exerciseCount}</h2>
                                <p>{part.description}</p>
                                <p>{part.requirements.map((val,i) => <span key={i}>{val} &nbsp;</span>)}</p>
                            </div>
                        )
                    default:
                        return null;
                }
            })}
        </div>
    )
}

export default Body;