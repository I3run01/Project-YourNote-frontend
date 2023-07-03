import styled from "styled-components";

type Props = {
    isDark: boolean
    isPopUpOpened?: boolean
}

const bgColorDark = '#353535'
const bgColorlight = '#E3D7CD'

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const RightMenuDiv = styled.div<Props>`
    width: 50px;
    height: 100vh;
    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    .sharedContent {
        width: 100%;
        height: 80px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        :hover {
            background-color: #737373;
        }

        .wwwIcon {
            width: 80%;
            filter: invert(${props => props.isDark ? 1 : 0});
        }
    }
`
