import styled from "styled-components";

type props = {
    isZomm: boolean
}

export const ImageDiv = styled.div<props>`

    margin: auto;

    width: ${props => props.isZomm ? '100%' : '55vw'};
    transition: all 0.5s ease-in-out;

    padding-bottom: 50px;
   
    .changeImage {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        #icon {
            width: 40px;
            height: 30px;

            img {
                height: 100%;
            }
        }

        #text {
            p {
                color: red;
            }
        }



        
    }

    .mainImage {
        width: 100%;
        cursor: pointer;
    }


`