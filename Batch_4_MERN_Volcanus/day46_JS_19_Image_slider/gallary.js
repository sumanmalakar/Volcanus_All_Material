const image = [
  "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg?auto=compress&cs=tinysrgb&h=350",
];

const img = document.querySelector("img");

let index = 0;

img.src = image[index];

const increaseIndex = () => {
  index++;
  if (index < image.length - 1) {
    img.src = image[index];
  } else if (index == image.length) {
    index = 0;
    img.src = image[index];
  }
  console.log("index = ", index);

};

const descreaseIndex = () => {
  index--;
  if (index > 0) {
    img.src = image[index];
  } else if (index < 0) {
    index = image.length - 1;
    img.src = image[index];
  }
  console.log("index = ", index);
};
console.log("image array length", image.length);
