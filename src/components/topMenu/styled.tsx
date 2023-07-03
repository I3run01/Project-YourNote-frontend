import styled from "styled-components";

type props = {
    isDark: boolean
}

const menuHeight = '#60px'

//light
const bgLightYheme02 = '#E3D7CD'
const textLightFont = '#000000'
const lightGreenTheme = '#036D3B'

//dark
const bgDarktheme02 = '#1F1F1F'
const textDarkFont = '#FFFFFF'
const darkGreenTheme = '#01EF80'

export const TopMenuDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
        
    height: ${menuHeight};

    * {
        color: ${ props => props.isDark ? textDarkFont : textLightFont};
        font-family: 'Dosis';
        font-size: 18px;
        text-decoration: none;
    }

    #topMenuContainer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        background-color: ${props => props.isDark ?  bgDarktheme02: bgLightYheme02};
        border-bottom: 1px solid black;

        height: 60px;
    
        .signin, .signup, .dashboard {
            margin-right: 20px;

            :hover {
                cursor: pointer;

                a {
                    color: ${props => props.isDark ?  darkGreenTheme: lightGreenTheme};
                }
            }
        }
    }


`