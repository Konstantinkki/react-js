import styles from './App.module.css';
import { User } from './User';
import { GasPlanet } from './GasPlanets';

function App() {

  const users = [
    {name:"Ped", age: 21},
    {name:"Jac", age: 25},
    {name:"Jes", age: 45},
  ]

  const gasPlanets = [
    {name :"Mars", isGasPlanet:false},
    {name :"Earth", isGasPlanet:false},
    {name :"Jupiter", isGasPlanet:true},
    {name :"Venus", isGasPlanet:false},
    {name :"Neptune", isGasPlanet:false},
    {name :"Uranus", isGasPlanet:true},
]


  return (
    <div className='App'>
        {
          gasPlanets.filter(planet => planet.isGasPlanet == false)
          .map(gasPlanet => (
            <GasPlanet name={gasPlanet.name} isGasPlanet={gasPlanet.isGasPlanet.toString()} />
          )) 
        }

    </div>
    
    )
}


/*

================================

const age = 15;
if(age > 18){
console.log("more than 18")
}else{
console.log("less than 18")
}

age > 12 ? console.log("11111"):console.log("222222222")


function App() {
  const name = "Badaboom";
  const isGreen=true;
const age=181;
  if (age>18){
      return <div><h1>!!!!!!!!!1</h1>
             {isGreen && <button>click me</button>} 
      </div>
  }else{

  return (
    <div className="App">
    

      <User name="pedro" age={21} email="pedro@ped.com"/>
      <Job salary={90000} position="Sr" company="Amazon" /> 
      <h1 className={styles.name}>Pedro</h1>

      {isGreen && <button>click me</button>}

    </div>
  );
  }
}

const User = (props) => {
  return (<div>
  <h1>{props.name}</h1>
   <h1>{props.age}</h1>
   <h1>{props.email}</h1>
   </div>)
}

const Job = (props) => {
  return (
    <div>
      <h2>{props.salary}</h2>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
    
  )
}
*/
export default App;
