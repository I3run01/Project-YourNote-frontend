import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const DashboardFilesFilesDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    
    height: 100vh;
    overflow-y: auto;
    
    text-align: center;
    
    * {
        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
        margin-bottom: 0;
        text-align: justify;
        font-size: 18px;
        font-family: 'Merriweather', serif;
        font-weight: 400;
        line-height: 1.8em;
    }

    h1 {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    }

`