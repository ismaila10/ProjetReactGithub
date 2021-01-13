import React from 'react';
import styled from 'styled-components';

const ButtonSubmit = (props) => {
    return <SubmitButton width={props.width} height={props.height} type="submit">{props.name}</SubmitButton>
}

const SubmitButton = styled.button `
    font-family: inherit;
    margin: 9px 0px;
    height: ${props => props.height ? props.height : '30px'};
    width: ${props => props.width ? props.width : '100%'};
    border: none;
    border-radius: 10px;
    background-color: #2ea44f;
    color: #fff;
    font-weight: bold;
`

export default ButtonSubmit;