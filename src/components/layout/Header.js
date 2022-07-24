import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #d1011c;
    height: 200px;
    width: 100vw;
`

const Header = () => {
    return(
        <StyledHeader>This is a header</StyledHeader>
    )

}

export default Header