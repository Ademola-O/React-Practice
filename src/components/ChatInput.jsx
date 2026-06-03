import { useState } from 'react'
import { Chatbot } from 'supersimpledev'; 
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
        // React hook that allows us to add state to our functional components.
        // 'useState' returns an array with two items. The first item is the current state value, 
        // and the second item is a updater function that allows us to update that state value.
        const [inputText, setInputText] = useState(''); 

        function saveInputText(event) {
          // 'event' is an object that contains information about the event that occurred.
          // 'event.target' is the element that triggered the event. In this case, it would be the input element. 
          // We can use 'event.target.value' to get the current value of the input element.
          // 'setInputText' is the updater function that allows us to update the state value of 'inputText'. 
          // We pass in the new value of the input text to update the state.
          setInputText(event.target.value);
        }

        function sendMessage() {

          const newChatMessages = [
              ...chatMessages, 
              {
                // 'inputText' is the current state value of the input text, 
                // which is updated every time the user types in the input field.
                // When the user clicks the send button, we want to add a new chat message to the list of chat messages.
                // We create a new chat message object with the message text, sender, and a unique id.
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
          ];

          // We use the updater function 'setChatMessages' to update the state value of 'chatMessages' with the new array of chat messages that includes the new chat message we just created.    
          setChatMessages(newChatMessages);
                         
          const response = Chatbot.getResponse(inputText);
          
          setChatMessages([

            // We want to add the chatbot's response as a new chat message to the list of chat messages.
            ...newChatMessages, 
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
          }
        ]);

          setInputText(''); // Clear the input field after sending the message
      }

      return (
        <div className="chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="35"
            // 'onChange' is an event prop that runs a function when the value of an input changes.
            // 'saveInputText' is the function that will run when the value of the input changes.
            onChange={saveInputText}
            
            // 'value' is a prop that sets the current value of the input field.
            // controlled input = an input element whose value is controlled by React state.
            value={inputText}
            className="input-field"
        />
          <button
            onClick={sendMessage}
            // 'className' is a prop that sets the CSS class of the button element. 
            // In React, we use 'className' instead of 'class' to avoid conflicts with the JavaScript 'class' keyword.
            className="send-button"
            >Send</button>
          </div>
        );
      }

