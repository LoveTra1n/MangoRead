import React, {useEffect} from 'react';
import Filter from "../components/Filter";
import Cards from "../components/Cards";

const Home = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    },[])
    return (
        <div style={{display:"flex",paddingTop:"32px"}}>
            <Filter/>
            <Cards/>
        </div>
    );
};

export default Home;