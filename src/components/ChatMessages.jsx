import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';


// Use the updater function to update your react
        // In React dont update the data directly. Best practice is to create a copy then modify the copy.
        // 'useState' is a React hook that allows us to add state to our functional components.
        // 'useState' returns an array with two items. The first item is the current state value, and the second item is a function that allows us to update that state value.
       function ChatMessages({
          chatMessages}) {
            const chatMessagesRef = useRef(null);

            // React hooks are functions that let us use state and other React features in functional components.
            // Put hooks at the top of the component, before any early returns.
            // hooks must be called in the same order on every render. Don't call hooks inside loops, conditions, or nested functions.
            useEffect(() => {
              const containerElem = chatMessagesRef.current; 
              if (containerElem) {
                // 'scrollHeight' is the total height of the content in the container, including the part that is not visible due to overflow.
                // 'scrollTop' is the number of pixels that the content of an element is scrolled vertically. 
                // By setting 'scrollTop' to 'scrollHeight', we are scrolling to the bottom of the container, which allows us to see the most recent chat messages.
                containerElem.scrollTop = containerElem.scrollHeight;
              }
            }, [chatMessages]);
// --------------------------------------------------------- Earlier code for sendMessage function --------------------------------------------------------------------------------------

          // 'chatMessages' is the current state value, which is an array of chat message objects.
          // 'setChatMessages' is the function that allows us to update the state value of 'chatMessages'. 
          // We pass in a new array that contains all the previous chat messages (using the spread operator) and a new chat message object.
          // '.push()' adds a value to the end of an array
          // 'crypto.randomUUID()' generates a unique random id string every time we run that code.
          // --- SPREAD OPERATOR '...' takes the values of an aray and copies them into a new array.
                     //                     function sendMessage() {
                     //                       setChatMessages([
                     //                         ...chatMessages, 
                     //                         {
                     //                           message: 'test',
                     //                           sender: 'user',
                     //                           id: crypto.randomUUID()
                     //                         }
                     //                       ]);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

          return (
          // Event handler's run a function when we interact with the website.
          // 'onClick' = Event & '{sendMessage}' = Event handler
          // event prop always starts with 'on' followed by the name of the desired event.
          // event props must always use camelCase.
            <div className="chat-messages-container"

              ref={chatMessagesRef} >
             
              {/* 
                  '.map' allows me to go through an array and carry out a function on each item in array 
                  arrow function used, more concise than typing out 'function' keyword.  
                  'key' is a special attribute that helps React identify which items have changed, are added, or are removed. 

                  const chatMessageComponenets = chatMessages.map((chatMessage) => {
                  return (
                  <chatMessage 
                  curly brackets {} instead of '' so we can save the result of chat message 
                  rather than saving a string callled 'chatMessage.message' 
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            }); 
              */ } 

            
              {chatMessages.map((chatMessage) => {
                return (
                  <ChatMessage
                    // curly brackets {} instead of '' so we can save the result of chat message rather than saving a string callled 'chatMessage.message'
                    message={chatMessage.message}
                    // 'sender' is a prop we created in the ChatMessage component, we can set it to the value of 'chatMessage.sender'
                    sender={chatMessage.sender}
                    // 'key' is a special attribute that helps React identify which items have changed, are added, or are removed.
                    key={chatMessage.id}
              />          
            );
          })}
          </div>
        );
        }

        export default ChatMessages;