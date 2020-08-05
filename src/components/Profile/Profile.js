import React from 'react';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import './Profile.css'

function Profile() {
    return(
        <div className='profileCard'>
            <div className='profileText'>
                <h1><span className='hello'>Hello</span><br/>My name is Manish...</h1>
                <h3>I'm a student, and an aspiring MERN Stack developer</h3>
            </div>
            <ProfilePhoto />
        </div>
    );
}

export default Profile;