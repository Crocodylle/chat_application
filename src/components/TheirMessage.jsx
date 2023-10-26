import React from 'react'

const TheirMessage = ({lastmessage, message}) => {
 // check if it's the first message from the user 
  const isFirstMessageByUser = !lastmessage || lastmessage.sender.user !== message.sender.username;

  return (
    <div className="messsage-row">
      {isFirstMessageByUser && (
        <div 
           className="message-avatar" 
           style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
           />
       )}
{  message.attachments && message.attachments.length > 0 
    ? (
       <img  
       src={message.attachments[0].file}
       alt="message-attachment" 
       className="message-image"
       style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
       
      />      
    ) : ( 
    <div className="message" style={{ float: 'left', background:'#CABCDC', marginLeft: isFirstMessageByUser? '4px' : '48px'}}>
       {message.text}
    </div>
    )  
  }
  
   </div>
  )
}

export default TheirMessage