
import Navbar from '../components/navbar/Navbar';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Header/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
