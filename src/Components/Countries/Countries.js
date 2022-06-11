import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main } from "./Countries-style";
import { useNavigate } from "react-router-dom";
import { Back } from '../Button/BackButton'
import { TiArrowBack } from 'react-icons/ti';

function Countries() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <Back onClick={() => navigate('/niveis')}>
                    <TiArrowBack color="white" size={30} />
                </Back>
                <h1>Escolha um país</h1>
                <Button onClick={() => navigate('/usa')} >Estados Unidos</Button>
                <Button onClick={() => navigate('/italia')} >Itália</Button>
                <Button onClick={() => navigate('/alemanha')} >Alemanha</Button>
                <Button onClick={() => navigate('/argentina')} >Argentina</Button>
                <Button onClick={() => navigate('/espanha')} >Espanha</Button>
            </Main>
        </Container>
    )
}

export default Countries;