
const img = document.querySelector('img')
const h1 = document.querySelector('h1')

setInterval(() => {
    h1.innerText = "Road Image"
    img.src =
      "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&h=350";
}, 1000);

setInterval(() => {
    h1.innerText = "Picock Image";
    img.src =
      "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&h=350";
}, 2000);
setInterval(() => {
    h1.innerText = "WaterFall Image";
    img.src =
      "https://images.pexels.com/photos/228095/pexels-photo-228095.jpeg?auto=compress&cs=tinysrgb&h=350";
}, 3000);
setInterval(() => {
    h1.innerText = "Ultra Nature Image";
    img.src =
      "https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&h=350";
}, 4000);
setInterval(() => {
    h1.innerText = "Last Image";
    img.src =
      "https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg?auto=compress&cs=tinysrgb&h=350";
}, 5000);