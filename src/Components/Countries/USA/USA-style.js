import styled from 'styled-components'

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 20px;

h1 {
    font-size: 35px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    margin: 20px 0;
}

h2 {
    height: 80px;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    margin: 20px;
}

`

export const Answers = styled.div`

button {
    width: 100%;
    text-align: start;
    margin-bottom:20px;
    font-size: 25px;
}
`

export const Correction = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 5px 0;

h2 {
    height: 25px;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    margin: 0 5px;
}
`