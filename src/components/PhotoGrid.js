import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import axios from "axios";

export default function PhotoGrid() {
  const [photo, setPhoto] = useState([]);
  

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=I93AsefdJmHGAGpvhfWstOgcwc2v5Y50qIy5SM4T&date=2012-03-14")
    .then(response => {
      console.log(response.data)
      setPhoto(response.data)
    })
    .catch( error => {
      console.log("Houston, we have a problem:", error)
    })
  },[])
  return (
    <div className="card">
      
        
        <Photo

        title={photo.title}
        img={photo.url}
        date={photo.date}
        explanation={photo.explanation}/>
        
      
    </div>
  );
}