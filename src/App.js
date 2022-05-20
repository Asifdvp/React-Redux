import logo from './logo.svg';
import './App.css';
import { React,useState } from 'react';
import store from './redux/store';
import Posts from './Posts';

function App() {
  const [input,setInput] = useState(" ");
  const changeState = (e) =>{
    setInput(e.target.value);
  };
  const addInput = () => {
  store.dispatch(
    {
      type:'ADD_TO_POSTS',
      payload:{
        post:input
      }
    }
  )
  
  }
  return (
    <div className='App'>
<header className='App-header'>App Header</header>
<input type='text' onChange={changeState}/>
<button onClick={addInput}>Add</button>
<Posts/>
    </div>
  );
}

export default App;
