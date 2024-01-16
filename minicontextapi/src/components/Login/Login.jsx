import React, {useContext, useState} from 'react'
import userContext from '../../context/usercontext'
function Login() {
    const [username, Setusername] = useState('')
    const [userpasword, Setuserpasword] = useState('')

    const {setuser} = useContext(userContext)
    const handelsubmit = (e) => {
        e.preventDefault();
        setuser({username, userpasword})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => Setusername(e.target.value)} placeholder='Name' />
            <input type="password" value={userpasword} onChange={(e) => Setuserpasword(e.target.value)} placeholder='pasword' />
            <button onClick={handelsubmit}>Submit</button>
        </div>
    )
}

export default Login