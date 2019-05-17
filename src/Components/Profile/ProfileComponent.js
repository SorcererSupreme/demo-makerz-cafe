import React from 'react';
import Products from './Products';
import Skills from './Skills';
import Connect from './Connect';
import Favourites from './Favourites';
import Buddies from './Buddies';
import ProfileHero from './ProfileHero';
import Follow from './Follow';
import Interview from './Interview';

const ProfileComponent = ({maker_profile}) => (
    <div> 
        <ProfileHero maker_profile = {maker_profile} />
        <Products maker_profile = {maker_profile} />
        <Skills maker_profile = {maker_profile} />
        <Connect maker_profile = {maker_profile} />
        <Favourites maker_profile = {maker_profile} />
        <Buddies maker_profile = {maker_profile} />
        <Interview maker_profile = {maker_profile} />
        <Follow maker_profile = {maker_profile} />
    </div>
)

export default ProfileComponent;