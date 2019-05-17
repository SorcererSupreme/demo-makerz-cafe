import React from 'react';
import styled from 'styled-components';

const InterviewContainer = styled.div`
    display: flex;
    flex-direction : column;
    max-width : 1000px;
    margin: auto;
    margin-top : 70px;
    text-align : left;

    & span {
        font-size: 25px;
        font-weight : bold;
    }

    & iframe {
        width : 560px;
        height : 315px;
    }

    @media(max-width : 600px) {
       padding : 10px;

       & span {
            font-size: 20px;
            font-weight : bold;
       }

       & iframe {
            width : 292px;
            height : 165px;
       }
    }

`


const Interview = ({maker_profile}) => (
    maker_profile.interview.length > 0 ? 
    (<InterviewContainer>
        <div style = {{marginBottom : "20px"}}>
            <span>Interviews 🎤 📺</span>
        </div>
        <div>
        <iframe  src={maker_profile.interview[0].url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </InterviewContainer>)
    :
    null
)

export default Interview;