import styled from "styled-components";

let darkBackGroundColor = "#0f0f0f"
let lightBackGroundColor = "#cfcfcf"

type props = {
    isDark: boolean
}

export const MiddlewarePageDiv = styled.div<props>`
    
    position: absolute;
    
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: ${props => props.isDark ? darkBackGroundColor : lightBackGroundColor};

`