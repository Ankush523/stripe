import './App.css';
import HookCounter1 from './components/HookCounter1';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <HookCounter1 />
      <HookMouse />
      <MouseContainer />
    </div>
  );
}

export default App;
