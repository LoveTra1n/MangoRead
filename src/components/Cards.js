import React, {useEffect, useState} from 'react';
import CardsItem from "../UI/CardsItem";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import styled from "styled-components";
import {loadingAction} from "../store/widgetSlice";
import {CircularProgress} from "@mui/material";
import PaginationCards from "../Functions/PaginationCards";

const Container = styled.div`
  width: 820px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 20px;
`;
const Cards = () => {
    const dispatch = useDispatch()

    const {genre_title} = useSelector(state => state.widget)
    const {type} = useSelector(state => state.widget)
    const {before} = useSelector(state => state.widget)
    const {after} = useSelector(state => state.widget)
    const {update} = useSelector(state => state.widget)
    const {loading} = useSelector(state => state.widget)

    const [manga, setManga] = useState([])
    const {check19}=useSelector(state=>state.widget)
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage] = useState(12)


        useEffect(() => {

            if (!check19) {
                dispatch(loadingAction(true))
                const fetchList = async () => {
                    const res = await axios.get(`http://134.122.75.14:8666/api/v1/manga/?type=${type}&genre__title=${genre_title}`)
                    setManga(res.data)
                    dispatch(loadingAction(false))
                }
                fetchList()
            }
        }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = manga.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(manga.length/postsPerPage)


    const sort = (arr) => {
        const s = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].issue_year >= before && arr[i].issue_year <= after) {
                s.push(arr[i])
            }
        }
        return s
    }
    useEffect(() => {
        const fetchList = async () => {
            const res = await axios.get(`http://134.122.75.14:8666/api/v1/manga/?type=${type}&genre__title=${genre_title}`)
            setManga(sort(res.data))
        }
        fetchList()
    }, [update])

    return (
            <Container>
                {loading
                    ?<CircularProgress style={{margin:"auto"}}/>
                    :currentPosts.map((m) => <CardsItem key={m.id} data={m}/>)}
                <div style={{width:"100%"}}>
                    <PaginationCards pages={howManyPages} setCurrentPage={setCurrentPage}/>
                </div>
            </Container>

    );
};

export default Cards;