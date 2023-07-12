import React,{useState} from 'react';
import axios from "axios";

export default function ChatGpt() {
    const[prompt,setPrompt]=useState("");
    const[response,setResponse]=useState("");
    const HTTP = "http://localhost:3000/chat";

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(`${HTTP}`, {prompt}).then(res=>setResponse(res.data)).catch(error=>console.log(error));
    }

    const handlePrompt = (e) => setPrompt(e.target.value);

    return (    
    <div className="container container-sm p-1">
      <h1 className = "title.text-center.text-darkGreen">ChatGpt API</h1>
      <form className = "form" onSubmit={handleSubmit}>
        <label htmlFor="">Ask questions</label>
        <input 
        type="text" 
        className = "shadow-sm" 
        placeholder="Enter text" 
        value={prompt}
        onChange={handlePrompt}/>


      </form>
      <div className ="bg-darkGreen mt-2 p-1 border-5">
        <p className = "text-light">{
          response ? response: "Ask me anything..."}</p>
        
      </div>
    </div>

  )
}
