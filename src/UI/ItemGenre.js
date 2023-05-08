import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setGenre} from "../store/widgetSlice";
import styled from "styled-components";

const Input = styled.input`
  width: 35px;
  height: 35px;
`;
const ItemGenre = ({genre}) => {

    const dispatch = useDispatch()
    const {genre_title} = useSelector(state=>state.widget)

    const handleInput =(e)=>{
        if(genre_title===e.target?.value){
            dispatch(setGenre(''))
        }else {
            dispatch(setGenre(e.target?.value))
        }
    }

    return (
        <div style={{marginTop:"10px",display:"flex",alignItems:"center",boxSizing:"border-box",height:"35px"}}>
            <Input
                checked={genre_title===genre?.title}
                onClick={handleInput}
                value={`${genre?.title}`}
                type={'checkbox'}
            />
            <p style={{fontSize:"24px", margin:"0 0 0 10px"}}>
                {genre?.title}
            </p>
        </div>
    );
};

export default ItemGenre;