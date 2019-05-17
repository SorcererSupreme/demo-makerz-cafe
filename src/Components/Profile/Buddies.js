import React from 'react';
import styled from 'styled-components'
import TwitterIcon from '../../Icons/TwitterIcon.js'

const BuddiesSection = styled.div`
    display : flex;
    flex-direction : column;
    max-width : 1000px;
    margin : auto;
    margin-top : 70px;
    text-align : left;

    & span {
        font-size : 25px;
        font-weight : bold;

        @media(max-width : 600px) {
            font-size : 20px;
        }
    }

    @media(max-width : 600px) {
       padding: 10px;
       margin-top : 20px;
    }
`

const BuddiesContainer = styled.div`
    display : flex;
    margin-top : 30px;
    flex-wrap : wrap;

    @media(max-width : 600px) {
        margin-top : 15px;
    }
`

const Buddy = styled.div`
    display : flex;
    margin-right : 50px;
    margin-bottom: 10px;

    & img {
        height : 80px;
        width : 80px;
        border-radius : 100px;
        border: 2px solid whitesmoke;

        @media(max-width : 600px) {
            height: 60px;
            width : 60px;
        }
    }
`

const FriendName = styled.span`
&& {
    font-size : 17px;

    @media(max-width : 600px) {
        font-size : 14px;
        font-weight : bold;
        text-align : left;
    }
}
`

const TwitterHandle = styled.span`
    && {
        font-size: 14px;
        font-weight : 400;
        margin-left : 5px;

        @media(max-width : 600px){
            font-size : 13px;
        }
    }

`


export const BuddyInfo = ({friend , style}) => (
    <Buddy style = {style}>
        <a href = {"https://twitter.com/" + friend.twitter} style = {{textDecoration: "none", color: "black", display : "flex"}} target = "_blank">
            <div>
                <img src = {friend.image_url} />
            </div>
            <div style = {{display : "flex", flexDirection : "column", marginLeft : "15px", justifyContent : "center"}}>
                <FriendName>{friend.name}</FriendName>
                <div style = {{display : "flex", marginTop : "5px"}}>
                    <TwitterIcon height = "20" width = "20" /> 
                    <TwitterHandle>{friend.twitter}</TwitterHandle>
                </div>
            </div>
        </a>
    </Buddy>
)


const Buddies = ({ maker_profile }) => (
    maker_profile.maker_buddies.length > 0 ? 
    (<BuddiesSection>
        <div>
            <span>Maker Buddies 👭</span>
        </div>
        <BuddiesContainer>
            {
                maker_profile.maker_buddies.map((friend, index) => (
                    <BuddyInfo friend = {friend} key={index} />
                ))
            }
        </BuddiesContainer>
    </BuddiesSection>)
    :null
)

export default Buddies;