import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css';


const App = () => { 
    return ( 
        <ChatEngine 
           height="100vh"
           projectID="8391028c-0a75-440e-bacf-5123118be76d"
           userName="rodrigomatias"
           userSecret="123123"
           renderChatFeed={ ( chatAppProps) => <ChatFeed {...chatAppProps} /> }
        /> 
    );
}

export default App;