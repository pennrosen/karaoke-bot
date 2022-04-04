import './App.css';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


import InputForm from './components/InputForm';
import KaraokePlaylist from './components/KaraokePlaylist';

function App() {

  // const [inputPlaylist, setInputPlaylist] = useState('')
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    

    const outputPlaylist = data.inputPlaylist + '...but changed'
    setOutputPlaylist(outputPlaylist)
  }
  const [outputPlaylist, setOutputPlaylist] = useState('')
  // spotify playlist format: https://open.spotify.com/playlist/3289ByieVzSwERpVZ3BVYi?si=2374f54ea92d4708
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Karaoke Playlist Generator</h1>
        <p>generate a karaoke playlist from a non-karaoke playlist</p>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          Input playlist: <input defaultValue="" {...register("inputPlaylist")} />
          <input type="submit" value="generate" />
          <br/>
          karoke playlist: <output name="karaokePlaylist">{outputPlaylist}</output>
        </form>
      </header>
    </div>
  );
}

export default App;
