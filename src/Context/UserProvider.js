import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
  
  ]);
  return (
    <div>
      <userContext.Provider value={[users, setUsers]}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
