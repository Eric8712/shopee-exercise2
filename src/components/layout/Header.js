import React from "react";
import styled from "styled-components";
import Container from "../common/Container";

const StyledHeader = styled.header`
    background-color: #d1011c;
    height: 200px;
    width: 100vw;
`


const Header = () => {
    return(
        <StyledHeader>
            <Container>
                header
            </Container>
        </StyledHeader>
    )

}

export default Header