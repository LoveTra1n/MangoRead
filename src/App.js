import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import styled from "styled-components";
import Auth from "./components/Auth";
import React from "react";
import {useSelector} from "react-redux";
import Manga from "./pages/Manga";
import CreateComment from "./components/CreateComment";


 const Container = styled.div`
   margin: auto;
   max-width: 1240px;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
 `;
const BoxShadows = styled.div`
  width: 100%;
  box-shadow: 0em 0.1em 2em rgba(98, 98, 98, 0.3);
`;


function App() {
    const {authPopUp}=useSelector(state=>state.widget)
    const {commentModal}=useSelector(state=>state.widget)
  return (
    <div>
        <BrowserRouter>
            <BoxShadows>
                {commentModal&&<CreateComment/>}
                {authPopUp&&<Auth/>}
                <Header/>
            </BoxShadows>
            <Container>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/:id'} element={<Manga/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
