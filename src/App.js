import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CardsContainer from './Components/CardsContainer';
import { useState } from 'react';

function App() {
  let[searchVal,setSearchVal] = useState('')
  const takeInput = (value)=>{
    console.log("parent", value);
    setSearchVal(value);
  }
  return (
    <div className="App">
        <Header funTake={takeInput} ></Header>
        <CardsContainer searchValue={searchVal}></CardsContainer>
    </div>
  );
}

export default App;
