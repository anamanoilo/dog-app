import { Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>1Vite + React</h1>
      <Outlet />
    </>
  );
}

export default App;
