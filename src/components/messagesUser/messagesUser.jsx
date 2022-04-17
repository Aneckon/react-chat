import React from 'react';

export const MessagesUser = ({ messages, messagesRef }) => {
  return (
    <div ref={messagesRef} className="message jc-end">
      <div className="message__time">14:28</div>
      <div className="message__darck">
        <div className="message__text">{messages}</div>
      </div>
    </div>
  );
};
