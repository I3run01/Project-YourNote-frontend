import styled from "styled-components";

type props = {
    isDark: boolean
    showItensButton: boolean
    lastItem?: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const NewItemDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
    width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    height: ${props => props.showItensButton ? '150px' : '45px'};

    overflow: hidden;
    
    transition: height 0.5s ease-in-out;
    background-color: ${props => props.lastItem ? "#2dce2d52" : "#2dce2d0"};

    margin-bottom: ${props => props.lastItem ? '20px' : '0px'};

    :hover {
        background-color: #2dce2d52;
        transition: all .3s ease-in-out;

        .addNewItem {
            opacity: 100%;
        }
    }

    * {
        color: ${props => props.isDark ? fontColorDark : fontColorLight};
        font-size: 16px;
        font-family: 'Dosis';
        transition: all 0.5s ease-in-out;
    }

    .addNewItem {
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        opacity: ${props => props.lastItem ? "100%" : "0%"};

        .addNewItemButton {
            height: 40px;
            width: 40px;
            padding: 2px;
            
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                    cursor: pointer;
            }

            img {
                height: 20px;
                filter: ${props => props.isDark ? "invert(0)" : "invert(1)"};
            }
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