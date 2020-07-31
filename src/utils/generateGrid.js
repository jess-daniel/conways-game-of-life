const generateGrid = (numRows, numCols) => {
  const rows = [];
  // initialize empty grid
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

export default generateGrid;
