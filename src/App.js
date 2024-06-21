import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  const [page, setpage] = useState(1)
  return (
    <div className="App">
      {page==0?<Login setpage={setpage} />:<Home setpage={setpage} />}
    </div>
  );
}

export default App;
