import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Logo from '../logo';

const SignIn = ({submit}) => {
    const [formState, setFormState] = useState({username:'', password:''});
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const url = "../../assets/logo.png"
  
    return(
        <FormContainer>
            <SignInForm onSubmit={(e) =>submit(e, formState, setErrorMessage, history)}>
                <Logo url={url}></Logo>
                <SignSpan> Sign in to GitHub</SignSpan>
                <SignInBody>
                    <SignInInput placeholder="Username" onChange={e => setFormState({ ...formState, username: e.target.value})} type="text"></SignInInput>
                    <SignInInput placeholder="Password" onChange={e => setFormState({ ...formState, password: e.target.value})} type="password"></SignInInput>
                    <span>{errorMessage}</span>
                    <SignInInputButton type="submit"></SignInInputButton>
                </SignInBody>
                
            </SignInForm>
        </FormContainer>
        
    );
};

const FormContainer = styled.div `
    padding: 20px;
    font-size: 14px;
    width: 340px;
    margin: 0 auto;
    background-color: #f6f8fa;
    border: 1px solid #eaecef;
    box-sizing: border-box;
    display: block;
    color: #24292e;
    line-height:1.5px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`

const SignInForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SignInBody = styled.div `
    
`

const SignInInput = styled.input `
    margin-top: 5px;
    margin-bottom: 15px;
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: rgb(232, 240, 254);
`

const SignInInputButton = styled.input `
    font-family: inherit;
    margin: 9px 0px;
    height: 30px;
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: #2ea44f;
    color: #fff
`

const SignSpan = styled.span `
    font-size: 25px;
    margin: 10% 0% 10% 0%
`

export default SignIn;