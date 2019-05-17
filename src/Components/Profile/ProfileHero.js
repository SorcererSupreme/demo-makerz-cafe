import React, { Fragment, Component } from 'react'; 
import styled from 'styled-components'
import { color_maker_type } from '../../db.js'
import TwitterIcon from '../../Icons/TwitterIcon.js'
import GithubIcon from '../../Icons/GithubIcon.js'
import DribbleIcon from '../../Icons/DribbleIcon.js'
import EmailIcon from '../../Icons/EmailIcon.js'
import MediumIcon from '../../Icons/MediumIcon.js'
import ProductHuntIcon from '../../Icons/ProductHuntIcon.js'
import TelegramIcon from '../../Icons/TelegramIcon.js'
import TwitchIcon from '../../Icons/TwitchIcon.js'
import Hidden from '../Hidden.js';



const StyledHero = styled.div`
    width: 100%;
    color: white;
    background-color: black;
    padding: 20px;
    padding-bottom : 40px;

    @media(max-width : 600px) {
        padding : 10px;
        width : initial;
        background-color: black;
    }
`
const StyledContainer = styled.div`
    max-width: 1000px;
    display: flex;
    margin: auto;
    padding-top : 50px;

    @media(max-width : 600px) {
        flex-direction : column;
        padding-top : 20px;
        background-color: black;
    }
`

const ProfileImage = styled.div`
   
    & img {
        height : 200px;
        width: 200px;
        border-radius : 500px;
        border : 2px solid white

        @media(max-width : 600px) {
            height : 110px;
            width : 110px;
        }
    }
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction : column;
    padding-left : 50px;
    justify-content: space-between;

    @media(max-width : 600px) {
        padding-left : 0px;
    }
`

const Bio = styled.span`
    text-align: left;
    font-size: 18px;
    padding-bottom : 15px;
    padding-top : 15px;

    @media(max-width : 600px){
        font-size : 16px;
        display : flex;
        padding : 10px;
    }
`

const StatsContainer = styled.div`
    display: flex;
    padding-top : 15px;

    @media (max-width : 600px) {
        align-items : baseline;
        justify-content : space-between;
        margin-bottom : 20px;
    }
`

const BuyMeACoffee = styled.div`
    border-radius: 100px;
    border: 2px solid white;
    height: 60px;
    width: 60px;
    display: flex;

    :hover {
        
        border:  2px solid gold;
    }
    

    @media(max-width : 600px) {
        position : absolute;
        top : 92px;
        right : 10px;
        border: none;

        & img {
            border : none;
            height : 40px;
            width : 40px;
        }
    }
`

const IconContainer = styled.div`
    display: flex;
    
    & a {
        padding-right : 25px;

    }

    @media(max-width : 600px) {
        justify-content : center;

        & a {
            padding-right : 15px;
            margin-top : 15px;
            margin-bottom : 20px;
        }
    }
`

const StatContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;

    @media(max-width : 600px) {
        flex-direction: column-reverse;
        margin-right : 0px;
        margin-top : 15px;
    }
`

const StatKey = styled.span`
    margin-right: 10px;
    color: rgb(219, 219, 219);
    font-size: 15px;

    @media(max-width : 600px) {
        font-size : 13px;
        width : 80px;
    }
`

const StatValue = styled.span`
    font-size: 25px;

    @media(max-width : 600px) {
        font-size : 17px;
        font-weight : bold;
        padding: 4px 7px 8px 7px;
        width : 20px;
        height : 20px;
        text-align : center;
        background-color: white;
        color:black;
        border-radius : 100px;
        margin-bottom : 5px;
        height : 100%; 
    }

`

const TwitterHandle = styled.div`
    text-align : left;

    & span {
        font-size : 16px;
        color : #DBDBDB;
    }

    @media(max-width : 600px) {
        text-align : center;

        & span {
            font-size: 13px;
        }
    }
`

const SubHeading = styled.div`
    @media(max-width : 600px) {
        width : 100%;
    }
`

const Name = styled.span`
    font-size : 35px;
    margin-right : 15px;

    @media(max-width : 600px) {
        font-size : 25px;
    }
