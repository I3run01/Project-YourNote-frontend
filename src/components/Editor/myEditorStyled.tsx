import styled from "styled-components";

const fontColorDark = '#ececec'
const fontColorLight = 'black'

export const MyEditorContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * {
        color: ${ props => props.theme === 'dark' ? fontColorDark : fontColorLight};
        font-size: 18px;
        margin-bottom: 0;
        text-align: justify;
        font-size: 18px;
        font-family: 'Merriweather', serif;
        font-weight: 400;
        line-height: 1.8em;
    }

    .DraftEditor-root {
        border: 1px solid black;
        width: 900px;

        min-height: 300px;
    }
`