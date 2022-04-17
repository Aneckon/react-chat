import React, { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Input, Content } from "./components";

import './components/style/style.css'

export const App = () => {
  const messagesRef = useRef()

  return (
    <div className="wrapper">
      <div className="chat">
        <div className="chat__wrapper">
          <Navbar />
          <Routes>
            <Route path="" element={<Content messagesRef={messagesRef} />} />
          </Routes>
          <Input messagesRef={messagesRef} />
        </div>
      </div>
    </div>
  )
}

