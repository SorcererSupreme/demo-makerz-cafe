import React from 'react';
import styled from 'styled-components';


const Styledheader = styled.div`
    height : 40px;
    padding: 10px 30px;
    text-align : left;

    -webkit-box-shadow: 0px 3px 5px 0px rgba(115,115,115,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(115,115,115,1);
    box-shadow: 0px 3px 5px 0px rgba(115,115,115,1);

    @media(max-width : 600px){
        padding : 10px 15px;

    }

    & span{
        font-size: 25px;
        font-weight : bold;
        color : black;

        @media(max-width: 600px){
            font-size : 20px;
        }
    }

    & img {
        height : 40px;
        width : 40px;

        @media(max-width : 600px) {
            height : 30px;
            width : 30px;
        }
    }
`


const Header = () => (
    <Styledheader>
        <a href = "/" style = {{textDecoration : "none"}}>
            <div style = {{display : "flex", alignItems : "center"}}>
            <div style = {{display : "flex", alignItems : "baseline"}}>
                <span>Makerz </span>
                <span style = {{fontStyle : "italic", fontWeight : "400", fontSize : "20px", marginLeft : "5px"}}>Cafe</span>
            </div>
            <img src = "https://s3-us-west-2.amazonaws.com/makerzcafe/assets/cookie.png" />
            </div>
        </a> 
    </Styledheader>
)

export default Header;




