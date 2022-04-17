import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setMessages } from '../../redux/messages/reducer';

import emodjis from '../img/icons/emodjis-1.svg';

export const Input = ({ messagesRef }) => {
  const [messagesInput, setMessagesInput] = useState('');
  const dispatch = useDispatch();

  const onKeyEnter = (e) => {
    if (messagesInput.length && messagesInput.indexOf(' ') && e.key === 'Enter') {
      e.preventDefault()
      dispatch(setMessages(messagesInput));
      setTimeout(() => {
        messagesRef.current.scrollIntoView();
        setMessagesInput('')
      }, 100);
    }
  };

  return (
    <div className="chat__enter">
      <form action="#" className="chat__enter-form">
        <input
          onKeyDown={onKeyEnter}
          type="text"
          value={messagesInput}
          onChange={(e) => setMessagesInput(e.target.value)}
          className="chat__input"
          placeholder="Напишите сообщение..."
          required
        />
        <div className="chat__smail">
          <img src={emodjis} alt="" />
        </div>
      </form>
    </div>
  );
};
