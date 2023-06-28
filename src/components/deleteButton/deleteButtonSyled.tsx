import styled from "styled-components";

export const DeleteButtonStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    display: flex;
    justify-content: start;

    padding-top: 8px;
    padding-bottom: 8px;

    :hover {
        background-color: #ff000045;

        .button {
            opacity: 100%;
        }
    }

    transition: all 0.2s ease-in-out;
    
    .button {
        font-size: 12px;
        font-family: 'Dosis';

        border: 1px solid red;
        border-radius: 5px;

        padding: 5px;
        width: min-content;

        margin-left: 20px;

        color: red;

        opacity: 0%;

        transition: all 0.5s ease-in-out;

        :hover {
            cursor: pointer;

            background-color: #ff000023;
        }

    }


    

    
`