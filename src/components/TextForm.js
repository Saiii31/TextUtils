import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText]=useState("")

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const speak=()=>{
      let msg= new SpeechSynthesisUtterance(text);
      // msg.text=text;
      const voices = window.speechSynthesis.getVoices();
      const ladyVoice = voices.find(voice => voice.name === "Google UK English Female");
      msg.voice = ladyVoice;
      window.speechSynthesis.speak(msg);
      

      const toggle=document.getElementById('toggle')

      if(toggle.textContent==="Speak"){
        
        toggle.innerHTML="Stop"
      }
      else{
        toggle.innerHTML="Speak"
      }
      if(toggle.innerHTML==="Speak")
      {
        window.speechSynthesis.cancel();
      }
    }

    const handleCopy=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!","success");
    }
    const clear=()=>{
     let newText=""
      setText(newText)
    }
   
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
            
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="3" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" id="toggle" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-2" id="toggle" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" id="toggle" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
        
       
    </div>
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2 >Your Text Summary</h2>
      <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}<br></br>
      Characters: {text.length}<br></br>
      Sentences: {text.split(/[.!?]/).filter(Boolean).length}<br></br>
      Paragraphs: {text.split(/\n\s*\n/).filter(Boolean).length}<br></br>
      Panctuations: {(text.match(/[.,/#!$%^&*;:{}=\-_`~()]/g) || []).length}<br></br>
      Reading time in min: {0.008*text.split(" ").length}
      
      </p><br></br>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Write something in textbox for preview'}</p>
    </div>
    </>

  )
}
