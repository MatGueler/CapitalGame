import { Container } from "../Container/Container";
import { Button } from '../Button/Button'
import { Main } from "./InitialPage-style";
import { useNavigate } from "react-router-dom";


function InitialPage() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <h1>Country Game</h1>
                <Button back='white' onClick={() => navigate('/niveis')}>Vamos Jogar!</Button>
            </Main>
        </Container>
    )
}

export default InitialPage;