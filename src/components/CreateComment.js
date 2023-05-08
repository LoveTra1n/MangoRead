import React, {useState} from 'react';
import styled from "styled-components";
import "../Functions/Style.css"
import {useDispatch, useSelector} from "react-redux";
import {openCreateComm} from "../store/widgetSlice";
import {Avatar} from "../UI/Comment";
import {Alert} from "@mui/material";
import axios from "axios";
const Container =styled.div`
  overflow-y: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  display: flex;
  background: rgba(0, 0, 0, .5);
`;
const PopUp = styled.div`
  width: 780px;
  height: 302px;
  background: #FFFF;
  border-radius: 32px;
  margin: auto;
  z-index: 2;
  padding: 37px 0 0 60px;
`;
const BoxShadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;
const Title = styled.text`
  font-size: 35px;
  margin-left: 52px;
`;

const Input = styled.input`
  padding-left: 10px;
  font-family: Montserrat;
  width: 500px;
  height: 52px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
  border: 1px black solid;
  border-radius: 8px 0 0 8px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 160px;
  height: 52px;
  border: none;
  background: #AD02E0;
  color: white;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: lighter;
  border-radius: 0 8px 8px 0;

  :active {
    background: #9702c4;
  }
`;
const CreateComment = () => {
    const dispatch = useDispatch()

    const {currentUser}=useSelector(state=>state.user)
    const {currentManga}=useSelector(state=>state.manga)
    const [text,setText]=useState('')
    const [error,setError]=useState(false)
    const {password}=useSelector(state => state.user)

    const handleCommClose = ()=>{
        dispatch(openCreateComm(false))
    }
    const handleText = (e)=>{
        setText(e.target.value)
    }
    const handeSend = async ()=>{
        const value=text.split('')
        try {
            if (value.length>=5){
                await axios.post(`http://134.122.75.14:8666/swagger/api/v1/manga/${currentManga.id}/add-comment/`,{
                    text:text
                })
                await dispatch(openCreateComm(false))
                setError(false)
            }else {
                setError(true)
            }
        }catch (err){
            const sign=async ()=>{
                const res = await axios.post('http://134.122.75.14:8666/api/auth/signin/',{
                    username:currentUser.username,
                    password:password.password
                })
                await axios.post('http://134.122.75.14:8666/api/token/refresh/',{
                    refresh:res.data.refresh
                })
            }
            sign()
        }
    }
    return (
        <Container className={"popup"}>
            <BoxShadow onClick={handleCommClose}/>
            <PopUp>
                <div style={{display:"flex",alignItems:"start"}}>
                    <Avatar src={currentUser.image}/>
                    <Title>{currentUser?.username}</Title>
                </div>
                <div style={{marginTop:"53px"}}>
                    {error&&<Alert style={{marginTop:"-40px"}} severity="error">Минимальное количесство пять букв!</Alert>}
                    <Input onChange={handleText} type={'text'}/>
                    <Button onClick={handeSend}>добавить</Button>
                </div>
            </PopUp>
        </Container>
    );
};

export default CreateComment;