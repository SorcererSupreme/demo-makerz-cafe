import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {id_mappings, db} from '../db.js';


const MakerContainer = styled.div`
    display: flex;
    flex-direction : column;
    max-width : 800px;
    margin : auto;
    margin-top : 50px;
    margin-bottom : 50px;
    background: rgba(251, 185, 126, 0.21);
    border-radius: 10px;
    
    padding: 10px;
    padding-top: 30px;

    & span {
        font-size : 25px;
        font-weight : bold;
    }

    @media(max-width : 600px) {
        padding-top : 20px;
        
        margin : 10px;

        & span {
            font-size : 20px;
        }
    }
` 

const ProfileImage = styled.img`
    width: 110px;
    height: 106.49px;
    border: 2px solid #FFFFFF;
    border-radius: 200px;
    margin-right: 20px;

    @media(max-width : 600px) {
        width : 50px;
        height : 50px;
        margin-right: 5px;
    }
` 

const randomMakers = (current) => {
    const id = current.replace("@", "");
    let ids = Object.assign({}, id_mappings);
    delete ids[id];
    return Object.values(ids).splice(0,4).map(id => { return db[id] })
}



const SuggestedMakers = ({current}) => (
    <MakerContainer>
        <div style={{"marginBottom" : "30px"}}>
            <span>
                Discover Awesome Makers 👥 🔍 
            </span>
        </div>
        <div>
            <span>
            {
                randomMakers(current).map((maker) => {
                    return (<Link to={maker.twitter}>
                        <ProfileImage src={maker.profile_image_url} />
                    </Link>)
                })
            }
            </span>
        </div>
    </MakerContainer>
)

export default SuggestedMakers;
