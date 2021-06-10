import React, { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const Header = (props) => <h2>{props.text}</h2>

const Anecdote = (props) => {
  const { anecdotes, votes, selected } = props;
  return (
    <div>
      {anecdotes[selected]} <br />
      {`has ${votes[selected]} votes`}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const indexMax = votes.indexOf(Math.max(...votes));

  const generateNewIndex = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const increaseVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdotes={anecdotes} votes={votes} selected={selected} />
      <div>
        <Button handleClick={increaseVote} text={"vote"} />
        <Button handleClick={generateNewIndex} text={"next anecdote"} />
      </div>
      <div>
        <Header text={"Anecdote with most votes"} />
        <Anecdote anecdotes={anecdotes} votes={votes} selected={indexMax} />
      </div>
    </div>
  );
};

export default App;