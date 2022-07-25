import React, { useEffect, useState } from "react";

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultContextValue.isAuthenticated);


    useEffect(() => {
        try{
            const authState = Json.parse(localStorage.getItem('shopee:auth.state'))
        if (authState && authState.token ) {
            setIsAuthenticated(true);
            }
        } catch{}
    }, [])

    // value={} 是上面AuthContext 的狀態
    return <AuthContext.Provider 
    value={{
        isAuthenticated,
        login: async (userName, password) => {
            console.log(userName, password)
            if(userName === 'test') {
                const token = 'good_token'
                localStorage.setItem('shopee:auth.state', Json.stringfly({token: 'good_token'}))
                setIsAuthenticated(true)
                return {token}
            }
            setIsAuthenticated(false)
            return {token: null, error:'invalid password'};
        },
        logout: async () => {
            setIsAuthenticated(false)
            localStorage.removeItem('shopee:auth.state')
        }
    }}
    >
        {children}
        </AuthContext.Provider>
}

export default AuthContext