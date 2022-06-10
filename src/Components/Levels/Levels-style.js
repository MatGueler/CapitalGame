import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 100px 0;
margin: 0 20px;
box-sizing: border-box;

h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
}

& button{
    margin: 20px 0;
}

& button:hover{
    box-shadow:  3px 3px #FFFFFF;
}
`