import React, { useEffect, useState } from "react";

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(defaultContextValue.isAuthenticated);


    useEffect(() => {
        // 用LocalStorage 把它存起來(畫面重整不會變成預設的 isAuthenticared: false)
        try{
            const authState = JSON.parse(localStorage.getItem('shopee:auth.state'))
        if (authState && authState.token ) {
            setIsAuthenticated(true);
            }
        } catch{}
    }, [])

    // value={} 是上面AuthContext 的狀態
    return <AuthContext.Provider 
    value={{
        isAuthenticated,
        // 登入畫面是非同步的，使用async
        login: async (userName, password) => {
            console.log(userName, password)
            if(userName === 'test') {
                const token = 'good_token'
                // 上面的useEffect成功的話，就要儲存他
                localStorage.setItem('shopee:auth.state', JSON.stringify({ token })
                );
                setIsAuthenticated(true);
                // 一般登入會回傳一個權杖
                return { token };
            }
            setIsAuthenticated(false)
            return {token: null, error:'invalid password'};
        },
        logout: async () => {
            setIsAuthenticated(false)
            // 登出後要把LocalStorage的儲存狀態給清掉(removeItem)
            localStorage.removeItem('shopee:auth.state')
        }
    }}
    >
        {/* children 裡面的元件可以使用到 AuthContext.Provider的Value */}
        {children}
        </AuthContext.Provider>
}

export default AuthContext