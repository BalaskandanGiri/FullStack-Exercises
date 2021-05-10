import React, {useState} from 'react'

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
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>average {avg}</p>
            <p>positive {positive}%</p>
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
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
};


export default App;