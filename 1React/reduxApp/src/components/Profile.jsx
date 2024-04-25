import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const name = useSelector((state) => state.profile.name)

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {name}</p>
        </div>
    )
}

export default Profile
