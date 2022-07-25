import React, { useState } from "react";

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultContextValue.isAuthenticated);
    // value={} 是上面AuthContext 的狀態
    return <AuthContext.Provider value={{isAuthenticated}}>{children}</AuthContext.Provider>
}

export default AuthContext