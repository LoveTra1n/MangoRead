import React from 'react';
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import RefreshToken from "../Functions/RefreshToken";

const Home = () => {
    return (
        <div style={{display:"flex",paddingTop:"32px"}}>
            <Filter/>
            <Cards/>
            <RefreshToken/>
        </div>
    );
};

export default Home;