import React, { useContext, useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
    const navigate = useNavigate
    const {login, isAuthenticated } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        console.log('handle loginIn')
        // Login 本身是一個async 的function 執行完後世一個promise，可以用.then的方式來跟他說畫面要去做跳轉
        login(username, password).then(({token, error}) => {
            if (!token) {
                message.error(error);
            }
        })
        // login(username, password).then(() => navigate("../../Pages/HomePages.js", { replace: true }) )
    };

    // 判斷 isAuthenticated 是否為登入則自動跳轉
    // useEffect(() => {
    //     isAuthenticated && navigate("../../Pages/HomePages.js", { replace: true });
    // },[isAuthenticated])


    return(
        <div>
           <Input 
           className="mb-3" 
           size="large" 
           placeholder="請輸入帳號" 
           prefix={<UserOutlined />} 
           value={username}
           onChange={e => setUsername(e.target.value)}

           />
           <Input 
           className="mb-3" 
           type='password' 
           size="large" 
           placeholder="清輸入密碼" 
           prefix={<LockOutlined />} 
           value={password}
           onChange={e => setPassword(e.target.value)}
           />
           <Button onClick={handleLogin} >登入</Button>
        </div>
    );

}

export default LoginForm