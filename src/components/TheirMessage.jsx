import React from 'react'

const TheirMessage = ({lastmessage, message}) => {

  const isFirstMessageByUser = !lastmessage || lastmessage.sender.user

  return (
    <div className="messsage-row">
      {isFirstMessageByUser && (
        <div 
           className="message-avatar" 
           style={{backgroundImage: `url(${message?.sender?.avatar})`}}
           />
       )}
{  message?.attachments?.length >0 
    ? (
       <img  
       src={message.attachments[0].file}
       alt="message-attachments" 
       className="message-image"
       style={{ marginLeft: isFirstMessageByUser? '4px' : '48px' }}
       
      />      
    ) : ( 
    <div className="message" style={{ float: 'left', marginRight: '18px', color: 'white', background:'#CABCDC', marginLeft: isFirstMessageByUser? '4px' : '48px'}}>
       {message.text}
    </div>
    )  
  }
  
   </div>
  )
}

export default TheirMessage