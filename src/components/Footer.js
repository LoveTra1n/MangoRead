import React from 'react';
import styled from "styled-components";
import Logos from "../images/Logo.svg"
import Face from "../images/Facebook.svg"
import Inst from "../images/Insta.svg"
import Twitter from "../images/Twitter.svg"
import {Link} from "react-router-dom";

const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  background: white;
  height: 400px;
  display: flex;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  bottom: 0;
`;
const Wrapper = styled.div`
  width: 1240px;
  height: 250px;
  display: flex;
  justify-content: space-between;
`;
const Iframe=styled.iframe`
  border-radius: 20px;
  box-sizing: border-box;
  width: 400px;
  height: 250px;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15));
  border-radius: 20px;
`;
const Logo=styled.div`
  display: flex;
  align-items: center;
  img{
    width: 127px;
    height: 98px;
  }
  p{
    font-family: Montserrat;
    h1{
      font-size: 24px;
      margin: 0;
    }
    p{
      margin: 9px 0 0 0;
      font-size: 20px;
    }
  }
`;
const Links=styled.div`
  width: 120px;
  height: 136px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  img{
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  p{
    font-size: 16px;
    font-weight: bold;
  }
`;
const Item=styled.div`
  display: flex;
  align-items: center;
`;
const Privacy =styled.div`
  margin-top: 30px;
  width: 100%;
  border-top: #BBBBBB 1px solid;
  min-height: 95px;
  background: white;
  display: flex;
  justify-content: center;
  
`;
const WP =styled.div`
    height: 90px;
  display: flex;
  p{
    height: 21px;
    margin-top: 40px;
    margin-right: 32px;
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 0px;
  }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Link to={'/'}>
                        <img src={Logos}/>
                    </Link>
                    <p>
                        <h1>MangoRead</h1>
                        <p>Читай мангу с нами</p>
                    </p>
                </Logo>
                <Links>
                    <Item>
                        <img src={Face}/>
                        <p>facebook</p>
                    </Item>
                    <Item>
                        <img src={Inst}/>
                        <p>instagram</p>
                    </Item>
                    <Item>
                        <img src={Twitter}/>
                        <p>twitter</p>

                    </Item>

                </Links>

                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6307.390551954081!2d-122.42031327136937!3d37.773742713714284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809fabbdbb3b%3A0x9f78fd6bc9972489!2sZuni%20Caf%C3%A9!5e0!3m2!1sru!2skg!4v1683534860473!5m2!1sru!2skg"
                    referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </Wrapper>
            <Privacy>
                <WP>
                    <p>©2022, All right reserved.</p>
                    <p style={{borderBottom:"1px black solid"}}>Privacy Policy</p>
                    <p style={{borderBottom:"1px black solid"}}>Terms of Service</p>
                    <p style={{borderBottom:"1px black solid"}}>Cookies Settings</p>
                </WP>
            </Privacy>
        </Container>
    );
};

export default Footer;
