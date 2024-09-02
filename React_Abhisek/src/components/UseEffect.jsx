import { useEffect, useState } from 'react'

const UseEffect = () => {

// 1. It perform side effect on component
// 2. When Browser reload it automatic run
// 3. if the dependency array blank than it run once
// 4. if the dependency array value change useEffect run again

const [counter, setCounter] = useState(0)


useEffect(() => {
 console.log("UseEffect is running...!")
document.title = counter
const arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 40) {
//     setCounter(40);
//   }
// }
if (counter > 10) {
  setCounter(400);
}

 
}, [counter])


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrase</button>
    </div>
  );
}

export default UseEffect