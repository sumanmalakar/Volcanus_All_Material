// && => and  || => or

const adharCard = true;
const panCard = true;
const age = 2;

// Nested if_else... 
if (panCard && adharCard) {
  console.log("You can open account in our Bank ");
  if (age >= 18) {
    console.log("You are eliible for car Insurence..");
  } else {
    console.log("Your age should be greater 18 to clam car Insurance..");
  }
} else {
  console.log("You can not open account in our Bank..");
}
