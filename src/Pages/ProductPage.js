import React, { useEffect, useState } from "react";
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
    padding: 15px;
    display: flex;
`

const ProductContainer = styled.div`
    display: flex;
    width: 100%;
`
const ProductDisplay1 = styled.div`
    width: 40%;
    /* border: 1px solid #000; */
`
const ProductDisplay2 = styled.div`
    width: 60%;
    /* border: 1px solid #000; */
    padding-left: 40px;
    h2{
        font-weight: bolder;
        font-size: 40px;
    }
`

const Productstate = styled.div`
    display: flex;
.Score{
    display: flex;
    padding: 5px 20px 5px 20px;
    border-right: 1px solid #808080;
}
.startScore{
    color: #ff4500;
    padding: 2px;
    border-bottom: 1px solid #ff4500;
    font-size: 20px;
}
.start{
    margin-left: 2px;
    font-size: 18px;
    color: #ff4500;
}
.evaluation{
    display: flex;
    padding: 5px 20px 5px 20px;
    border-right: 1px solid #808080;
    font-size: 18px;
}
.evaluationNumber{
    border-bottom: 1px solid #2c2c2c;
}
.evaluationName{
    padding-left: 3px;
    color: #808080;
}
.sale{
    display: flex;
    padding: 5px 20px 5px 20px;
}
.saleNumber{
    font-size: 18px;
}
.saleName{
    color: #808080;
    font-size: 18px;
    padding-left: 3px;
}
`
const Price = styled.div`
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 14px;
    /* border: 1px solid #000; */
    font-size: 30px;
    color: #ff4500;
    background-color: #f5f5f5;
`
const ProductNumber = styled.div`
    border-bottom: 1px solid #d1011c;
`

const Discount = styled.div`
    display: flex;
    .title{
        color: #808080;
    }
    .discount{
        margin-left: 50px;
        padding: 2px;
        color: #ff4500;
        background-color: #ffe4e1;
    }
`
const Dlevery = styled.div`
    margin-top: 30px;
    display: flex;
    .title{
        margin-right: 90px;
    }
    i{
        padding-right: 8px;
    }
    .detail{
        color: #ff4500;
    }
`
const Count = styled.div`
    margin-top: 30px;
    display: flex;
    .title{
        margin-right: 90px;
    }
    .buttomCut{
        padding: 8px;
        border: 1px solid #d3d3d3;
        cursor: pointer;
    }
    input{
        width: 50px;
        height: 40px;

    }
    .buttomPlus{
        padding: 8px;
        border: 1px solid #d3d3d3;
        cursor: pointer;
    }
    .number{
        padding: 8px 20px 8px 20px;
        border: 1px solid #808080;
    }
`
const Buy = styled.div`
    margin-top: 30px;
    display: flex;
    .Cart{
        padding: 12px;
        color: #ff4500;
        border: 1px solid #ff4500;
        background-color: #ffe4e1;
        margin-right: 40px;
    }
    i{
        padding-right: 10px;
    }
    .buy{
        padding: 12px;
        background-color: #ff4500;
        color: #fff;
    }
`


const ProductPage = () => {

    const [count, setCount] = useState(1);

    return(
    <DefaultLayout>
        <Title>
            <span>???????????? > ?????????????????? > ?????????????????? > ???????????? </span>
            <span>??????3D?????? ??????????????? ?????????????????? ????????????</span>
        </Title>
        <ProductContainer>
            <ProductDisplay1>
            <Image height={500} url={Banner2}></Image>
            </ProductDisplay1>
            <ProductDisplay2>
                <h2>??????3D?????? ??????????????? ?????????????????? ???????????? ?????????????????????</h2>
                <Productstate>
                    <div className="Score">
                    <div className="startScore"> 4.8</div>
                    <div className="start">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    </div>
                    <div className="evaluation">
                        <div className="evaluationNumber">
                        1,254
                        </div>
                        <div className="evaluationName">
                            ??????
                        </div>
                    </div>
                    <div className="sale">
                        <div className="saleNumber">20.9???</div>
                        <div className="saleName">?????????</div>
                    </div>
                </Productstate>
                <Price>$3</Price>
                <Discount>
                    <div className="tile">???????????????</div>
                    <div className="discount">??????$30</div>
                </Discount>
                <Dlevery>
                    <div className="title">??????</div>
                    <div className="detail">
                    <i class="fa-solid fa-calendar"></i>
                    ????????????(????????????6???)
                    </div>
                </Dlevery>
                <Count>
                    <div className="title">??????</div>
                    <div className="buttomCut" onClick={() => {setCount(count+1)}}>-</div>
                    <div className="number">{count}</div>
                    <div className="buttomPlus" onClick={() => {setCount(count+1)}}>+</div>
                </Count>
                <Buy>
                    <div className="Cart"><i class="fa-solid fa-cart-plus"></i>???????????????</div>
                    <div className="buy">????????????</div>
                </Buy>
            </ProductDisplay2>
        </ProductContainer>
    </DefaultLayout>
    )
}

export default ProductPage