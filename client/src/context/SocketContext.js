import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  
  function getHostName(){
    if(window.location.hostname === "localhost"){
      return "http://localhost:3001"
    }
    else{
      return "https://memorygame-backend.onrender.com"
    }
  }

  useEffect(() => {
    const newSocket = io(getHostName());
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};


