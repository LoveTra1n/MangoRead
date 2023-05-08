import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import Close from "../images/Group 14.svg"
import {useDispatch, useSelector} from "react-redux";
import {addCurrentUser, addImage} from "../store/userSlice";
import {loginLine, showAuth,regLine} from "../store/widgetSlice";
import "../UI/css/Style.css"
const Container = styled.div`
  overflow-x: hidden;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .5);
`;
const Register = styled.div`
  position: absolute;
  width: 603px;
  height: 761px;
  background: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  padding: 31px 51px;
  z-index: 3;
  transition: 200ms;
  opacity: 1;
`;
const Reg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const CloseIcon =styled.div`
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  margin-bottom:13px;
  img{
    width: 23px;
    width: 21px;
  }
`;
const Links = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  border-bottom: 2px solid #878787;
  margin-bottom: 40px;
  align-items: flex-end;
`;
const P =styled.text`
  font-family: Montserrat;
  font-size: 24px;
  margin-right: 30px;
`;

const Avatar = styled.div`
  width: 181px;
  height: 181px;
  border-radius: 100px;
  background: #c5c5c5;
  margin-bottom: 21px;
`;
const Img = styled.img`
  width: 181px;
  height: 181px;
  border-radius: 100px;
  object-fit: cover;
  object-position: center;
`;
const AddImg = styled.text`
  font-size: 16px;
  font-family: Montserrat;
  margin-bottom: 40px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 9px;
  box-sizing: border-box;
  outline: none;
  font-size: 24px;
  font-family: Montserrat;
  border-radius: 8px;
  border: 1px #000000 solid;
  margin-bottom: 30px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  outline: none;
  font-size: 24px;
  font-family: Montserrat;
  border-radius: 8px;
  border: none;
  background: #AD02E0;
  color: white;
  :active {
    background: #9501c2;

  }
`;
const Login = styled.div`
  
`;
const CheckContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  p{
    font-size: 24px;
    margin-left: 10px;
    color:  #878787;
  }
`;
const Checkbox = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: #AD02E0 2px solid;
  display: block;
  border-radius: 5px;
  :checked{
    background: #AD02E0;
  }
`;
const BoxShadow = styled.div`
  width: 100vh;
  height: 100vh;
  position: absolute;
`;
const Auth = () => {
    const dispatch = useDispatch()

    const [nick,setNick]=useState('')
    const [username,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [file,setFile]=useState([])
    const [image,setImage]=useState(null)
    const {reg}=useSelector(state=>state.widget)
    const {login}=useSelector(state=>state.widget)

    const uploadData = async ()=>{
        const formData = new FormData()
        formData.append('image_file',file)
        formData.append('username',username)
        formData.append('nickname',nick)
        formData.append('password',password)
        const res = await axios.post('http://134.122.75.14:8666/api/auth/signup/',formData)
        if (res.status<=200||res.status<400){
            const res = await axios.post('http://134.122.75.14:8666/api/auth/signin/',formData)
            res.status<=200&&dispatch(addCurrentUser({
                username:username,
                nickname:nick,
                password:password,
                jwt:res.data.refresh
            }))
            await dispatch(showAuth(false))
        }
        await dispatch(showAuth(false))
    }
    const loginData = async ()=>{
        const formData = new FormData()
        formData.append('username',username)
        formData.append('password',password)
        const res = await axios.post('http://134.122.75.14:8666/api/auth/signin/',formData)
        res.status<=200&&dispatch(addCurrentUser({
            username:username,
            nickname:nick,
            password:password,
            jwt:res.data.refresh
        }))
        await dispatch(showAuth(false))
    }

    const handleImage=(e)=>{
        setFile(e.target.files[0])
        const url = URL.createObjectURL(e.target.files[0])
        setImage(url)
        dispatch(addImage(url))
    }

    const handleAuthClose = ()=>{
        dispatch(showAuth(false))
    }
    const loginFunc=()=>{
        dispatch(regLine(false))
        dispatch(loginLine(true))
    }
    const regFunc=()=>{
        dispatch(loginLine(false))
        dispatch(regLine(true))
    }


    return (
        <>
                <Container>
                    <BoxShadow onClick={handleAuthClose}/>
                    <Register style={login?{height:"479px"}:{height: "761px"}}>
                        <CloseIcon> <img onClick={handleAuthClose} style={{cursor: "pointer"}} src={Close}/></CloseIcon>
                        <Links>
                            <p style={{cursor:"pointer",height:"35px",margin:"0",display:"flex",alignItems:"end",fontSize:"24px",marginRight:"30px",paddingBottom:"6px"}} className={login&&"Line"}  onClick={loginFunc}>Вход</p>
                            <p style={{cursor:"pointer",height:"35px",margin:"0",display:"flex",alignItems:"end",fontSize:"24px",marginRight:"30px",paddingBottom:"6px"}}className={reg&&"Line"} onClick={regFunc}>Регистрация</p>
                        </Links>
                        {reg?
                            <Reg>
                                <Avatar>
                                    <Img src={image}/>
                                </Avatar>
                                <input style={{display: "none"}} id={"choose"} accept={'image/*'} onChange={handleImage} type={'file'}/>
                                <label style={{marginBottom: "40px"}} htmlFor={"choose"}>
                                    <AddImg>Добавить фото</AddImg>
                                </label>


                                <Input onChange={(e) => setNick(e.target.value)} placeholder={'nick'} type={'text'}/>
                                <Input onChange={(e) => setUser(e.target.value)} placeholder={'username'} type={'text'}/>
                                <Input onChange={(e) => setPassword(e.target.value)} placeholder={'password'} type={'text'}/>
                                <Button onClick={uploadData}>Регистрация</Button>
                            </Reg>
                            :
                            <Login>
                                <Input onChange={(e) => setUser(e.target.value)} placeholder={'username'} type={'text'}/>
                                <Input onChange={(e) => setPassword(e.target.value)} placeholder={'password'} type={'text'}/>
                                <CheckContainer>
                                    <Checkbox type={'checkbox'}/>
                                    <p>Запомнить меня</p>
                                </CheckContainer>
                                <Button onClick={loginData}>Вход</Button>
                            </Login>
                        }
                    </Register>
                </Container>
        </>
    );
};

export default Auth;