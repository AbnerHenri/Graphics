import './App.css';

import { GraphicProvider } from './Contexts/GraphicContext';
import Forms from './Components/Forms/Forms';
import Graphic from './Components/Graphics/Graphic';

function App() {
  return (
    <div className="App">
      <GraphicProvider>
        <div className='Elements'>
          <Forms />
          <Graphic />
        </div> 
      </GraphicProvider>
    </div>
  );
}

export default App;
