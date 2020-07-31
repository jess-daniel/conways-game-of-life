import React from "react";

const About = () => {
  return (
    <div className="about">
      <div>
        <h2>Rules</h2>
        <ol>
          <li>Any live cell with two or three live neighbours survives.</li>
          <li>Any dead cell with three live neighbours becomes a live cell.</li>
          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ol>
      </div>
      <div>
        Conway's Game if Life was invented in 1970 by mathmatician John Conway
        who was inspired by John von Neumann's idea for a self-replicating
        machine. The Game of Life is a universial Turing machine that can in
        theory be used to compute anything givien enough time and space
        algorithmically
      </div>
    </div>
  );
};

export default About;
