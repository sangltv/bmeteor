import React from "react"
import {Button} from "styled-system-html"
import {Meteor} from "meteor/meteor"
const App = () => 
<Button color="red" onClick={()=>{
    Meteor.call("login",{username:"sanglq",pass:"123"})
}}>Login</Button>
export default App