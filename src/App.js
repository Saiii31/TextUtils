import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]=useState(null)

  const showAlert=(msg,type)=>{
   setAlert({
    mesg:msg,
    type:type
   })
  }
   setTimeout(()=>{
    setAlert(null);
   },3000);
  
  
  const toggleMode=()=>
  {
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='black'
    showAlert('Dark Mode is enabled',"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light  Mode is enabled',"success");
    }
  }
  return (
    <>
<Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<TextForm heading="Enter your Text" mode={mode} showAlert={showAlert}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
