 const pound = 103.8;
const dollar = 83.47;
const yen = 0.54;
const euro = 88.89;
const dinar = 272.79;
let result;
let userINR = parseInt(prompt("Enter INR"));
let convert = parseInt(
  prompt(
    " INR To Pound Enter .1 \n INR To Dollar Enter .2 \n INR To Japanes Yen Enter .3 \n Euro To INR Enter .4 \n Dinar To INR Enter 5. "
  )
);
switch (convert) {
  case 1:
    {
      console.log(".... INR to Pound ....");
      result = userINR / pound;
      console.log(`${userINR} in pound = ${result} pound`);
    }
    break;
  case 2:
    {
      console.log(".... INR to US Dollar ....");
      result = userINR / dollar;
      console.log(`${userINR} in US Dollar = ${result} dollar`);
    }
    break;
  case 3:
    {
      console.log(".... INR to Japanes Yen ....");
      result = userINR / yen;
      console.log(`${userINR} in Japanes Yen = ${result} Yen`);
    }
    break;
  case 4:
    {
      console.log(".... Euro to INR ....");
      result = userINR * euro;
      console.log(`${userINR} in Euro = ${result} Rupees`);
    }
    break;
  case 5:
    {
      console.log(".... Dinar to INR ....");
      result = userINR * dinar;
      console.log(`${userINR} in Dinar = ${result} Rupees`);
    }
    break;
  default:
    console.log("Invalid Currency");
}
