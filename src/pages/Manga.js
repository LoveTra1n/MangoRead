import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Back from "../images/BackUp.svg"
import styled from "styled-components";
import axios from "axios";
import Comments from "../components/Comments"

const Container = styled.div``;

const BackUp =styled.div`
  margin-top: 33px;
  margin-bottom: 33px;
  display: flex;
  p{
    font-size: 24px;
    color: #878787;
    margin: 0 0 0 14px;
  }
`;
const MainBlock = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 870px;
  h1{
    font-family: MontserratMedium;
    font-size: 40px;
    font-weight: lighter;
    margin: 0;
  }
  p{
    margin: 21px 0 0 0;
    font-size: 24px;
    
  }
`;
const TitleBlock = styled.div`
  display: flex;
  padding-bottom: 32px;
  border-bottom: #CECECE 2px solid;
  img{
    width: 328px;
    height: 328px;
    object-fit: cover;
    border-radius: 16px;
    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.2));
    margin-right: 41px;
  }
`;
const Desc =styled.div`
    padding-bottom: 33px;
    border-bottom: #CECECE 2px solid;
    p{
      font-family: MontserratMedium;
      
      margin: 35px 0 0 0;
      font-size: 35px;
      color: black;
    }
`;



const Manga = () => {
    const {currentManga}=useSelector(state=>state.manga)
    const [genres,setGenres] = useState([])

    const sort=(arr)=>{
        const genres = []
        for (let i = 0; i <arr.length; i++) {
            if (currentManga.genre.find(e=>e===arr[i].id)){
                genres.push(arr[i])
            }
        }
        setGenres(genres)

    }
    useEffect(()=>{
        const fetchGenre = async ()=>{
            const res = await axios.get('http://134.122.75.14:8666/api/v1/genre/')
            const arr = res.data
            sort(arr)
        }
        fetchGenre()
    },[currentManga])


    return (
        <Container>
            <BackUp>
                <img src={Back}/>
                <p>Назад</p>
            </BackUp>
            <MainBlock>
                <TitleBlock>
                    <img src={currentManga?.image}/>
                    <Info>
                        <h1>{currentManga?.ru_name}</h1>
                        <p style={{marginTop:"40px", fontSize:"30px"}}>Информация:</p>
                        <p style={{display:"flex"}}>Тип: <div style={{marginLeft:"10px",color:"#878787"}}>{currentManga?.type}</div></p>
                        <p style={{display:"flex"}}>Год: <div style={{marginLeft:"10px",color:"#878787"}}>{currentManga?.issue_year}</div></p>
                        <p style={{display:"flex"}}>Жанры:<div style={{marginLeft:"10px",color:"#878787"}}>{genres.map(g=><text>{g.title},</text>)}</div></p>
                    </Info>
                </TitleBlock>
                <Desc>
                    <p style={{marginBottom:"10px"}}>Синопсис</p>
                    <span style={{fontSize:"24px",color:"#616161"}}>
                        {currentManga.description}
                    </span>
                </Desc>
                <Comments/>
            </MainBlock>
            
        </Container>
    );
};

export default Manga;