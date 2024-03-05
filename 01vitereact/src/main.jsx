import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//   type : 'a',
//   props : {
//     href : "https://google.com",
//     target : "_blank",
//   },
//   children : "click me to visit google"
// }

//now we are making according to react
const reactElement = React.createElement(
  'a',
  { href : "https://google.com", target : "_blank" },
  'click me to visit google'
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
