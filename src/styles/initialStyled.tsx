import styled from "styled-components";

type props = {
    theme: 'dark' | 'light'
}

//light
const bgLightYheme01 = '#e9e6e3'
const textLightFont = '#222222'
const lightGreenTheme = '#036D3B'

//dark
const bgDarktheme01 = '#121212'
const textDarkFont = '#FFFFFF'
const darkGreenTheme = '#01EF80'

export const InitialStyled = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    padding-left: 15px;
    padding-right: 15px;

    background-color: ${props => props.theme === 'dark' ?  bgDarktheme01: bgLightYheme01};;

    * {
        color: ${ props => props.theme === 'dark' ? textDarkFont : textLightFont};
    }

    h1 {
        padding-top: 80px;
        font-family: 'Dosis';
        font-size: 36px;
        font-weight: 400;
        color: ${props => props.theme === 'dark' ?  darkGreenTheme: lightGreenTheme};
        margin-bottom: 0px;

        text-align: center;
    }

    #subtitle {
        font-size: 16px;
        font-family: 'Merriweather', serif;
        font-weight: 400;
        line-height: 1.8em;
        margin-top: 0px;

        text-align: center;
    }

    #container {
        display: flex;
        flex-direction: column;

        #img {
            width: 100%;
            height:auto;
            border: 2px solid black;
            border-radius: 10px;
    
        }
    
        #text {
            margin-bottom: 0;
            padding-bottom: 40px;
            text-align: justify;
            font-size: 18px;
            font-family: 'Merriweather', serif;
            font-weight: 400;
            line-height: 1.8em;
        }
    }
    

    @media screen and (min-width: 800px) {
        padding-left: 15%;
        padding-right: 15%;

        #container {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            #img {
                width: 40%;
                height: fit-content;
            }

            #text {
                width: 55%;
            }
        }
    }
    
    
    
`