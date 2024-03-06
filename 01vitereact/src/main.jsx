import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom App</h1>
        </div>
    )
}

// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to see google'
// }
const anotherElement=(
    <a href="https://google.com" target='_blank'>link of google</a>
)
const username="payal ji padhiye"
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to see google',
    username
)
ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <MyApp />
    reactElement//object
  // anotherElement
  //<App />
)
