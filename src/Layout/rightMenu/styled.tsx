import styled from "styled-components";

type props = {
    isDark: boolean
}

const bgColorDark = '#353535'
const bgColorlight = '#E3D7CD'

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const RightMenuDiv = styled.div<props>`
    width: 50px;

    height: 100vh;

    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    
    #newElement {
        display: flex;
        justify-content: center;

        #plusIMG {
            width: 90%;
            filter: drop-shadow(1px 1px 1px black);
        
        }

        :hover #plusIMG {
            cursor: pointer;
        }

        :active {
            transform: scale(80%);
        }
    }


`

export const PopUp = styled.div<props>`
    position: fixed;

    bottom: 20px;
    right: 60px;

    height: 100px;

    border: 1px solid black;

    box-shadow: 1px 1px 5px black;

    background-color: ${props => props.isDark ? bgColorDark : bgColorlight};


`