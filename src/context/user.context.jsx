import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
// Actual value I want to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {

        createUserDocumentFromAuth(user);
        console.log(user);
      }
      setCurrentUser(user);
      console.log(user);
      
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
