import styled from "styled-components";

export const EmailConfirmationDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    * {
        font-family: 'Dosis';
        font-size: 18px;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-image: url('/images/bgLogin.png');
    background-position: center center;
    background-size: cover;

    

    #container {
        display: flex;
        flex-direction: column;

        padding: 5px;
        border-radius: 10px;

        height: 200px;;
        width: 400px;

        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.9px);
        -webkit-backdrop-filter: blur(7.9px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        .backButton {
            margin-top: 0;
            filter: brightness(0);
        }
    }
        

`