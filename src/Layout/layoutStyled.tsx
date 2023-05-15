import styled from "styled-components";

type props = {
    isDark: boolean
}

export const LayoutStyled = styled.div<props>`
    min-height: 100vh;

    background-color: ${props => props.isDark ? '#0f0f0f' : '#e4e2e0'};
`