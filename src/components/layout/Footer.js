import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import CVSlogo from '../image/超商Logo.png'
import Remark from '../image/24h.png'
import QRCode from '../image/QR code.png'


const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    padding: 40px 0;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.333%;
    margin-bottom: 16px;
    @media (min-width: 769px) {
        width: 20%;
    }
    a{
        color: rgba(0,0,0,0.54);
        margin-bottom: 2px;
    }
`
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const  FooterColumnTitle = styled.h4`
    margin-bottom: 12px;
    font-weight: bold;
`

const Footer = () => {
    return(
        <StyledFooter>
            <Container>
            <Box>
            <FooterColumn>
            <FooterColumnTitle>客服中心</FooterColumnTitle>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>物流合作</FooterColumnTitle>
            <img src={CVSlogo} alt="CVS_logo" width='80%' style={{marginBottom: 12}}></img>
            <FooterColumnTitle>蝦皮24h包裝減量標章</FooterColumnTitle>
            <img src={Remark} alt="CVS_logo" width='80px' style={{marginBottom: 12}}></img>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>關注我們</FooterColumnTitle>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            <Link to='#!'>幫助中心</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
            <Box>
                <div>
                <img src={QRCode} alt='Qr_code' width='50%'></img>
                </div>
                <div>
                    <div>AppleStore</div>
                    <div>GoogleStore</div>
                </div>
            </Box>
            </FooterColumn>
            </Box>
            </Container>
        </StyledFooter>
    )
}

export default Footer