`




const parseHandle = (twitter_url) => {
    return '@' + twitter_url.split(".com/")[1].split("/")[0].split("@")[0] ;


}



const Stat = ({parameter, value}) => (
    <StatContainer >
        <StatKey>{parameter}</StatKey>
        <StatValue>{value}</StatValue>
    </StatContainer>
)


const MakerType = ({maker_type}) => (
    <div style = {{display: "flex", marginRight: "40px", alignItems: "center"}}>
        <span style = {{color: "#DBDBDB", fontSize: "15px"}}>{maker_type}</span>
        <div style = {{height: "15px", width: "15px", marginLeft: "15px", borderRadius: "50px", backgroundColor: color_maker_type[maker_type]}} /> 
    </div>
)


const ProfileHeading = ({maker_profile, isMobile}) => (
    <div style = {{display: "flex", justifyContent: "space-between"}}>
        <SubHeading>
            <div>
                <Name>{maker_profile.name}</Name>
                <img src = {maker_profile.location.flag} height = "15" />
            </div>
            <TwitterHandle>
                <span>{parseHandle(maker_profile.social_links.twitter)}</span>
            </TwitterHandle>
        </SubHeading>
        <a href = {maker_profile.social_links.buy_me_a_coffee} target = "_blank">
            <Hidden isMobile = {!isMobile}>
                <BuyMeACoffee>
                    <img src = "https://stripe-images.s3.amazonaws.com/works-with/547e1ec63ede3d7b9bb9a2410860c90886ced997" style = {{margin: "auto"}} height = "40" /> 
                </BuyMeACoffee>
            </Hidden>
        </a>
    </div>

)


const IconsPanel = ({ social_links , fill}) => (
    <IconContainer >
        {
            social_links.twitter != "" ? (
                <a href = {social_links.twitter} target = "_blank" >
                     <TwitterIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.github != "" ? (
                <a href = {social_links.github} target = "_blank">
                     <GithubIcon height = "20" width = "20" fill = {fill} />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.producthunt != "" ? (
                <a href = {social_links.producthunt} target = "_blank">
                     <ProductHuntIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.medium != "" ? (
                <a href = {social_links.medium} target = "_blank">
                     <MediumIcon height = "20" width = "20" fill = {fill} />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.telegram != "" ? (
                <a href = {social_links.telegram} target = "_blank">
                     <TelegramIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.dribble != "" ? (
                <a href = {social_links.dribble} target = "_blank">
                     <DribbleIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.twitch != "" ? (
                <a href = {social_links.twitch} target = "_blank">
                     <TwitchIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
        {
            social_links.email != "" ? (
                <a href = {social_links.email} target = "_blank">
                     <EmailIcon height = "20" width = "20" />
                </a>
            ) : (<Fragment />) 
        }
          
    </IconContainer>
)



class ProfileHero extends Component {
    constructor(props){
        super(props)
    }


    render () {
        const { maker_profile } = this.props;
        const is_mobile = window.innerWidth <= 600;

        return (
        <Fragment>
            <Hidden isMobile = {!is_mobile}>
                <StyledHero>
                    <StyledContainer>
                        <ProfileImage >
                            <img src = {maker_profile.profile_image_url} />
                        </ProfileImage>
                        <ProfileInfo>
                            <ProfileHeading maker_profile = {maker_profile} isMobile = {false}/>
                            <StatsContainer>
                                    <MakerType maker_type = {maker_profile.maker_type} />
                                    <Stat parameter = "Age" value = {maker_profile.stats.age} ></Stat>
                                    <Stat parameter = "Products Made" value = {maker_profile.stats.products_count} ></Stat>
                                    <Stat parameter = "Years in Making" value = {2019 - parseInt(maker_profile.stats.maker_since)} ></Stat>
                            </StatsContainer>
                            <Bio>{maker_profile.quest}</Bio>
                            <IconsPanel social_links = {maker_profile.social_links} />
                        </ProfileInfo>
                    </StyledContainer>
                </StyledHero>
            </Hidden>

            <Hidden isMobile = {is_mobile}>
                <StyledHero>
                    <StyledContainer>
                        <ProfileImage >
                            <img src = {maker_profile.profile_image_url} />
                            <BuyMeACoffee>
                                <img src = "https://stripe-images.s3.amazonaws.com/works-with/547e1ec63ede3d7b9bb9a2410860c90886ced997" style = {{margin: "auto"}} height = "40" /> 
                            </BuyMeACoffee>
                        </ProfileImage>
                        <ProfileInfo>
                            <ProfileHeading maker_profile = {maker_profile} isMobile = {true} />
                            <StatsContainer>
                                    <Stat parameter = "Age" value = {maker_profile.stats.age} ></Stat>
                                    <Stat parameter = "Products Made" value = {maker_profile.stats.products_count} ></Stat>
                                    <Stat parameter = "Years in Making" value = {2019 - parseInt(maker_profile.stats.maker_since)} ></Stat>
                            </StatsContainer>
                        </ProfileInfo>
                    </StyledContainer>
                </StyledHero>
                <IconsPanel social_links = {maker_profile.social_links} fill = "black" />
                <Bio>{maker_profile.quest}</Bio>
            </Hidden>
            </Fragment>
        )

    }
}

export default ProfileHero;