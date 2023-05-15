import styled from "styled-components";

type props = {
    isDark: boolean
    isMenuOpened: boolean
}

const bgColorDark = '#121212'
const bgColorlight = '#E3D7CD'

export const LeftMenuDiv = styled.div<props>`

    position: absolute;
    top: 0;
    left: ${props => props.isMenuOpened ? '0px' : '-160px'};

    height: 100vh;
    width: 180px;
    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    transition: all .5s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: start;

    align-items: center;

    #icon {
        position: absolute;
        top: 10%;
        right: 0%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.isDark ? bgColorDark : bgColorlight};
        border: 3px solid ${props => props.isDark ? '#8F8F8F' : '#036D3B'};

        transform: translateX(50%) ${props => props.isMenuOpened ? 'rotate(0deg)' : 'rotate(180deg)'};

        height: 30px;
        width: 30px;

        border-radius: 50%;

        transition: all 0.5s ease-in-out;
        
        #menuIcon {
            width: 40%;

            filter: ${props => props.isDark ? 'grayscale(80%)' : ''};
        }

        :hover {
            cursor: pointer; 
        }

        :hover #menuIcon {
            filter: ${props => props.isDark ? 'grayscale(0%)' : ''};
        }
    }

    #newFile {

        width: 100px;
        height: 40px;
        
        margin-top: 20px;

        background-color: red;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }

`