import styled from "styled-components";

type props = {
    isDark: boolean
    isMenuOpened: boolean


}

export const LeftMenuDiv = styled.div<props>`

    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: ${props => props.isMenuOpened ? '150px' : '50px'};
    background-color: ${props => props.isDark ? '#121212' : '#E3D7CD'};

    transition: all .5s ease-in-out;


    #icon {

        position: absolute;
        top: 10%;
        right: 0%;
        background-color: blue;

        transform: translateX(50%);

        height: 50px;
        width: 50px;
    }

`