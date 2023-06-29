import styled from "styled-components";

type props = {
    isDark: boolean
}

export const LayoutStyled = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: flex-start;
`

export const MainStyled = styled.main<props>`
    width: 100%;
    min-height: 100vh;

    background-color: ${props => props.isDark ? '#0f0f0f' : '#cfcfcf'};
`