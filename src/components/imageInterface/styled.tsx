import styled from "styled-components";

type props = {
    isZomm: boolean
}

export const ImageDiv = styled.div<props>`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;


    padding-bottom: 50px;

    img {
        width: ${props => props.isZomm ? '100%' : '60vw'};

        transition: all 0.5s ease-in-out;

        cursor: pointer;
    }


`