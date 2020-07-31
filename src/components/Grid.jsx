import React, { useState, useCallback, useRef } from "react";
import produce from "immer";

// local imports
import operations from "../utils/operations";
import generateGrid from "../utils/generateGrid";

const Grid = ({ rows, cols, speed }) => {
  const [grid, setGrid] = useState(() => {
    return generateGrid(rows, cols);
  });

  const [generation, setGeneration] = useState(0);
  const [running, setRunning] = useState(false);

  // keep track of the current
  const runningRef = useRef(running);
  runningRef.current = running;

  // recursive function
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < rows; i++) {
          for (let k = 0; k < cols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < rows && newK >= 0 && newK < cols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    setGeneration((generation) => generation + 1);
    setTimeout(runSimulation, parseInt(speed));
  }, [rows, cols, speed]);

  return (
    <div className="grid-container">
      <p>Generation #: {generation}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "white" : "black",
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      <button
        className="btn"
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      <button
        className="btn"
        onClick={() => {
          const newRows = [];
          for (let i = 0; i < rows; i++) {
            newRows.push(
              Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }

          setGrid(newRows);
        }}
      >
        random
      </button>
      <button
        className="btn"
        onClick={() => {
          setGrid(generateGrid(rows, cols));
          setGeneration(0);
        }}
      >
        clear
      </button>
    </div>
  );
};

export default Grid;
