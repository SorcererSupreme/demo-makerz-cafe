import React from 'react';
import styled from 'styled-components'

const ProductsSection = styled.div`
    display : flex;
    flex-direction : column;
    max-width: 1000px;
    height : 400px;
    margin: auto;

    @media(max-width: 600px) {
        padding : 10px;
        height : 250px;
    }
`

const ProductHeading = styled.div`
    margin-top : 30px;
    margin-bottom : 20px;
    text-align: left;

    & span {
 
        font-size : 25px;
        font-weight : bold;
    }

    @media(max-width : 600px) {
        & span {
            font-size : 20px;
            font-weight : bold;
        }
    }
`

const ScrollableProductsContainer = styled.div`
    display: flex;
    overflow-x : scroll;
    padding-bottom : 20px;

    
`

const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width : 300px;
    height : 250px; 
    margin-right : 30px;
    border: 1px solid #dddddd;

    :hover {
        background-color: whitesmoke;
        color:white;
    }

    @media(max-width : 600px) {
        width : 200px;
        height : 150px;
        margin-right : 15px;
    }
`

const StyledBackground = styled.div`
    background-image :  ${props => 'url("' + props.image + '")'};
    width : 300px;
    height : 200px;
    background-size: cover;
    border-bottom : 1px solid #dddddd;

    @media(max-width : 600px) {
        width : 200px;
        height : 120px;
    }

`

const ProductName = styled.span`
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: black;

    @media(max-width : 600px) {
        font-size: 14px;
    }
`


const ProductComponent = ({product}) => (
    <a href = {product.website_url} target = "_blank" style = {{textDecoration : "none"}} >
        <StyledProduct>
            
                <StyledBackground image = {product.image_url} />
                <div style = {{margin : "auto"}}>
                    <ProductName>{product.name}</ProductName>
                </div>
            
        </StyledProduct>
    </a>
)


const Products = ({maker_profile}) => (
    <ProductsSection>
        <ProductHeading>
            <span>🚀 Products</span>
        </ProductHeading>
        <ScrollableProductsContainer>
            {
                maker_profile.products.map((product, index) => (
                    <ProductComponent product = {product} key={index} />
                ) )
            }

        </ScrollableProductsContainer>
    </ProductsSection>
)

export default Products;