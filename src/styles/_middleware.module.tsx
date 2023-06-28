import styled from "styled-components";

const darkBackgroundColor = "#0f0f0f"
const lightBackGroundColor = "#cfcfcf"

type props = {
    isDark: boolean
}

export  const MiddlewareStyled = styled.div<props>`

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${props => props.isDark ? darkBackgroundColor : lightBackGroundColor};

`