import React, { useContext, useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import AuthContext from "./AuthContext";
// import { useHistory } from "react-router-dom";


const LoginForm = () => {
    // const history = useHistory()
    const {login, isAuthenticated } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        console.log('handle loginIn')
        login(username, password).then(({token, error}) => {
            if (!token) {
                message.error(error)
            }
        })
    };

    // useEffect(() => {
    //     isAuthenticated && history.pushState('/')
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