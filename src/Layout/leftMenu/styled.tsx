import styled from "styled-components";

type props = {
    isDark: boolean
    isMenuOpened: boolean
}

const themeColor = '#3dc786'

const bgColorDark = '#353535'
const bgColorlight = '#E3D7CD'

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const LeftMenuDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

    * {
        font-family: 'Dosis';
        font-size: 18px;
        font-weight: lighter;
    } 

    position: relative;
    margin-left: ${props => props.isMenuOpened ? '0px' : '-270px'};

    height: 100vh;
    width: 300px;
    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    transition: all .5s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: start;

    align-items: center;

    border-right: 0.5px solid black;

    #icon {
        position: absolute;
        top: 2%;
        right: 0%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.isDark ? bgColorDark : bgColorlight};
        border: 3px solid ${props => props.isDark ? '#c2c2c2' : 'black'};

        transform: translateX(50%) ${props => props.isMenuOpened ? 'rotate(180deg)' : 'rotate(0deg)'};

        height: 30px;
        width: 30px;

        border-radius: 50%;

        transition: transform  0.5s ease-in-out;
        
        #menuIcon {
            width: 40%;

            filter: ${props => props.isDark ? 'grayscale(100%)' : 'brightness(0%)'};
        }

        :hover {
            cursor: pointer;

            border-color: ${themeColor};

            #menuIcon {

                filter: ${props => props.isDark ? 'grayscale(0%)' : 'grayscale(0%)brightness(60%)'};
            }
            
        }
    }

    #newFile, #settings {

        height: 40px;

        padding: 2px 10px 2px 10px;
        
        margin-top: 10px;
        margin-bottom: 10px;

        background-color: ${props => props.isDark ? '#868686' : themeColor};
        color: ${props => props.isDark ? fontColorDark : fontColorLight};

        border-radius: 5px;
        border: 1px solid black;

        box-shadow: 1px 1px 1px black;
        
        display: flex;
        justify-content: center;
        align-items: center;


        :hover {
            cursor: pointer;
            color: ${props => props.isDark ? themeColor : '' };
            border-color: ${props => props.isDark ? themeColor : '' };

            background-color: ${props => props.isDark ? '' : '#5c957a' };
        }
    }

    #settings {
        display: flex;

        img {
            height: 70%;
        }
    }

    #filerConainer {
        width: 100%;
        height: 80%;
        
        overflow-y: auto;
  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-top: 1px solid black;
        border-bottom: 1px solid black;

        padding-top: 60px;
        padding-bottom: 5px;

        .item {
            margin-top: 10px;
            margin-bottom: 10px;

            width: 100%;   

            color: ${props => props.isDark ? fontColorDark : fontColorLight};

            text-align: center;
            
            :hover {
                cursor: pointer;
                background-color: ${props => props.isDark ? '#575757' : '#b5b5b5'};
            }
        }
    }

`