import React , {useState} from 'react';
import './App.css';
import Landing from './Landing';


function App() {

  const [signinClicked , setSigninClicked] = useState(false);

  return (
    <div >
      <Landing/>
    </div>
  );
}

export default App;
