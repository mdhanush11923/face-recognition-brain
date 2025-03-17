import { useState } from 'react';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation/Navigation';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Rank from './components/Rank/Rank';

function App() {
  const [imageUrl, setImageUrl] = useState(
  );
  const [box, setBox] = useState({});

  const changeImageUrl = (src) => {
    setImageUrl(src);
  }

  const displayFaceBox = (dimensions) => {
    console.log(dimensions);
    setBox(dimensions)

  }

  return (
    <div className="App">
      <div className="particles">
        <ParticlesBackground />
      </div>
      <Navigation />
      <div style={{display: "flex"}}>
        <Logo />
        <Rank />
      </div>
      <ImageLinkForm changeImageUrl={changeImageUrl} displayFaceBox={displayFaceBox} />
      <FaceRecognition imageUrl={imageUrl} box={box} />
    </div>
  );
}

export default App;
