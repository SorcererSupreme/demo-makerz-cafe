import React, {Fragment} from 'react';
import styled from 'styled-components'
import {BuddyInfo} from './Buddies.js'

const FollowContainer = styled.div`
    max-width : 1000px;
    margin : auto;
    margin-top : 140px;
    display: flex;
    justify-content : center;
    margin-bottom : 150px;

    @media(max-width : 600px) {
        margin-top : 50px;
        margin-bottom : 70px;
        padding : 10px;
    }
`


const StyledLabel = styled.div`
&& {
    background-color: rgb(29, 161, 242);
    position: absolute;
    top: 16px;
    right: 35px;
    width: 342px;
    color: white;
    padding: 9px 60px 9px 17px;
    border-radius: 30px;

    & span {
        font-size: 30px;
        font-weight: bold;
    }

    @media(max-width : 600px) {
        width : initial;
        border-radius : 0px;
        position : initial;
        padding: 7px 30px 9px 3px;
        margin-bottom : 10px;

        & span {
            font-size : 17px;
        }
    }
}
`
 
const StyledFollow = styled.div`
    position : relative;
    width : 100px;
    height: 100px

    @media(max-width : 600px) {
        width : 100%;

    }
`



const Follow = ({maker_profile}) => (
    <Fragment>
        {
            maker_profile.fan_of.length > 0 ? (
                <FollowContainer>
                    <StyledFollow >
                        <StyledLabel>
                            <span>I will always Follow</span>
                        </StyledLabel>
                        <BuddyInfo friend = {maker_profile.fan_of[0]} style = {{position : "absolute", zIndex : "100"}} />
                    </StyledFollow>
                </FollowContainer>
            ) : (<Fragment />)
        }
    </Fragment>
)

export default Follow;