import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header";
import Image from "./component/Image";


function App() {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response =>{
      console.log("Great Success! -'Borat'")
      setPhoto(response.data.url);
      setTitle(response.data.title);
    })
    .catch(error =>{
      console.log("An error has occurred:", error);
    });
  }, [])
  return (
    
    <div className="App-header"> <h1>You have reached peak Altitude.</h1>
    <div className="App=link">test</div>
    <img className="App-logo"></img>
    <div className="App">
      
      <p>
        <img className="App-logo"></img>
        <button>test</button>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header title={title}/>
      <Image image={photo}/>
    </div>
    </div>
  );
}

export default App;
