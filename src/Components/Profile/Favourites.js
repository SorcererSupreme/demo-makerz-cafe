import React, { Fragment } from 'react';
import styled from 'styled-components'

const type_color_mapping = {
    "music" : "#7389FC",
    "newsletter" : "#ffaf38",
    "book" : "#ff5252"
}


const FavouriteContainer = styled.div`
    display : flex;
    flex-direction : column;
    max-width : 1000px;
    margin: auto;
    margin-top : 70px;
    text-align : left;

    & span {
        font-size : 25px;
        font-weight : bold;

    }

    @media(max-width : 600px) {
        padding: 10px;
        margin-top : 30px;

        & span {
            font-size : 20px;
        }
    }
`;

const FavouriteText = styled.span`
    && {
        font-size : 16px;
        font-weight : 600;
        margin : auto;

        @media(max-width : 600px) {
            font-size : 13px;
            padding : 0px 8px;
        }
    }
        
`;

const StyledItem = styled.div`
    width : 220px;
    height: 320px;
    border : 1px solid #dddddd;
    display : flex;
    flex-direction: column;
    margin-right : 20px;

    @media(max-width : 600px) {
        width : 150px;
        height : 210px;
    }
`;

const StyledBackground = styled.div` 
    display: flex;
    flex-direction : column;
    height : 260px;
    background-color : ${props => props.color};

    @media(max-width : 600px) {
        height : 170px;
    }

`;

const ItemHeading = styled.span`
&& {
    font-size : 20px;
    margin-top : 20px;
    margin-bottom : 15px;
    color : white;
    font-weight : bold;
    text-align : center;
    text-transform : capitalize;

    @media(max-width : 600px) {
       font-size : 15px;
       margin-top : 5px;
       margin-bottom : 10px;
    }
}
`

const ImageContainer = styled.div`
    display : flex;
    margin: 0px 20px;

    & img {
        max-width : 180px;
        max-height : 180px;
        margin : auto;
        border-radius : 5px;

        @media(max-width : 600px) {
            max-width : 110px;
            max-height : 120px;
        }
    }

`;

const FavouriteItems = styled.div`
    && {
        display : flex;
        margin-top : 30px;

        @media(max-width : 600px) {
            overflow-x: scroll;
            margin-right : 15px;
            padding-bottom: 15px;
            margin-top : 15px;
        }
    }
`


const FavouriteItem = ({favourite, type}) => (
    <a href = {favourite.url} target = "_blank" style = {{textDecoration: "none", color: "black"}}>
        <StyledItem>
            <StyledBackground color = {type_color_mapping[type]}>
                <ItemHeading>{type}</ItemHeading>
                <ImageContainer>
                    <img src = {favourite.image_url} />
                </ImageContainer>
            </StyledBackground>
            <FavouriteText>{favourite.name}</FavouriteText>
        </StyledItem>
    </a>
);


const Favourites = ({ maker_profile }) => (
    (maker_profile["favorites"]["music"].length > 0 || maker_profile["favorites"]["book"].length || maker_profile["favorites"]["newsletter"].length)  ?
    (<FavouriteContainer>
        <div>
            <span>Favourites 😍 🎹 📗</span>
        </div>
        <FavouriteItems>
            {
                ( maker_profile["favorites"]["music"].length > 0 ) ? (<FavouriteItem favourite={ maker_profile.favorites.music[0] } type="music" />) : null
            }
            {
                ( maker_profile["favorites"]["book"].length > 0 ) ? (<FavouriteItem favourite={ maker_profile.favorites.book[0] } type="book" />) : null
            }
            {
                ( maker_profile["favorites"]["newsletter"].length > 0 ) ? (<FavouriteItem favourite = {maker_profile.favorites.newsletter[0]} type = "newsletter" />) : (null)
            }
        </FavouriteItems>
    </FavouriteContainer>)
    :
    null
)

export default Favourites;