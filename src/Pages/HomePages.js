import React, { useContext } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../components/common/ClearFix";
import styled from "styled-components";
import Carousel from "antd/lib/carousel";
import { Link } from "react-router-dom";
import Banner1 from '../components/image/banner1.png';
import Banner2 from '../components/image/banner2.png';
import Banner3 from '../components/image/banner3.png';
import Banner4 from '../components/image/banner4.png';
import Banner5 from '../components/image/banner5.png';
import BannerLong from '../components/image/banner-long.png';
import BannerLeft1 from '../components/image/banner/bammerLeft-1.png'
import BannerLeft2 from '../components/image/banner/bannerLeft-2.png'
import BannerLeft3 from '../components/image/banner/bannerLeft-3.png'
import BannerRight1 from '../components/image/banner/bannerRight-1.png'
import BannerRight2 from '../components/image/banner/bannerRight-2.png'
import ProductCard from "../components/product/ProductCard";
import AuthContext from "../components/auth/AuthContext";
import PopupModal from "../components/common/PopupModal";

const BannerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
`
const BannerCarouselContainer = styled.div`
    width: 100%;
    padding: 1px;
    @media (min-width: 769px) {
        width: 66.67%;
    }
`
const BannerContainer = styled.div`
    width: 100%;
`
const BannerSectionContainer = styled.div`
    width: 100%;
    padding: 2px;
    @media (min-width:769px) {
        width: 33.33%;
    }
`
const BannerFeatureContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0.05);
    border-left: 1px solid rgba(0, 0, 0.05);
    border-right: 1px solid rgba(0, 0, 0.05);
    box-shadow: rgba(0,0,0,0.6);
`

const BannerFeatureColumn = styled.div`
    width: 33.33%;
    text-align: center;
`
const CustomerContainer = styled.div`
    margin-bottom: 48px;
`

const ProductCollectionContainer = styled.div`
/* 把margin 推回來 */
    margin: -4px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const ProductContainer = styled.div`
    width: 100%;
    padding: 4px;
    @media (min-width: 577px){
        width: 50%;
    }
    @media (min-width: 769px){
        width: 20%;
    }
`

const Image = styled.div`
    width: 100%;
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const HomePage = () => {
    // 靠這個技巧從AuthContext裡面拿出來，用出對應的顯示畫面
    const {isAuthenticated} = useContext(AuthContext)

    return(
        <DefaultLayout fixedHeader>
            <PopupModal />
            <ClearFix />
            {isAuthenticated && <h1>歡迎回來</h1>}
            <BannerBox>
            <BannerCarouselContainer>
                <Carousel autoplay>
                <Link to='P001'>
                <Image height={200} url={BannerLeft1}></Image>
                </Link>
                <Link to='P002'>
                <Image height={200} url={BannerLeft2}></Image>
                </Link>
                <Link to='P003'>
                <Image height={200} url={BannerLeft3}></Image>
                </Link>
                </Carousel>
            </BannerCarouselContainer>
            <BannerSectionContainer>
            <BannerContainer>
                    <Link to='P004'>
                    <Image height={100} url={BannerRight1}></Image>
                    </Link>
                    <Link to='P005'>
                    <Image height={100} url={BannerRight2}></Image>
                    </Link>
                </BannerContainer>
            </BannerSectionContainer>
            <BannerFeatureContainer>
                <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
                <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
                <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
            </BannerFeatureContainer>
            </BannerBox>
            <CustomerContainer>
                <Link to='advertisting'>
                <Image height={100} url={BannerLong}></Image>
                </Link>
            </CustomerContainer>
            <ProductCollectionContainer>
                <ProductContainer>
                    <Link to='/p001'>
                    <ProductCard title='Banner1' coverUrl={Banner1} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner2' coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner5} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner4} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner5} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner3} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner2} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner4} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to='/p002'>
                    <ProductCard title='Banner3' coverUrl={Banner5} salePrices={[100, 200]} listPrices={[200,299]} />
                    </Link>
                </ProductContainer>
            </ProductCollectionContainer>
        </DefaultLayout>
    )
}

export default HomePage