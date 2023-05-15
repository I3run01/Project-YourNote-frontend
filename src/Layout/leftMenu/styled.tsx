import styled from "styled-components";

type props = {
    isDark: boolean
    isMenuOpened: boolean
}

const themeColor = '#8bfcc7'

const bgColorDark = '#353535'
const bgColorlight = '#E3D7CD'

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const LeftMenuDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

    position: relative;
    margin-left: ${props => props.isMenuOpened ? '0px' : '-210px'};

    height: 100vh;
    width: 250px;
    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    transition: all .5s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: start;

    align-items: center;

    #icon {
        position: absolute;
        top: 2%;
        right: 0%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.isDark ? bgColorDark : bgColorlight};
        border: 3px solid ${props => props.isDark ? '#c2c2c2' : themeColor};

        transform: translateX(50%) ${props => props.isMenuOpened ? 'rotate(180deg)' : 'rotate(0deg)'};

        height: 30px;
        width: 30px;

        border-radius: 50%;

        transition: all 0.5s ease-in-out;
        
        #menuIcon {
            width: 40%;

            filter: ${props => props.isDark ? 'grayscale(100%)' : ''};

            transition: all 0.5s ease-in-out;
        }

        :hover {
            cursor: pointer;

            border-color: ${themeColor};

            #menuIcon {
                filter: grayscale(0%);
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

        transition: all 0.2s ease-in-out;

        :hover {
            cursor: pointer;
            color: ${themeColor};
            border-color: ${themeColor};
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

        padding-top: 5px;
        padding-bottom: 5px;

        .item {
            font-family: 'Dosis';
            font-size: 18px;

            margin-top: 10px;
            margin-bottom: 10px;

            padding-top: 15px;
            padding-bottom: 15px;

            width: 100%;   

            color: ${props => props.isDark ? fontColorDark : fontColorLight};

            text-align: center;
            
            :hover {
                cursor: pointer;
                background-color: #575757;
            }
        }
    }

`