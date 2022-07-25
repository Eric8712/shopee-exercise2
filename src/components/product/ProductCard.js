import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const SquareImage = styled.div`
    padding-top: 100%;
    background-position: center;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
`

const ListPriceLabel = styled.div`
    color: #757575;
    text-decoration-line: line-through;
    margin-right: 4px;
`

const SalePriceLabel = styled.div`
    color: #ee4c2d;
`

const ProductCard = ({
    coverUrl, 
    title, 
    listPrices, 
    salePrices, 
    discountPercentage, 
    salesNumber, 
    reating, 
    isLike
    }) => {
    return(
    <Card hoverable
    cover={<SquareImage src={coverUrl} />}>
    <Meta title={title} description={
        <div>
            {listPrices && listPrices.length > 0 && (<ListPriceLabel>${listPrices[0]}</ListPriceLabel>)}
            {salePrices && salePrices.length > 0 && (<SalePriceLabel>${salePrices[0]}</SalePriceLabel>)}
        </div>
    } />
  </Card>
    )
}

export default ProductCard