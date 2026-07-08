import {createContext, useContext} from "react";
import api from "../../api/axios.js";

const UserContext = createContext(null);

async function fetchUserDetails(ownerId) {
    const data = await api.get(`/user/${ownerId}`);
    return data.data.data;
}

export default function UserProvider({ children }) {
    return (
        <UserContext.Provider value={{ fetchUserDetails }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);