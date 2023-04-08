import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
//--------part one ------
/*
const [newCatObject, setCatObject] = useState("");
const callCatApi = () => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatObject(res.data);
    //console.log(res.data);
  });
}
useEffect(() => {
  callCatApi();
}, [])
*/
//and add next html :
//<button onClick={callCatApi}>generate CatFact</button>
//<p>{newCatObject.fact}</p>
//----------end part one-------

//=====================part 2 =========
const [newResponce, setNewResponce] = useState(null);
const fetchData = ()=>{
//Axios.get("https://api.agify.io/?name="+newInputName).then(res =>{
Axios.get(`https://api.agify.io/?name=${newInputName}`).then(res =>{
  setNewResponce(res.data);
})

}

const [newInputName, setNewInputName] = useState("");
/*const updateInputName = (event)=>{
  setNewInputName(event.target.value);
}*/


//=====================part 3 excercise =========

const [excuseValue, setExcuseValue] = useState(null);

const getNewExcuse = (excuseKind)=>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseKind}`).then((res) => {
    setExcuseValue(res.data[0]);// console.log(res.data);
    console.log(excuseValue.id)
});
}



  return (
    <div className="App">
      <div>
      <input placeholder='Ex. Pedro...' onChange={(event)=>{
        setNewInputName(event.target.value);
      }} />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name : {newResponce?.name}</h1>
      <h1>Predicted Age : {newResponce?.age}</h1>
      <h1>Count : {newResponce?.count}</h1>
      </div>

      <div className='exercise'>
        <h1>Generate An Axcuse</h1>
        <button onClick={()=>{ getNewExcuse('party') }}>Party</button>
        <button onClick={()=>{ getNewExcuse('family') }}>Family</button>
        <button onClick={()=>{ getNewExcuse('office') }}>Office</button>
        <h3>Excuse Id : {excuseValue?.id}</h3>
        <h3>Excuse : {excuseValue?.excuse}</h3>
        <h3>Excuse category : {excuseValue?.category}</h3>
      </div>
    </div>
  );
}

export default App;
