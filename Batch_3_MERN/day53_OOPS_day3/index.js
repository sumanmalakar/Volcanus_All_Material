class Price {
  constructor() {
    let iphonePrice = 50000;
    this.increasePrice = () => {
      increasePrice++;
      console.log(this.increasePrice);
    };
    this.disCount = (code) => {
      if (code == "wdm") {
        const disCount = (iphonePrice * 20) / 100;
        iphonePrice = iphonePrice - disCount;
      } else if (code == "web") {
        const disCount = (iphonePrice * 10) / 100;
        iphonePrice = iphonePrice - disCount;
      }
      console.log("You Have to pay only", iphonePrice);
    };

    this.chageName = () => {
      iphonePrice = 400;
      console.log("You Have to pay only", iphonePrice);
    };
  }

  
}

const p = new Price()

// p.disCount("web")
p.disCount("wdm")
p.chageName()