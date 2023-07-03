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

    padding-top: 50px;

    background-color: ${props => props.isDark ? backgroundDark : backgroundLight};
    color: ${props => props.isDark ? fontColorDark : fontColorLight};

    #title {
        text-align: center;
        font-size: 24px;
        font-weight: lighter;
        color: ${props => props.isDark ? fontColorDark : fontColorLight};

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .changeTheme {

        font-family: 'Dosis';
        font-size: 18px;
        padding-left: 20px;
    
        p {
            padding: 10px;
            border: 2px solid ${props => props.isDark ? fontColorDark : fontColorLight};
            border-radius: 4px;

            width: fit-content;

            cursor: pointer;

            :hover {
                background-color: #7c7c7c;
            }
        }
    }

    .itensContainer {
        padding-top: 30px;
        padding-bottom: 30px;
    }


`