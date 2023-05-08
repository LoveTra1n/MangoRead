import React from 'react';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 33px 0;
`;
export const Info = styled.div`
    padding-left: 26px;
  border-left: #878787 2px solid;
  h1{
    margin: 0 0 13px 0;
    font-size: 35px;
    font-family: Montserrat;
    font-weight: lighter;
  }
  p{
    margin: 0;
    font-size: 24px;
    color: #878787;
  }
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #d9d9d9;
  object-fit: cover;
`;

const Comment = ({data}) => {
    return (
        <Container>
            <div style={{minWidth:"136px"}}>
                <Avatar src={data?.user.image_file}/>
            </div>
            <Info>
                <h1>{data?.user?.username}, {data?.user?.nickname}</h1>
                <p>{data?.text}</p>
            </Info>
        </Container>
    );
};

export default Comment;