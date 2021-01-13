import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ( {errorMessage }) => {
    return <ErrorComponent>{errorMessage}</ErrorComponent>
}

const ErrorComponent = styled.span `
    color: red;
`

export default ErrorMessage;