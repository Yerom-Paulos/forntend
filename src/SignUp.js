import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 justify-content: center;
 height: 100vh;
`;

const Input = styled.input`
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 width: 25%;
`;

const Button = styled.button`
padding: 10px 20px;
 background-color: #fa9e0c;
 color: white;
 border: none;
 border-radius: 4px;
 cursor: pointer;
 font-size: 16px;
 text-align: center;
 width: 27%;
`;

const SocialLogin = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 20px;
`;

const SocialButton = styled.button`
 padding: 10px;
 margin: 5px 0;
 background-color: #f8f9fa;
 color: #007bff;
 border: 1px solid #ccc;
 border-radius: 4px;
 cursor: pointer;
 outline: none;
`;

const SignUp = () => {
 return (
    <Form>
      <h3>Sign Up</h3>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Sign In</Button>
      <SocialLogin>
        <p>-----or continue with----</p>
        <SocialButton>Google Sign in</SocialButton>
      </SocialLogin>
    </Form>
 );
};

export default SignUp