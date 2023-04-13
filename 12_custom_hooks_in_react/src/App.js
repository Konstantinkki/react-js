import './App.css';
import { useToggle } from './useToggle';
import {Cat} from './components/Cat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {useCount} from './useCount'


function App() {

  const [isVisible, toggle] = useToggle()

  const queryClient = new QueryClient()

  const {count, increase, decrease, restart} = useCount();
  
  return (
    <div className="App">

        <button onClick={toggle}>
        {isVisible ? 'Hide':'Show'}
        </button>
        {isVisible && (<h1>Visible Text</h1>)}
        <QueryClientProvider client={queryClient}>
          <Cat/>
        </QueryClientProvider>

        <h3>-------------------------------</h3>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={restart}>restart</button>
        {count}
    </div>
    
  );
}

export default App;
