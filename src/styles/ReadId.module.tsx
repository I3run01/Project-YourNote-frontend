import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'
const backgroundDark = '#0f0f0f'
const backgroundLight =  '#cfcfcf'


export const ReadIdDiv = styled.div<props>`
    
    display: flex;
    flex-direction: column;

    margin-left: 0;
    margin-right: 0;

    min-height: 100vh;

    background-color: ${props => props.isDark ? backgroundDark : backgroundLight};
    color: ${props => props.isDark ? fontColorDark : fontColorLight};


`