import React from 'react';
import styled from "styled-components";
import "../App.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCurrentManga} from "../store/mangaSlice";
const Container = styled.div`
  width: 190px;
  height: 220px;
  border-radius: 16px;
  position: relative;
  margin-bottom: 20px;
`;
const BoxShadow = styled.div`
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 220px;
  position: absolute;
  border-radius: 16px;

`;
const CardInfo = styled.div`
  position: absolute;
  z-index: 3;
  color: white;
  bottom:0px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
`;
const P = styled.text`
  font-family: MontserratMedium;
  font-size: 16px;
  height: 40px;
  overflow: hidden;
  text-overflow:ellipsis;
  margin: 11px 0px;
`;
const CardsItem = ({data}) => {
    const dispatch =useDispatch()

    const fetchManga=()=>{
        dispatch(addCurrentManga(data))
    }

    return (
        <Link onClick={fetchManga} to={`/${data.id}`}>
            <Container>
                <div style={{position:"relative"}}>
                    <BoxShadow></BoxShadow>
                    <Img style={{width:"190px"}} src={data.image}/>
                </div>
                <CardInfo>
                    <p style={{fontSize:"14px",margin:"11px  0", fontFamily:"Montserrat"}}>год:{data.issue_year}</p>
                    <P>{data.ru_name}</P>
                </CardInfo>
            </Container>
        </Link>
    );
};

export default CardsItem;