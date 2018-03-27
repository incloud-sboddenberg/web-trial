import '../App.css';

import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Page404 from './Page404'
import LoginBox from './LoginBox'
import FeedPage from './FeedPage'
import APost from './APost'
import RootURL from './RootURL'
import CategoryPage from './CategoryPage'


class App extends Component {

  render() {
    
    return (
        <MuiThemeProvider> 
            <Switch>
                <Route exact path="/" component={RootURL} />
                <Route exact path="/reload" component={null} />
                <Route exact path="/login" component={LoginBox} />
                <Route exact path="/feed/:sort(best|worst|oldest|newest)?" component={FeedPage} />
                <Route exact path="/c/:category/:sort(best|worst|oldest|newest)?" component={CategoryPage} />
                <Route path="/c/:category/:post_id" component={APost} />
                <Route component={Page404} />
            </Switch>
        </MuiThemeProvider>

    )
  }
}


export default App
