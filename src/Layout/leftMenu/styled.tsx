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
    left: 0;

    height: 100vh;
    width: ${props => props.isMenuOpened ? '150px' : '50px'};
    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    transition: all .5s ease-in-out;


    #icon {

        position: absolute;
        top: 10%;
        right: 0%;
        background-color: ${props => props.isDark ? bgColorDark : bgColorlight};
        border: 4px solid ${props => props.isDark ? '#8F8F8F' : '#036D3B'};

        transform: translateX(50%);

        height: 40px;
        width: 40px;

        border-radius: 50%;
    }

`