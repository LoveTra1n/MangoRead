import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";


const RefreshToken = () => {
    const {currentUser}=useSelector(state => state.user)
    const {password}=useSelector(state => state.user)

    useEffect(()=>{
        const sign=async ()=>{
            const res = await axios.post('http://134.122.75.14:8666/api/auth/signin/',{
                username:currentUser.username,
                password:password.password
            })
            await console.log(res)
        }
        sign()
    })
    return (
        <div>

        </div>
    );
};

export default RefreshToken;