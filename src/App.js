import React, {useState, useRef, useCallback} from 'react';
import generateGrid from "./utils/generateGrid"
import operations from "./utils/operations"
import './App.css';

function App() {
  const [grid, setGrid] = useState(() => {
    return generateGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    

    setTimeout(runSimulation, 100);
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
