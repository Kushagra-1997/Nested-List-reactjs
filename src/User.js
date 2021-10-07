import React,{useEffect} from 'react'

const User = ({count}) => {
    useEffect(() => {
        console.log('Calling useEffect using props');
    },[count])
    return (
        <div>
            <h1>Calling useEffect using props</h1>
        </div>
    )
}

export default User
