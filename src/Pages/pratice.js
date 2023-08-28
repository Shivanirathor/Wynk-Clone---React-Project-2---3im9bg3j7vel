// const arr = [2,1,3,2,2,1,5,5,5,4,4];
const arr = [
  {
    name: "hey",
    img: "hello",
  },
  {
    name: "hey",
    img: "hello11",
  },
  {
    name: "hey",
    img: "hello",
  },
];
const seenImages = new Set();
const result = arr.filter(item => {
  if (seenImages.has(item.img)) {
    return false; // Duplicate image, exclude this item
  } else {
    seenImages.add(item.img); // New image, mark it as seen
    return true; // Include this item in the result
  }
});

console.log(result);
