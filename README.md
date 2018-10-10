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

import Button from 'react-novice-button'

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
       
        <h1>Button Component fullwidth</h1>
          <Button primary fullwidth>Primary</Button>
          <Button info  fullwidth>Info</Button>
          <Button danger  fullwidth>Danger</Button>
          <Button warning fullwidth>Warning</Button>
          <Button success  fullwidth>Success</Button>
          <Button black fullwidth> black</Button>
       
      </div>
    )
  }
}
```

## License

MIT © [adnenre](https://github.com/adnenre)
