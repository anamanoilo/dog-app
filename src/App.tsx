import { Outlet } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages';

function App() {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}

export default App;
