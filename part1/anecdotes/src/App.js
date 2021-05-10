import React, { useState } from 'react'

const randomIntFromInterval = (min, max)  => {
  // min and max included
  const v =  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(v);
  return v;
};


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [votes, setVotes] = useState([0,0,0,0,0,0]);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const updateVotes = () => {
    let temp = [...votes];
    temp[selected]+=1;
    if (temp[selected] > votes[mostVoted]) {
      setMostVoted(selected);
    }
    setVotes(temp);
  };
  return (
      <div>
        <p>{anecdotes[selected]}</p>
        <p>It has {votes[selected]} votes</p>
        <button onClick={() => {updateVotes()}}>vote</button><button onClick={() => {setSelected(randomIntFromInterval(0,anecdotes.length-1))}}>Next</button>
        <h1>Anecdote with most number of votes</h1>
        <p>{anecdotes[mostVoted]} has {votes[mostVoted]} votes</p>
      </div>
  )
};


export default App