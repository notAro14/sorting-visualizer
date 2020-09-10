import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import { generateRandom1DArray, bubbleSort } from "../utils/index";

const LENGTH = 100;
const MIN = 10;
const MAX = 600;
const BAR_WIDTH = 5;
const ANIMATION_SPEED = 2;

export default function SortingVisualizer() {
  const [list, setList] = useState([]);

  function resetArray() {
    setList(generateRandom1DArray(LENGTH, MIN, MAX));
    return;
  }

  useEffect(() => {
    resetArray();
  }, []);
  return (
    <div className="sorting-visualizer">
      <h1 className="title">
        Sorting algorithm visualizer{" "}
        <span role="img" aria-label="Laptop emoji">
          &#128187;
        </span>
      </h1>
      <div id="bars-container">
        {list.map((item, index) => (
          <Bar key={index} height={item} width={BAR_WIDTH} bgColor="white" />
        ))}
      </div>
      <div className="buttons">
        <button className="btn" onClick={resetArray}>
          Reset
        </button>
        <button
          className="btn"
          onClick={() => bubbleSort(list, ANIMATION_SPEED)}
        >
          Bubble Sort
        </button>
      </div>
    </div>
  );
}
