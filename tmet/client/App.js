import React from "react"
import {Meteor} from "meteor/meteor"
const App = () => 
<button onClick={()=>{
    Meteor.call("login",{username:"sanglq",pass:"123"})
}}>Hello React</button>
export default App