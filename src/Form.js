import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 100vh;
  margin-right: 15%;
  margin-left: 15%;
  margin-bottom: 5%;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const NavBar = styled.nav`
  background-color: #ffff;
  color: #f9f8f4;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0%;
  margin-left: 65px;
  margin-right: 65px;
  border-radius: 20px;
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #fa9e0c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  width: 113%;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const PageContainer = styled.div`
  background-color: #f9f8f4;
`;

const Form = () => {
  return (
    <div>
      <PageContainer>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/form">Become a tutor</Link>
        <Link to="/signIn">Sign In</Link>
      </NavBar>

      <FormContainer>
        <StyledForm>
          <h3>Become a tutor</h3>
          <StyledInput type="text" name="fullName" placeholder="Full Name" />
          <StyledInput type="text" name="profession" placeholder="Profession" />
          <StyledInput
            type="text"
            name="higherEducation"
            placeholder="Higher Education"
          />
          <StyledInput type="text" name="location" placeholder="Location" />
          <StyledInput type="text" name="availability" placeholder="Availability" />
          <StyledInput
            type="text"
            name="teachingMethod"
            placeholder="Teaching Method"
          />
          <StyledInput type="text" name="courses" placeholder="Courses" />
          <StyledInput
            type="text"
            name="ratePerHour"
            placeholder="Rate per hour (ETB)"
          />
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>

        <StyledImage
          src="https://communitynoiselab.org/wp-content/uploads/2022/08/three-map.png"
          alt="Image"
        />
      </FormContainer>
      </PageContainer>
    </div>
  );
};

export default Form;