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

/*exmaple03: dynamic content render*/

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
}

export default App;
