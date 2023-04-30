import styled from "styled-components";

export const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  #Spinner {
     @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 0.8s linear infinite;
    box-shadow: 1px 1px 1px black;
  }
`


