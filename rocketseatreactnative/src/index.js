import React from 'react'
import Routes from './routes'
// Se não vou usar, tbm não preciso dar nome
import './config/StatusBarConfig'

// Nem sempre você precisa extender o Component,
//      na verdade, só precisa quando for usar propriedades do THIS,
//      tais como this.state, this.props
const App = () => <Routes />

export default App