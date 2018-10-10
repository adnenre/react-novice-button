import React, { Component } from 'react'

import Button from 'react-novice-button';
import ButtonOutline from 'react-novice-button';

class App extends Component {
  render () {
    return (
      <div className="demo">
        <div className="portlet">
        <h1>Button Component</h1>
          <Button primary>Primary</Button>
          <Button info>Info</Button>
          <Button danger >Danger</Button>
          <Button warning>Warning</Button>
          <Button success >Success</Button>
          <Button black> black</Button>
        </div>
        <div className="portlet">
        <h1>Button Component fullwidth</h1>
          <Button primary fullwidth>Primary</Button>
          <Button info  fullwidth>Info</Button>
          <Button danger  fullwidth>Danger</Button>
          <Button warning fullwidth>Warning</Button>
          <Button success  fullwidth>Success</Button>
          <Button black fullwidth> black</Button>
        </div>
        
      </div>
    )
  }
}

export default App;
