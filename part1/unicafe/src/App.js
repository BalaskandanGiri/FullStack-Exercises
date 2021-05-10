import React, {useState} from 'react'

const Button = (props) => {
    return <button onClick={() => props.onclick()}>{props.text}</button>
};

const Statistic = (props) => {
  return <p>{props.text} {props.value}</p>
};

// a proper place to define a component
const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return <p>No feedback given</p>
    }

    const total = props.good+props.neutral+props.bad;
    const avg = (props.good - props.bad)/total;
    const positive = (props.good/total) * 100;
    return (
        <div>
            <Statistic text={"good"} value={props.good}/>
            <Statistic text={"neutral"} value={props.neutral}/>
            <Statistic text={"bad"} value={props.bad}/>
            <Statistic text={"average"} value={avg}/>
            <Statistic text={"positive"} value={positive+"%"}/>
        </div>
    )
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text={"good"} onclick={() => setGood(good + 1)}/>
            <Button text={"neutral"} onclick={() => setNeutral(neutral + 1)}/>
            <Button text={"bad"} onclick={() => setBad(bad + 1)}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};


export default App;