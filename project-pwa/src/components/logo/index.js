import React from 'react';
import styled from 'styled-components';

const Logo = ( props ) => {
    return <ImgComponent width={props.width} alt={props.alt} height={props.height}  src={props.url} ></ImgComponent>
}

const ImgComponent = styled.img `
    width: ${props => props.width ? props.width : '70px'};
    height: ${props => props.height ? props.height : ''};
`

export default Logo;