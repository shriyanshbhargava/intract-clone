import logo from './logo.svg';
import './App.css';
import NavbarSearch from './Components/NavbarSearch';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavbarSearch />
      <Home />
    </div>
  );
}

export default App;
