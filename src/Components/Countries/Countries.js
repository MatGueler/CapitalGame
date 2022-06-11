import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main } from "./Countries-style";
import { useNavigate } from "react-router-dom";

function Countries() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <h1>Escolha um país</h1>
                <Button onClick={() => navigate('/usa')} >Estados Unidos</Button>
                <Button onClick={() => navigate('/italia')} >Itália</Button>
                <Button onClick={() => navigate('/alemanha')} >Alemanha</Button>
                <Button onClick={() => navigate('/argentina')} >Argentina</Button>
            </Main>
        </Container>
    )
}

export default Countries;