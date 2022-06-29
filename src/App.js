import React from "react";
import {ChatEngine} from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const projectID = "c6dfc179-c0e8-4ace-91b0-1384f4e71a74";

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>;
  return (
          <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
         
  );
}

export default App;
