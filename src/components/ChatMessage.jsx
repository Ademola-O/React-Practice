import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';
      
      // ChatMessage Componenet that can be reused 
      // 'props' = properties. An object that allows us to see all the attributes your function
      export function ChatMessage ({message, sender}){
        // const message = props.message;
        // const sender = props.sender; 
        // 'const {message, sender} = props'is a shorter way of writing out those two line of code
        // const { message, sender } = props; 

        /*
        if (sender === 'robot') {
          return (
            <div>    
              <img src="robot.png" width="50" /> - later changed to 'RobotProfileImage' which is imported at the top of the file
              {message}
            </div>
          )
        }
         IF statment can be shortened using a guard operator '&&' 
         '{sender === 'robot' && <img src="..."}'
        */ 

          return (
            // using a ternary operator to conditionally render the chat message based on the sender.
            // If the sender is 'robot', we render a div with the class 'chat-message-user' and an image of a robot.
            // If the sender is not 'robot' (i.e. it is 'user'), we render a div with the class 'chat-message-robot' and an image of a user.
            <div className={
              sender === 'user' 
                ? 'chat-message-user' 
                : 'chat-message-robot'
            }> 
              
              {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile" />
              )}
              <div className="chat-message-text">
                {message}    
              </div>          
              { sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile" />
              )}

            </div>
        );

        }