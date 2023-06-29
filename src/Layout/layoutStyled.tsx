import styled from "styled-components";

type props = {
    isDark: boolean
}

export const LayoutStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: flex-start;

    overflow-y: hidden;
`

export const MainStyled = styled.main<props>`
    width: 100%;
    background-color: ${props => props.isDark ? '#0f0f0f' : '#cfcfcf'};
`