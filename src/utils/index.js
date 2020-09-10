// Stackoverflow https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const generateRandom1DArray = (length, min, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(randomIntFromInterval(min, max));
  }
  return arr;
};

// Bubble Sort
export const bubbleSortFunc = (arr) => {
  const nums = [...arr];
  const animations = [];
  let swap = true;
  do {
    swap = false;
    for (let i = 0; i < nums.length; i++) {
      animations.push({ index: i, swap: nums[i] > nums[i + 1] });
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return { animations };
};

export const bubbleSort = (list, ANIMATION_SPEED) => {
  const barContainer = document.getElementsByClassName("bar");
  const { animations } = bubbleSortFunc(list);
  animations.forEach(({ index, swap }, idx) => {
    if (index === 0) {
      const currentBar = barContainer[index].style;
      const nextBar = barContainer[index + 1].style;
      setTimeout(() => {
        barContainer[list.length - 1].style.backgroundColor = "white";
        barContainer[list.length - 2].style.backgroundColor = "white";
        currentBar.backgroundColor = "tomato";
        nextBar.backgroundColor = "tomato";

        if (swap) {
          const temp = currentBar.height;
          currentBar.height = nextBar.height;
          nextBar.height = temp;
        }
      }, idx * ANIMATION_SPEED);
    } else if (index === list.length - 1) {
      const currentBar = barContainer[index].style;
      const prevBar = barContainer[index - 1].style;
      setTimeout(() => {
        prevBar.backgroundColor = "tomato";
        currentBar.backgroundColor = "tomato";
      }, idx * ANIMATION_SPEED);

      if (idx === animations.length - 1) {
        setTimeout(() => {
          prevBar.backgroundColor = "white";
          currentBar.backgroundColor = "white";
        }, idx * ANIMATION_SPEED + 500);
      }
    } else {
      const currentBar = barContainer[index].style;
      const prevBar = barContainer[index - 1].style;
      const nextBar = barContainer[index + 1].style;
      setTimeout(() => {
        prevBar.backgroundColor = "white";
        currentBar.backgroundColor = "tomato";
        nextBar.backgroundColor = "tomato";

        if (swap) {
          const temp = currentBar.height;
          currentBar.height = nextBar.height;
          nextBar.height = temp;
        }
      }, idx * ANIMATION_SPEED);
    }
  });
  return;
};
