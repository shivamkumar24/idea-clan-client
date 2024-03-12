import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const Usercontext = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default Usercontext;
