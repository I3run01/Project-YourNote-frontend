import styled from "styled-components";

type props = {
    isDark: boolean
}

const bgColorDark = '#121212'
const bgColorlight = '#E3D7CD'

export const RightMenuDiv = styled.div<props>`
    position: absolute;
    top: 0;
    right: 0;

    width: 50px;

    height: 100vh;

    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};



`