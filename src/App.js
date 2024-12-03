import React , {useState} from 'react';
import './App.css';
import Landing from './Landing';
import AppContext from './AppContext/AppContext';


function App() {

  const [signinClicked , setSigninClicked] = useState(false);

  return (
    <div >
      <Landing/>
    </div>
  );
}

export default App;
