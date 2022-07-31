import React, { useContext, useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Divider } from 'antd';



const LoginFormContainer = styled.div`
    border: 1px solid #a0a0a0;
    background-color: #fff;
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
`
const ForgetPart = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: #4a28ea;
`
const OtherLogin = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`

const OtherLoginButtom = styled.div`
    border: 1px solid #bdbebd;
    color: #808080;
    padding: 5px 25px;
    border-radius: 2px;
    font-weight: 500;
    cursor: pointer;
`



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
            <LoginFormContainer>
           <Input 
           style={{width:'70%', margin:'20px auto', active:''}}
           size="large" 
           placeholder="請輸入帳號" 
           prefix={<UserOutlined />} 
           value={username}
           onChange={e => setUsername(e.target.value)}

           />
           <Input
           style={{width:'70%', margin:'20px auto'}}
           type='password' 
           size="large" 
           placeholder="清輸入密碼" 
           prefix={<LockOutlined />} 
           value={password}
           onChange={e => setPassword(e.target.value)}
           />
           <Button onClick={handleLogin}  style={{width:'70%', backgroundColor:'#ff4d00',margin:'20px auto'}}>登入</Button>
           <ForgetPart>
            <span style={{cursor: 'pointer'}}>忘記密碼</span>
            <span style={{cursor: 'pointer'}}>使用SMS簡訊登入</span>
           </ForgetPart>
           <Divider plain>或</Divider>
           <OtherLogin>
            <OtherLoginButtom style={{marginRight:'8px'}}><i style={{width:25, fontSize:18}} class="fa-brands fa-facebook"></i>Facebook</OtherLoginButtom>
            <OtherLoginButtom style={{marginRight:'8px'}}><i style={{width:25, fontSize:18}} class="fa-brands fa-google"></i>Google</OtherLoginButtom>
            <OtherLoginButtom><i style={{width:25, fontSize:18}} class="fa-brands fa-apple"></i>Apple</OtherLoginButtom>
           </OtherLogin>
           </LoginFormContainer>
        </div>
    );

}

export default LoginForm