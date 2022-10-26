import React,{useState} from "react"
import {Box, Button, TextField} from "@mui/material"
import {Meteor} from "meteor/meteor"
import { useTracker } from 'meteor/react-meteor-data'

const App = () =>{ 
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const user = useTracker(() => Meteor.user());
    return (
    <Box sx={{
        display:"flex",
        flexDirection:"column"
    }}>
        <TextField id="usernameid" label="username" variant="standard" 
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <TextField id="passid" label="password" variant="standard" 
          onChange={(e) => {
            setPass(e.target.value)
          }}
        />

        <Button variant="contained" onClick={async ()=>{
            await Meteor.loginWithPassword(username, pass)
            console.log(user)
        }}>Login</Button>
</Box>)
}

export default App