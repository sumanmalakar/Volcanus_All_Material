class Car {
  constructor(brandName, price, color) {
    this.brandName = brandName;
    this.price = price;
    this.color = color;
  }
  display() {
    console.log(
      `The Car Brand Name = "${this.brandName}" and price = "${this.price}" and color = "${this.color}"`
    );
  }
  brandName

//   ManifacturingCountry()
}
class BMW extends Car {
  constructor(wheels, power, brandName, price, color) {
    super(brandName, price, color);
    this.wheels = wheels;
    this.power = power;
  }
  display() {
    console.log(
      `The Car Brand Name = "${this.brandName}" and price = "${this.price}" and color = "${this.color}" Wheels = ${this.wheels} Power = ${this.power}`
    );
  }
}
// const c1 = new Car("BMW", 877382829, "Blue");
// c1.display();

const c2 = new BMW(4, 1500, "BMW", 877382829, "Blue");
c2.display()
