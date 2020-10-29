import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers/random')
      .then(response => setRandomBeer(response.data[0]))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Beer Generator</h1>
      <p>{randomBeer.name}</p>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.description}</p>
    </div>
  );
}

export default App;
