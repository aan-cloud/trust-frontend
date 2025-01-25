'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    userName: string | null;
    setUserName: (value: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [userName, setUserName] = useState<string | null>("");

    return (
      <AuthContext.Provider value={{ userName, setUserName}}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAppContext must use in AppProvider");
    }
    return context;
};