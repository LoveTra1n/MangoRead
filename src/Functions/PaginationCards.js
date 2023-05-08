import React, {useEffect, useState} from 'react';
import Prevs from "../images/Vector 2 (2).svg";
import Nexts from "../images/Vector 3.svg";
import styled from "styled-components";
import "./Style.css"
const Prev = styled.img`
  cursor: pointer;
`;
const Next = styled.img`
  cursor: pointer;
`;

const A = styled.a`
  transition: 190ms;
  color: #A5A5A5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  width: 16px;
  font-size: 24px;
`;
const PaginationCards = ({pages,setCurrentPage}) => {
    const [currentButton,setCurrentButton]=useState(1)
    const [arrayOfCurrButtons,setArrayOfCurrButtons]=useState([])


    const numberOfPages = []
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    useEffect(()=>{
        let tempNumberOfPages = [...arrayOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages
        }
        else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }
        else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
        else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }
        else if (currentButton === dotsInitial) {

            setCurrentButton(arrayOfCurrButtons[arrayOfCurrButtons.length-3] + 1)
        }
        else if (currentButton === dotsRight) {
            setCurrentButton(arrayOfCurrButtons[3] + 2)
        }
        else if (currentButton === dotsLeft) {
            setCurrentButton(arrayOfCurrButtons[3] - 2)
        }
        setArrayOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    },[currentButton,pages])
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Prev src={Prevs} onClick={()=>setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}/>
            <div style={{display:"flex",margin: "0 29px"}}>
                {arrayOfCurrButtons.map((page,index)=>
                    <A
                        key={index}
                        style={{cursor:"pointer"}}
                        onClick={()=>setCurrentButton(page)}
                        className={currentButton === page ? 'active':''}>
                        {page}
                    </A>
                )}
            </div>
            <Next src={Nexts} onClick={()=>setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}/>
        </div>
    );
};

export default PaginationCards;