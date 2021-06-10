import React, { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const allClicks = good + neutral + bad;
  const average = (good - bad) / allClicks;
  const positivePercentage = (good / allClicks) * 100;

  if (good || neutral || bad) {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={allClicks} />
            <Statistic text="average" value={average} />
            <Statistic
              text="positive"
              value={String(positivePercentage).concat("%")}
            />
          </tbody>
        </table>
      </div>
    );
  }
  return <div>No feedback given</div>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseSum = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} handleClick={increaseSum} />
      <Button text={"neutral"} handleClick={increaseNeutral} />
      <Button text={"bad"} handleClick={increaseBad} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
