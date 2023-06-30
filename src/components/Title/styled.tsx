import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const TitleDiv = styled.div<props>`
    margin-top: 5px;
    margin-bottom: 5px;

    width: 100%;

    display: flex;
    justify-content: center;

    input {
        font-size: 24px;
        font-weight: bolder;
        font-family: 'Dosis';
        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
        padding: 5px;
        text-align: center;
        background-color: #0000;
        border: 1px solid #0000;

        transition: all 0.5s ease-in-out;

        width: 200px;

        :hover {
            border-color: ${ props => props.isDark ? fontColorDark : fontColorLight};
        }
    }
    

`