import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

const menuHeight = '#60px'

//light
const bgLightYheme02 = '#E3D7CD'
const textLightFont = '#000000'
const lightGreenTheme = '#036D3B'

//dark
const bgDarktheme02 = '#1D1433'
const textDarkFont = '#FFFFFF'
const darkGreenTheme = '#01EF80'

export const InitialMenuStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
        
    height: ${menuHeight};

    * {
        color: ${ props => props.theme === 'dark' ? textDarkFont : textLightFont};
        font-family: 'Dosis';
        font-size: 18px;
    }

    #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        background-color: ${props => props.theme === 'dark' ?  bgDarktheme02: bgLightYheme02};
        border-bottom: 1px solid black;

        -webkit-box-shadow: 10px 10px 23px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 23px -2px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 23px -2px rgba(0,0,0,0.75);
    
        .signin, .signup {
            margin-right: 20px;

            :hover {
                cursor: pointer;

                p {
                    color: ${props => props.theme === 'dark' ?  darkGreenTheme: lightGreenTheme};
                }
            }
        }
    }


`