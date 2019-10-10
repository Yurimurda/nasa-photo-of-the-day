import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageCard from "./ItemCard";
import ParagraphCard from "./ParagraphCard";
import DateInput from "./DateInput";
export default function DataToItem() {
  const [imageData, setImageData] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState("YYYY-DD-MM");
//   function myFunction(textInput) {
//     setDate(value);
//   }
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        setImageData(response.data);
        setDescription(response.data.explanation)
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, [date]);
  return (
    <div className="container">
        <ImageCard image = {imageData.url} title= {imageData.title}/>
        <ParagraphCard description = {description}/>
        <DateInput setDate= {setDate}/>
    </div>
  );
}

//   return (
    
//     <div className="App-header"> <h1>You have reached peak Altitude.</h1>
//     <div className="App=link">test</div>
//     <img className="App-logo"></img>
//     <div className="App">
      
//       <p>
//         <img className="App-logo"></img>
//         <button>test</button>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun 🚀!
//       </p>
//       <Header title={title}/>
//       <Image image={photo}/>
//     </div>
//     </div>
//   );
// }

// export default App;
