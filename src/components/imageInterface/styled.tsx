import styled from "styled-components";

type props = {
    isZoom: boolean
    isDark: boolean
}

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const ImageDiv = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    margin: auto;

    width: ${props => props.isZoom ? '100%' : '55vw'};
    transition: all 0.5s ease-in-out;
   
    .changeImage {
        width: fit-content;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 40px;

        cursor: pointer;

        border: 1px solid #0000;
        border-radius: 5px;

        transition: all 0.2s ease-in-out;

        :hover {
            border-color: ${props => props.isDark ? fontColorDark : fontColorLight};
        }

        #icon {
            width: 40px;
            height: 30px;

            img {
                height: 100%;
                filter: invert(${props => props.isDark ? 1 : 0});
            }
        }

        #text {

            padding: 5px;

            display: flex;
            align-items: center;

            p {
                color: ${props => props.isDark ? fontColorDark : fontColorLight};
            }

        }
        
    }

    .mainImage {
        width: 100%;
        cursor: pointer;
    }


`