import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Add from './components/Add';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/*<Home/>*/}
      {/*<Add/>*/}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
    </div>
  );
}

export default App;
