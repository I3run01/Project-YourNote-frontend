import styled from "styled-components";

export const EmailConfirmationDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    * {
        font-size: 24px;
        font-family: 'Merriweather', serif;
        font-weight: 400;
        margin-top: 0px;
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
        justify-content: center;

        padding: 5px;
        border-radius: 10px;

        height: 200px;;
        width: 400px;

        /* From https://css.glass */
        background: rgba(152, 247, 29, 0.233);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(7.9px);
        border: 2px solid black;

        text-align: center;
        vertical-align: center;
        
        font-weight: lighter;

        #subtitle {
            font-size: 16px;
        }
    }
`