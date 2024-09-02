const body = document.querySelector("body");

const changeDark = () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
};

const changeLight = () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
};

// changeLight()
// changeDark()

const changeImg = () => {
  const img = document.querySelector("img");

  img.src =
    "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&h=350";
};

const originalImage = () => {
  const img = document.querySelector("img");
  img.src =
    "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=350";
};
