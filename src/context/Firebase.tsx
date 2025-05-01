import { createContext } from "react";

// Create a context with a generic type or `any` if you're unsure
export const FirebaseContext = createContext<any>(null);

interface FirebaseProviderProps {
  children?: any;
  value?: any; 
}

export const FirebaseProvider = ({ children, value }: FirebaseProviderProps) => {
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
