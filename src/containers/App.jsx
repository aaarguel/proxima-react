
import { createContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import ProximaAPI from '../helpers/ProximaAPI';
import useFetch from '../hooks/useFetch';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

export const UserContext = createContext();
export const proxima = new ProximaAPI();

function App() {
  const [{ip}] = useFetch(proxima.getIp());  

  return (
    <UserContext.Provider  value={{name: "Aaron", date: Date.now(),ip}}>
      <div className="App">
        <div>
          <Navbar/>
          <Header/>
        </div>
        <Home/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
