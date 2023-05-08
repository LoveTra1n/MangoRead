import React, {useEffect} from 'react';
import Logo from '../images/Logo.svg'
import styled from "styled-components";
import SearchIcon from "../images/search.svg"
import {useDispatch, useSelector} from "react-redux";
import {loginLine, regLine, showAuth} from "../store/widgetSlice";
import More from "../images/arrow_drop_down.svg"
import axios from "axios";
import {addImage, logout} from "../store/userSlice";
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
const Container = styled.div`
    font-family: Montserrat;
   margin: auto;
   width: 1240px;
   height: 110px;
   display: flex;
   align-items: center; 
  justify-content: space-between;
 `;
const LogoInfo = styled.div`
    display: flex;
    width: 325px;
`;
const Search = styled.div`
  width: 342px;
`;
const Input = styled.input`
  height: 56px;
  border-radius: 8px;
  border: #878787 2px solid;
  padding-left: 56px;
  font-size: 20px;
  outline-color: #AD02E0;
  caret-color: #AD02E0;
  transition: 300ms;
  
`;
const Img = styled.img`
  position: absolute;
  margin: 19px;
  cursor: pointer;
  
`;
const AuthFunc = styled.div`
  
`
;
const ButtonSignin = styled.button`
  cursor: pointer;
  border: #AD02E0 2px solid;
  border-radius: 8px;
  width: 142px;
  height: 50px;
  margin-right: 15px;
  font-size: 16px;
  transition: 300ms;
  :hover{
    color: white;
    background: #AD02E0;
    transition: 300ms;
    box-shadow: 0em 0em 0.5em #AD02E0;
  };
  :active{
    background: #740994;
    border: #740994 2px solid;
    box-shadow: none;
  }
`
;const ButtonSignup = styled.button`
  font-family: Montserrat;
  cursor: pointer;
  background: #AD02E0;
  border: #AD02E0 2px solid;
  border-radius: 8px;
  width: 206px;
  height: 50px;
  font-size: 16px;
  transition: 300ms;
  color:white;
  :hover{
    color: white;
    background: #AD02E0;
    transition: 300ms;
    box-shadow: 0em 0em 0.5em #AD02E0;
  };
  :active{
    background: #740994;
    border: #740994 2px solid;
    box-shadow: none;
  };
`;
const UserInfo = styled.div`
    display: flex;
  p{
    margin-right: 25px;
    font-size: 24px;
  }
`;
const Avatar = styled.img`
  background: #cccaca;
  height: 80px;
  width: 80px;
  border-radius: 100px;
  position: center;
  object-fit: cover;
`;
const UserMore = styled.div`
  display: flex;
  cursor: pointer;
`;
const MoreDrop = styled.div`
  display: flex;
  position: absolute;
  margin-top: 90px;
  width: 220px;
  height: 90px;
  background: white;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  align-items: center;
`;
const Hover=styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition:300ms;
  :hover{
    background: #AD02E0;
    transition: 300ms;
    color: #F3F3F3;
  }
`;


const Header = () => {
    const dispatch = useDispatch()
    const {currentUser}=useSelector(state=>state.user)
    const {checker}=useSelector(state=>state.user)

    const handleAuth=()=>{
        dispatch(showAuth(true))
    }
    const logoutFunc=()=>{
        dispatch(logout())

    }

    useEffect(()=>{

        const fetchUser=async ()=>{
            const res = axios.get('http://134.122.75.14:8666/api/auth/profile/')
            const arr = (await res).data
            for (let i = 0; i < arr.length; i++) {
                const user=arr[i]
                if (user.username===currentUser?.username){
                    dispatch(addImage(user.image_file))
                }
            }
        }
        fetchUser()

    },[currentUser])

    return (
        <Container>
            <LogoInfo>
                <img src={Logo}/>
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center",marginLeft:"5px"}}>
                    <h1 style={{fontSize:"20px", height:"24px",margin:0}}>MangoRead</h1>
                    <p style={{fontSize:"16px", height:"20px",marginTop:"4px",marginBottom:"0px"}}>Читай мангу с нами</p>
                </div>
            </LogoInfo>

            <Search>
                <Img src={SearchIcon}/>
                <Input placeholder={'search'}/>
            </Search>

            {checker
                ? <UserInfo>
                    <p>{currentUser?.username}</p>
                    <UserMore>
                        <Avatar src={currentUser?.image}/>
                        <img style={{marginLeft:"16px"}} src={More}/>
                        <MoreDrop>
                            <Hover onClick={logoutFunc}>
                                <SensorDoorIcon/>
                                Выйти
                            </Hover>
                        </MoreDrop>
                    </UserMore>
                </UserInfo>

                :<AuthFunc>
                <ButtonSignin onClick={handleAuth}>войти</ButtonSignin>
                <ButtonSignup onClick={handleAuth}>регистрация</ButtonSignup>
            </AuthFunc>}

        </Container>
    );
};

export default Header;