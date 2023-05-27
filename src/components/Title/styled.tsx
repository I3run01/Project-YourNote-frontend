import styled from "styled-components";

type props = {
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const TitleDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    margin-top: 20px;
    margin-bottom: 20px;

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

        :hover {
            border-color: ${ props => props.isDark ? fontColorDark : fontColorLight};
        }
    }
    

`