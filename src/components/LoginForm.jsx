import { useState } from "react";
import axios from 'axios';

const projectID = '8391028c-0a75-440e-bacf-5123118be76d';

const LoginForm = () => {
    const [username, setusername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const authObject = { 'Project-ID': projectID, 'User-Name': username , 'User-Secret': password }; 

        try {
              //username / password => chatengine -> give messages 
          await axios.get('https://api.chatengine.io/chats', {headers: authObject });
       
          localStorage.setItem('username', username); 
          localStorage.setItem('password', password);
          // workds out -> logged in 

          window.location.reload(); 

        } catch (err) {
            
               //error -> try with new username.... 
               setError('Oops, incorrect credentials');
        }
      
     
     
    }

    return (
        <div className="wrapper">
             <div className="form"> 
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}> 
                   <input type="text" value={username} onChange={(e) => setusername(e.target.value)} 
                        className="input"  placeholder="UserName" required/> 
                   <input type="password" value={password} onChange={(e) =>  setPassword(e.target.value)} 
                        className="input"  placeholder="Password" required/> 
                    <div align="center"> 
                      <button className="button" type="submit">
                        <span>Start Chatting</span>  
                      </button>
                    </div>     
                    <h2 className="error">{error}</h2>
                </form>
              </div>
        </div>
    );
}

export default LoginForm