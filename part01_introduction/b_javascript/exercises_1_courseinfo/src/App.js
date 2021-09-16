import React from 'react'

///// 1_course information: step 3 
/*const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name}: {part1.exercises}</p>
      <p>{part2.name}: {part2.exercises}</p>
      <p>{part3.name}: {part3.exercises}</p>
      <p>Total: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}*/

///// 1_course information: step 4 

const Header = (props) => {  
  console.log(props)
  return (    
    <div>      
      <h1>{props.course}</h1>    
    </div>  
  )
}

const Content = (props) => {  
  console.log(props)
  return (    
    <div>      
      <h1>{props.parts}</h1>    
    </div>  
  )
}

const Total = (props) => {  
  console.log(props)
  return (    
    <div>      
      <h1>{props.parts}</h1>    
    </div>  
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    part1: {
      name: 'Fundamentals of React',
      exercises: 10
    },
    part2: {
      name: 'Using props to pass data',
      exercises: 7
    },
    part3: {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App

