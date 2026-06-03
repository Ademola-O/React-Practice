import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';


        

function App() { 

          const [chatMessages, setChatMessages] = useState([{
            message: 'hello chatbox', 
            sender: 'user',
            id: 'id1'
          }, {
            message: 'Hello! How can I help you',
            sender: 'robot',
            id: 'id2'

          }, {
            message: 'Can you get me todays date',
            sender: 'user',
            id: 'id3'
          }, {
            message: 'Today is May 21st',
            sender: 'robot',
            id: 'id4'
          }]);
          // 'chatMessages' is the current state value, and 'setChatMessages' is the function that allows us to update that state value.
          // we can use array destructuring to assign the values of the array returned by 'useState' to two separate variables.
          // in array destructuring, we use square brackets [] on the left side of the assignment to indicate that we want to extract values from an array and assign them to variables.
          // in this case, we are extracting the first value of the array (the current state value) and assigning it to 'chatMessages', 
          // and we are extracting the second value of the array (the function to update the state) and assigning it to 'setChatMessages'.
          // 'const [chatMessages, setChatMessages] = array;' is a shorter way of writing out those three lines of code.
          // const [chatMessages, setChatMessages] = array; 
          // const chatMessages = array[0];
          // const setChatMessages = array[1];
        

          return (
           <div className="app-container">
           
            <ChatMessages
              chatMessages={chatMessages}
            />
             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
           </div>
        );
    }

export default App
