import React from 'react'

/*example01: start
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)*/

/*example02 : console
const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}*/

/*exmaple03: dynamic content render

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}*/

/* example04: JSX 

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}*/

/* example05: adding multiple components 

const Hello = () => {  
  return (    
    <div>      
      <p>Hello world</p>    
    </div>  
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />  
      <Hello />
      <Hello /> 
    </div>
  )
}*/

/* example06: passing data to components 

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name}</p>    
    </div>  
  )
}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "George"/>  
      <Hello name = "Daisy"/>
      <Hello name = "Ophelia"/> 
    </div>
  )
}*/

/* example07: using more props */

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name}, you are {props.age}</p>    
    </div>  
  )
}
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Maya" age = {26 + 10}/>  
      <Hello name = {name} age = {age}/>
      <Hello name = "Ophelia" age = {age+2}/> 
    </div>
  )
}

export default App;
