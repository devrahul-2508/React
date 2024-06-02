import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const reactElement = {
  type:'a',
  props:{
      href:"https://google.com",
      target: '_blank'
  },
  children:'Click me to visit google'
}

function MyApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const aReactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target: '_blank'
  },
  'Click to visit google'
)

const AnotherElement = (
  <a href="http://goofle.com" target="_blank">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
