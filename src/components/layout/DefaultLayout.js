import React from "react";
import styled, {css} from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";

const  PageHeader = styled(Header)`
    ${props => props.fixed && css`
        position: fixed;
        z-index: 1;
    `}
`

const DefaultLayout = ({ fixedHeader ,children}) => {
    return(
        <div>
         <PageHeader fixed={fixedHeader} />
         <Container>
        {children}
        </Container>
        <Footer />
        </div>
    )
}

export default DefaultLayout