import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 20px;
padding: 20px 0;
box-sizing: border-box;

img {
    width: 50%;
    margin-bottom: 30px;
}

h1 {
    text-align: center;
    font-size: 30px;
    color: #FFFFFF;
    font-weight: bold;
    margin: 60px;
}

button {
    width: 100%;
}

& button:hover{
    background-color: blue;
}
`