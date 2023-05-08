import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
const Container = styled.div`
  height: 80px;
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
  
`;
const Img=styled.img`
  box-sizing: border-box;
  max-width: 60px;
  max-height: 90px;
  object-fit: cover;
`;
const IngoBlock=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p{
    font-size: 12px;
    margin: 0 0 0 6px;
    text-decoration: none;
    outlined: none;
    color: black;
  }
`;

const SearchPost = ({data}) => {
    return (

            <Container>
                <Link to={`/${data.id}`}>
                    <Img style={{width:"60px"}} src={data.image}/>
                </Link>
                <IngoBlock>
                    <p style={{fontWeight:"bold"}}>{data?.ru_name}</p>
                    <p style={{marginTop:"6px"}}>{data?.issue_year}</p>
                    <p>{data?.type}</p>
                </IngoBlock>
            </Container>

    );
};

export default SearchPost;