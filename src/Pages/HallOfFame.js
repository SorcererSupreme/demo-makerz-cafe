import React, { Component, Fragment } from 'react';
import { id_mappings, db } from '../db.js'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hidden from '../Components/Hidden.js';

const StyledContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    background: radial-gradient(252.05px at 50% -2.55%, #416691 0%, rgba(184, 0, 165, 0.25) 100%), linear-gradient(110.11deg, #FF9E47 0%, #CD0056 46.54%, #813701 100%);
    
    @media(max-width: 600px) {
        height : 200px;
        margin-bottom: 0px;
    }
`;

const HeadingContainer = styled.div`
    font-family: Roboto;
    font-style: normal;
    color: white;
    display: flex;
    justify-content : center;
    align-items: center;
    margin-top: 60px;

    @media(max-width: 600px) {
        margin-top: 20px;
    }
`;

const LargeHeading = styled.div`
    font-weight: 900;
    font-size: 80px;
    line-height: 106px;

    @media(max-width: 600px) {
        font-size : 25px;
        line-height: 27px;
    }
`;

const SmallHeading = styled.div`
    font-weight: 900;
    font-size: 40px;
    line-height: 53px;

    @media(max-width: 600px) {
        font-size : 21px;
        line-height: 27px;
    }
`;

const MonthHeading = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    color: #CBCBCB;
    margin-bottom: 35px;

    @media(max-width: 600px) {
        font-size : 14px;
        margin-bottom: 10px;
    }
`;

const DescriptionContainer = styled.div`
    background: rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    height: 69px;
    width : 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 600px) {
        padding : 10px;
        width : 70%;
    }
`;

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 36px;
    color: #E3E3E3;
    @media(max-width: 600px) {
        font-size : 16px;
        line-height: 24px;
    }
`;

const CookieImage = styled.img`
    width: 60px;
    height: 60px;
    color: #E3E3E3;
    @media(max-width: 600px) {
        width: 35px;
        height: 30px;
    }
`;

const QuoteContainer = styled.p`
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
    max-width: 1000px;
    margin: 0 auto;
    line-height: 32px;
    margin-bottom: 40px;
    @media(max-width: 600px) {
        padding : 20px !important;
        margin-bottom: 15px;
    }
`;

const Quotes = styled.span`
    font-size: 76px;
    line-height: 101px;
    color: #4E4E4E;
    @media(max-width: 600px) {
        line-height : 19px !important;
    }
`;

const QuoteText = styled.span`
    font-size: 24px;
    line-height: 32px;
    color: #727272;
    @media(max-width: 600px) {
        font-size : 17px !important;
        line-height : 19px !important;
    }
`;

const QuoteAuthor = styled.span`
    font-weight: bold;
    color: #4E4E4E;
    font-size: 30px;
    @media(max-width: 600px) {
        font-size : 17px !important;
        line-height : 19px !important;
    }
`;

const MakersArea = styled.div`
    margin-bottom : 100px;
`;

const MakerRows = styled.div`
    width: 155px;
    height: 150px;
    display: flex;
    justify-content : space-around;
    width: 100%;
    margin: 0 auto;
    max-width: 1150px;
    margin-bottom : 70px;
`;

const MakerContainer = styled.div`
    position: relative;
    width: 30%;
    display: flex;
    padding-right: 20px;
    @media(max-width: 600px) {
        width: 250px;
        height: 100px;
        margin: 0 auto;
        padding: 0px;
        margin-bottom : 25px;
    }
`;

const ProfileImage = styled.img`
    width: 155px;
    height: 150px;
    border: 10px solid #B67647;
    box-sizing: border-box;
    border-radius: 126.5px;
    z-index: 10;
    position: absolute;

    :hover {

        -ms-transform: scale(1.1, 1.1); 
        -webkit-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }

    @media(max-width: 600px) {
        width: 100px;
        height: 100px;
        border: 2px solid #B67647;
    }
`;

const ProfileInfo = styled.div`
    width: 190px;
    height: 45px;
    padding-top: 5px;
    color : white;
    background: #000000;
    border-radius: 30px;
    position: absolute;
    top: 45px;
    left: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 600px) {
        top: 25px;
        left: 75px;
    }
`;

const MakerName = styled.div`
    font-weight: bold;
`;


class HallOfFame extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const isMobile = window.innerWidth <= 600;
        return (
            <Fragment>
                <StyledContainer>
                    <HeadingContainer><LargeHeading>Hall</LargeHeading> <SmallHeading>&nbsp;of&nbsp;</SmallHeading> <LargeHeading>Fame</LargeHeading></HeadingContainer>
                    <MonthHeading>April , 2019</MonthHeading>
                    <DescriptionContainer>
                        <Description>Celebrating the Achievements of Makers</Description>
                        <CookieImage src="https://s3-us-west-2.amazonaws.com/makerzcafe/assets/cookie.png"/>
                    </DescriptionContainer>
                </StyledContainer>
                <QuoteContainer>
                    <QuoteText>Don’t let the noise of others opinion drown out your own inner voice. And most important have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.</QuoteText>
                    <QuoteAuthor>&nbsp; - Steve Jobs</QuoteAuthor>
                </QuoteContainer>
                <MakersArea>
                    <Hidden isMobile={!isMobile}>
                    {
                        [0,1,2].map((index) => {
                            return (
                                <MakerRows key={index}>
                                {
                                    db.slice(index*3, (index+1)*3).map((maker, index) =>{
                                        return (
                                        <MakerContainer key={index}>
                                            <Link to={`/${maker["twitter"]}`}>
                                                <ProfileImage src={maker.profile_image_url}/>
                                                <ProfileInfo>
                                                    <MakerName>{maker.name}</MakerName>
                                                    <div style={{"fontSize": "14px"}}>{maker.products[0]["name"]}</div>
                                                </ProfileInfo>
                                            </Link>
                                        </MakerContainer>)
                                    })
                                }
                                </MakerRows>
                            )
                        })
                    }
                    </Hidden>
                    <Hidden isMobile={isMobile}>
                    {
                        db.map((maker, index) =>{
                            return (
                            <MakerContainer key={index}>
                                <Link to={`/${maker["twitter"]}`} >
                                    <ProfileImage src={maker.profile_image_url}/>
                                    <ProfileInfo>
                                        <MakerName>{maker.name}</MakerName>
                                        <div style={{"fontSize": "14px"}}>{maker.products[0]["name"]}</div>
                                    </ProfileInfo>
                                </Link>
                            </MakerContainer>
                            )
                        })
                    }
                    </Hidden>
                </MakersArea>
            </Fragment>
        )
    }

    
}

export default HallOfFame;