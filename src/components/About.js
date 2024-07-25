import React, { useState } from 'react'

export default function About() {
   const [myStyle,setMyStyle]=useState({
        color:"black",
        backgroundColor:"white"
       
    })
    const [button,setMyButton]=useState("Dark Mode")
  
    const toggleStyle=()=>{
        if(myStyle.color==="black")
        {
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setMyButton("Light Mode");
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setMyButton("Dark Mode");
        }
      }
    return (
    
      <div className='container'style={myStyle}>
        <h2>About Us</h2><br></br>
        <p style={myStyle}><b>What is text analysis?<br></br></b>
            Text analysis is the process of using computer systems to read and understand human-written text for business insights. Text analysis software can independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge. You can use text analysis to efficiently and accurately process multiple text-based sources such as emails, documents, social media content, and product reviews, like a human would.

          <br></br><br></br> <b> Why is text analysis important?</b><br></br>
            Businesses use text analysis to extract actionable insights from various unstructured data sources. They depend on feedback from sources like emails, social media, and customer survey responses to aid decision making. However, the immense volume of text from such sources proves to be overwhelming without text analytics software.

            With text analysis, you can get accurate information from the sources more quickly. The process is fully automated and consistent, and it displays data you can act on. For example, using text analysis software allows you to immediately detect negative sentiment on social media posts so you can work to solve the problem
        </p>
    
    <div className='container'>
        <button onClick={toggleStyle} className="btn btn-secondary mx-2">{button}</button>
    </div>
    </div>

  )
    }
