import './App.css'
import Dither from './components/Dither';
import Header from './components/Header';

function App() {

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Header />
      <Dither
        waveColor={[0.4, 0.3, 0.1]}
        pixelSize={5}
        colorNum={12}
        waveAmplitude={0.38}
        waveFrequency={2.6}
        waveSpeed={0.05}
        enableMouseInteraction={false}
      />
    </div>
  )
}

export default App
