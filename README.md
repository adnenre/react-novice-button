# react-novice-button

> react button using styled-component [repo demo](https://github.com/adnenre/my-vite-app-test)

[Home page](https://adnenre.github.io/my-vite-app-test/)

[![NPM](https://img.shields.io/npm/v/react-novice-button.svg)](https://www.npmjs.com/package/react-novice-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-novice-button
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

const Counter :React.FC = () =>{
    const [counter ,setCounter] = useState<number>(0);
    const increment = () => setCounter(prevCount=> prevCount + 1 ) ;
    return (
      <Button $variant="success" onClick={increment}>success</Button>
    )
  }
}
```

# Example

## Button flat

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

const Example : React.FC = () => {
  render () {
    return (
      <div>
        <h1>Button variant</h1>
        <Button $variant="primary">primary</Button>
        <Button $variant="secondary">secondary</Button>
        <Button $variant="success">success</Button>
        <Button $variant="warning">warning</Button>
        <Button $variant="danger">danger</Button>
        <Button $variant="black">black</Button>
        <Button $variant="info">info</Button>
      </div>
    )
  }
}
```

## Button shape

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

const Example :React.FC = () => {
  render () {
    return (
      <div>
        <h1>Button shape</h1>
          <Button $variant="primary" $shape="flat"> pill</Button>
          <Button $variant="primary" $shape="round-sm"> round-sm</Button>
          <Button $variant="primary" $shape="round">round</Button>
          <Button $variant="primary" $shape="pill">pill</Button>
      </div>
    )
  }
}
```

## Button size

### Code

```jsx
import React, { Component } from 'react'

import { Button } from 'react-novice-button'

const Example : React.FC = () => {
  render () {
    return (
      <div>
        <h1>Button pill Component</h1>
          <Button $size='xs' $variant='primary'>Primary</Button>
          <Button $size='sm' $variant='info'>Info</Button>
          <Button $size='md' $variant='danger' >Danger</Button>
          <Button $size='lg' $variant='warning'>Warning</Button>
          <Button $size='xl' $variant='success' >Success</Button>
          <Button $size='xxl' $variant='black'> black</Button>
      </div>
    )
  }
}
```

## License

MIT © [adnenre](https://github.com/adnenre)
