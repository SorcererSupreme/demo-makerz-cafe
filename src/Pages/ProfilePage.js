import React, { Component, Fragment } from 'react';
import { id_mappings, db } from '../db.js'
import ProfileComponent from '../Components/Profile/ProfileComponent.js';
import ProfileError from '../Components/Profile/ProfileError.js';
import SuggestedMakers from '../Components/SuggestedMakers.js';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let profile_handle = this.props.match.params.handle.toLowerCase();
        if(profile_handle[0] === '@')
        {
            profile_handle = profile_handle.slice(1,);
        }

        return (
                (profile_handle in id_mappings) ? (
                    <Fragment>
                        <ProfileComponent maker_profile = { db[id_mappings[profile_handle]] } />
                        <SuggestedMakers current = {this.props.match.params.handle} />
                    </Fragment>
                ) : (
                    <ProfileError />
                )
        )
    }

    
}

export default ProfilePage;