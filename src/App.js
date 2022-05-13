import './App.css';

import { GraphicProvider } from './Contexts/GraphicContext';
import Forms from './Components/Forms/Forms';
import Graphic from './Components/Graphics/Graphic';

function App() {
  return (
    <div className="App">
      <GraphicProvider>
        <Forms />
        <Graphic />
      </GraphicProvider>
    </div>
  );
}

export default App;
