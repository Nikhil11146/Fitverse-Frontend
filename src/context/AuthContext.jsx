import {createContext, useContext, useState } from "react";
import Navbar from "../compenents/Navbar.jsx";
import App from "../App.jsx";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {


    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);