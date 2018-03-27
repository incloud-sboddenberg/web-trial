import '../App.css';

import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Page404 from './Page404'
import FeedPage from './FeedPage'
import RootURL from './RootURL'
import CredentialsBox from './CredentialsBox'
import DetailsPage from './DetailsPage'

class App extends Component {

  render() {
    
    return (
        <MuiThemeProvider> 
            <Switch>
                <Route exact path="/" component={RootURL} />
                <Route exact path="/login" component={CredentialsBox} />
                <Route exact path="/home" component={FeedPage} />
                <Route exact path="/details/:country" component={DetailsPage} />
                <Route component={Page404} />
            </Switch>
        </MuiThemeProvider>

    )
  }
}


export default App
