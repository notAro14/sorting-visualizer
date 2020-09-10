import React, { useState } from "react";
import Bar from "./Bar";

const ARRAY = [45, 14, 31, 4, 50];

const bubbleSort = (arr) => {
  const nums = [...arr];
  let swap = true;
  do {
    swap = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return nums;
};

export default function SortingVisualizer() {
  const [list, setList] = useState(ARRAY);
  return (
    <div>
      <button onClick={() => setList(bubbleSort(list))}>Sort</button>
      <div className="sorting-container">
        <div className="bars">
          {list.map((item, index) => (
            <Bar key={index} height={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
