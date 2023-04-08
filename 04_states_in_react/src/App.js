import './App.css';
import { useState } from "react"

function App() {
  const [age, setAge] = useState(0);
  const increaseAge =() => {
    console.log(age)
    setAge(age + 1)
  }

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const [showText, setShowText] = useState(false);
  const changeShowText = (event) => {
    setShowText(!showText);
  }

  const [textColor, changeTextColor]=useState("red");
  const changeColorAction = () => {
    changeTextColor( textColor === "red"?"blue":"red")
  } 


  const [challengeValue, setChallemgeValue] = useState(0);

  const increaseValue =() =>{
    setChallemgeValue(challengeValue+1);
  }

  const decreaseValue =() =>{
    setChallemgeValue(challengeValue-1);
  }

  const setValueToZero =() =>{
    setChallemgeValue(0);
  }

  return (
    <div>
      <div className="App">
         {age} <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div className="App">
        <input type="text" onChange={handleInputChange}/>
        {inputValue}
      </div>
      <div>
        <button onClick={changeShowText}>Show/Hide text</button>
         {showText && <div>SHOW THAT TEXT</div>} 
      </div>

      <div>
        <button onClick={changeColorAction}>Change text color</button>
         <div style = {{color: textColor}}>CHANGE COLOR TEXT</div>
      </div>

      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>decrease</button>
      <button onClick={setValueToZero}>setToZero</button>
      {challengeValue}
    </div>
  );
}

export default App;
