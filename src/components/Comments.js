import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import styled from "styled-components";
import PaginationCom from "../Functions/PaginationCom";
import Comment from "../UI/Comment"
import {openCreateComm} from "../store/widgetSlice";
const Comm = styled.div`
  margin-top: 33px;
  padding-bottom: 37px;
`;
const Head =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1{
    margin: 0;
    font-size: 35px;
  }
`;
const AddComment = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #AD02E0;
  cursor:pointer;
`;
const Adding = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Comments = () => {
    const [comm,setComm]=useState([])
    const {currentManga}=useSelector(state=>state.manga)
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage] = useState(4)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchComments = async ()=>{
            const res = await axios.get(`http://134.122.75.14:8666/api/v1/manga/${currentManga.id}/comments/`)
            setComm(res.data)
        }
        fetchComments()
    },[currentManga])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = comm.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(comm.length/postsPerPage)

    const createCommentModal =()=>{
        dispatch(openCreateComm(true))
    }

    return (
        <div>
            <Comm>
                <Head>
                    <h1>Топ комментарий</h1>
                    <AddComment onClick={createCommentModal}>добавить комментарий</AddComment>
                </Head>
                {currentPosts.map((k)=><Comment data={k}/>)}
                <PaginationCom pages={howManyPages} setCurrentPage={setCurrentPage}/>
            </Comm>
        </div>
    );
};

export default Comments;