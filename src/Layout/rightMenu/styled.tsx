import styled from "styled-components";

type props = {
    isDark: boolean
}

const bgColorDark = '#353535'
const bgColorlight = '#E3D7CD'

export const RightMenuDiv = styled.div<props>`
    top: 0;
    right: 0;

    width: 50px;

    height: 100vh;

    background-color: red;

   // background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    



`