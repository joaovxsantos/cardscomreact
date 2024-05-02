import './App.css'
import { Card } from './assets/Card'
import { DATA_TEXTS } from './assets/data'

function App() {
  return (
    <>
      <div className="card-container">
        {/* <Card {...DATA_TEXTS[0]} />
        <Card {...DATA_TEXTS[1]} />
        <Card {...DATA_TEXTS[2]} /> */}
        {/* <Card name={DATA_TEXTS[0].name} title={DATA_TEXTS[0].title} image={DATA_TEXTS[0].image} position={DATA_TEXTS[0].position} />
        <Card name={DATA_TEXTS[1].name} title={DATA_TEXTS[1].title} image={DATA_TEXTS[1].image} position={DATA_TEXTS[1].position} />
        <Card name={DATA_TEXTS[2].name} title={DATA_TEXTS[2].title} image={DATA_TEXTS[2].image} position={DATA_TEXTS[2].position} /> */}
        {DATA_TEXTS.map((data) => <Card {...data} />)}
      </div>
    </>
  )
}

export default App
