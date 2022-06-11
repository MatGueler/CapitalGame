import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 20px;

h1 {
    font-size: 50px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    margin-bottom: 20px;
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
height: 100px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 20px 0;

h2 {
    height: 80px;
    font-size: 25px;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    margin: 0 10px;
}
`