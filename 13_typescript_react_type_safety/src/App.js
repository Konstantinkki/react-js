import './App.css';
import { Person } from './Person';

function App() {
  return (
    <div className="App">
        <Person 
          name="Pedro"
          email="p@p.com"
          age={21}
          isMarried={true}
          friends={["jessica", "Jake", "jerry", "jasmine"]}
        />
    </div>
  );
}

export default App;
