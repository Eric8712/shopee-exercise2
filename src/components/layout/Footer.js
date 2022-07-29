import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import CVSlogo from '../image/超商Logo.png';
import Remark from '../image/24h.png';
import QRCode from '../image/QR code.png';
import AppStore from '../image/install/APP-store.png';
import GooglePlay from '../image/install/googlePlay.png';
import AppGallery from '../image/install/AppGallery.png';


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
    /* flex-wrap: wrap; */
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
            <Link to='#!'>蝦皮商城</Link>
            <Link to='#!'>付款方式</Link>
            <Link to='#!'>蝦皮錢包</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
            <Link to='#!'>關於蝦皮</Link>
            <Link to='#!'>加入我們</Link>
            <Link to='#!'>蝦皮條款</Link>
            <Link to='#!'>隱私權政策</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>物流合作</FooterColumnTitle>
            <img src={CVSlogo} alt="CVS_logo" width='80%' style={{marginBottom: 12}}></img>
            <FooterColumnTitle>蝦皮24h包裝減量標章</FooterColumnTitle>
            <img src={Remark} alt="CVS_logo" width='80px' style={{marginBottom: 12}}></img>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>關注我們</FooterColumnTitle>
            <Link to='#!'><i style={{width:20, fontSize:15}} class="fa-brands fa-facebook"></i>Facebook</Link>
            <Link to='#!'><i style={{width:20, fontSize:15}} class="fa-brands fa-square-instagram"></i>Instagram</Link>
            <Link to='#!'><i style={{width:20, fontSize:15}} class="fa-brands fa-line"></i>Line</Link>
            <Link to='#!'><i style={{width:20, fontSize:15}} class="fa-brands fa-linkedin"></i>Linkedn</Link>
            </FooterColumn>
            <FooterColumn>
            <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
            <Box>
                <div>
                <img src={QRCode} alt='Qr_code' width='65%'></img>
                </div>
                <div>
                    <div><img src={AppStore} width='80%'></img></div>
                    <div><img src={GooglePlay} width='80%'></img></div>
                    <div><img src={AppGallery} width='80%'></img></div>
                </div>
            </Box>
            </FooterColumn>
            </Box>
            </Container>
        </StyledFooter>
    )
}

export default Footer