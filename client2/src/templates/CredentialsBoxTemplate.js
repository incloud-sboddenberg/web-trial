import React from 'react'

import {Card, CardTitle, CardText} from 'material-ui/Card'

import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'


const CredentialsBoxTemplate = (handleFormSubmit, isLogin, toggleLogin) => (
    <div className="App">
      <h1>Welcome To Another Weather App</h1>
      <Card className="login-box">
        <CardTitle title="Le Login Box" />
        <form onSubmit={handleFormSubmit} >
    
        {isLogin &&
            <div>
            <TextField hintText="username or email" floatingLabelText="username/email" name="username" />
            <br />
            </div>
        }
        
        {!isLogin &&
            <div>
            <TextField hintText="username" floatingLabelText="username" name="username" />
            <br />

            <TextField hintText="email" floatingLabelText="email" name="email" />
            <br />
            </div>
        }

        <TextField hintText="password" floatingLabelText="password" type="password" name="password" />
        <br />
        <FlatButton type="submit" label={(isLogin)? 'Login': 'Sign Up'} primary={true} />
        
        </form>

        <CardText>
            {isLogin &&
                <a onClick={toggleLogin}>No Account?</a>
            }

            {!isLogin &&
                <a onClick={toggleLogin}>Already have an account?</a>
            }
        </CardText>
      </Card>
    </div>
)


export default CredentialsBoxTemplate
