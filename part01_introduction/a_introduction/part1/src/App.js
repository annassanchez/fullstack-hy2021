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

/* example07: using more props 

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
      <Hello name = "Ophelia" age = {age + 2}/> 
    </div>
  )
}*/

/* example08: some notes 

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name}, you are {props.age}</p>    
    </div>  
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/annassanchez">annassanchez</a>
    </div>
  )
}
/* react components always need to be capitalized */
/* also a root element is necessary (f.e. <div>) -- without it the result is an error message*/
/*const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Maya" age = {26 + 10}/>  
      <Hello name = {name} age = {age}/>
      <Hello name = "Ophelia" age = {age + 2}/>
      <Footer /> 
    </div>
  )
} */

/* example09: some notes */

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name}, you are {props.age}</p>    
    </div>  
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/annassanchez">annassanchez</a>
    </div>
  )
}
//* defining the component as an array makes the root element not necesary
//* also a root element is necessary (f.e. <div>) -- without it the result is an error message
const App = () => {
  const name = 'Peter'
  const age = 10
  return [
    <h1>Greetings</h1>,
    <Hello name = "Maya" age = {26 + 10}/>,  
    <Hello name = {name} age = {age}/>,
    <Hello name = "Ophelia" age = {age + 2}/>,
    <Footer /> 
  ]
}

export default App;
