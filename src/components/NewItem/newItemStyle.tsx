import styled from "styled-components";

type props = {
    isDark: boolean
    showItensButton: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const NewItemDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    height: ${props => props.showItensButton ? '120px' : '30px'};

    overflow: hidden;
    
    transition: height 0.5s ease-in-out;

    * {
        color: ${props => props.isDark ? fontColorDark : fontColorLight};
        font-size: 18px;
        font-family: 'Dosis';
        transition: all 0.5s ease-in-out;
    }

    .addNewItem {
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;



        img {
            :hover {
                cursor: pointer;
            }
            padding: 5px;
            height: 25px;
            filter: ${props => props.isDark ? "invert(0)" : "invert(1)"};
        }
    }

    .chooseItemContainer {
        margin-left: 40px;
        min-height: 100px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;



        div {
            padding: 5px;
            margin: 5px;
            border: 1px solid transparent;

            margin-left: ${props => props.showItensButton ? '5px' : '150px'};

            opacity: ${props => props.showItensButton ? '100%' : '0%'};

            :hover {
                border: 1px solid ${props => props.isDark ? fontColorDark : fontColorLight};
                border-radius: 8px;
                cursor: pointer;
            }
        }

    }


`