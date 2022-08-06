import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from "styled-components";
import Banner2 from '../components/image/banner2.png';

const Image = styled.div`
    width: 100%;
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

const ProductPageContainer = styled.div`
    display: flex;
    border: 1px solid #000;
`
const Title = styled.div`
    display: flex;
`

const ProductContainer = styled.div`
    display: flex;
    width: 100%;
`
const ProductDisplay1 = styled.div`
    width: 40%;
    border: 1px solid #000;
`
const ProductDisplay2 = styled.div`
    width: 60%;
    border: 1px solid #000;
    padding-left: 20px;
    h2{
        font-weight: bolder;
    }
`

const Productstate = styled.div`

`
const ProductNumber = styled.div`
    border-bottom: 1px solid #d1011c;
`

const ProductPage = () => {
    return(
    <DefaultLayout>
        <Title>
            <span>蝦皮購物 > 女生配件黃金 > 國際精品配件 > 精品飾品 </span>
            <span>韓版3D口罩 一次性口罩 網紅同款口罩 防曬口罩</span>
        </Title>
        <ProductContainer>
            <ProductDisplay1>
            <Image height={500} url={Banner2}></Image>
            </ProductDisplay1>
            <ProductDisplay2>
                <h2>韓版3D口罩 一次性口罩 網紅同款口罩 防曬口罩 黑白色透氣口罩</h2>
                <Productstate>4.8</Productstate>
            </ProductDisplay2>
        </ProductContainer>
    </DefaultLayout>
    )
}

export default ProductPage