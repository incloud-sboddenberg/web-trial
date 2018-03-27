import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const LoginBoxTemplate = (handleLoginOnClik, handleUsernameInputOnChange) => (
    <div className="App">
      <h1>Welcome To Readable</h1>
      <Card className="login-box">
        <CardTitle title="Le Login Box" />
        

        <TextField hintText="Yep, your username" floatingLabelText="username" onChange={handleUsernameInputOnChange} />
        <br />
        <FlatButton label="Login" primary={true} onClick={handleLoginOnClik} />


        <CardText>
            Please enter a username to be able to navigate, comment, and post to this "Forum".
            <br />
            If you have logged in previously with another name, you can reuse it.
        </CardText>
      </Card>
    </div>
);

export default LoginBoxTemplate
