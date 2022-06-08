import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Main } from './Levels-style'


function Levels() {

    let navigate = useNavigate();


    return (
        <Container>
            <Main>
                <h1>Estilo de jogo</h1>
                <Button back='yellow' onClick={() => navigate('/brasil')}>Brasil</Button>
                <Button back='orange' onClick={() => alert('Esse modo estará disponível em breve')}>Países</Button>
                <Button back='red' onClick={() => alert('Esse modo estará disponível em breve')}>Continentes</Button>
            </Main>
        </Container>
    )
}

export default Levels;