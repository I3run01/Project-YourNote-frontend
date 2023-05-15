import styled from "styled-components";

type props = {
    isDark: boolean
}

export const LayoutStyled = styled.div<props>`
    min-height: 100vh;

    background-color: ${props => props.isDark ? 'black' : '#e4e2e0'};

`