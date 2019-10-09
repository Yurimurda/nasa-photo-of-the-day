import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./component/Header";
import NasaApod from "./component/Image";


function App() {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let yesterday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
  const[nasaimg, setNasaImg] = useState([]);
  const [imgDate, setImgDate] = useState(date);
  console.log(imgDate);
  console.log(today.getDate()-1)
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
