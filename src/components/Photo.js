import React from "react";

const Photo = props => {
    return (
        <div className="Card">
          <h2>{props.title}</h2>
          <img src={props.img}></img>
            <p> {props.date}</p>
            <p>{props.explanation}</p>
          
        </div>
      );
    };

export default Photo;