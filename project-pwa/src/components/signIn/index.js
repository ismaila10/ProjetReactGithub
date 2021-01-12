import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const SignIn = ({submit}) => {
    const [formState, setFormState] = useState({username:'', password:''});
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory() 
    useEffect(() => {
        console.log(formState)
    })
  
    return(
        <SignInForm onSubmit={(e) =>submit(e, formState, setErrorMessage, history)}>
            <SignSpan> Sign in to GitHub</SignSpan>
            <SignInInput placeholder="Username" onChange={e => setFormState({ ...formState, username: e.target.value})} type="text"></SignInInput>
            <SignInInput placeholder="Password" onChange={e => setFormState({ ...formState, password: e.target.value})} type="password"></SignInInput>
            <SignSpan>{errorMessage}</SignSpan>
            <SignInInput type="submit"></SignInInput>
        </SignInForm>
    );
};

const SignInForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SignInInput = styled.input `
    margin: 9px 0px;
    height: 30px;
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: rgb(232, 240, 254);
`

const SignSpan = styled.span `
    font-size: 25px;
    margin: 8% 0% 2% 0%
`

export default SignIn;