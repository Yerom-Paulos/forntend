import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const PageContainer = styled.div`
  background-color: #f9f8f4;
`;

const NavBar = styled.nav`
  background-color: #ffff;
  color: #f9f8f4;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 65px;
  margin-right: 65px;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  margin: 0 10px;
`;

const Title = styled.h1`
  text-align: left;
  padding: 3%;
  padding-left: 5%;
  font-size: 35px;
`;

const Par = styled.p`
  color: #903445; 
  text-align: left;
  padding-left: 5%;
`;
const HomeButton = styled.button`
 background-color: #4CAF50;
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
 border-radius: 4px;
 transition: background-color 0.3s;

 &:hover {
    background-color: #45a049;
 }
`;

const HomeText = styled.p`
 font-size: 16px;
 color: #333;
 line-height: 1.5;
`;

const TutorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-left: 50px;
`;


const StyledImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
function HomePage() {
 return (

    <PageContainer>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Tutor">Find Tutor</StyledLink>
        <StyledLink to="/signIn">Sign In</StyledLink>
        <StyledLink to="/form">Become a tutor</StyledLink>
      </NavBar>

      <TutorContainer>
        <TextContainer>
          <Title>
            <h1>Keep Learning On Track</h1>
          </Title>
          <Par>
            <p>Tailored Learning Experience, Right at Your Desktop - Connect with the ideal Tutor to Achieve Academic Excellence</p>
          </Par>
        </TextContainer>
        <ImageContainer>
          <StyledImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7edP-IO_lpqagfaV_ohuPNsUdVwjjWYCXH6F865lFoA4qQap"
            alt="Image"
          />
        </ImageContainer>
      </TutorContainer>


      <HomeText>When schools and districts have reliable access to teacher 기</HomeText>
      <HomeButton>Subscribe Now</HomeButton>
    </PageContainer>
 );
}

export default HomePage;