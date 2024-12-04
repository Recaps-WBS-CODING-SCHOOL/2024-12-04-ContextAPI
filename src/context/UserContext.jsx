import { useState, createContext, useContext } from "react";

// Create the context
const UserContext = createContext();

// Custom Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Stephan");
  const [age, setAge] = useState(37);
  return (
    <UserContext.Provider value={{ user, setUser, age, setAge }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for Consuming the Context
export const useUser = () => {
  return useContext(UserContext);
};
