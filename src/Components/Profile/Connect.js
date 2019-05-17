import React from 'react';
import styled from 'styled-components';

const tags_color = ["#7888df", "#929CD5"]
const seeking_color = "#7888df";
const offering_color = "#cf74cd";


const ConnectContainer  = styled.div`
    max-width : 1000px;
    margin : auto;
    margin-top : 70px;
    margin-bottom: 30px;
    text-align : left;
    display : flex;
    flex-direction : column;

    & span {
        font-size : 25px;
        font-weight: bold;

    }

    @media(max-width : 600px) {
        padding: 10px;
        margin-top : 20px;

        & span {
            font-size : 20px;
            font-weight: bold;
    
        }
    }
`


const SeekingContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 30px;

    @media(max-width : 600px) {
        margin-left : 15px;
    }
`

const OfferingContainer = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 30px;

    @media(max-width : 600px) {
        margin-left : 15px;
    }
`


const Tag = styled.div`
    border-radius: 20px;
    padding: 10px 20px;
    margin : 0px 10px 5px 0px
    color: black;
    display: flex;
    border: 1px solid ${props => props.color};
    align-items : center;

    & span {
        font-weight: 400;
        font-size: 17px;
    }

    @media(max-width : 600px) {
        padding: 7px 12px;

        & span {
            font-size : 13px;
        }
    }
`


const Dot = styled.div`
    height : 10px;
    width: 10px;
    border-radius: 50px;
    margin-right: 10px;
    background-color: ${props => props.color};
`


const SubHeading = styled.div`
    font-size: 20px;
    font-weight: 500;
    display : flex;
    align-items: center;

    @media(max-width : 600px) {
        font-size : 16px;
    }
`



const TagsContainer = ({exchange, color}) => (
    <div style = {{display : "flex", flexWrap : "wrap" , alignContent : "flex-start", marginLeft : "20px"}}>
        {
            exchange.map((item, index) => (
                <Tag color = {color} key={index}>
                    <Dot color = {color} />
                    <span>{item}</span>
                </Tag>
            ))
        }
    </div>
)



const Connect = ({ maker_profile }) => (
    ( maker_profile.connect.seeking.length > 0 || maker_profile.connect.offering.length > 0 ) ?
    (<ConnectContainer>
        <div>
            <span>Connect 👨👩</span>
        </div>
        <div style = {{display : "flex", flexDirection: "column"}}>
            {
                maker_profile.connect.seeking.length > 0 ? (
                    <SeekingContainer>
                        <SubHeading>Seeking Help for </SubHeading>
                        <TagsContainer exchange = {maker_profile.connect.seeking} color = {seeking_color} />
                    </SeekingContainer>
                )
                :
                null
            }
            {
                maker_profile.connect.offering.length > 0 ? (
                    <OfferingContainer>
                        <SubHeading>Offering Help for </SubHeading>
                        <TagsContainer exchange = {maker_profile.connect.offering} color = {offering_color} />
                    </OfferingContainer>
                )
                :
                null
            }
        </div>
    </ConnectContainer>)
    :
    null
)

export default Connect;