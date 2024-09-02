class Product {
  showFeatures = (productType, brandName) => {
    if (productType == "mobile") {
      console.log(`The brandName of mobile = ${brandName}`);
    } else if (productType == "laptop") {
      console.log(`The brandName of laptop = ${brandName}`);
    } else if (productType == "tablet") {
      console.log(`The brandName of Tablet = ${brandName}`);  }
  };
  showPrice = (price) => console.log(`The product Price = ${price}`); }

class mobiles extends Product {} 
class laptops extends Product {} 

const obj = new mobiles();
obj.showFeatures("mobile","Sony");
obj.showPrice(40000);

const objLaptop = new laptops()
objLaptop.showFeatures("laptop","hp")
objLaptop.showPrice(75000)
