import React from 'react';
import styled from 'styled-components'


const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width : 1000px;
    margin: auto;
    margin-top : 20px;

    @media(max-width : 600px){
        margin-top : 0px;
        padding: 10px;

    }
`

const Heading = styled.div`
    margin-top : 20px;
    text-align: left;

    & span {
        font-size: 25px;
        font-weight : bold;
    }
`

const SkillTile = styled.div`
    width : 100px;
    height : 100px;
    display : flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    background-color: black;
    margin-right: 20px;
    margin-top : 20px;
    border-radius: 10px;

    & img {
        max-height: 50px;
        max-width: 70px;
        margin: auto;
    }

    & span {
        font-size : 14px;
        color: white;
        font-weight : bold;
        text-transform : capitalize;
    }

    @media(max-width : 600px) {
        min-width : 80px;
        margin-right : 15px;

        & span {
            font-size : 13px;
            font-weight : 400;
        }
    }

`
const SkillsRow = styled.div`
    display: flex;

    @media(max-width : 600px) {
        overflow-x : scroll;
        padding-bottom : 15px;
    }
`


const SkillComponent = ({skill}) => (
    <SkillTile>
        <img src = {skill.image_url} />
        <span>{skill.name}</span>
    </SkillTile>
)



const Skills = ({maker_profile}) => (
    <SkillsContainer>
        <Heading>
            <span>Skills 🎨 💃 ⛸️</span>
        </Heading>
        <SkillsRow>
            {
                maker_profile.skills.map((skill, index) => (
                    <SkillComponent skill = {skill} key = {"skill_" + index} />
                ))
            }
        </SkillsRow>
    </SkillsContainer>
)

export default Skills;