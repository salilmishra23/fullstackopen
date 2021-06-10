import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ course }) => {
  const parts = course.parts;

  return (
    <React.Fragment>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </React.Fragment>
  )
}

const Footer = ({ course }) => {
  const parts = course.parts;
  const sum_parts = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <React.Fragment>
      <p>Number of exercises {sum_parts}</p>
    </React.Fragment>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />
    </div>
  )
}

export default App