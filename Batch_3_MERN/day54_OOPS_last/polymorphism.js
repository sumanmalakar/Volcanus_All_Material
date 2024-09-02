class Bank {
  rateOfInterest = (amount,time) =>{};
  homeLoan = (personInfo, account) =>{}
}
class PNB extends Bank {
  rateOfInterest = (amount,time) => {

  }
}
class SBI extends Bank {
  rateOfInterest = () => 4;
}
class HDFC extends Bank {
  rateOfInterest = () => 6;
}
class ICICI extends Bank {
  rateOfInterest = () => 7;
}

const icici = new ICICI();
console.log(`Rate of Interest of ICICI bank = ${icici.rateOfInterest()}%`)
const sbi = new SBI()
console.log(`Rate of Interest of SBI bank = ${sbi.rateOfInterest()}%`)