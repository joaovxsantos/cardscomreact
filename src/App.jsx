import './App.css'
import { Card } from './assets/Card'
import { DATA_TEXTS } from './assets/data'
import React from 'react'

function App() {
  return (
    <>
      {/* {React.createElement(
        "div",
        { className: "card-container" },
        DATA_TEXTS.map((data) => <Card {...data} />)
      )} */}
      {React.createElement(
        'div',
        { className: 'card-container' },
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'icon' },
            React.createElement('img', { src: DATA_TEXTS[0].image })
          ),
          React.createElement('h3', null, [DATA_TEXTS[0].name]),
          React.createElement('p', null, [DATA_TEXTS[0].title]),
          React.createElement('a', { id: DATA_TEXTS[0].position }, 'Saiba mais')
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'icon' },
            React.createElement('img', { src: DATA_TEXTS[1].image })
          ),
          React.createElement('h3', null, [DATA_TEXTS[1].name]),
          React.createElement('p', null, [DATA_TEXTS[1].title]),
          React.createElement('a', { id: DATA_TEXTS[1].position }, 'Saiba mais')
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'icon' },
            React.createElement('img', { src: DATA_TEXTS[2].image })
          ),
          React.createElement('h3', null, [DATA_TEXTS[2].name]),
          React.createElement('p', null, [DATA_TEXTS[2].title]),
          React.createElement('a', { id: DATA_TEXTS[2].position }, 'Saiba mais')
        ),
      )}
    </>
  )
}

export default App
