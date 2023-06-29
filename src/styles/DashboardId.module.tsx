import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

const backgroundDark = "#0f0f0f"
const backgroundLight = "#cfcfcf"


export const DashboardIdDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    
    min-height: 100vh;
    overflow-y: auto;

    width: 100%;
    
    text-align: center;

    background-color: ${props => props.isDark ? backgroundDark : backgroundLight};

    h1 {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;

        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
    }



`