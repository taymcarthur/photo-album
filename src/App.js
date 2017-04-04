import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Front from './Front'
import Middle from './Middle'
import End from './End'

export default React.createClass({

  render() {
    return (
      <Router>
      <div>
        <Route exact={true} path="/" component={Front} />
        <Route path="/Middle/:middleAlbum" component={Middle} />
        <Route path="/End/:endImg" component={End} />
      </div>
      </Router>
    );
  }

})


