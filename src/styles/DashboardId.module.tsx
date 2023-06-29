import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const DashboardIdDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    
    text-align: center;

    h1 {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;

        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
    }

`