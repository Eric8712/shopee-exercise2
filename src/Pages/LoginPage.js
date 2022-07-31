import React from "react";
import Container from "../components/common/Container";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from "styled-components";
import Logo2 from '../components/image/Logo2.png'
import LoginForm from "../components/auth/LoginForm";

const StyledLoginBox = styled.div`
    background-color: white;
`

const StyledLoginContainer = styled(Container)`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 48px 0px;
`



const LoginPage = () => {
    return(
        <DefaultLayout>
            <StyledLoginBox>
                <Container>
                    <StyledLoginContainer>
                    <div>
                        <img src={Logo2} alt="logo2" width={280} style={{marginTop:'20px'}}></img>
                    </div>
                    <LoginForm />
                    </StyledLoginContainer>
                </Container>
            </StyledLoginBox>
        </DefaultLayout>
    )
}

export default LoginPage