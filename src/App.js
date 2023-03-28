import { ChatEngine } from "react-chat-engine";
import './App.css'
import LoginForm from "./components/LoginForm";

import ChatFeed from './components/ChatFeed';

const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="24edb606-06f3-4d27-96f5-3628db494019"
        userNmae = {localStorage.getItem('username')}
        userSecret= {localStorage.getItem ('password')}
        renderChatFeed ={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        
        />
    )
}

export default App;