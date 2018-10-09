# react-novice-button

> button component

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
        <Button primary>click me</Button>
        <Button default>click me</Button>
        <Button danger >click me</Button>
        <Button warning>click me</Button>
        <Button success >click me</Button>
    )
  }
}
```

## License

MIT © [adnenre](https://github.com/adnenre)
