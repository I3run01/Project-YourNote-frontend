import styled from "styled-components";

const fontColorDark = '#ececec'
const fontColorLight = 'black'

type props = {
    isDark: boolean
}

export const MyEditorContainer = styled.div<props>`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * {
        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
        font-size: 18px;
        margin-bottom: 0;
        text-align: justify;
        font-size: 18px;
        font-family: 'Merriweather', serif;
        font-weight: 400;
        line-height: 1.8em;
    }

    h1 {
        color: ${ props => props.isDark ? fontColorDark : fontColorLight};
    }

    .public-DraftEditor-content {       
        min-height: 30px;

        border: 1px solid #0000;

        width: 55vw;

        transition: all 0.5s ease-in-out;

        padding: 20px;

        text-align: justify;
        
        :hover {
            border: 1px solid ${ props => props.isDark ? fontColorDark : fontColorLight};

        }
    }
`