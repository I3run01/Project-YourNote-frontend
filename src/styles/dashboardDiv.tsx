import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const DashboardDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 36px;
    font-family: 'Dosis';

    height: 100vh;

    h1 {
        text-align: center;
        color: ${props => props.isDark ? fontColorDark : fontColorLight};
    }
`