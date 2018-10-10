# react-novice-button

> react button using styled-component [demo](https://codesandbox.io/s/kkrokzn7w5)

[![NPM](https://img.shields.io/npm/v/react-novice-button.svg)](https://www.npmjs.com/package/react-novice-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-novice-button
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

class Example extends Component {
  render () {
    return (
      <Button primary>Primary</Button> 
    )
  }
}
```

# Example

## Button flat

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/adnenre/react-novice-button/master/prev/button-flat.gif">
</p>

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

class Example extends Component {
  render () {
    return (
      <div>
        <h1>Button Component</h1>
          <Button primary>Primary</Button>
          <Button info>Info</Button>
          <Button danger >Danger</Button>
          <Button warning>Warning</Button>
          <Button success >Success</Button>
          <Button black> black</Button>
      </div>
    )
  }
}
```
## Button rounded

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/adnenre/react-novice-button/master/prev/button-rounded.gif">
</p>

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

class Example extends Component {
  render () {
    return (
      <div>
        <h1>Button rounded Component</h1>
          <Button rounded primary>Primary</Button>
          <Button rounded info>Info</Button>
          <Button rounded danger >Danger</Button>
          <Button rounded warning>Warning</Button>
          <Button rounded success >Success</Button>
          <Button rounded black> black</Button>
      </div>
    )
  }
}
```
## Button outline

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/adnenre/react-novice-button/master/prev/button-rounded.gif">
</p>

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

class Example extends Component {
  render () {
    return (
      <div>
        <h1>Button rounded Component</h1>
          <Button outline rounded primary>Primary</Button>
          <Button outline rounded info>Info</Button>
          <Button outline rounded danger >Danger</Button>
          <Button outline rounded warning>Warning</Button>
          <Button outline rounded success >Success</Button>
          <Button outline rounded black> black</Button>
      </div>
    )
  }
}
```
## License

MIT © [adnenre](https://github.com/adnenre)
