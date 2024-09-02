import React,{useState} from 'react'

const Counter = () => {
    // let counter = 0
    const [counter, setCounter] = useState(10.2)
    const [arr, setArr] = useState([])



    
    const increaseBy1 = () =>{
        // counter++;
        setCounter(counter+1)
        console.log(counter)
    }

    const decreaseBy1 = () =>{
        // counter--;
        setCounter(counter-1)
        console.log(counter)
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increaseBy1}>Increase</button>
        <button onClick={decreaseBy1}>Decrease</button>
    </div>
  )
}

export default Counter