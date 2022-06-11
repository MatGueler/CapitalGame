import { useEffect, useState, useContext } from "react";
import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main, Answers } from "./Countries-style";
import { useNavigate } from "react-router-dom";
import PontuationContext from "../Context/PontuationContext";

function Countries() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <h1>Escolha um país</h1>
                <Button onClick={() => navigate('/usa')} >Estados Unidos</Button>
                <Button onCliclk={() => navigate('/italia')} >Itália</Button>
                <Button onClick={() => navigate('/alemanha')} >Alemanha</Button>
                {/* <Button onCliclk={() => navigate('/argentina')} >Itália</Button> */}
            </Main>
        </Container>
    )
}

export default Countries;