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
                        <img src={Logo2} alt="logo2" height={100}></img>
                    </div>
                    <LoginForm />
                    </StyledLoginContainer>
                </Container>
            </StyledLoginBox>
        </DefaultLayout>
    )
}

export default LoginPage