import React, {useContext} from 'react'
import userContext from '../../context/usercontext'


function Profile() {
    const {user} = useContext(userContext)
    if(!user) return <div>Please Login</div>
    return <div> welcome {user.username}</div>
}

export default Profile