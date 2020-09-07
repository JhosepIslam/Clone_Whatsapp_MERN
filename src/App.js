import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from "./axios.js"

function App() {
  const [messages, setMessages] = useState([]);
useEffect(() => {
    axios.get("/messages/sync")
    .then(response =>{      
      setMessages(response.data);
    })
}, [])

  useEffect(() =>{
    var pusher = new Pusher('c7ea87ec1d368aeb7df8', {
      cluster: 'us2'
    });

    var channel = pusher.subscribe("messages");
    channel.bind('inserted', function(newMessages) {
     // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });

    return () =>{
      channel.unbind_all()
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages)
  return (
    <div className="app">        

         <div className = "app_body">
               <Sidebar/>
               <Chat messages = {messages}/>
           </div>
         
   
    </div>
  );
}

export default App;
