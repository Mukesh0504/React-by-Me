import React, { useContext } from 'react'
import UserContext from '../context/userContext'


function Profile() {
    const { user } = useContext(UserContext)
    console.log(user);

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}, password {user.password}</div>

}

export default Profile