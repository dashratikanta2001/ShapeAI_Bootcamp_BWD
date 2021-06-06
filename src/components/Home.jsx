import React from "react";
import Note from "./Note";

function Home() {
  return (
    <div className="container">
      <div className="main">
        <div className="para">
          <h1>Industrial Trainings and Internships</h1>
          <p>
            Learn Artificial Intelligence and Full-Stack Web Development from
            people at Google, Goldman Sachs, American Express, Jio and
            Microsoft.
          </p>
          <button className="btn">Start learning</button>
        </div>
        <div className="image">
          <div className="div-block-3"></div>
          <img
            src="https://uploads-ssl.webflow.com/6077f96cf4fa19216396daaf/60797b60597955247d311007_hero%202.png"
            alt="imageofaman"
            className="hero-image"
          />
        </div>
      </div>
      <div className="courses">
        <h1 className="heading">Explore Courses</h1>
        <br />
        <Note />
      </div>
    </div>
  );
}
export default Home;
