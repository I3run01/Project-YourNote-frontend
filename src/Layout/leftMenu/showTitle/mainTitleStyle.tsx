import styled from "styled-components";

type props = {
    isDark: boolean
    cursorPointer: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const MainTitle = styled.main<props>`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

    * {
        font-family: 'Dosis';
        font-size: 18px;
        font-weight: bolder;
    }

    div {
        display: flex;
        justify-content: space-between;
        
        input {
            width: auto;

            border: none;
            text-align: center;
            color: ${props => props.isDark ? fontColorDark : fontColorLight};
            background-color: transparent;
    
            padding-top: 10px;
            padding-bottom: 10px;
    
            cursor: ${props => props.cursorPointer ? 'pointer' : 'dafault'};
        }

        #deleteButton {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            padding: 5px;
            margin: 5px;
            border: 1px solid transparent;

            transition: all 0.5s ease-in-out;
            opacity: 0%;

            :hover {
                border: 1px solid ${props => props.isDark ? fontColorDark : fontColorLight};
                border-radius: 10px; 
            }
        }

        :hover > #deleteButton {
            transition: all 0.5s ease-in-out;
            opacity: 100%;
        }
    }
    
`
