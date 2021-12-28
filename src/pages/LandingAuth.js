import React from 'react'
import { useNavigate } from 'react-router'

const LandingAuth = () => {
    const navigate = useNavigate();
    return (
        <div>
            Login Options:

            <br />

            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>...</li>
                <li>Option n</li>
            </ul>

            <br />

            <button onClick={() => {
                navigate("/registration")
            }}>
                Create an Account
            </button>
        </div>
    )
}

export default LandingAuth
