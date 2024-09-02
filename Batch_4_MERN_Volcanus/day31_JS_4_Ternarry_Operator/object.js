const laptop = {
  brandName: "Hp",
  modelName: "Hp probook 430 G2",
  ram: "8gb",
  OS: "window 10",
  price: 450000,
  ssd: "512 GB",
  camera: {
    company: "Sony",
    megaPexels: "12MP",
    front: true,
    back: false,
  },
};
console.log(
  "This is my object =",
  laptop.brandName,
  laptop.ram,
  laptop.camera.megaPexels + laptop.camera.company
);
